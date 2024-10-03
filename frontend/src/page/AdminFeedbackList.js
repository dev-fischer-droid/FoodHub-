// src/components/AdminFeedbackList.js

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

function AdminFeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/Feedback`);
        if (response.ok) {
          const data = await response.json();
          setFeedbacks(data);
        }
      } catch (error) {
        console.error(error);
        toast.error('Error fetching feedbacks');
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Feedback from Users</h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-500">No feedback available</p>
      ) : (
        <ul>
          {feedbacks.map((feedback) => (
            <li key={feedback.id} className="mb-4 p-4 border rounded-lg border-indigo-200">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">{feedback.name}</h3>
              <p className="text-indigo-600">Rating: {feedback.rating}</p>
              <p className="text-gray-700">{feedback.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminFeedbackList;
