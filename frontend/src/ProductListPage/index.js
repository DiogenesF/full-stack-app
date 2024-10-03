import { Header } from './Header'
import { Main } from './Main'

export const ProductListPage = () => {
    return (
        <div className='py-5 px-6'>
            <Header />

            <p className='opacity-60 font-normal my-1 text-[#646464]'>Hi Mr. Michael,</p>

            <Main />
        </div>
    )
}
