import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

import {
  LayoutWrapper,
  Header,
  Main,
  Link,
  Logo,
  NavContainer,
  LogoImg,
} from "./styles";

import { LayoutProps, EmployeeData, LayoutEmployeeContextData } from "./types";

import logo_viper from "assets/images/logo_viper_black.png";

export const InfoAboutEmployee = createContext<LayoutEmployeeContextData>({
  employeeData: undefined,
  setEmployeeData: () => {},
});

function LayoutEmployee({ children }: LayoutProps) {
  const [employeeData, setEmployeeData] = useState<EmployeeData | undefined>(
    undefined
  );

  const navigate = useNavigate();

  const goHomePage = () => {
    navigate("/");
  };


  return (
    <InfoAboutEmployee.Provider
      value={{
        employeeData: employeeData,
        setEmployeeData: setEmployeeData,
      }}
    >
      <LayoutWrapper>
        <Header>
          <Logo onClick={goHomePage}>
            <LogoImg src={logo_viper} alt="App Logo"></LogoImg>
          </Logo>
          <NavContainer>
            <Link
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/CreateEmployee"
            >
              Create Employee
            </Link>
            <Link
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/employee"
            >
              Employees
            </Link>
          </NavContainer>
        </Header>
        <Main>{children}</Main>
      </LayoutWrapper>
    </InfoAboutEmployee.Provider>
  );
}

export default LayoutEmployee;
