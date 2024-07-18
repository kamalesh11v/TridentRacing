import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar'; // Adjust the path as per your project structure
import '../index.css'
import {Link} from 'react-router-dom';

const MainPage = () => {
  const dynamicPhrases = ['Create', 'Build', 'Conquer'];
  const staticText = 'We';
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade out and slide up animation
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % dynamicPhrases.length);
        setIsVisible(true); // Start fade in and slide up animation
      }, 500); // Delay before changing phrase and starting animation again
    }, 3000); // Change phrase every 3 seconds (adjust timing as needed)

    return () => clearInterval(interval);
  }, []);

  return (
  <>
  
    <div className="relative">
      <div className="h-screen">
        <img src='/assets/car1.jpg' className="w-full h-full object-cover" alt="Car Background"/>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
        <div className="absolute top-1/3 sm:top-[40%] left-0 w-full text-center">
          <p className="text-gray-400 sm:text-9xl text-6xl font-bold p-2" style={{ letterSpacing: '0em' }}>
            {staticText}{' '}
            <span className={`transition-opacity transform duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {dynamicPhrases[currentPhraseIndex]}
            </span>
          </p>
        </div>

        <div className='text-white absolute sm:top-[55%] top-[40%] left-[1/2] p-4 sm:left-[29%] text-center mt-10 text-2xl font-extralight'>
            A high performance electric with a focus of maximizing <br>
        </br>
        power delivery to all four wheels for superior handling and acceleration

        </div>

        <div className='absolute sm:top-[73%] left-1/2 top-[65%] transform -translate-x-1/2 mt-5'>
          <Link to='/contactus'><button className='btn'>Contact Us</button></Link>
        </div>
      </div>
    </div>

    <div className='bg-black'>
        <div className='bg-black pt-12 text-4xl text-center text-white font-semibold'>
            About
        </div>

        <div className='text-center text-white pt-8  font-light'>
            Trident Racing participates in the SAE E-BAJA every year<br></br>
            The event comprises of variety of tests to check the quality of vehicle<br></br>
            Colleges from all over India participates in this event.

        </div>

        <div className='sm:flex sm:justify-center sm:gap-8 sm:space-around flex-col-1 p-4 '>
        {/* <div className="card2">
        <div className="content">
            <div className="back">
            <div className="back-content">
                <div className = "image">
                
                </div>
        
        
      </div>
    </div>
  </div>
</div>
        */}

        </div>

        


        <div className="flex justify-center h-screen mt-24">
  <div className="card3 mt-20 text-white text-center flex flex-col items-center justify-center font-bold text-3xl">
    <div>
      <p>Be a part of our journey</p>              
      <p className="pt-4">By Becoming our Sponsor</p>
    </div>
    <div className="mt-8">
     <Link to='/contactus'><button
        className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
      >
        Contact Us
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
        ></span>
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
        ></span>
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
        ></span>
        <span
          className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
        >Explore!</span>
      </button></Link>
    </div>
  </div>
</div>

    </div>

    <Footer></Footer>
    </>
  );
};

export default MainPage;
