import styled from "styled-components";

export default function Header(props) {
  let currentPath = window.location.pathname;
  console.log(currentPath);
  console.log(props);

  if (currentPath === "/hoje") {
    return (
      <>
        <HeaderStyle>
          <Logo>TrackIt</Logo>
          <UserDetails>
            <img src={props.userInfo.image} alt={props.userInfo.name} />
          </UserDetails>
        </HeaderStyle>
      </>
    );
  } else return <></>;
}

const HeaderStyle = styled.header`
  height: 70px;
  width: 100vw;
  background-color: #126ba5;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;
const Logo = styled.span`
  font-family: "Playball";
  font-size: 39px;
  color: #ffffff;
`;
const UserDetails = styled.figure`
  width: 51px;
  height: 51px;
  background-color: white;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
