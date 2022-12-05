import * as React from "react";
import logo from "../../assets/images/logo-dio.png"
import { Button } from "../../components/Button"

import { 
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input,
} from "./styles";


const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={ logo } alt="Logo da Dio"></img>
                <BuscarInputContainer>
                    <Input placeholder="Buscar..."></Input>
                </BuscarInputContainer>
                {/* <Menu>Live Code</Menu>
                <Menu>Global</Menu> */}
            </Row>
            <Row>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar"></Button>
                <Button title="Cadastrar"></Button>
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
