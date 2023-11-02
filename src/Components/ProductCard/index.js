import React from 'react'
import heart from '../../assets/Wishlist.png'
import Button from '../Button'
import { setWishlist } from '../../store/slices/whishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setCartItems } from '../../store/slices/cartSlice'
import { subTotalOfCartItems } from '../../store/slices/cartSlice'


function ProductCard({ id, title, newPrice, oldPrice, discount, url }) {
    const dispatch = useDispatch()
    return (
        <div className="flex justify-center items-center mb-10 mt-10">
            <div className=''>
                <div className="relative bg-gray-100 max-md:w-58 xl:w-72 lg:w-68">
                    <img src={url} alt="" className='w-full h-auto p-8' />
                    <div className="flex justify-between items-center">
                        <button onClick={() => dispatch(setWishlist(url))}>
                            <img src={heart} alt="" className='absolute right-2 top-2 hover:text-rose-600' />
                        </button>
                        <span className='absolute left-2 top-2 rounded bg-rose-600 px-4 py-2 text-white text-xs '>-{discount}%</span>
                    </div>
                    <div className="" >
                        <Button
                            className={'bg-black text-white w-full hover:opacity-75 hover:text-white'}
                            variant='naked'
                            size='large'
                            onClick={() => {
                                dispatch(setCartItems({ id, title, newPrice, oldPrice, discount, url }
                                )); dispatch(subTotalOfCartItems())
                            }}
                        >
                            Add to cart
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-1 mt-3">
                    <h2 className='font-medium text-sm'>{title}</h2>
                    <div className="flex gap-2">
                        <p className='text-rose-600'>${newPrice}</p>
                        <p className='text-gray-500 line-through'>${oldPrice}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductCard
