import styled from "styled-components";

export const HabitDay = styled.button`
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

export const Button = styled.button`
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

export const AddButton = styled.button`
  width: 40px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #52b6ff;
  color: white;
  font-size: 27px;
`;
export const AddHabitContainer = styled.div`
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

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 100vw;
  height: 100vh;
`;
export const HabitDetails = styled.span`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 10px;
`;
export const DefaultMessage = styled.span`
  color: #666666;
  font-size: 18px;
  line-height: 23px;
  display: ${(props) => (props.noHabits ? "none" : "flex")};
`;
export const Habit = styled.div`
  background-color: white;
  color: #666666;
  border-radius: 6px;
  padding: 13px 16px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;
