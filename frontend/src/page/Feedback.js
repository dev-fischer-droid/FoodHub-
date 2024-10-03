import React, { useState } from 'react';
import toast from 'react-hot-toast';
function Feedback() {
  const [data, setData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => ({
      ...preve,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {name,email,rating,comment} = data

  if(name && email && rating && comment){
    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadFeedback`,{
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
          email : "",
          rating : "",
          comment:"",
        }
      })
    }
    else{
      toast("Enter required Fields")
    }
    
    // console.log(feedback);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-medium">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            value={data.rating}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700 font-medium">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={data.comment}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default Feedback;
