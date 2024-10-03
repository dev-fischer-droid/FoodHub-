import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const ContactUsPage = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-green-400 rounded-full p-2 text-white">
                <FaPhone />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Phone</h3>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-400 rounded-full p-2 text-white">
                <FaEnvelope />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Email</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-indigo-400 rounded-full p-2 text-white">
                <FaMapMarker />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Address</h3>
                <p>Datta Meghe College Of Engineering,Airoli</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className='max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8'>
      <iframe className='max-w-3xl m-9' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4547.2467528987345!2d72.99295871520536!3d19.160543882482582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf4daf8967d9%3A0xdd90bed2058f7eaa!2sDatta%20Meghe%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1697899093138!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactUsPage;
