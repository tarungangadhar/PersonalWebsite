import gsap from "gsap";
import Swiper,{Pagination,Navigation} from 'swiper';
import {reviews} from "./data";
const bar=document.querySelector(".loading__bar--inner");
const counter_num=document.querySelector(".loading__counter--number");
let c=0;

let barInterval=setInterval(()=>{
    bar.style.width=c +"%";
    counter_num.innerText= c + "%";
    c++;
    if(c===101){
        clearInterval(barInterval);
        gsap.to(".loading__bar",{
            duration: 5,
            rotate: "90deg",
            left: "1000%",
        });
        gsap.to(".loading__text,.loading__counter",{
            duration: 0.5,
           opacity: 0,
        });
        gsap.to(".loading__box",{
            duration: 1,
           height: "500px",
           borderRadius: "50%",
        });
        gsap.to(".loading__svg",{
            duration: 10,
           opacity: 1,
           rotate:"360deg",
           
        });
        gsap.to(".loading__box",{
            delay: 2,
            border: "none",
        });
        gsap.to(".loading",{
            delay: 2,
            duration: 2,
            zIndex:1,
            background: "transparent",
            opacity: 0.5,
        });
        gsap.to(".loading__svg",{
            delay: 2,
            duration: 100,
            rotate:"360deg",
        });
    }
},5);
//reviews swiper
Swiper.use(Pagination,Navigation);
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
  
    breakpoints:{
        882:{
            slidesPerView:2,
        },
        1400:{
            slidesPerView:3,
        },
        2200:{
            slidesPerView:4,
        },

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
          nextEl:".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  });
const swiper_container=document.querySelector(".swiper-wrapper");
reviews.map((review)=>{
    let template=`<div class="swiper-slide">
    <div class="review">
         <svg 
         width="100%"
         height="100%"
         viewBox="0 0 33 27"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path
         d="M0.999961 20.2398C0.91996 19.0398 0.959962 17.639">
        </path>
        </svg>
        <div class="review__card">
            <div class="review__topborder"></div>
                
            <img src=${review.image}
            alt=""
             class="review_img"/ style="
             margin-right: 10px;> 
                <div class="review__text">
                    ${review.review}
                
                  <br>
                <div class="review__profile">
                    <span>${review.name}</span>
                    <span>${review.position}</span>

                </div>
        </div>
    </div>
  </div> `;
  swiper_container.innerHTML+= template;
});
