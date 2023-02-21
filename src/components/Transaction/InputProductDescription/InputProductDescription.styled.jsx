import styled from "styled-components";
import TextField from '@mui/material/TextField';

export const DivProductDescription = styled.div`
    box-sizing: border-box;
    width: 280px;
    height: 44px;
    border-radius: 12px 12px 0px 0px;
    border-top: 2px solid white; 
    border-bottom: 1px solid white; 
    border-right: 2px solid white; 
    border-left: 2px solid white;

    & fieldset { 
        border: none;
    }

    @media (min-width: 768px) {
        width: 185px;
        border-radius: 12px 0 0 0;
        border-top: 2px solid #F5F6FB; 
        border-bottom: 2px solid #F5F6FB; 
        border-right: 2px solid #F5F6FB; 
        border-left: 2px solid #F5F6FB;
    }

    @media (min-width: 1280px) {
        width: 290px;
    }
`

export const ProductDescription = styled(TextField)`
    width: 280px;
    justify-content: center;

    & input {
        box-sizing: border-box;
        height: 44px;

        padding-left: 20px;
        font-size: 12px;
    }
`
