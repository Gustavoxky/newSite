import React from "react"
import { TextSC } from "./TextStyle"
import { ITextProps } from "./types"

export const Text = (props: ITextProps) => {
    return (
        <TextSC {...props}>
            {props.content}
        </TextSC>
    )
}