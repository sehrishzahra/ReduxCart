import React from 'react'
import Banner from '../../Components/Banner'
import ProductCard from '../../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setData } from '../../store/slices/StoreData'
import axios from 'axios'
import Button from '../../Components/Button'
import { Link } from 'react-router-dom'
import { resetWishlist } from '../../store/slices/wishlistSlice'

function Home() {
    const mydata = useSelector((state) => state.data.data)
    console.log(mydata)
    const searchingData = useSelector((state) => state.searchProducts.products)
    console.log(searchingData)
    const status = useSelector((state) => state.searchStatus.searching)
    console.log(status)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('/Data.json')
            .then((jsonData) => {
                console.log(jsonData.data)
                const mydata = jsonData.data;
                const newData = mydata.map((item, index) => ({
                    id: (index + 1),
                    image: item.image,
                    title: item.title,
                    oldPrice: item.oldPrice,
                    newPrice: item.newPrice,
                    discountInPercentage: item.discountInPercentage,
                    subTotal : item.newPrice
                }));
                dispatch(setData(newData));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
      
    }, [dispatch]);

    return (
        <div>

            <Banner />
            {mydata.length === 0 && <div>Loading...</div>}
            <div className="flex flex-col w-full justify-center items-center">
                <div className="flex justify-around w-11/12">
                    {status === true && searchingData && searchingData.map((data, index) => (
                        <div className="" key={index}>
                            <ProductCard id={data.id} title={data.title} newPrice={data.newPrice} oldPrice={data.oldPrice} discount={data.discountInPercentage} url={data.image} subTotal={data.subTotal}/>
                        </div>
                    ))}

                    { status === false && mydata &&
                        mydata.slice(0, 4).map((data) => (
                            <div className="" key={data.id}>
                                <ProductCard id={data.id} title={data.title} newPrice={data.newPrice} oldPrice={data.oldPrice} discount={data.discountInPercentage} url={data.image} subTotal={data.subTotal}/>
                            </div>
                        ))
                    }
                </div>
                <div className="m-20">
                    <Link to="/products">
                        <Button
                            variant='danger'
                            size='large'>
                            View all Products
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home