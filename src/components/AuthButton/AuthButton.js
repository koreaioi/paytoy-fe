import { Button, Wrapepr } from "./style.js"

const AuthButton = ({title, onClick}) => {
    return (
      <Wrapepr>
        <Button onClick={() => onClick()} >{title}</Button>
      </Wrapepr>
    )
}

export default AuthButton;