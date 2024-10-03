// import React from "react";

// const Menu = ({ recommendation }) => {
//   const link = "http://localhost:8501/"; // Provided link

//   const redirectToLink = () => {
//     console.log("Redirecting to:", link); // Log the link for debugging
//     window.location.href = link; // Redirect to the provided link
//   };

//   return (
//     <div className="p-2 md:p-4">
//       <div className="w-full max-w-4xl m-auto md:flex bg-white">
//         <div className="max-w-sm overflow-hidden w-full p-5">
//           <p
//             className="cursor-pointer text-blue-500 hover:underline"
//             onClick={redirectToLink} // Call redirectToLink function on click
//           >
//             {recommendation}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <Menu recommendation="For recommendation click This" />
//     </div>
//   );
// }

// export default App;