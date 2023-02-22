import styled from "styled-components";

export const GreyWrapper = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 258px;
    background-color: #F5F6FB;
    border-bottom-left-radius: 30%;
    
    @media (min-width: 768px) {
        display: none;
    }
`

export const WrapperForm = styled.div`
    margin-top: 16px;
    
    @media (min-width: 768px) {
        margin-top: 0;
        display: flex;
        width: 624px;
        margin-bottom: 32px;
    }
    
    @media (min-width: 1280px) {
        display: flex;
        width: 1034px;
        height: 44px;
    }
    
`

export const DivInputsAndBtn = styled.div`
    @media (min-width: 1280px) {
        display: flex;
    }
`

export const DivInputs = styled.div`
    @media (min-width: 768px) {
        display: flex;
        width: 624px;
    }

    @media (min-width: 1280px) {
        width: 714px;
        margin-right: 30px;
    }
`

export const DivProduct = styled.div`
    margin-bottom: 32px;

    @media (min-width: 768px) {
        height: 42px;
        display: flex;
    }

    @media (min-width: 1280px) {
    }
`