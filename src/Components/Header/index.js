import { Link } from 'react-router-dom'
import wishlist from '../../assets/Wishlist.png'
import cart from '../../assets/Cart1 with buy.png'
import search from '../../assets/Vector.png'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setSearchProducts } from '../../store/slices/searchedProductsSlice'
import { setSearchStatus } from '../../store/slices/searchedProductsSlice'
function Header() {
    const dispatch = useDispatch();
    const [searching, setSearching] = useState('')
    const list = useSelector((state) => state.wishlist)
    const cartData = useSelector((state) => state.cartItems.items)
    const mydata = useSelector((state) => state.data.data)

    const SearchProducts = (e) => {
        e.preventDefault();
        if (searching) {
            dispatch(setSearchStatus(true));
        } else {
            dispatch(setSearchStatus(false));
        }
        const res = mydata.filter((data) =>
            data.title.toLowerCase() === searching ? data : ""
        );
        console.log(res);
        dispatch(setSearchProducts(res));
    }

    return (
        <div className='flex gap-12 w-full border-b-2 border-slate-200 items-center justify-around pt-7 pb-3'>
            <div className="">
                <span className='font-bold text-xl tracking-wide'>Exclusive</span>
            </div>
            <div className="flex gap-10">
                <Link to="/" className="hover:underline-offset-8 no-underline hover:underline text-base text-black">Home</Link>
                <Link to={"/products"} className='hover:underline-offset-8 no-underline hover:underline underline-slate-200 text-base text-black'>Products</Link>
            </div>
            <div className="flex items-center justify-center gap-5">
                <div className="relative">
                    <form action="" onSubmit={(e) => SearchProducts(e)}>
                        <input type="search"
                            placeholder='What are you looking for?'
                            name=""
                            id=""
                            className='h-8 w-72 p-5  outline-none rounded bg-gray-100'
                            onChange={(e) => setSearching(e.target.value)}
                        />
                    </form>

                    <img src={search} alt="" className='absolute right-2.5 top-2.5' />
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <img src={wishlist} alt="" />
                        <span className='rounded w-6 h-6 bg-rose-600 absolute flex items-center justify-center top-[-3px] right-[-6px] w-5 h-5 text-xs text-white ' style={{ borderRadius: "50%" }}>{!list ? 0 : list.length}</span>
                    </div>
                    <Link to={'/cart'} className='relative'>
                        <img src={cart} alt="" />
                        <div className='rounded w-6 h-6 bg-rose-600 absolute flex items-center justify-center top-[-3px] right-[-6px] w-5 h-5 text-xs text-white ' style={{ borderRadius: "50%" }}>{!cartData ? 0 : cartData.length}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header