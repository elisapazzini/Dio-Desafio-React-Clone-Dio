import styled, {css} from "styled-components";
import { IButtonContainerStyled } from "./types";


export const ButtonContainer = styled.button <IButtonContainerStyled>`
    background: #565656;
    border-color: #565656;
    border-radius: 22px;
    position: relative;
    box-sizing: border-box

    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;

    color: #FFFFFF;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    ${({variant}) => variant === "secondary" && css`
        min-width: 167px;
        height: 33px;

        background: #E4105D;
        
        &::after {
            content: '';
            position: relative;
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`
