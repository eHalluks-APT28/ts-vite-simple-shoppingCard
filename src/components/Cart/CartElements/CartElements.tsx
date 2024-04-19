import {CartSingleElement} from "../CartSingleElement/CartSingleElement.tsx";
import React from "react";
import {Product, Props} from "../../../Global/Global.d.tsx";


const CartElements = ({products}: Props) => {
    return (
        <tbody>
            { products.map(product => (
                <CartSingleElement product={product} key={product.id} />
            )) }
        </tbody>
    )
}

export {CartElements}