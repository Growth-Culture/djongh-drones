import { Container } from './ButtonStyles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    loading?: boolean;
}

export function Button({ title, loading = false, ...rest }: ButtonProps) {
    return (
        <Container 
            type="button" 
            disabled={loading}
            {...rest}
        >
            {loading ? 'Carregando...' : title}
        </Container>
    );
}