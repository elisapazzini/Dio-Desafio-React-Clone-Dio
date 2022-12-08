import { useNavigate } from "react-router-dom"
import { MdEmail, MdLock } from "react-icons/md"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { Container, Title, TitleLogin, EsqueciTxt, CriarTxt, Wrapper, Column, Row, SubTitleLogin} from "./styles"

const Login = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (
        <>
        <Header></Header>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias 
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                   <TitleLogin>Faça seu cadastro</TitleLogin>
                   <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                   <form action="">
                        <Input leftIcon={<MdEmail/> } placeholder="E-mail" type="text" />
                        <Input leftIcon={<MdLock/>} placeholder="Password" type="password" />
                        <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button"></Button>
                   </form>
                   <Row>
                        <EsqueciTxt>Esqueci minha senha</EsqueciTxt>
                        <CriarTxt>Criar conta</CriarTxt>
                   </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export { Login }