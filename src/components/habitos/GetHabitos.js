import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GetHabitos(props) {
  const getAuthorization = { Authorization: `Bearer ${props.token}` };
  const [habistList, setHabitsList] = useState([]);

  useEffect(() => {
    const requisition = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      { headers: getAuthorization }
    );

    requisition.then((response) => {
      console.log("deu bom");
      setHabitsList(response.data);
    });

    requisition.catch((error) => {
      console.log("deu ruim");
      console.log(error);
    });
  }, []);
  console.log(habistList);
  return (
    <DefaultMessage>
      Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
      começar a trackear!
    </DefaultMessage>
  );
}

const DefaultMessage = styled.span`
  color: #666666;
  font-size: 18px;
  line-height: 23px;
`;
