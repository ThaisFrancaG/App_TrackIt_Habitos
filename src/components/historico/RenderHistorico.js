import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import { Main, ScreenHeader } from "../../assets/StyleReusable";
import { DefaultMessage } from "../Habitos/StyleHabitos";
export default function RenderHistorico() {
  return (
    <>
      <Header />
      <Main>
        <ScreenHeader>Histórico</ScreenHeader>
        <DefaultMessage>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </DefaultMessage>
      </Main>
      <Footer />
    </>
  );
}
