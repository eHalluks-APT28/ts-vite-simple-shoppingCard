import {CardSingleElement} from "../CardSingleElement/CardSingleElement.tsx";
import React from "react";
import {Props} from "../../../Global/Global.d.tsx";

const CardElements = ({products}: Props) => {
    return (
        <tbody>
            { products.map(product => (
                <CardSingleElement product={product} key={product.id} />
            )) }
        </tbody>
    )
}

export {CardElements}