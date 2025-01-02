import React from "react";
import MacImage from "./assets/mac-book-ckq.png"; // Add the image file path here

export default function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col 
    items-center justify-center p-5 relative">
      <header className="text-center">
        <h1 className="absolute text-4xl md:text-5xl font-bold leading-tight inset-10">
          Take home a Macintosh
        </h1>
        
      </header>
      <img src={MacImage} className="absolute w-1/3 left-14" />
      
    </div>
  );
}
