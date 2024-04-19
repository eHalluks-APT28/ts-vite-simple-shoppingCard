import React from "react";
import {CardHeader} from "./CardHeader/CardHeader.tsx";
import {CardSummary} from "./CardSummary/CardSummary.tsx";
import {CardElements} from "./CardElements/CardElements.tsx";
import {Product} from "../../Global/Global.d.tsx";
import { v4 as uuidv4 } from 'uuid';
import './Card.scss'

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

const Card = () => {
    return(
        <div>
            <table>
                <CardHeader/>
                <CardElements products={products}/>
                <CardSummary products={products}/>
            </table>
        </div>
    )
}

export {Card}