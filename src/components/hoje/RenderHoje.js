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
} from "./StyleHoje";
import { Main } from "../../assets/StyleReusable";
import axios from "axios";
import CalculateDate from "./CalculateDate";

import { BsFillCheckSquareFill } from "react-icons/bs";

export default function RenderHoje() {
  const { userInfo, setUserInfo } = useContext(UserContext)[0];
  const { habitStatus, setHabitStatus } = useContext(UserContext)[1];

  const [dailyHabits, setDailyHabits] = useState([]);

  const getAuthorization = {
    Authorization: `Bearer ${userInfo.token}`,
  };

  console.log(getAuthorization);
  console.log(userInfo.token);
  useEffect(() => {
    const requisition = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      { headers: getAuthorization }
    );

    requisition.then((response) => {
      console.log("Deu Bom");
      setDailyHabits(response.data);
      // setHabitStatus(habitStatus ? false : true);
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
    <Main>
      <Title>
        <CalculateDate></CalculateDate>
      </Title>
      {dailyHabits.map((habit) => (
        <HabitContainer key={habit.id}>
          <HabitDetails>
            <HabitHeader>
              <HabitName>{habit.name}</HabitName>
            </HabitHeader>
            <HabitStreak>
              <span>Sequência Atual:{habit.currentSequence} dias</span>
              <span>Seu recorde: {habit.highestSequence} dias</span>
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
  );
}
