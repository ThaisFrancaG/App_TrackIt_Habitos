import styled from "styled-components";
import UserContext from "../../context/UserContext";
import { ReusableTitle } from "../habitos/RenderHabitos";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CalculateDate from "./CalculateDate";
export default function RenderHoje() {
  const { userInfo, setUserInfo } = useContext(UserContext);
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
      console.log(response);
      console.log("Deu Bom");
    });
    requisition.then((error) => {
      console.log(error);
      console.log("Deu Ruim");
    });
  }, []);
  return (
    <Main>
      <Title>
        <CalculateDate></CalculateDate>
      </Title>
    </Main>
  );
}

const Title = styled.div`
  color: #126ba5;
  font-size: 23px;
  line-height: 30px;
`;

export const Main = styled.div`
  background-color: blue;
  padding: 98px;
`;
