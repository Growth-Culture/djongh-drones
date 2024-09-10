import { ContainerBgWhite, ContainerBgOrange, IconWrapper } from "./ButtonStyles";
import { Link } from "react-router-dom";
import { BtnArrow } from "../../assets/icons/btnArrow";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  to?: string;
  bgOrange?: boolean;
  btnIcon?: boolean; 
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { title, to, children, bgOrange, btnIcon, ...rest } = props;

  return (
    <>
      {bgOrange ? (
        <Link to={to || ""}>
          <ContainerBgOrange title={title} {...rest}>
            {children}
            {btnIcon && (
              <IconWrapper>
                <BtnArrow />
              </IconWrapper>
            )}
          </ContainerBgOrange>
        </Link>
      ) : (
        <Link to={to || ""}>
          <ContainerBgWhite title={title} {...rest}>
            {children}
          {btnIcon && (
              <IconWrapper>
                <BtnArrow />
              </IconWrapper>
            )}
          </ContainerBgWhite>
        </Link>
      )}
    </>
  );
}
