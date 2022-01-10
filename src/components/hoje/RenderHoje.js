import { UserContext } from "../../context/UserContext";
import { useState, useEffect, useContext } from "react";
import {
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
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import Loader from "react-loader-spinner";
import { Loading } from "../Habitos/StyleHabitos";

import { BsFillCheckSquareFill } from "react-icons/bs";

export default function RenderHoje() {
  const { userInfo, habitStatus, setHabitStatus } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const [dailyHabits, setDailyHabits] = useState([]);

  const getAuthorization = {
    Authorization: `Bearer ${userInfo.token}`,
  };

  useEffect(() => {
    const requisition = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      { headers: getAuthorization }
    );

    requisition.then((response) => {
      setDailyHabits(response.data);
      setLoading(false);
    });
    requisition.catch((error) => {
      console.log("Deu Ruim");
      console.log(error.response);
      setLoading(false);
    });
  }, [habitStatus]);

  function changeHabitStatus(id, status) {
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

  if (loading === false) {
    return (
      <>
        <Header />
        <Main>
          <ScreenHeader>
            <CalculateDate></CalculateDate>
            <CalculateCompletion
              habitStatus={habitStatus}
              dailyHabits={dailyHabits}
            />
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
  } else {
    return (
      <>
        <Header />
        <Main>
          <Loading>
            <Loader type="ThreeDots" color="#52B6FF" height={200} width={200} />
          </Loading>
        </Main>
        <Footer />
      </>
    );
  }
}
