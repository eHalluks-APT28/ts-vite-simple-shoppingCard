import React from "react";
import {CartHeader} from "./CartHeader/CartHeader.tsx";
import {CartSummary} from "./CartSummary/CartSummary.tsx";
import {CartElements} from "./CartElements/CartElements.tsx";
import {Product} from "../../Global/Global.d.tsx";
import { v4 as uuidv4 } from 'uuid';
import './Cart.scss'

const products: Product[] = [
    {
        id: uuidv4(),
        productName: "Product A",
        quantity: 12,
        price: 10
    },
    {
        id: uuidv4(),
        productName: "Product B",
        quantity: 25,
        price: 133
    }
];

const Cart = () => {
    return(
        <div>
            <table>
                <CartHeader/>
                <CartElements products={products}/>
                <CartSummary products={products}/>
            </table>
        </div>
    )
}

export {Cart}