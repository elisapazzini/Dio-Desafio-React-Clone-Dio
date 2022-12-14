import { useNavigate } from "react-router-dom"
import { MdEmail, MdLock } from "react-icons/md"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

import { Container, Title, TitleLogin, EsqueciTxt, CriarTxt, Wrapper, Column, Row, SubTitleLogin} from "./styles"
import { IFormData } from "./types";

import { api } from "../../services/api";

// Validacao dos campos de email e senha
const schema = yup.object({
    email: yup.string().email('E-mail inválido.').required('Campo obrigatório.'),
    password: yup.string().min(4, 'Mínimo de 4 caracteres.').max(8).required('Campo obrigatório.'),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema), // Validacao dos campos de email e senha;
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            } else {
                alert('E-mail ou senha inválido(a).')
            }
        } catch {
            alert('Houve um erro, tente novamente.')
        }
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
                   <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} leftIcon={<MdEmail/> } placeholder="E-mail" type="text" />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} leftIcon={<MdLock/>} placeholder="Password" type="password" />
                        <Button title="Entrar" variant="secondary" type="submit"></Button>
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