export interface Product {
    id: string;
    productName: string;
    quantity: number;
    price: number;
}

export interface Props {
    products: Product[];
}

export interface PropsProduct {
    product: Product,
}