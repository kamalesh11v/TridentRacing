import Navbar from '../components/Navbar';
import {Footer} from '../components/Footer'
import {TimelineComponent} from '../components/TimelineComponent'
export const Achievements = ()=>{
    return(
        <>
        <div>
        <div className='bg-gray-900'>
            <Navbar></Navbar>
        </div>

        <div className='text-center text-4xl font-semibold bg-gray-900 text-white pt-20'>
            Acheivements
        </div>
        <TimelineComponent ></TimelineComponent>

        <div className=' text-3xl font-semibold text-white bg-gray-900 text-center'>
            About the Competition
        </div>

       
        <div className='sm:flex-row sm:justify-center sm:gap-28 flex flex-col items-center bg-gray-900 pt-16 gap-12'>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
    <img src='/assets/accln.jpg' className='w-full'></img>
 </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    Acceleration Test 
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    The Acceleration event measures how quicky each vehicle can accelerate from a standing start 
    </p>
  </div>
  <div className="p-6 pt-0">
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>

<div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
      <img src='/assets/manuveribility.jpeg.jpg' className='w-full'></img>
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Manoeuvrability Test
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      Manoeuvrability is designed to assess each vehicle's agility and handling ability over off-road terrain.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>



<div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
      <img src='/assets/sledgepull.jpeg.jpg' className='w-full'></img>
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Sledge Pull Event
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      The goal is to pull a weighted object to a specified distance within a certain time frame
    </p>
  </div>
  <div className="p-6 pt-0">
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>

</div>


<div className='sm:flex-row sm:justify-center sm:pt-24 sm:gap-28 bg-gray-900 flex pt-12 flex-col items-center gap-12'>

<div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
      <img src='/assets/suspension.jpg' className='w-full'/>
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Suspension and Traction Test
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      These events tests the vehicles relative ability to climb an incline from a standing start
    </p>
  </div>
  <div className="p-6 pt-0">
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>

<div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
      <img src='/assets/endurance.jpg'></img>
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Endurance Test
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      The endurance events test the vehicles continual and fast over a challenging terrain and weather condition.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>


</div>

        </div>

    
        <Footer/>
    
        </>
    )
}
