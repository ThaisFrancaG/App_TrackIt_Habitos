import styled from "styled-components";
import UserContext from "../../context/UserContext";

import { useState, useEffect, useContext } from "react";
import CalculateDate from "./CalculateDate";
export default function RenderHoje() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <>
      <CalculateDate></CalculateDate>
    </>
  );
}
