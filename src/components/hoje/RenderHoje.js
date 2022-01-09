import { UserContext } from "../../context/UserContext";
import { useState, useEffect, useContext } from "react";
import {
  Title,
  HabitHeader,
  HabitName,
  HabitStreak,
  HabitCheck,
  HabitContainer,
  HabitDetails,
  StreakValue,
} from "./StyleHoje";
import { Main, ScreenHeader } from "../../assets/StyleReusable";
import axios from "axios";
import CalculateDate from "./CalculateDate";
import CalculateCompletion from "./CalculateCompletion";
import Header from "../headerfooter/Header";
import Footer from "../headerfooter/Footer";

import { BsFillCheckSquareFill } from "react-icons/bs";

export default function RenderHoje() {
  const { userInfo, habitStatus, setHabitStatus } = useContext(UserContext);

  const [dailyHabits, setDailyHabits] = useState([]);

  const getAuthorization = {
    Authorization: `Bearer ${userInfo.token}`,
  };

  useEffect(() => {
    const getAAuthorization = {
      Authorization: `Bearer ${userInfo.token}`,
    };
    const requisition = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      { headers: getAAuthorization }
    );

    requisition.then((response) => {
      console.log("Deu Bom");
      setDailyHabits(response.data);
    });
    requisition.catch((error) => {
      console.log("Deu Ruim");
      console.log(error.response);
    });
  }, [habitStatus]);

  function changeHabitStatus(id, status) {
    console.log(status);
    if (status === false) {
      checkAsDone(id);
    } else if (status === true) {
      uncheck(id);
    }
  }
  console.log(dailyHabits);

  function checkAsDone(id) {
    const requisition = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
      {},
      { headers: getAuthorization }
    );

    requisition.then((response) => {
      console.log("deu bom");
      console.log(response);
      setHabitStatus(habitStatus ? false : true);
    });
    requisition.catch((error) => {
      console.log("deu ruim");
      if (error.response.status === 400) {
        alert(
          "Desculpe, não foi possível realizar sua requisição. Tente atualizar a página"
        );
      } else {
        alert("Algo de errado. Tente novamente mais tarde");
      }
    });
  }

  function uncheck(id) {
    const requisition = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
      {},
      { headers: getAuthorization }
    );

    requisition.then((response) => {
      console.log("deu bom");
      console.log(response);
      setHabitStatus(habitStatus ? false : true);
    });
    requisition.catch((error) => {
      console.log("deu ruim");
      if (error.response.status === 400) {
        alert(
          "Desculpe, não foi possível realizar sua requisição. Tente atualizar a página"
        );
      } else {
        alert("Algo de errado. Tente novamente mais tarde");
      }
    });
  }

  return (
    <>
      <Header />
      <Main>
        <ScreenHeader>
          <CalculateDate></CalculateDate>
          <CalculateCompletion dailyHabits={dailyHabits} />
        </ScreenHeader>
        {dailyHabits.map((habit) => (
          <HabitContainer key={habit.id}>
            <HabitDetails>
              <HabitHeader>
                <HabitName>{habit.name}</HabitName>
              </HabitHeader>
              <HabitStreak>
                <span>
                  Sequência Atual:
                  <StreakValue
                    current={habit.currentSequence}
                    highest={habit.highestSequence}
                  >
                    {habit.currentSequence} dias
                  </StreakValue>
                </span>
                <span>
                  Seu recorde:
                  <StreakValue
                    current={habit.currentSequence}
                    highest={habit.highestSequence}
                  >
                    {habit.highestSequence} dias
                  </StreakValue>
                </span>
              </HabitStreak>
            </HabitDetails>
            <HabitCheck
              key={habit.id}
              onClick={() => changeHabitStatus(habit.id, habit.done)}
              habitCheck={habit.done}
            >
              <BsFillCheckSquareFill />
            </HabitCheck>
          </HabitContainer>
        ))}
      </Main>
      <Footer />
    </>
  );
}
