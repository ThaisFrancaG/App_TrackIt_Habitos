import { UserContext } from "../../context/UserContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GetHabitos from "./GetHabitos";
import styled from "styled-components";
import axios from "axios";
import { Main, ScreenHeader } from "../../assets/StyleReusable";

import Header from "../headerfooter/Header";
import Footer from "../headerfooter/Footer";

export default function RenderHabitos() {
  const { userInfo, habitStatus, setHabitStatus } = useContext(UserContext);

  const [habitDisplay, setHabitDisplay] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitDays, setNewHabitDays] = useState([]);
  const [totalDaysSelected, setTotalDaysSelected] = useState(0);

  console.log(userInfo.token);
  const navigate = useNavigate();

  // if (userInfo.token === undefined) {
  //   // alert(
  //   //   "Desculpe, mas parece que você foi desconectado! Você Será redirecionado para a página de Login"
  //   // );
  //   navigate(`/`);
  // }
  useEffect(() => {
    setNewHabitDays(newHabitDays);
  }, [totalDaysSelected]);

  function addDay(dayNumber) {
    if (newHabitDays.includes(dayNumber)) {
      let index = newHabitDays.indexOf(dayNumber);
      newHabitDays.splice(index, 1);
      setTotalDaysSelected(totalDaysSelected - 1);
    } else {
      setNewHabitDays([...newHabitDays, dayNumber]);
      setTotalDaysSelected(totalDaysSelected + 1);
    }
  }
  function sendHabit(event) {
    event.preventDefault();

    const postAuthorization = {
      Authorization: `Bearer ${userInfo.token}`,
    };

    const objectToPost = {
      name: newHabitName,
      days: newHabitDays,
    };
    console.log(objectToPost);

    const requisition = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      objectToPost,
      { headers: postAuthorization }
    );

    requisition.then((response) => {
      alert("habito enviado");
      console.log(response);
      setNewHabitName("");
      setNewHabitDays([]);
      setHabitStatus(habitStatus ? false : true);
    });

    requisition.catch((error) => {
      alert("Houve um erro");
      console.log(error);
    });
  }
  return (
    <>
      <Header />
      <Main>
        <div>
          <ScreenHeader>
            {" "}
            <span>Meus Hábitos</span>
            <AddButton
              onClick={() => {
                setHabitDisplay(true);
              }}
            >
              +
            </AddButton>
          </ScreenHeader>

          <AddHabitContainer habitDisplay={habitDisplay}>
            <form onSubmit={sendHabit}>
              <input
                placeholder="nome do hábito"
                type="text"
                value={newHabitName}
                onChange={(e) => setNewHabitName(e.target.value)}
              />
              <FormElement justifyStart={true}>
                <HabitDay
                  type="button"
                  onClick={() => addDay(0)}
                  selected={newHabitDays.includes(0) ? true : false}
                >
                  Do
                </HabitDay>
                <HabitDay
                  type="button"
                  onClick={() => addDay(1)}
                  selected={newHabitDays.includes(1) ? true : false}
                >
                  Se
                </HabitDay>
                <HabitDay
                  type="button"
                  onClick={() => addDay(2)}
                  selected={newHabitDays.includes(2) ? true : false}
                >
                  Te
                </HabitDay>
                <HabitDay
                  type="button"
                  onClick={() => addDay(3)}
                  selected={newHabitDays.includes(3) ? true : false}
                >
                  Qua
                </HabitDay>
                <HabitDay
                  type="button"
                  onClick={() => addDay(4)}
                  selected={newHabitDays.includes(4) ? true : false}
                >
                  Qui
                </HabitDay>
                <HabitDay
                  type="button"
                  onClick={() => addDay(5)}
                  selected={newHabitDays.includes(5) ? true : false}
                >
                  Se
                </HabitDay>
                <HabitDay
                  type="button"
                  onClick={() => addDay(6)}
                  selected={newHabitDays.includes(6) ? true : false}
                >
                  Sab
                </HabitDay>
              </FormElement>
              <FormElement justifyStart={false}>
                <Button
                  type="reset"
                  onClick={() => {
                    setHabitDisplay(false);
                  }}
                  identification="cancel"
                >
                  Cancelar
                </Button>
                <Button type="submit" identification="save">
                  Salvar
                </Button>
              </FormElement>
            </form>
          </AddHabitContainer>
        </div>
        <GetHabitos
          token={userInfo.token}
          habitStatus={habitStatus}
          setHabitStatus={setHabitStatus}
        />
      </Main>
      <Footer />
    </>
  );
}

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
  background: ${(props) => (props.selected ? "#CFCFCF" : "none")};
`;

const Button = styled.button`
  height: 35px;
  min-width: 86px;
  background-color: ${(props) =>
    props.identification === "cancel" ? "#FFFFFF" : "#52B6FF"};
  color: ${(props) =>
    props.identification === "cancel" ? "#52B6FF" : "#FFFFFF"};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  line-height: 20px;
`;

const AddButton = styled.button`
  width: 40px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #52b6ff;
  color: white;
  font-size: 27px;
`;
const AddHabitContainer = styled.div`
  display: ${(props) => (props.habitDisplay ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  padding: 10px 0;
  box-sizing: border-box;
  width: 90vw;
  height: 180px;
  border-radius: 5px;
  background-color: #ffffff;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }
  input {
    height: 45px;
    width: 80vw;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }
`;

export const FormElement = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.justifyStart ? "start" : "end")};
  column-gap: 5px;
`;

export const ReusableDayButtons = () => {
  return <HabitDay></HabitDay>;
};
