import React from "react"
import { Input } from "../Input"
import {HeaderSC, LinkSC, MenuContentSC, MenuSC} from './headerStyled'

const Header = () => {
    return (
        <HeaderSC>
            <MenuSC>
                <MenuContentSC>
                    <LinkSC href=''>logo</LinkSC>
                </MenuContentSC>
                <MenuContentSC>
                    <LinkSC href='https://github.com/Gustavoxky'>Github</LinkSC>
                </MenuContentSC>
                <MenuContentSC>
                    <LinkSC href='https://www.linkedin.com/in/gustavo-correia-dos-santos-6039641a6/'>LinkedIn</LinkSC>
                </MenuContentSC>
                <MenuContentSC>
                    <LinkSC href=''>Codepen</LinkSC>
                </MenuContentSC>
                
            </MenuSC>
        </HeaderSC>
    )
}

export default Header