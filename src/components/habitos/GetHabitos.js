import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import { BsTrash } from "react-icons/bs";

export default function GetHabitos(props) {
  const getAuthorization = { Authorization: `Bearer ${props.token}` };
  const [habistList, setHabitsList] = useState([]);
  const weekDays = [
    { name: "Dom", number: 0 },
    { name: "Seg", number: 1 },
    { name: "Ter", number: 2 },
    { name: "Qua", number: 3 },
    { name: "Qui", number: 4 },
    { name: "Sex", number: 5 },
    { name: "Sab", number: 6 },
  ];
  useEffect(() => {
    const requisition = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      { headers: getAuthorization }
    );

    requisition.then((response) => {
      setHabitsList(response.data);
    });

    requisition.catch((error) => {
      console.log("deu ruim");
      console.log(error.response);
    });
  }, [props.habitStatus]);

  function deleteHabit(habitId, habitName) {
    const requisition = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`,
      { headers: getAuthorization }
    );
    requisition.then((response) => {
      alert(`O Hábito "${habitName}" será deletado`);

      props.setHabitStatus(props.habitStatus ? false : true);
    });

    requisition.catch((error) => {
      alert("Algo deu errado, tente novamente mais tarde");
      console.log(error.response);
    });
  }
  if (habistList.length === 0) {
    return (
      <DefaultMessage>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </DefaultMessage>
    );
  } else {
    return habistList.map((habit) => (
      <Habit id={habit.id}>
        <HabitDetails>
          {habit.name}
          <BsTrash onClick={() => deleteHabit(habit.id, habit.name)} />
        </HabitDetails>
        <div>
          {weekDays.map((day) => (
            <HabitDay selected={habit.days.includes(day.number) ? true : false}>
              {day.name}
            </HabitDay>
          ))}
        </div>
      </Habit>
    ));
  }
}
const HabitDetails = styled.span`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 10px;
`;
const DefaultMessage = styled.span`
  color: #666666;
  font-size: 18px;
  line-height: 23px;
`;
const Habit = styled.div`
  background-color: white;
  color: #666666;
  border-radius: 6px;
  padding: 13px 16px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const HabitDay = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#d5d5d5")};
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  padding: 1px 1px;
  margin-left: 5px;
  background: ${(props) => (props.selected ? "#CFCFCF" : "none")};
`;
