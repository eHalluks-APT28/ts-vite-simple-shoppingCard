import {Props} from "../../../Global/Global.d.tsx";

const CartSummary = ({products}: Props) => {

    const totalPrice: number = products.reduce((acc, product) => acc + product.quantity * product.price, 0)
    const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0)
    const totalUnitPrice = products.reduce((acc, product) => acc + product.price, 0)
    const currency: string = "PLN"

    return (
        <tfoot>
            <tr>
                <td>Overview</td>
                <td>{totalQuantity}</td>
                <td>{totalUnitPrice}</td>
                <td>{totalPrice} {currency}</td>
            </tr>
        </tfoot>
    )
}

export {CartSummary}