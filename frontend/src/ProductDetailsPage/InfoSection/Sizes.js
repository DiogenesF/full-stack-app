import React from 'react'

export const Sizes = ({ beerSkus, activeSkuCode, setSkuCode }) => {
    return (
        <div className='mt-20'>
            <h2 className='font-md-bold'>Size</h2>
            <div className="flex gap-16 mt-14">
                {beerSkus?.map((sku) => (
                    <button
                        key={sku.code}
                        onClick={() => setSkuCode(sku.code)}
                        className={`borders color-gray font-sm py-4 px-16 ${activeSkuCode === sku.code ? 'active' : ''}`}
                    >
                        {sku.name}
                    </button>
                )
                )}
            </div>
        </div>
    )
}
