import Button from '@mui/material/Button';
import { 
    DivButton,
} from './Button.styled';

export function ButtonIC() {
    return (
        <DivButton spacing='20px' direction="row">
            <Button 
                type="submit"
                id="submit"
            >
                input
            </Button>
            <Button
                type="reset"
                id="reset"
                >
                clear
            </Button>
        </DivButton>
    )
}