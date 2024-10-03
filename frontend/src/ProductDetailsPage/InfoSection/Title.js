import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Title = ({ stockPrices, activeSkuCode, beerBrand, beerOrigin }) => {
    const [stockPrice, setStockPrice] = useState()

    useEffect(() => {
        if (stockPrices && activeSkuCode) setStockPrice(stockPrices.find((code) => Object.keys(code)[0] === activeSkuCode)[activeSkuCode])

        let intervalId = setInterval(() => {
            axios.get(`/api/stock-price/${activeSkuCode}`).then(({ data }) => {
                setStockPrice(data[activeSkuCode])
            })
        }, [5000]);

        return () => clearInterval(intervalId)

    }, [activeSkuCode, stockPrices])

    return (
        <>
            <div className='flex-space-between pt-45'>
                <h1 className='font-xl'>{beerBrand}</h1>
                <p className="font-xl color-primary">${stockPrice?.price / 100}</p>
            </div>
            <span className="font-sm color-gray">Origin: {beerOrigin} | Stock: {stockPrice?.stock}</span>
        </>
    )
}
