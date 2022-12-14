import { useNavigate } from "react-router-dom"
import { MdEmail, MdLock, MdPerson } from "react-icons/md"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { 
    ContainerCadastro, Title, TitleLogin, JaTenhoContaTxt, AceitoTxt,
    FazerLoginHref, Wrapper, Column, Row, SubTitleLogin
} from "./styles"

const Cadastro = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (
        <>
        <Header></Header>
        <ContainerCadastro>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias 
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                   <TitleLogin>Comece agora grátis</TitleLogin>
                   <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                   <form action="">
                        <Input leftIcon={<MdPerson/> } placeholder="Nome completo" type="text" />
                        <Input leftIcon={<MdEmail/> } placeholder="E-mail" type="text" />
                        <Input leftIcon={<MdLock/>} placeholder="Senha" type="password" />
                        <Button title="Criar minha conta" variant="secondary" onClick={handleClickSignIn} type="button"></Button>
                   </form>
                   <Row>
                        <AceitoTxt>
                                Ao clicar em "criar minha conta grátis", 
                                declaro que aceito as <a href="#">Políticas de Privacidade</a> 
                                e os <a href="#">Termos de Uso</a> da DIO.
                        </AceitoTxt>
                   </Row>
                   <Row>
                        <JaTenhoContaTxt>
                            Já tenho conta. <FazerLoginHref>Fazer login</FazerLoginHref>
                        </JaTenhoContaTxt>
                   </Row>
                </Wrapper>
            </Column>
        </ContainerCadastro>
        </>
    )
}

export { Cadastro }