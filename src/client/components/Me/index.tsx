import React from "react"
import { ContainerMeSC, TextMeSC, TitleMeSC } from "./MeStyle"

export const Me = () => {
    return (
        <ContainerMeSC>
            <TitleMeSC content='Hello word'/>
            <TextMeSC content='Welcome, My name is Gustavo Correia, this is my web site, im software development. Here you found my portfolio, a little about myself and my CV'/>
        </ContainerMeSC>
    )
}