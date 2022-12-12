import React from 'react'
import Chel from '../images/chel.png'
import Starik from '../images/starik.png'

export default function Section5() {
  return (
    <section class="section-5">
    <div class="section5-area1">
        <button class="section5-button1">Jack</button>
        <button>Suni</button>
        <button>Colin</button>
    </div>
    
    <div class="section5-area2">
        <div class="section5-img"><img src= {Chel} class="section5-img1" alt="chel"/> </div>
        <div class="section5-span">
            <span class="section5-spanDig">Digital Artist</span>
            <span class="section5-span1">Pellentesque blandit <br />in quam rhoncus</span>
            <span class="section5-spanSus">Suspendisse ante mauris, volutpat congue sem ac, <br /> ultrices tempor lorem. Nullam eget vehicula tellus, <br /> ac consectetur urna. Mauris tincidunt, libero id <br /> ultrices tincidunt, mi leo pharetra dolor, sed luctus <br /> dui ipsum et augue. Integer non quam feugiat, <br /> porttitor libero a, tempor neque. Nulla ac orci <br /> mauris. Quisque nisi nisl, rutrum ac diam et, semper <br /> commodo quam</span>
        </div>
    </div>
    <div class="section5-area3">
        <img src= {Starik} class="section5-img2" alt="asd"/>
        <div class="section5-span">
            <span class="section5-span3">our work</span>
            <span class="section5-span4">“Um… what’s going on <br /> here?”</span>
            <span class="section5-spanNul">Nulla facilisi. Praesent molestie diam eu enim aliquet <br /> pellentesque. Vestibulum consectetur vestibulum tristique. Sed <br /> purus neque, maximus fermentum bibendum et, porta in sapien.</span>
            <div class="section5-area4"><button class="section5-but">About Codx</button></div>
        </div>
        
    </div>
</section>
  )
}
