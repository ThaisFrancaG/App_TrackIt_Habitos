import { UserContext } from "../../context/UserContext";
import { useState, useEffect, useContext } from "react";
import GetHabitos from "./GetHabitos";
import axios from "axios";
import { Main, ScreenHeader } from "../../assets/StyleReusable";
import {
  HabitDay,
  Button,
  AddButton,
  AddHabitContainer,
  FormElement,
} from "./StyleHabitos";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";

export default function RenderHabitos() {
  const { userInfo, habitStatus, setHabitStatus } = useContext(UserContext);

  const [habitDisplay, setHabitDisplay] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitDays, setNewHabitDays] = useState([]);
  const [totalDaysSelected, setTotalDaysSelected] = useState(0);
  const [inputState, setInputState] = useState("");

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
    setInputState("disabled");
    const postAuthorization = {
      Authorization: `Bearer ${userInfo.token}`,
    };

    const objectToPost = {
      name: newHabitName,
      days: newHabitDays,
    };

    const requisition = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      objectToPost,
      { headers: postAuthorization }
    );

    requisition.then((response) => {
      alert("Novo hábito enviado!");
      setInputState("");
      setNewHabitName("");
      setNewHabitDays([]);
      setHabitStatus(habitStatus ? false : true);
    });

    requisition.catch((error) => {
      alert("Houve um erro");
      setInputState("");
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
                disabled={inputState}
                onChange={(e) => setNewHabitName(e.target.value)}
              />
              <FormElement justifyStart={true}>
                {weekDays.map((day) => (
                  <HabitDay
                    key={day.number}
                    type="button"
                    onClick={() => addDay(day.number)}
                    selected={newHabitDays.includes(day.number) ? true : false}
                  >
                    {day.name}
                  </HabitDay>
                ))}
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
                <Button
                  disabled={inputState}
                  type="submit"
                  identification="save"
                >
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
