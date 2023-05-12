import { gsap } from "gsap";



export const ScrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline()

    tl.to(position, {
        x: -3.38,
        y: -10.74,
        z: -5.93,

        scrollTrigger : {
            trigger: '.sound-section', // element that trigers the animation
            start: 'top bottom' , // is the top and bottom of the element that trigers the animation,
            end: 'top top', // fin de animacion cundo el top del componente activador y el top del componente primero se juntan
            scrub: 2, // transition between animations adds some delay
            immediateRender: false, // for to heavy animations for the browser
        },
        onUpdate
    })

    tl.to(target, {
        x: 1.52,
        y: 0.77,
        z: -1.08,

        scrollTrigger : {
            trigger: '.sound-section', // element that trigers the animation
            start: 'top bottom' , // is the top and bottom of the element that trigers the animation,
            end: 'top top', // fin de animacion cundo el top del componente activador y el top del componente primero se juntan
            scrub: 2, // transition between animations adds some delay
            immediateRender: false, // for to heavy animations for the browser
        },
        
    })

    // while the animation is ongoing the opaciti will turn 0 to not disturb the animation (only for iphone picture)
    .to('.jumbotron-section', {
        opacity: 0,

        scrollTrigger : {
            trigger: '.sound-section', // element that trigers the animation
            start: 'top bottom' , // is the top and bottom of the element that trigers the animation,
            end: 'top top', // fin de animacion cundo el top del componente activador y el top del componente primero se juntan
            scrub: 2, // transition between animations adds some delay
            immediateRender: false, // for to heavy animations for the browser
        },
        
    })

    // turns the second section from opaciti 0 to 1 while animation is ongoing
    .to('.sound-section-content', {
        opacity: 1,

        scrollTrigger : {
            trigger: '.sound-section', // element that trigers the animation
            start: 'top bottom' , // is the top and bottom of the element that trigers the animation,
            end: 'top top', // fin de animacion cundo el top del componente activador y el top del componente primero se juntan
            scrub: 2, // transition between animations adds some delay
            immediateRender: false, // for to heavy animations for the browser
        },
        
    })


    // last section animation on scroll

    .to(position, {
        x: 1.56,
        y: 5.0,
        z: 0.011,

        scrollTrigger : {
            trigger: '.display-section', // element that trigers the animation
            start: 'top bottom' , // is the top and bottom of the element that trigers the animation,
            end: 'top top', // fin de animacion cundo el top del componente activador y el top del componente primero se juntan
            scrub: 2, // transition between animations adds some delay
            immediateRender: false, // for to heavy animations for the browser
        },
        onUpdate
    })

    tl.to(target, {
        x: -0.55,
        y: 0.32,
        z: 0.0,

        scrollTrigger : {
            trigger: '.display-section', // element that trigers the animation
            start: 'top bottom' , // is the top and bottom of the element that trigers the animation,
            end: 'top top', // fin de animacion cundo el top del componente activador y el top del componente primero se juntan
            scrub: 2, // transition between animations adds some delay
            immediateRender: false, // for to heavy animations for the browser
        },
        
    })

    // turns the second section from opaciti 0 to 1 while animation is ongoing
    .to('.display-section', {
        opacity: 1,

        scrollTrigger : {
            trigger: '.display-section', // element that trigers the animation
            start: 'top bottom' , // is the top and bottom of the element that trigers the animation,
            end: 'top top', // fin de animacion cundo el top del componente activador y el top del componente primero se juntan
            scrub: 2, // transition between animations adds some delay
            immediateRender: false, // for to heavy animations for the browser
        },
        
    })
}