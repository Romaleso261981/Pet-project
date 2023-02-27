import styled from "styled-components";

export const WrapperForm = styled.div`
    margin-top: 16px;
    
    @media screen and  (min-width: 768px) {
        margin-top: 0;
        display: flex;
        width: 624px;
        margin-bottom: 32px;
    }
    
    @media screen and  (min-width: 1280px) {
        display: flex;
        width: 1034px;
        height: 44px;
    }
    
`

export const DivInputsAndBtn = styled.div`
    @media screen and  (min-width: 1280px) {
        display: flex;
    }
`

export const DivInputs = styled.div`
    @media screen and  (min-width: 768px) {
        display: flex;
        width: 624px;
    }

    @media screen and  (min-width: 1280px) {
        width: 714px;
        margin-right: 30px;
    }
`

export const DivProduct = styled.div`
    margin-bottom: 32px;

    @media screen and  (min-width: 768px) {
        height: 42px;
        display: flex;
    }
`