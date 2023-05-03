import { useEffect, useState } from "react";
import Card from "../Card";
import Heading from "../Heading";
import { Cards, Title, Wrapper } from "./styled";
import Product from "../../interfaces/Product";
import getProducts from "../../utils/api";

export default function Ofertas() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        async function fetchData() {
            const data = await getProducts();
            if (data) {
                setProducts(data)
            }
        }
        fetchData();
    }, [])

    return (
        <Wrapper>
            <Title>
                <Heading subText="Conheça nossas" mainText="ofertas" size="large" />
            </Title>
            <Cards>
                {products.map(product => product.quantity > 0 && <Card key={product.id} {...product} />)}
            </Cards>
        </Wrapper>
    )
}