import React from 'react'
import IMAGE from '../images/IMAGE.png'
import Vector from '../images/Vector.png'
import Instagram from '../images/instagram.png'
import Vector2 from '../images/Vector2.png'


export default function Section6() {
  return (
    <section class="section-6">
    <div class="section6-area1">
        <img src= {IMAGE} class="section6-img5"  alt="sdsds"/>
        <span class="section6-span7">Join the community</span>
        <div class="section6-icons">
            <img src= {Vector}  alt="sdsdsd"/>
            <img src= {Instagram} alt="sdsas"/>
            <img src= {Vector2} alt="sdxf"/>
        </div>
        
    </div>
    <div class="section6-area2">
        <div class="section6-colum">
            <span class="section6-text">Site</span>
            <span class="section6-textAS">About us</span>
            <span class="section6-textNFT">NFTs</span>
            <span class="section6-textNFT">Contact</span>
        </div> 
    </div>
    <div class="section6-area3">

        <div class="section6-colum2">
            <span class="section6-text">Utility</span>
            <span class="section6-textAS">Style guide</span>
            <span class="section6-textNFT">Lincensing</span>
            <span class="section6-textNFT">404</span>
        </div>
    </div>
    <div class="section6-area3">
        <span class="section6-text2">Stay in the loop</span>
        <span class="section6-text3">Suspendisse sem neque, auctor a elementum ut, <br /> varius vel leo. Donec diam arcu, porta et magna at</span>
        <div class="section6-input"><input type="email" placeholder="Your email address" name="" id=""/> <div class="inputbut"><button class="section5-but2">Sign up</button></div></div>
    </div>
</section>
  )
}
