import React from "react"
import { ButtonSC } from "./bottonStyle"
import { IButtonProps } from "./types"

export const Button = (props: IButtonProps) => {
    return (
        <ButtonSC {...props}/>
    )
}