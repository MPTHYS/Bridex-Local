import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { css } from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) =>
    props.bg == false ? "none" : props.theme.primary};
  position: fixed;
  max-height: 70px;
  width: 100%;
  z-index: 2;
  transition: all 0.2s;

`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img`
cursor:pointer;`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 991px) {
    display: none;
  }
`;
export const Span = styled.span`
  color: white;
  font-weight: 700;
  cursor: pointer;
`;
export const StyledButton = styled.button`
  background: ${(props) => props.theme.linear};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  border: none;
  width: 200px;
  height: 50px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 991px) {
    display: none;
  }
`;

//moblie
export const NavMoblie = styled.div`
  position: fixed;
  max-height: 400px;
  background: ${(props) => props.theme.primary};
  width: 100vw;
  left: 0;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  height: 0;
  ${(props) =>
    props.menu == "active" &&
    css`
      height: 100%;
    `}
`;
export const MenuMoblie = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
`;
export const NavMoblieItem = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
 
`;
export const Item = styled.li`
  background: rgb(61 84 174 / 20%);
  color: white;
  align-items: center;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
`;
export const StyledButtonMoblie = styled.button`
  background: ${(props) => props.theme.linear};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  border: none;
  width: 100%;
  max-width: 200px;
  height: 50px;
  border-radius: 9px;
  font-weight: bold;
  cursor: pointer;
`;
export const IconMenu = styled(MenuIcon)`
  color: ${(props) => props.theme.white};
  cursor: pointer;
`;