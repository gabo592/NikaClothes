import { FC } from "react"
import Producto from "./Producto"
import style from "../../styles/Productos.module.css"

interface ProductoInterface {
    Nombre: string,
    Imagen: string,
    Tallas: string[],
    Precio: Number
}

interface ProductosProps {
    productos: ProductoInterface[]
}

const Productos: FC<ProductosProps> = ({ productos }): JSX.Element => {
    return(
        <div className={style.productos}>
            {productos.map(producto => 
                <Producto
                    key={producto.Nombre}
                    Producto={producto}
                ></Producto>)}
        </div>
    )
}

export default Productos