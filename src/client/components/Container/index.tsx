import React from "react"
import { ContainerSC} from "./containerStyle"
import { IContainerProps } from "./types"

export const Container = (props: IContainerProps) => {
    return (
            <ContainerSC {...props} onClick={() => {console.log('click')}}/>
               
    )
}