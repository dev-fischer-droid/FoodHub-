import React,{useEffect, useRef, useState} from 'react'
import bike from '../assets/scooter.gif'
import {RiShoppingCart2Fill} from 'react-icons/ri'
import HomeCard from '../components/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../components/CardFeature'
import {GrNext,GrPrevious} from 'react-icons/gr'
import FilterProduct from '../components/FilterProduct'
import AllProduct from '../components/AllProduct'
import { Link} from 'react-router-dom'

const Home = () => {
  const productData = useSelector((state)=>state.product.productList)
  const homeProductCartList = productData.slice(1,5);
  const homeProductCartListVegetables = productData.filter((el)=>el.category === "vegetable",[])


  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(10).fill(null)
  
  const slideProductRef = useRef();
  const nextProduct =()=>{
    slideProductRef.current.scrollLeft += 200;
  }
  const preveProduct = ()=>{
    slideProductRef.current.scrollLeft -= 200;
  }



  return (
    <div className='p-2 md:p-4'> 
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2 '>  
        <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
          <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
          <img src={bike} className='h-10 w-30 rounded-full'/>
        </div>
            <h2 className='text-4xl md:text-7xl font-bold py-3'>The Fastest Delivery in <span className='text-orange-500 '>Your City</span></h2>
            <p className='py-3 text-base'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <Link to={"menu/6513fe316fd5824db9aee44d"}><button className='font-bold flex justify-center items-center bg-red-500 text-slate-200 px-4 py-1 rounded-full hover:bg-blue-500 ' >Order Now &nbsp;<RiShoppingCart2Fill/></button></Link>
        </div>
        <div className='md:w-1/2 flex flex-wrap gap-7 p-4 justify-center'>
          {
            homeProductCartList[0] ? homeProductCartList.map(el=>{
              return(
                <HomeCard
                key={el._id}
                id={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
                calories={el.calories}
                />
              )
            })
            :
            loadingArray.map((el,index)=>{
              return
                <HomeCard
                key={index+"loading"}
                loading={"Loading.. ."}
                />
              
            })
          }
        </div>
      </div>
      {/* <div className=''>
        <div className='flex w-full items-center'>
         <h2 className='font-bold text-2xl text-slate-800 mb-4'>Fresh Vegetables</h2>
         <div className='ml-auto flex gap-4'>
          <button onClick={preveProduct} className='bg-slate-300 hover:bg-slate-500 text-lg p-1 rounded'><GrPrevious/></button>
          <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-500 text-lg p-1 rounded'><GrNext/></button>
         </div>
         </div>
         <div className='flex gap-5 overflow-scroll scroll-smooth transition-all ' ref={slideProductRef}>
          { homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map(el =>{
              return(
                <CardFeature
                key={el._id+"vegetable"}
                id={el._id}
                name={el.name}
                category={el.category}
                price={el.price}
                image={el.image}
                calories={el.calories}
                />
              )
            })
            : loadingArrayFeature.map((el,index) => (
              <CardFeature loading="Loading..." key={index+"cartLoading"} />
            ))}
         </div>
      </div> */}

      <AllProduct heading={"Your Product"}/>
    </div>
  )
}

export default Home