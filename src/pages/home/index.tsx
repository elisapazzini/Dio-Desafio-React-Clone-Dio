import { useNavigate } from "react-router-dom"

import bannerImg from "../../assets/images/banner.png"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"

import { HomeContainer, Title, TitleHighLight, TextContent } from "./styles"

const Home = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>
        <Header></Header>
        <HomeContainer>
            <div>
                <Title>
                    <TitleHighLight>Implemente <br/></TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo 
                    e encare seu novo desafio profissional, 
                    evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}></Button>
            </div>
            <div>
                <img src={ bannerImg } alt="Banner homem lendo mensagens em tablet"></img>    
            </div>
        </HomeContainer>
        </>
    )
}

export { Home }