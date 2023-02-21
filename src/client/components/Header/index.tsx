import React from "react"
import {HeaderSC, MenuContentSC, MenuSC} from './headerStyled'

const Header = () => {
    return (
        <HeaderSC>
            <MenuSC>
                <MenuContentSC>
                    <h1>logo</h1>
                </MenuContentSC>
                <MenuContentSC>
                    <h1>Home</h1>
                </MenuContentSC>
                <MenuContentSC>
                    <h1>about</h1>
                </MenuContentSC>
                <MenuContentSC>
                    <h1>contact</h1>
                </MenuContentSC>
                
            </MenuSC>
        </HeaderSC>
    )
}

export default Header