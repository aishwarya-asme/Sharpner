import React,{useContext} from 'react';
import Cart from '../Cart/Cart';
import { Context } from '../Store/Context';

const Header = () => {
  const {showCart,setShowCart}=useContext(Context);

 
  const toggleCart=()=>{
    setShowCart(!showCart)
  }
  return (
    <>
    <div className='text-white bg-black p-5 flex justify-evenly text-2xl text-center '>
      <h1>Home </h1>
      <h1>Store</h1>
      <h1>About</h1>
      <button onClick={toggleCart}
       className='bg-blue-800 font-semibold text-lg rounded-md px-3 '>Cart</button>
    </div>
    {showCart&&(
      <div className='relative'>
        <Cart/>
      </div>
    )
    }
    <h1 className='text-6xl text-center text-white p-10 font-extrabold bg-slate-500'>
      The Generics</h1>
    
    </>
  )
}

export default Header