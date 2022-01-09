import Header from "../headerfooter/Header";
import Footer from "../headerfooter/Footer";
import { Main, ScreenHeader } from "../../assets/StyleReusable";
import { DefaultMessage } from "../habitos/StyleHabitos";
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
