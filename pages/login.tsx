import { Form, Formik } from "formik"
import Head from "next/head"
import Logo from "../components/common/Logo"
import Input from "../components/common/Input"
import Button from "../components/common/Button"
import style from "../styles/Login.module.css"
import * as Yup from "yup"

const Login = () => {
    const handleSubmit = (values: object) => {
        console.log(values)
    }

    return(
        <div className={style.container}>
            <Head>
                <title>NikaClothes - Login</title>
                <meta name="description" content="Página principal de NikaClothes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={style.section}>
                <Logo></Logo>
                <Formik
                    initialValues={{
                        name: '',
                        password: ''
                    }}
                    onSubmit={values => handleSubmit(values)}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Obligatorio"),
                        password: Yup.string().required("Obligatorio")
                    })}
                >
                    <Form>
                        <Input name="name" label="Nombre de Usuario" type="text"></Input>
                        <Input name="password" label="Contraseña" type="password"></Input>
                        <Button primary={true} big={true}>Iniciar Sesión</Button>
                        <Button primary={false} big={true}>Crear Cuenta</Button>
                    </Form>
                </Formik>
            </section> 
        </div>
    )
}

export default Login