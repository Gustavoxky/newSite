import React from "react"
import { Container } from "../Container"
import { Title } from "../title"
import { MainSC } from "./MainStyle"

export const Main = () => {
    return (
        <MainSC>
            <Container>
                <Title content='Technologies'/>
            </Container>
            <Container>
                <Title content='Languages'/>
            </Container>
        </MainSC>
    )
}