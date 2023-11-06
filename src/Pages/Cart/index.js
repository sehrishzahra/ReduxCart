

import React from 'react'
import Button from '../../Components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { removeCartItems } from '../../store/slices/cartSlice'
import { Link } from 'react-router-dom'
import { updateCart } from '../../store/slices/cartSlice'
import { removeSubTotal } from '../../store/slices/cartSlice'
import { updateSubTotal } from '../../store/slices/cartSlice'
import html2pdf from 'html2pdf.js';
import { deleteProduct } from '../../store/slices/cartSlice'

function Cart() {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cartItems.items)
    console.log(cartData)
    const total = useSelector((state) => state.cartItems.total)

    const updateCartVal = (val, id) => {
        const obj = {
            val: val,
            id: id
        }
        dispatch(updateCart(obj))
        dispatch(updateSubTotal())
    }

    return (
        <div>
            <div className="w-full">
                <div className="p-10">
                    <p className='text-sm text-gray-300'> Home / <span className='text-sm text-black'>Cart</span></p>
                </div>
                <div className="m-7">
                    <div class=" relative overflow-x-auto sm:rounded-lg">
                        {/* <table class="w-full text-sm text-left  dark:text-gray-400 ">
                            <thead class=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border m-3">
                                <tr className='p-5'>
                                    <th scope="col" class="px-6 py-3">
                                        Product
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Subtotal
                                    </th>
                                </tr>
                            </thead>
                            {!cartData && <div className=" w-full text-lg flex items-center justify-center m-10">No Items in Cart</div>}

                            <tbody className='divide-y-10 divide '>
                                {cartData.map((item, index) => (
                                    <tr  key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border m-3">
                                        <td scope="row" className="flex items-center gap-5 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <div className="relative">
                                                <img src={item.image} alt="" className=' w-[60%] h-auto' />
                                                <span onClick={() => { dispatch(deleteProduct(item.id)); dispatch(updateSubTotal()) }} className="rounded w-6 h-6 bg-rose-600 absolute flex items-center justify-center top-[20px] left-[-5px] w-5 h-5 text-xs text-white" style={{ borderRadius: "50%" }}>X</span>
                                            </div>
                                            <p>{item.title}</p>
                                        </td>

                                        <td className="px-6 py-4">
                                            ${item.newPrice}
                                        </td>
                                        <td className="px-6 py-4">
                                            <label htmlFor="numbers" className="text-sm bold">Qty </label>
                                            <select name="num" id="numbers" onChange={(e) => { updateCartVal(e.target.value, item.id); }} className="border px-3 rounded">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4">
                                            ${item.subTotal}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> */}
                        <div className=" h-auto">
                            <div className="px-20 flex mb-5 justify-between  w-full drop-shadow-md border bg-white py-5">
                                <p>Product</p>
                                <p>Price</p>
                                <p>Quantity</p>
                                <p>Subtotal</p>
                            </div>
                            {cartData.length === 0 && <div className=" text-lg flex items-center justify-center m-10">No Items in Cart</div>}
                            <div className="h-auto flex flex-col gap-5">
                                {cartData.map((item, index) => (
                                    <div className="gap-8 flex justify-between w-full items-center drop-shadow-md border bg-white p-5" key={index}>
                                        <div className="flex items-center">
                                            <div className="relative">
                                                <img src={item.image} alt="" className=' w-[60%] h-auto' />
                                                <span onClick={() => { dispatch(deleteProduct(item.id)); dispatch(updateSubTotal()) }} className="rounded w-6 h-6 bg-rose-600 absolute flex items-center justify-center top-[20px] left-[-5px] w-5 h-5 text-xs text-white" style={{ borderRadius: "50%" }}>X</span>
                                            </div>
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="px-6 py-4">
                                            ${item.newPrice}
                                        </div>
                                        <div className="px-6 py-4">
                                            <label htmlFor="numbers" className="text-sm bold">Qty </label>
                                            <select name="num" id="numbers" onChange={(e) => { updateCartVal(e.target.value, item.id); }} className="border px-3 rounded">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                        <div className="px-6 py-4">
                                            ${item.subTotal}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mx-7 flex justify-between items-center">
                    <Link to={'/products'} > <Button className='border border-black text-black font-semibold' variant='naked' size='large' >Return to Products</Button>  </Link>
                    <Button variant='naked' size='large' className={'border border-black text-black font-semibold'} onClick={() => { dispatch(removeCartItems()); dispatch(removeSubTotal()) }}>Remove All</Button>
                </div>
            </div>
            <TotalBill total={total} />
        </div >
    )
}

export default Cart



const TotalBill = ({ total }) => {


    const DownloadasImage = (e) => {
        e.preventDefault();
        console.log('nwehojfp34ojuo')
        var element = document.getElementById('tble');
        var opt = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2convas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf(element, opt);
    }
    return (

        <form id='tble' className="border border-black h-full w-60 m-7 p-2 " onSubmit={(e) => DownloadasImage(e)}>
            <h2 className='text-md text-semi-bold p-3'>Cart total</h2>
            <div className="flex justify-between border-b-2 p-2 mx-2">
                <p className='text-sm'>Subtotal:</p>
                <p className='text-black text-sm'>${total}</p>
            </div>
            <div className="flex justify-between border-b-2 p-2 mx-2">
                <p className='text-sm ' >Shipping:</p>
                <p>free</p>
            </div>
            <div className="flex justify-between border-b-2 p-2 mx-2">
                <p className='text-sm tet-black'>Total:</p>
                <p>${total}</p>
            </div>
            <Button variant='dander' size='large' className={'flex items-center justify-center p-5 m-5 bg-rose-600 text-white hover:opacity-75 '}>Download Receipt</Button>
        </form>
    )
}
