import styled from "@emotion/styled";

import { NavLink, Link as SimpleLink } from "react-router-dom";
import logo_viper_blue from "assets/images/logo_viper_blue.png";

import { colors } from "styles/colors";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.PRIMARY};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid black;
  background-color: white;
  padding: 20px 40px;
  color: white;
`;

export const Logo = styled.div`
  height: 90px;
  width: 90px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  &:hover {
    content: url(${logo_viper_blue});
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100%;
`;


export const Link = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
  &:hover {
    color: ${colors.PRIMARY_BLUE};
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 40px;
`;

