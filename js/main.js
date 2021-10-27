/* ---------------------  navigation menu -------------------------*/
(() => {
     const hamburgerBtn = document.querySelector(".hamburger-btn");
     const navMenu = document.querySelector(".nav-menu");
     const closeNavMenu = document.querySelector(".close-nav-menu");

     hamburgerBtn.addEventListener("click" , showNavMenu );
     closeNavMenu.addEventListener("click" , hideNavMenu );

     function showNavMenu(){
          navMenu.classList.add("open");
     }

     function hideNavMenu(){
          navMenu.classList.remove("open");
     }

     document.addEventListener("click" , (event) => {
          if(event.target.classList.contains('link-item')){
               if(event.target.hash !== ""){
                    event.preventDefault();
                    const hash = event.target.hash;
                    document.querySelector(".section.active").classList.add("hide");
                    document.querySelector(".section.active").classList.remove("active");
     
                    document.querySelector(hash).classList.add("active");
                    document.querySelector(hash).classList.remove("hide");
                    
                    if(navMenu.classList.contains("open")){
                         event.target.classList.add("outer-shadow");
                         event.target.classList.remove("outer-shadow");
                         hideNavMenu();
                         console.log("list item in nav menu");
                    }
                  
                    
                    
               }
          }
       
     });
})();

/* ********* about section tabs **************** */

(() => {
     tabContainer = document.querySelector('.about-tabs'); 
     aboutSection = document.querySelector('about-section');
     console.log(tabContainer);
     
     tabContainer.addEventListener( "click" , (event) => {
        if ( event.target.classList.contains('tab-items') && 
             !event.target.classList.contains('btn-1')){
                 const target = event.target.getAttribute('data-target');

                 tabContainer.querySelector('.active').classList.remove('btn-1' , 'active');
                 event.target.classList.add('btn-1' , 'active');
                 
                 document.querySelector('.tab-content.active').classList.remove('active');
                 document.querySelector(target).classList.add('active');
                 
                 
                           

             }
     });
})();

/* ********* hide all sections except active **************** */

(() => {
     const sections = document.querySelectorAll(".section");
     sections.forEach((section) => {
          if(!section.classList.contains('active')){
               section.classList.add("hide");
          }
     })
})();


/* --------------- attach event handaler to doc ----------------*/

window.addEventListener("load" , () => {
     document.querySelector(".preloader").classList.add("fade-out");
     setTimeout( () => {
          document.querySelector(".preloader").style.display = "none";
     } , 600 ); 
})