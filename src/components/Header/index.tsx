import * as React from "react";
import logo from "../../assets/images/logo-dio.png"
import { Button } from "../Button";
import { IHeader } from "./types";

import { 
    HeaderContainer, Row, Wrapper, BuscarInputContainer,
    Menu, MenuRight,Input, UserPicture,
} from "./styles";


const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <img src={ logo } alt="Logo da Dio"></img>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."></Input>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ): null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/105680356?v=4"></UserPicture>
                ) : (
                    <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar"></Button>
                        <Button title="Cadastrar"></Button>
                    </>
                )}
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}

export { Header }
