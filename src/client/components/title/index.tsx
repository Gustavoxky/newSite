import React from "react"
import { TitleSC } from "./titleStyle"
import {ITitleProps} from './types'

export const Title = (props: ITitleProps) => {
    return (
        <TitleSC{...props}>
        {props.content}
        </TitleSC>
    )
}