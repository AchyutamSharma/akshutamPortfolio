let netflix = document.querySelector(".Netflix-card");
let rockGame = document.querySelector(".Rock-Paper-card");
let foodBox = document.querySelector(".Food-Box-card");
let CurrencyExhanger = document.querySelector(".Currency-card");
let otp = document.querySelector("#otps");

let dots = document.querySelector("#open-Mobile-nav");
let openNav = document.querySelector(".mobile-nav "); //open-nav
let crossBtn = document.querySelector(".cross");

let project = document.querySelector("#li-project");
let about = document.getElementById("li-about");
let contact = document.getElementById("li-contact");
let scrollUp = document.querySelector(".scrollUp");


let hamburger = ()=>{
    openNav.classList.toggle("hide");
    document.querySelector(".hamburger").classList.toggle("rotate");

}

// open and close tab 
// let Navopen = ()=>{
    //     hamburger();
    // };
    
    let Navclose = ()=>{
        openNav.classList.add("hide");
    };
    
    //  let closeMobNav = crossBtn.addEventListener("click",()=>{
        //     Navclose();
        // });
        
        
dots.addEventListener("click",()=>{
    hamburger();       
});

project.addEventListener("click",()=>{
    hamburger();
    document.querySelector(".tech").scrollIntoView();
});

about.addEventListener("click",()=>{
     document.querySelector(".about-container").scrollIntoView();
});

contact.addEventListener("click",()=>{
    document.querySelector(".contact-me").scrollIntoView();
});




            // Projects link area

netflix.addEventListener("click",()=>{
    window.open("Netflix-page.html",'_blank');
});

rockGame.addEventListener("click",()=>{
    window.open("Rock-Paper-Adv.html",'_blank');
});

foodBox.addEventListener("click",()=>{
    window.open("Food-Box.html",'_blank');
});

CurrencyExhanger.addEventListener("click",()=>{
    window.open("CurrExchange.html",'_blank');
});

otp.addEventListener("click",()=>{
    window.open("Otp.html",'_blank');
});

        // scroll up 
scrollUp.addEventListener("click",()=>{
    document.querySelector("body").scrollIntoView();
});

