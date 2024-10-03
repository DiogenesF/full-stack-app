import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate()

    return (
        <header className='px-24 flex-space-between items-center'>
            <button onClick={() => navigate('/products')} className="icon bg-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="11" width="15" height="1.5" fill="#323232" />
                <path d="M11 5.20001L4 11.7L11 18.2" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            </button>
            <h2 className='font-lg'>Detail</h2>
            <button onClick={() => window.alert('Menu opened')} className="icon bg-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="11.5" r="1.5" fill="#323232" />
                <circle cx="12.5" cy="11.5" r="1.5" fill="#323232" />
                <circle cx="19.5" cy="11.5" r="1.5" fill="#323232" />
            </svg>
            </button>
        </header>
    )
}
