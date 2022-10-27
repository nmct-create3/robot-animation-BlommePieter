btnFast = document.querySelector('.js-fast');
btnSlow = document.querySelector('.js-slow');
btnNormal = document.querySelector('.js-normal');
btnPause = document.querySelector('.js-pause');
playicon = document.querySelector('.js-play-icon');
pauseicon = document.querySelector('.js-pause-icon');



let tl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
});

tl.set('#Shadow', {
    transformOrigin: '50% 100%',
})
    .fromTo(
        '#Robot',
        {
            y: 2.5,
        },
        {
            y: -2.5,
        }
    )
    .to(
        '#Shadow',
        {
            scale: 0.75,
        },
        '<'
    );


btnFast.addEventListener('click', () => {
    tl.timeScale(2);
});
btnNormal.addEventListener('click', () => {
    tl.timeScale(1);
});
btnSlow.addEventListener('click', () => {
    tl.timeScale(0.5);
});
btnPause.addEventListener('click', () => {
    tl.paused(!tl.paused());

    if (tl.paused()) {
        pauseicon.style.display = 'none';
        playicon.style.display = 'block';
    } else {
        pauseicon.style.display = 'block';
        playicon.style.display = 'none';
    }
});

