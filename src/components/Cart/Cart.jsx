import React from 'react'
import './Cart.css';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';

const Cart = () => {
  return (
    <>
    
    <div className="bg-[#161616] w-full text-white md:flex md:justify-space">

    <div className="py-[60px] md:mx-24 md:w-[60%] w-[90%] ml-6">

    <h1 className="mb-3 text-3xl font-semibold">My Cart</h1>

    <div id="line"></div>

    <div id="prd" className="flex gap-4">
        <div>
           <img className="w-[150px]" src="https://images.ctfassets.net/wn7ipiv9ue5v/24LXugBTxqmxRqxEOBZyro/171a46ed028097c9f101d115907742e5/RDR2_Zippo_Front_01.jpg?w=768&h=&fm=webp&q=" alt="img" />
        </div>
        <div>
            <h2 className="text-2xl font-semibold my-1">Red Dead Tee</h2>
            <p className="text-gray-400 my-1">Men's,XL</p>
            <select name="" id="select" className="text-gray-400 my-1 p-3 rounded pr-8 text-white bg-black focus:bg-black hover:bg-gray-500 outline-none">
                <option value="1">Qty:1</option>
                <option value="2">Qty:2</option>
                <option value="3">Qty:3</option>
                <option value="4">Qty:4</option>
            </select><br></br>
            <button className="underline text-gray-400 my-1">Remove</button>
        </div>
        <div>
            <h2 className="text-2xl font-semibold my-1">$19.99</h2>
        </div>
    </div>
    <div id="line"></div>

      <p id="total_price" className="text-gray-300">Subtotal(2 items): <span className="text-xl font-bold">€64.98</span></p>
    </div>

     <div className="bg-black text-gray-300 md:mt-10 md:mb-10 md:mr-10 p-4  md:w-[400px] md:w-[30%] m-6">
      <p className="my-1">ORDER SUMMARY</p>
     <div id="line"></div>
     <div className="flex justify-between my-1">
        <div>Total for Items</div>
        <div>€64.98</div>
     </div>
     <div id="line"></div>
     <div className="flex justify-between my-1">
        <div className="font-bold text-2xl">Subtotal<span className=" font-normal text-lg">(2 items)</span></div>
        <div className="font-bold text-2xl">€64.98</div>
     </div>
     <div id="line"></div>
      <div className="flex gap-2 my-1">
          <LocalShippingRoundedIcon/>
         <p>Add €5.01 to this order to qualify for FREE standard shipping.</p>
      </div>
      <button className=" my-1 bg-yellow-500 text-black font-semibold px-4 py-3 hover:bg-yellow-400 rounded mt-2">PROCEED TO CHECKOUT</button>
      <p className="text-sm mt-2 my-1">Taxes and shipping will be calculated in the checkout window.</p>
     </div>
    
    </div>
    </>
  )
}

export default Cart