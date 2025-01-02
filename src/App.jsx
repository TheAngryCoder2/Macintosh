import React from "react";
import MacImage from "./assets/mac-book-ckq.png"; // Add the image file path here

export default function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col 
    items-center justify-center p-5 relative">
      <header className="text-center">
        <h1 className="absolute text-4xl md:text-5xl font-bold leading-tight inset-20">
          Take home a Macintosh
        </h1>
        
      </header>
      <img src={MacImage} className="absolute w-1/3 left-14" />

      {/* Main Content */}
      <main className="absolute right-7 font-medium text-sm md:text-base leading-relaxed w-1/2 text-justify">
      <p>
          All along, we’ve been telling you Macintosh
          <sup>®</sup> is the easiest-to-use computer very little money can buy.
          Now we’re going to prove it.
        </p>
        <p className="mt-4">
          By putting our Macintosh where our mouth is. Right now, anyone who
          qualifies can walk into a participating authorised Apple dealer and
          walk out with a Macintosh Personal Computer. <strong>Absolutely free.</strong>
        </p>
        <p className="mt-4">
          It’s our way of letting you test drive a Macintosh for 24 hours in the
          comfort of your own home, office, dorm room, or hotel room. And really
          experience firsthand how much less your finger already knows about
          computers.
        </p>
        <p className="mt-4">
          In less time than it takes you to get frustrated on an ordinary
          computer, you’ll be doing real work on Macintosh. Everything from
          writing memos to working with spreadsheets to creating charts to
          managing projects. Because the hard part of test driving a Macintosh
          isn’t learning how to use it. The hard part is bringing it back.
        </p>
      </main>

      {/* Footer Content */}
      <footer className="mt-8 text-center absolute inset-x-0 bottom-12">
        <h3 className=" text-xl md:text-2xl font-bold">
          Test Drive Macintosh
        </h3>
        <p className="text-sm md:text-base mt-2">
        Call <span className="font-bold">(800) 538-9696</span> or visit...
        </p>

      </footer>
    </div>
  );
}
