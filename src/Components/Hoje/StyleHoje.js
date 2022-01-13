import styled from "styled-components";

export const HabitHeader = styled.header``;
export const HabitName = styled.span`
  color: #666666;

  font-size: 20px;
  line-height: 25px;
`;
export const HabitStreak = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5px;
  color: #666666;
  font-size: 13px;
  line-height: 17px;
`;
export const HabitCheck = styled.button`
  font-size: 70px;
  color: ${(props) => (props.habitCheck ? "#8FC549" : "#ebebeb")};

  border: none;
  background: none;
`;
export const HabitContainer = styled.div`
  width: 90vw;
  min-height: 94px;
  border-radius: 5px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 5px 20px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
`;

export const HabitDetails = styled.div``;

export const StreakValue = styled.span`
  margin-left: 5px;
  color: ${(props) =>
    props.current === props.highest ? "#8FC549" : "#666666"};
`;
