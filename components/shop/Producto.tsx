import Image from "next/image"
import { FC } from "react"
import style from "../../styles/Productos.module.css"
import Button from "../common/Button"

interface ProductoInterface {
    Nombre: string,
    Imagen: string,
    Tallas: string[],
    Precio: Number
}

interface ProductoProps {
    Producto: ProductoInterface
}

const Producto: FC<ProductoProps> = ({ Producto }): JSX.Element => {
    return(
        <div className={style.producto}>
            <Image src={Producto.Imagen} alt={Producto.Nombre} className={style.imagen} width={1000} height={1000}></Image>
            <h3>{Producto.Nombre}</h3>
            <p>Tallas: {Producto.Tallas.join(", ")}</p>
            <p>Precio: C$ {Producto.Precio.toString()}</p>
            <Button primary={true} big={false}>Agregar al Carro</Button>
        </div>
    )
}

export default Producto