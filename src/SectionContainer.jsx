import React from 'react'
import ReactFullpage from "@fullpage/react-fullpage";
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import './index.css'

// const fullpage = document.getElementById('fullpage');
// fullpage.style.transitionTimingFunction = 'cubic-bezier(.55,.085,0,.99)'

const SectionContainer = () => {
    const anchors = ["firstPage", "secondPage", "thirdPage"];

const FullpageWrapper = () => (
  <ReactFullpage
  scrollingSpeed = {1000}
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#3c3b5a", "#32324c", "#3c3b5a"]}
    pp-easing='.pp-easing'
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
    //   console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div className='pp-easing pp-section'>
          <div className="section">
            <First/>
          </div>
          <div className="section">
            <Second/>
          </div>
          <div className="section">
            <Third/>
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