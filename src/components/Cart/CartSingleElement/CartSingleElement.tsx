import {PropsProduct} from "../../../Global/Global.d.tsx";



const CartSingleElement = ({product}: PropsProduct) => {

    const checkout: number = product.quantity * product.price
    const currency: string = "PLN"

    return (
        <tr>
            <td>{product.productName}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{checkout.toFixed(0)} {currency}</td>
        </tr>

    )
}

export {CartSingleElement}