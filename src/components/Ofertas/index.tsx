import { useEffect, useState } from "react";
import Card from "../Card";
import Heading from "../Heading";
import { Cards, Empty, Options, Title, Wrapper } from "./styled";
import Product from "../../interfaces/Product";
import getProducts from "../../utils/api";

export default function Ofertas() {
    // I need to keep a list of all products in order to undo filter/sort operations
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [price, setPrice] = useState('');
    const [sortType, setSortType] = useState('');
    const [filterValue, setFilterValue] = useState('');

    // load products
    useEffect(() => {
        async function fetchData() {
            const data = await getProducts();
            if (data) {
                setProducts(data);
                setAllProducts(data);
            }
        }
        fetchData();
    }, [])

    // apply sort and filter
    useEffect(() => {
        function orderBy(list: Product[]): Product[] {
            switch (sortType) {
                // sort modifies the original array, so first we need to make a copy of it 
                case 'price':
                    return [...list].sort((a, b) => a.price >= b.price ? 1 : -1);
                case 'name':
                    return [...list].sort((a, b) => a.name >= b.name ? 1 : -1);
            }
            return list;
        }
    
        function filterByPrice(): Product[] {
            const value = parseFloat(filterValue);
            if (!isNaN(value) && value >= 0) {
                return allProducts.filter(item => item.price <= value);
            }
            else {
                return allProducts;
            }
        }

        const list = orderBy(filterByPrice())
        setProducts(list);
    }, [filterValue, sortType, allProducts])

    function changeFilter(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFilterValue(price);
    }

    return (
        <Wrapper>
            <Title>
                <Heading subText="Conheça nossas" mainText="plantas" size="large" />
            </Title>
            <Options>
                <div>
                    <label htmlFor="orderby">Ordernar por:</label>
                    <select id='orderby' onChange={e => setSortType(e.target.value)}>
                        <option>Ordenação padrão</option>
                        <option value='price'>Preço</option>
                        <option value='name'>Nome</option>
                    </select>
                </div>
                <div>
                    <form onSubmit={changeFilter}>
                        <label htmlFor="filter">Mostrar produtos até R$ </label>
                        <input 
                            type="number" 
                            min="0" 
                            placeholder="Digite um valor" 
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                        <button>OK</button>
                    </form>
                </div>
            </Options>
            <Cards>
                {products.map(product => (
                    product.quantity > 0 && <Card key={product.id} {...product} />
                ))}
                {products.length === 0 && <Empty>Nenhum produto para mostrar.</Empty>}
            </Cards>
        </Wrapper>
    )
}