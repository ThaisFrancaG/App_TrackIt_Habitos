import UserContext from "../../context/UserContext";
import { useState, useEffect, useContext } from "react";
import GetHabitos from "./GetHabitos";
import styled from "styled-components";

export default function RenderHabitos() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [habitDisplay, setHabitDisplay] = useState(false);
  const [newHabit, setNewHabit] = useState("");
  console.log(newHabit);

  function sendHabit(event) {
    event.preventDefault();

    alert("habito enviado");
  }
  return (
    <>
      <div>
        <Title>Meus Hábitos</Title>
        <AddButton
          onClick={() => {
            setHabitDisplay(true);
            alert(habitDisplay);
          }}
        >
          +
        </AddButton>
        <AddHabit habitDisplay={habitDisplay}>
          <form onSubmit={sendHabit}>
            <input
              placeholder="nome do hábito"
              type="text"
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
            />
            <Button
              type="reset"
              onClick={() => {
                setHabitDisplay(false);
                setNewHabit("");
              }}
              identification="cancel"
            >
              Cancelar
            </Button>
            <Button type="submit" identification="save">
              Salvar
            </Button>
          </form>
        </AddHabit>
      </div>
      <GetHabitos token={userInfo.token} />
    </>
  );
}

const Title = styled.div`
  color: #126ba5;
  font-size: 23px;
  line-height: 30px;
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
const AddHabit = styled.div`
  display: ${(props) => (props.habitDisplay ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  width: 90vw;
  height: 180px;
  border-radius: 5px;
  background-color: #ffffff;

  input {
    height: 45px;
    width: 80vw;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }
`;

export const ReusableTitle = () => {
  return <Title></Title>;
};
