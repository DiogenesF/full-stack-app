import { useEffect, useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
    const navigate = useNavigate()
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        axios.get('/api/products')
            .then((response) => setProductsList(response.data.products))
            .catch((err) => window.alert(err));
    }, [])

    const handleNavigate = (product) => {
        navigate(`/product/${product.id}-${product.brand}`)
    }

    return (
        <main>
            <h1 className='mb-4 text-2xl font-bold'>Welcome Back!</h1>
            <h2 className='mb-4 text-lg font-bold'>Our Products</h2>

            <div className="grid grid-cols-2 gap-5 [&>*:nth-child(odd)]:rounded-tr-[32px] [&>*:nth-child(even)]:rounded-tl-[32px]">
                {productsList?.map((product) => (
                    <div key={product.id} className="rounded-xl shadow text-center pt-4 bg-white">
                        <p className='text-[#323232] font-medium'>{product.brand}</p>
                        <img onClick={() => handleNavigate(product)} className='mx-auto h-[122px] cursor-pointer' src={`https://beer-icons.s3.amazonaws.com${product.image}`} alt={product.brand} />
                        <div className='ml-3.5 flex justify-between items-end'>
                            <div className='flex flex-col items-start'>
                                <div className="text-xs text-[#808080]"><span className='mr-1.5 text-[#ff9f24]'>★</span>4.9</div>
                                <p className="font-medium">${product.price}</p>
                            </div>
                            <button onClick={() => window.alert('Item added to cart')} className="rounded-tl-lg rounded-br-lg w-10 h-10 bg-[#ff9f24] text-white"><span className='text-3xl inline-block'>+</span></button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
