let spotifyLink = "https://open.spotify.com/show/21zcp2o3Iqbw6lHIqBI4m2";
let appleMusicLink = "https://podcasts.apple.com/us/podcast/challah-talk/id1488064256";
let podcastBanner = document.querySelector("#past-podcasts");
let dropdownMenu = document.querySelector("#dropdown-menu");
let dropdownBanner = document.querySelector("#past-podcasts");
let dropdownHolder = document.querySelector("#dropdown-holder");
let a = 0;
podcastBanner.addEventListener('click', e => {
    let dropdownWidth = window.getComputedStyle(dropdownHolder).width;
    dropdownWidth = parseFloat(dropdownWidth.split(0, -2));
    console.log(dropdownWidth);
    let shiftLeft = dropdownWidth/8;
    dropdownMenu.style.left = `${shiftLeft}px`;
    dropdownMenu.classList.toggle("show");
})