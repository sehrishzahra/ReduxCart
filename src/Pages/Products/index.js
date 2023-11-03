import React from 'react'
import Button from '../../Components/Button'
import ProductCard from '../../Components/ProductCard'
import { useSelector, useDispatch } from 'react-redux'
import { setAlltoCartItems , updateSubTotal } from '../../store/slices/cartSlice'

function Products() {
    const dispatch = useDispatch();
    const mydata = useSelector((state) => state.data.data)
    const searchingData = useSelector((state) => state.searchProducts.products)
    const status = useSelector((state) => state.searchStatus.searching)
    const cartItems = useSelector((state) => state.cartItems)
    console.log(cartItems)

    return (

        <div>
            <div className="flex w-full justify-between items-center p-10">
                <div className="">
                    <p>Total Products({mydata.length}) </p>
                </div>
                <Button variant='naked' size='large' onClick={() => {dispatch(setAlltoCartItems(mydata)) ; dispatch(updateSubTotal())} }>
                    Move All to Cart
                </Button>
            </div>
            <div className="xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid  ">
                {status === false && mydata &&
                    mydata.map((data, index) => (
                        <div className="" key={index}>
                            <ProductCard id={data.id} title={data.title} newPrice={data.newPrice} oldPrice={data.oldPrice} discount={data.discountInPercentage} url={data.image} />
                        </div>
                    ))
                }
                {status === true && searchingData.length > -1 && searchingData.map((data, index) => (
                    <div className="" key={index}>
                        <ProductCard id={data.id} title={data.title} newPrice={data.newPrice} oldPrice={data.oldPrice} discount={data.discountInPercentage} url={data.image} />
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Products
