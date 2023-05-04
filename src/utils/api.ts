import Product from "../interfaces/Product";

const URL = 'https://gist.githubusercontent.com/zingarelli/8953e40f635f51675736a4fe45481b17/raw/d17f9d208ada3a4c6714540e9926bb7d534fabd6/casa-verde.json'

export default async function getProducts(): Promise<Product[] | null> {
    try {
        const resp = await fetch(URL);
        const data = await resp.json();
        return data;
    }
    catch (err) {
        console.log('API error!\n' + err);
        return null;
    }         
}