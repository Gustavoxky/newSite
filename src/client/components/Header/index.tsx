import React from "react"
import {HeaderSC, LinkSC, LogoSC, MenuContentSC, MenuSC} from './headerStyled'

const Header = () => {
    return (
        <HeaderSC>
            <LogoSC content={`{</>}`}/>
            <MenuSC>
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