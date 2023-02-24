import React from "react"
import { InputSC, InputWrapper } from "./InputStyle"
import {Button} from '../Button'
import {Text} from '../Text'

export const Input = () => {
    return (
        <InputWrapper>
            <Button onClick={() => {}}>
                <Text content={"Enviar"}/> 
            </Button>
            <InputSC placeholder="pergunte-me"/>
        </InputWrapper>
    )
}