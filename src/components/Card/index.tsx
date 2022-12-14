import * as React from 'react'
import { 
    CardContainer, ImageBackground, Content,
    UserInfo, UserPicture, PostInfo, HasInfo } from './styles'

import { FiThumbsUp } from "react-icons/fi"

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://media-exp1.licdn.com/dms/image/D4D16AQFzUuwedxYVYQ/profile-displaybackgroundimage-shrink_350_1400/0/1664828663105?e=1675900800&v=beta&t=rf4ReFYstmDKGD02sEzKw5FtLKm0Ymp8DFezs22ZE9M'></ImageBackground>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/105680356?v=4'></UserPicture>
                <div>
                    <h4>Elisa Pazzini</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade... Ver Mais</p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp></FiThumbsUp>
                    10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
