import styled from "styled-components";
import { IColumn } from "./types";

export const FeedContainer = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 24px;

    color: #FFFFFFFF;
`

export const TitleHighlight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 24px;

    color: #FFFFFF70;
`

export const Column = styled.div <IColumn>`
    flex:${({flex}) => flex} //proporcao dentro do flex box - qnt maior o peso, maior o elemento fica na tela
    padding-right: 24px;
`



