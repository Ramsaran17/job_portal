import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {

  const {setSearchFilter, setIsSearched} = useContext(AppContext)

  const titleRef = useRef(null)
  const locationRef = useRef(null)

  const onSearch = () => {
      setSearchFilter({
          title: titleRef.current.value,
          location: locationRef.current.value
      })
      setIsSearched(true)
  }


    return (
        <div className='container 2xl:px-20 mx-auto my-12'>

            <div className='bg-gradient-to-r from-purple-800 to-purple-950 rounded-2xl text-white py-14 px-6'>

                <div className='max-w-4xl mx-auto text-center'>

                    <h2 className='text-3xl md:text-5xl lg:text-[54px] font-bold leading-tight'>
                        Over 10,000+ Jobs to Apply
                    </h2>

                    <p className='mt-5 mb-10 max-w-2xl mx-auto text-base text-purple-100 leading-7'>
                        Your Next Big Career Move Starts Right Here — Explore the Best Job Opportunities and Take the First Step Toward Your Future.
                    </p>

                    <div className='bg-white rounded-xl shadow-2xl w-10/12 lg:w-9/12 mx-auto flex items-center overflow-hidden max-md:flex-col'>

                        <div className='flex items-center flex-1 px-5 py-3'>
                            <img
                                src={assets.search_icon}
                                alt=""
                                className='w-4 h-4 opacity-60'
                            />

                            <input
                                type='text'
                                placeholder='Search for jobs'
                                className='ml-3 w-full outline-none text-gray-700 placeholder-gray-400 text-[15px]'
                                ref={titleRef}
                            />
                        </div>

                        <div className='hidden md:block w-px h-8 bg-gray-300'></div>

                        <div className='flex items-center flex-1 px-5 py-3'>
                            <img
                                src={assets.location_icon}
                                alt=""
                                className='w-4 h-4 opacity-60'
                            />

                            <input
                                type='text'
                                placeholder='Location'
                                className='ml-3 w-full outline-none text-gray-700 placeholder-gray-400 text-[15px]'
                                ref={locationRef}
                            />
                        </div>

                        <button onClick={onSearch} className='bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-medium px-8 py-3 rounded-lg m-1'>
                            Search
                        </button>

                    </div>

                </div>

            </div>
            <div className='border border-gray-300 shadow-md mx:2 mt-5 p-6 rounded-md flex'>
                <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
                    <p className='font-medium'>Trusted by</p>
                    <img className='h-6' src={assets.microsoft_logo} alt="" />
                    <img className='h-6' src={assets.walmart_logo} alt="" />
                    <img className='h-6' src={assets.amazon_logo} alt="" />
                    <img className='h-6' src={assets.samsung_logo} alt="" />
                    <img className='h-6' src={assets.accenture_logo} alt="" />
                    <img className='h-6' src={assets.adobe_logo} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Hero