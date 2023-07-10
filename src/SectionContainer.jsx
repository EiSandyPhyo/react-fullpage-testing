import React from 'react'
import ReactFullpage from "@fullpage/react-fullpage";
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
// import "./styles.css";


// const fullpage = document.getElementById('fullpage');
// fullpage.style.transitionTimingFunction = 'cubic-bezier(.55,.085,0,.99)'

const SectionContainer = () => {
    const anchors = ["firstPage", "secondPage", "thirdPage"];
    

const FullpageWrapper = () => (
  
  <ReactFullpage
   debug
  licenseKey={"YOUR_KEY_HERE"} 
  scrollingSpeed = {1000}
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#3c3b5a", "#32324c", "#3c3b5a"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
    //   console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

     return (
          <div className=''>
          <div className="section">
            <First/>
            {/* <h3>Section One</h3> */}
          </div>
          <div className="section">
            <Second/>
            {/* <h3>Section 2</h3> */}
          </div>
          <div className="section">
            <Third/>
            {/* <h3>Section 3</h3> */}
          </div>
        </div>
      );
    }}
  />
);
  return (
    <FullpageWrapper/>
  )
}

export default SectionContainer