import React, { useState } from 'react'
import SectionContainer from './SectionContainer'
import Header from './Header'

const App = () => {
  console.log(navigator.connection.effectiveType);

  // const [loading, setLoading] = useState(true);
  // const preloading = document.getElementById('preloading');
  // if(preloading){
  //   setTimeout(()=>{
  //     preloading.style.display = 'none';
  //     setLoading(false);
  //   },2000)
  // }
  return (
    // !loading && (
    //   <>
    //   <Header>
    //   <a href="#firstPage" className=" mx-5 hover:text-[#C44D58]">Section Oneee</a>
    //   <a href="#secondPage" className=" mx-5  hover:text-[#C44D58]">Section Twooo</a>
    //   <a href="#thirdPage" className=" mx-5  hover:text-[#C44D58]">Section Threeee</a>
    //   </Header>
    //   <SectionContainer/>
    // </>
    // )

    <>
      <Header>
      <a href="#firstPage" className=" mx-5 hover:text-[#C44D58]">Section Oneee</a>
      <a href="#secondPage" className=" mx-5  hover:text-[#C44D58]">Section Twooo</a>
      <a href="#thirdPage" className=" mx-5  hover:text-[#C44D58]">Section Threeee</a>
      </Header>
      <SectionContainer/>
    </>
  )
}

export default App