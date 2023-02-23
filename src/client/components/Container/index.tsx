import React from "react"
import { ContainerSC, ContainerWrapper } from "./containerStyle"

export const Container = () => {
    return (
        <ContainerWrapper>
            <ContainerSC onClick={() => {console.log('click')}}/>
            <ContainerSC onClick={() => {console.log('click')}}/>
            <ContainerSC onClick={() => {console.log('click')}}/>
            <ContainerSC onClick={() => {console.log('click')}}/>
        </ContainerWrapper>
    )
}