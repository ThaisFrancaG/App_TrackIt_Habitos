import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import {
  Loading,
  HabitDetails,
  DefaultMessage,
  Habit,
  HabitDay,
} from "./StyleHabitos";
import { BsTrash } from "react-icons/bs";

export default function GetHabitos(props) {
  const getAuthorization = { Authorization: `Bearer ${props.token}` };
  const [habistList, setHabitsList] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    const requisition = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      { headers: getAuthorization }
    );

    requisition.then((response) => {
      setHabitsList(response.data);
      setLoading(false);
    });

    requisition.catch((error) => {
      console.log(error.response);
      setLoading(false);
    });
  }, [props.habitStatus]);

  function deleteHabit(habitId, habitName) {
    if (
      window.confirm(
        `Por favor, confirme que deseja deletar o hábito "${habitName}"`
      ) === true
    ) {
      const requisition = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`,
        { headers: getAuthorization }
      );
      requisition.then((response) => {
        alert(`O Hábito "${habitName}" foi deletado`);
        props.setHabitStatus(props.habitStatus ? false : true);
      });

      requisition.catch((error) => {
        alert("Algo deu errado, tente novamente mais tarde");
        console.log(error.response);
      });
    }
  }

  if (loading === true) {
    return (
      <Loading>
        <Loader type="ThreeDots" color="#52B6FF" height={200} width={200} />
      </Loading>
    );
  } else {
    if (habistList.length === 0) {
      return (
        <DefaultMessage noHabits={loading ? true : false}>
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
              <HabitDay
                selected={habit.days.includes(day.number) ? true : false}
              >
                {day.name}
              </HabitDay>
            ))}
          </div>
        </Habit>
      ));
    }
  }
}
