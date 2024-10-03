import React from 'react'

export const Header = () => {
    return (
        <header className='flex justify-between items-center py-5'>
            <button onClick={() => window.alert('Menu opened')} className="rounded-xl w-10 h-10 flex justify-center items-center bg-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="5" width="16" height="1.5" rx="0.75" fill="#0F0D23" />
                    <rect x="4" y="11" width="10" height="1.5" rx="0.75" fill="#0F0D23" />
                    <rect x="4" y="17" width="16" height="1.5" rx="0.75" fill="#0F0D23" />
                </svg>

            </button>

            <img src='https://beer-icons.s3.amazonaws.com/user-pic.jpg' alt="User" className="rounded-full w-10 h-10 mr-2.5" />

        </header>
    )
}
