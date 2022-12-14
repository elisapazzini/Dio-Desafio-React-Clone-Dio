import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"
import { FeedContainer, Title, TitleHighlight, Column } from "./styles"


const Feed = () => {
    return (
        <>
        <Header autenticado={true}></Header>
        <FeedContainer>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </Column>
            <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo name="Elisa Pazzini" image="https://avatars.githubusercontent.com/u/105680356?v=4" percentual={35}></UserInfo>
            <UserInfo name="Elisa Pazzini" image="https://avatars.githubusercontent.com/u/105680356?v=4" percentual={50}></UserInfo>
            <UserInfo name="Elisa Pazzini" image="https://avatars.githubusercontent.com/u/105680356?v=4" percentual={75}></UserInfo>
            <UserInfo name="Elisa Pazzini" image="https://avatars.githubusercontent.com/u/105680356?v=4" percentual={15}></UserInfo>
            <UserInfo name="Elisa Pazzini" image="https://avatars.githubusercontent.com/u/105680356?v=4" percentual={5}></UserInfo>
            </Column>
        </FeedContainer>
        </>
    )
}

export { Feed }