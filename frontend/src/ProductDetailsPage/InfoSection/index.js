import React, { useEffect, useState } from 'react'
import { Title } from './Title'
import { Description } from './Description'
import { Sizes } from './Sizes'
import { Footer } from './Footer'

export const InfoSection = ({ stockPrices, beerInfo }) => {
    const [activeSkuCode, setSkuCode] = useState()

    useEffect(() => {
        if (stockPrices) setSkuCode(Object.keys(stockPrices[0])[0])
    }, [stockPrices])

    return (
        <div className='section-radius bg-white px-24 pb-30 mt-10 mx-negative'>
            <div className='mx-positive'>
                <Title
                    stockPrices={stockPrices}
                    activeSkuCode={activeSkuCode}
                    beerBrand={beerInfo?.brand}
                    beerOrigin={beerInfo?.origin}
                />

                <Description beerInformation={beerInfo?.information} />

                <Sizes beerSkus={beerInfo?.skus} activeSkuCode={activeSkuCode} setSkuCode={setSkuCode} />

                <Footer />
            </div>
        </div>
    )
}
