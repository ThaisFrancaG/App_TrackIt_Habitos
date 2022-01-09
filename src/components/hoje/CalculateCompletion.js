import { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";

export default function CalculateCompletion(props) {
  const { completionStatus, setCompletionStatus } = useContext(UserContext);

  let habitsCompletion = 0;
  let habitsTotal = props.dailyHabits.length;

  props.dailyHabits.map((habit) => {
    if (habit.done === true) {
      habitsCompletion++;
    }
  });

  if (habitsCompletion === 0) {
    return (
      <>
        <CompletionMessage done={false}>
          Nenhum hábito concluído ainda
        </CompletionMessage>
      </>
    );
  } else {
    let calculation = parseInt((habitsCompletion / habitsTotal) * 100);
    setCompletionStatus(calculation);
    return (
      <CompletionMessage done={true}>
        {completionStatus}% dos hábitos concluídos
      </CompletionMessage>
    );
  }
}

const CompletionMessage = styled.span`
  color: ${(props) => (props.done ? "#8fc549" : "#BABABA")};
`;
