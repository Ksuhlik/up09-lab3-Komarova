import { PropsWithChildren } from "react"
import "./Button.css"

interface IButtonProps extends PropsWithChildren {
    onClick?: () => void
}

const Button = ({ onClick, children }: IButtonProps) => {
    const handleClick = () => {
        onClick && onClick()
    }
    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default Button