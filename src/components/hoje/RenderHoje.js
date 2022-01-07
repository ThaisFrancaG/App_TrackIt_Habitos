import styled from "styled-components";
import UserContext from "../../context/UserContext";
import { ReusableTitle } from "../habitos/RenderHabitos";
import { useState, useEffect, useContext } from "react";
import CalculateDate from "./CalculateDate";
export default function RenderHoje() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <>
      <Title>
        <CalculateDate></CalculateDate>
      </Title>
    </>
  );
}

const Title = styled.div`
  color: #126ba5;
  font-size: 23px;
  line-height: 30px;
`;
