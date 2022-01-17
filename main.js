const mobileNavButton = document.querySelector('#mobileNavToggle')
const mobileNavBlock = document.querySelector('#mobileNavBlock')
const mobileContentBlock = document.querySelector('#mobileContentBlock')
const mobileImageBlock = document.querySelector('#mobileImageBlock')
const imageBlock = document.querySelector('#deskImageBlock')
const mobileNameBlock = document.querySelector('#mobileName')
const nameBlock = document.querySelector('#deskName')
const contentBlock = document.querySelector('#deskContentBlock')

function setNav(status){
    if (status == true){
        mobileNavButton.classList.remove('fa-bars')
        mobileNavButton.classList.add('fa-close')
        mobileNavBlock.style.display = 'initial'
        mobileNameBlock.style.backgroundColor = '#fff'
        mobileNavButton.style.borderBottomLeftRadius = '0'
        mobileNameBlock.style.borderBottomRightRadius = '0'
    }
    else if (status == false){
        mobileNavButton.classList.remove('fa-close')
        mobileNavButton.classList.add('fa-bars')
        mobileNavBlock.style.display = 'none'
        mobileNameBlock.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
        mobileNavButton.style.borderBottomLeftRadius = '25px'
        mobileNameBlock.style.borderBottomRightRadius = '25px'
    }
}

function setBlur(status){
    if (status == true){
        mobileImageBlock.style.filter = 'blur(17px) brightness(75%)'
        imageBlock.style.filter = 'blur(17px) brightness(75%)'
    }
    else if (status == false){
        mobileImageBlock.style.filter = 'blur(0px) brightness(75%)'
        imageBlock.style.filter = 'blur(0) brightness(75%)'
    }
}

function setViewportHeightReal(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function setMobileContentBlock(status){
    if (status == true){
        mobileContentBlock.style.display = 'flex'
    }
    else if (status == false){
        mobileContentBlock.style.display = 'none'
    }
}

function setPage(page){
    if (page == "aboutMe"){
        setNav(false)
        setBlur(true)
        setMobileContentBlock(true)
        contentBlock.innerHTML = '<h1><u>ABOUT ME</u></h1><p>Hi! My name is Anden Wieseler, and I like to make things.</p><p>I make websites and software, and I\'m fluent in HTML, CSS, JavaScript, and Python. I\'m currently also learning Swift.</p><p>I spend my free time outside of work coding, designing, taking photos, playing Minecraft, and listening to my endlessly long Apple Music playlists (my longest is over 700 songs xD).</p><br><p><b>Currently, I\'m working on the following projects:</b></p><p><b>Jailbreak Walkthrough - </b>This is a web-based walkthrough for jailbreaking iPhones and iPads!</p><p><b>Toggle - </b>Toggle is a modern Discord bot framework built using discord.js, and supports the creation of bots using both code and third-party modules!</p><p><b>Freelance Graphic/Web Design - </b>I love to work on web and graphic design projects in my free time!</p><br><br><p style="text-align: center;"><b>Check out my design and photo portfolios as well as my other projects in the navigation pane!</b></p>'
        mobileContentBlock.innerHTML = contentBlock.innerHTML
    }
    if (page == 'github'){
        setNav(false)
        window.location.href = 'http://github.yltboi.me'
    }
    if (page == 'twitter'){
        setNav(false)
        window.location.href = 'http://twitter.yltboi.me'
    }
    if (page == 'zedtekFacebook'){
        setNav(false)
        window.location.href = 'http://fb.me/ZedTekDevel'
    }
    if (page == 'jbWalkthrough'){
        setNav(false)
        window.location.href = '/walkthrough'
    }
    if (page == 'toggle'){
        setNav(false)
        alert("Toggle Bot Framework site coming soon!")
        // window.location.href = 'https://zedtek.yltboi.me/toggle'
    }
    if (page == 'portfolio'){
        setNav(false)
        setBlur(true)
        setMobileContentBlock(true)
        mobileContentBlock.innerHTML = '<h1><u>MY WORK</u></h1>'
        contentBlock.innerHTML = '<h1><u>MY WORK</u></h1>'
    }
    if (page == 'photos'){
        setNav(false)
        setBlur(true)
        setMobileContentBlock(true)
        mobileContentBlock.innerHTML = '<h1><u>MY PHOTOS</u></h1>'
        contentBlock.innerHTML = '<h1><u>MY PHOTOS</u></h1>'
    }
}

mobileNavButton.addEventListener("click", () => {
    if (mobileNavButton.classList.contains('fa-bars')){
        setNav(true)
    }
    else if (mobileNavButton.classList.contains('fa-close')){
        setNav(false)
    }
})

mobileNameBlock.addEventListener("click", () => {
    mobileContentBlock.innerHTML = ''
    setBlur(false)
    setNav(false)
    setMobileContentBlock(false)
})

nameBlock.addEventListener("click", () => {
    contentBlock.innerHTML = ''
    setBlur(false)
    setNav(false)
})

mobileContentBlock.addEventListener("click", () => {
    if (mobileNavBlock.style.display == 'initial'){
        setNav(false)
    }
})

window.addEventListener("resize", () => {
    setViewportHeightReal()
})

if (mobileContentBlock.innerHTML == ''){
    setMobileContentBlock(false)
    setBlur(false)
}

setViewportHeightReal()