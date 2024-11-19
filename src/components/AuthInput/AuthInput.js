import { Input, InputWrapper, Type } from "./style.js";

const AuthInput = ({name, placeholder, type, value, onChange}) => {
  return (
    <InputWrapper>
      <Type>{name}</Type>
      <Input
        name = {name}
        placeholder = {placeholder}
        type = {type}
        value = {value}
        onChange={onChange}
        required
      />
    </InputWrapper>
  )
}

export default AuthInput;