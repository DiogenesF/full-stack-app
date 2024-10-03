import React, { useEffect, useState } from 'react'

export const Description = ({ beerInformation }) => {
    const [textToShow, setTextToShow] = useState()

    useEffect(() => {
        if (beerInformation) {
            setTextToShow(beerInformation.substring(0, 200) + "... ")
        }
    }, [beerInformation])

    return (
        <div className="mt-30">
            <h2 className='font-md-bold '>Description</h2>
            <p className="color-gray mt-6 font-sm">
                {textToShow}
                {textToShow?.length !== beerInformation?.length && (
                    <button onClick={() => setTextToShow(beerInformation)} className="font-sm-bold color-primary">Read more</button>
                )}
            </p>
        </div>
    )
}
