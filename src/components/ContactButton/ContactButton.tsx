import { Button } from "./ContactButtonStyles";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  to?: string;
  children: React.ReactNode;
}

export function ContactButton({ title, to, children, ...rest }: ButtonProps) {
  return (
    <Link to={to || ""}>
      <Button title={title} {...rest}>
        {children}
      </Button>
    </Link>
  );
}
