import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import './index.css'
import { InfoSection } from './InfoSection'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const ProductDetailsPage = () => {
    const { productIdAndBrand } = useParams()
    const [stockPrices, setStockPrices] = useState()
    const [beerInfo, setBeerInfo] = useState()

    useEffect(() => {
        const productId = productIdAndBrand.split('-')[0]
        axios.get('/api/products').then((response) => {
            const productFound = response.data.products.find(({ id }) => id === Number(productId))
            const skusToFetch = productFound?.skus

            if (productFound) {
                setBeerInfo({
                    brand: productFound.brand,
                    information: productFound.information,
                    imageUrl: productFound.image,
                    skus: skusToFetch,
                    origin: productFound.origin
                })
            }

            Promise.all(
                skusToFetch?.map(({ code }) => {
                    return axios.get(`/api/stock-price/${code}`)
                })
            ).then(res => {
                const stockAndPrices = res.map(({ data }) => ({ ...data }))
                setStockPrices(stockAndPrices)
            }).catch((err) => window.alert(err))
        }).catch((err) => window.alert(err))
    }, [productIdAndBrand])

    if (!beerInfo) return <></>

    return (
        <div className="pt-40">

            <Header />

            <div className="my-4 px-24 ">
                <img className='h-200 m-auto' src={`https://beer-icons.s3.amazonaws.com${beerInfo?.imageUrl}`} alt={beerInfo?.brand} />
            </div>

            <InfoSection stockPrices={stockPrices} beerInfo={beerInfo} />
        </div>
    )
}
