const main_img= document.getElementById('main_img');
const main_txt= document.getElementById('main_txt');

var ease_="elastic.out(1,0.3)"

gsap.fromTo(
    main_img,
    {
        x: -500,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration: 2.5, 
        delay:0.5,
        ease: "power4.out"
    }
);

const mainImgDuration = 2.5;
const mainTxtDelay = mainImgDuration / 2;

gsap.fromTo(
    main_txt,
    {
        x: -500,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration: 1.25, 
        delay: mainTxtDelay, 
        ease: ease_
    }
);


