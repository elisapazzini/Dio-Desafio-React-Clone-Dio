export interface IButton {
    title: string;
    variant?: string;
    onClick?: () => void; // ? significa opcional
    type?: string;
}

export interface IButtonContainerStyled {
    variant: string;
}