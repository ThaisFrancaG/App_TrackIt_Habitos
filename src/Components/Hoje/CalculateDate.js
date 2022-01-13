import dayjs from "dayjs";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function CalculateDate() {
  const [weekDay, setWeekDay] = useState("Dia da Semana");
  const [dayMonth, setDayMonth] = useState("Dia no Mês");
  const [month, setMonth] = useState("Mês");
  useEffect(() => {
    setDayMonth(dayjs().date());
    let day = "";
    switch (dayjs().day()) {
      case 0:
        day = "Domingo";
        break;
      case 1:
        day = "Segunda";
        break;
      case 2:
        day = "Terça";
        break;
      case 3:
        day = "Quarta";
        break;
      case 4:
        day = "Quinta";
        break;
      case 5:
        day = "Sexta";
        break;
      case 6:
        day = "Sábado";
        break;
      default:
        day = "Ocorreu um Erro!";
    }
    setWeekDay(day);
    let month = `0${dayjs().month() + 1}`;
    let monthDisplay = month.slice(-2);
    setMonth(monthDisplay);
  }, []);
  return (
    <>
      <DateStyle>
        {weekDay}, {dayMonth}/{month}
      </DateStyle>
    </>
  );
}

const DateStyle = styled.span`
  font-size: 23px;
  line-height: 30px;
  color: #126ba5;
`;
