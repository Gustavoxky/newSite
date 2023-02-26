import React from "react"
import { Title } from "../title"
import { ContainerMainSC, MainSC } from "./MainStyle"
import {Text} from '../Text'
import { IMainProps } from "./types"

export const Main = (props: IMainProps) => {
    return (
        <MainSC>
            <ContainerMainSC>
                <Title content='Technologies'/>
                <Text content=''/>
            </ContainerMainSC>
            <ContainerMainSC>
                <Title content='Languages'/>
                <Text content=''/>
            </ContainerMainSC>
        </MainSC>
    )
}