import styled from "styled-components";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectDiv = styled(FormControl)`
    width: 280px;

    @media (min-width: 768px) {
        width: 185px;
    }

    @media (min-width: 1280px) {
        width: 170px;
    }
`

export const SelectProduct = styled(Select)`
    #select-product {
        box-sizing: border-box;
        height: 44px;
        font-size: 12px;
        color: #C7CCDC;
        border-radius: 0px 0px 12px 0px; 
        border-top: 1px solid white; 
        border-bottom: 2px solid white; 
        border-right: 2px solid white; 
        border-left: 2px solid white;
    }

    & fieldset { 
        border: none;
    }

    & div {
        padding: 12px 20px;
    }

    @media (min-width: 768px) {
        #select-product {
            border-radius: 0; 
            border-top: 2px solid #F5F6FB; 
            border-bottom: 2px solid #F5F6FB; 
            border-right: 2px solid #F5F6FB; 
            border-left: 0;
        }
    }

    @media (min-width: 1280px) {
    }
`