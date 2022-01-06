import dayjs from "dayjs";
import { useState, useEffect } from "react";

const [weekDay, setWeekDay] = useState("Dia da Semana");
const [dayMonth, setDayMonth] = useState("Dia no Mês");
const [month, setMonth] = useState("Mês");

console.log(dayjs().day());
console.log(dayjs().date());
console.log(dayjs().month());
