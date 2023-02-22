import styled from "styled-components";
import Stack from '@mui/material/Stack';

export const DivButton = styled(Stack)`
    justify-content: center;

    & button {
        font-size: 12px;
        width: 130px;
        height: 44px;
        border-radius: 16px;
        
        &#submit{
            color: #FFFFFF;
            background-color: #FF751D;
            box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
        }

        &#reset{
            color: #52555F;
            background-color: #F5F6FB;
            box-shadow: 1px 3px 5px rgba(85, 82, 95, 0.35);
        }
    }
`