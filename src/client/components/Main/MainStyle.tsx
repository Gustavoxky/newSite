import styled from "styled-components";
import { Container } from "../Container";

export const MainSC = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #27252e;
`
export const ContainerMainSC = styled(Container)`
    &:hover {
        background-color: #3c2c7c;
        box-shadow: 0 0 15px 10px #141414;
        cursor: pointer;
    }
`