import "./Input.css"

interface IInputProps {
    setValue: React.Dispatch<React.SetStateAction<string>>
    value: string
}

const Input = ({setValue, value}: IInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValue(e.currentTarget.value)
    }

    return(
        <input className="input" type="text" onChange={handleChange} value={value}></input>
    )
}

export default Input