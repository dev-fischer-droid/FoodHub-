import React,{useState} from 'react'
import {ImFolderUpload} from "react-icons/im"
import { ImagetoBase64 } from '../utility/ImagetoBase64'
import {toast} from 'react-hot-toast';
const Newproduct = () => {

  const [data,setData] = useState({
    name : "",
    category : "",
    image : "",
    price : "",
    description : "",
    calories:"",
  })

  const handleOnChange = (e)=>{
    const {name,value} = e.target

    setData((preve)=>{
        return{
          ...preve,
          [name] : value
        }
    })

  }

  const uploadImage = async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])
    console.log(data);
    setData((preve)=>{
      return{
        ...preve,
        image : data
      }
    })
}

// const uploadImage1 = async(e)=>{
//   const data = await ImagetoBase64(e.target.files[0])
//   console.log(data);
//   setData((preve)=>{
//     return{
//       ...preve,
//       image1 : data
//     }
//   })
// }


const handleSubmit = async(e)=>{
  e.preventDefault()
  console.log(data)

  const {name,image,category,price} = data

  if(name && image&& category && price){
    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,{
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(data)
    })

    const fetchRes =  await fetchData.json()
  
      console.log(fetchRes)
      toast(fetchRes.message)

      setData(()=>{
        return{
          name : "",
          category : "",
          image : "",
          price : "",
          description : "",
          calories:"",
        }
      })
    }
    else{
      toast("Enter required Fields")
    }
    
   
  }
 
  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md  shadow flex flex-col p-3 bg-orange-100 rounded-3xl' onSubmit={handleSubmit}>
        <label htmlFor='name' className='font-bold' >Name</label>
        <input type={"text"} name="name" className='bg-slate-200 p-1 my-2 ' onChange={handleOnChange} value={data.name}/>
        <label htmlFor='category' className='font-bold'>Category</label>
        <select className='bg-slate-200 p-1 my-2' id='category' name='category' onChange={handleOnChange} value={data.category}>
          <option value={'other'}>Select Category</option>
          <option value={'fruits'}>Fruits</option>
          <option value={'vegetable'}>Vegetable</option>
          <option value={'icecream'}>IceCream</option>
          <option value={'colddrink'}>Cold Drinks </option>
          <option value={'dproducts'}>Dairy Products</option>
          <option value={'ss'}>Sauces & spread</option>
          <option value={'bicakes'}>Biscuits & Cakes</option>
          <option value={'munchies'}>Munchies</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"rice"}>rice</option>
          <option value={"cake"}>Cake</option>
          <option value={"burger"}>Burger</option>
          <option value={"panner"}>Panner</option>
          <option value={"sandwich"}>Sandwich</option>
          <option value={"noodles"}>Noodles</option>
          <option value={"biryani"}>Biryani</option>
        </select>

        <label htmlFor='image' className='font-bold'>Image
        <div className='h-40 w-full bg-slate-200 rounded-3xl flex justify-center items-center cursor-pointer'>
          {
            data.image ? <img src={data.image} className='h-full'/> : <span className='text-4xl '><ImFolderUpload/></span> 
          }
          
          
          <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden"/> 
        </div>
        </label>

{/* 
        <label htmlFor='image1' className='font-bold'>Image1
        <div className='h-40 w-full bg-slate-200 rounded-3xl flex justify-center items-center cursor-pointer'>
          {
            data.image1 ? <img src={data.image1} className='h-full'/> : <span className='text-4xl '><ImFolderUpload/></span> 
          }
          
          
          <input type={"file"} accept="image/*" id="image1" onChange={uploadImage1} className="hidden"/> 
        </div>
        </label> */}

        <label htmlFor='price' className='font-bold my-1'>Price</label>
        <input type={'text'} className='bg-slate-200 p-1 my-2' name='price' onChange={handleOnChange} value={data.price}/>

        <label htmlFor='description' className='font-bold'>Description</label>
        <textarea rows={2} className='bg-slate-200 p-1 my-2 resize-none' name='description' onChange={handleOnChange} value={data.description}></textarea>

        <label htmlFor='calories' className='font-bold my-1'>Calories</label>
        <input type={'text'} className='bg-slate-200 p-1 my-2' name='calories' onChange={handleOnChange} value={data.calories}/>

        <button className='bg-blue-500 hover:bg-red-500 rounded-3xl text-white text-lg font-medium drop-shadow my-2'>Save</button>
      </form>
    </div>
  )
}

export default Newproduct