import { useNavigate } from "react-router-dom"

import {
  LayoutWrapper,
  Header,
  Main,
  Link,
  Logo,
  NavContainer,
  LogoImg,
} from "./styles"

import { LayoutProps } from "./types"

import logo_viper from "assets/images/logo_viper_black.png"

function LayoutEmployee({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goHomePage = () => {
    navigate("/")
  }

  return (
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
  )
}

export default LayoutEmployee;

