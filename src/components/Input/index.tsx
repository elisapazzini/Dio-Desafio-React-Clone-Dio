import * as React from "react";
import { Controller } from "react-hook-form";

import { InputContainer, IconContainer, InputText, ErrorTxt } from './styles'
import { IInput } from "./types";


const Input = ({leftIcon, name, control, errorMessage, ...rest} :IInput) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}

        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} { ...rest }></InputText>}
        ></Controller>
      </InputContainer>
      {errorMessage ? <ErrorTxt>{errorMessage}</ErrorTxt> : null}
    </>
  )
}

export { Input }
