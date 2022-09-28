import React from 'react'

export default function Circle() {
  return (
    <div className="main">
      <div className="skill">
            <div className="outer">
                <div className="inner">
                    <div className="number">
                        65%
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle className="circle1" cx="80" cy="80" r="70" stroke-linecap="round" />
 </svg>
    <h6 className="mt-3">Communication</h6>
        </div>
        <div className="skill">
            <div className="outer">
                <div className="inner">
                    <div className="number">
                        80%
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle className="circle2" cx="80" cy="80" r="70" stroke-linecap="round" />
 </svg>
 <h6 className="mt-3">Team Work</h6>

        </div>
        <div className="skill">
            <div className="outer">
                <div className="inner">
                    <div className="number">
                        80%
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle className="circle4" cx="80" cy="80" r="70" stroke-linecap="round" />
 </svg>
 <h6 className="mt-3">Creativity</h6>

        </div>
    </div>
  )
}
