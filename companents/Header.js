import React from 'react'
import Frame from '../images/Frame.png';
import IMAGE from '../images/IMAGE.png';
export default function Header() {
  return (
    <section class="section-1">
            
    <div class="section1-area2">
        <img src= {IMAGE} alt="img"/>
    </div>
    <div class="section1-area1">
        <span class="inline-block">About us</span>
        <span class="inline-block">NFTs</span>
        <span class="inline-block">Contact</span>
    </div>
    <div class="section1-area3">
        <img src= {Frame} alt="fram"/>
    </div>
    <div class="section1-area4">
        <button class="button-1">View on OpenSea</button>
    </div>
</section>
  )
}


// function Header(){
// return(
//     <h1> hi</h1>
// );
// }
// export default Header;