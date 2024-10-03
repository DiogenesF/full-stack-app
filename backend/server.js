import express from "express";
import products from "./products.js";
import stockPrices from "./stock-price.js";

const app = express();
const port = 3030;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/api/products', (req, res) => {

    //these 3 loops are getting the first price for each product to show in PDL page without hardcoding
    const codes = products.map((product) => {
        return product.skus[0].code
    })
    const prices = codes.map((code) => {
        return stockPrices[code].price
    })
    const productsWithPrices = products.map((product, index) => {
        return { ...product, price: prices[index] / 100 }
    })

    res.send({ products: productsWithPrices })
});

app.get('/api/stock-price/:sku', (req, res) => {
    const sku = req.params.sku

    const info = stockPrices[sku]

    if (info) {
        res.send({ [sku]: { ...info } })
    } else {
        res.send({ message: 'Product not found' })
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});