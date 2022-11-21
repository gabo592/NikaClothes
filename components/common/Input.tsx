import { useField } from "formik"
import { FC } from "react"
import style from "../../styles/Input.module.css"

interface InputProps {
    label: string,
    name: string,
    type: string
}

const Input: FC<InputProps> = ({ label, name, type }): JSX.Element => {
    const [field, meta] = useField(name)

    return(
        <div className={style.control}>
            <label className={style.label}>{label}</label>
            <input {...field} className={style.input} type={type}></input>
            {meta.touched && meta.error ? (
                <div className={style.errorMessage}>{meta.error}</div>
            ) : null}
        </div>
    )
}

export default Input