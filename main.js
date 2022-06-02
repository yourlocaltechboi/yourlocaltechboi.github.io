const mobileNavButton = document.querySelector('#mobileNavToggle')
const mobileNavBlock = document.querySelector('#mobileNavBlock')
const mobileContentBlock = document.querySelector('#mobileContentBlock')
const mobileImageBlock = document.querySelector('#mobileImageBlock')
const imageBlock = document.querySelector('#deskImageBlock')
const mobileNameBlock = document.querySelector('#mobileName')
const nameBlock = document.querySelector('#deskName')
const contentBlock = document.querySelector('#deskContentBlock')
const randomImages = ['assets/img/1.jpg', 'assets/img/2.jpg', 'assets/img/3.jpg', 'assets/img/4.jpg', 'assets/img/5.jpg', 'assets/img/6.jpg']

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
        contentBlock.innerHTML = `<div parsefile="subpages/${page}-content.html"></div>`
        mobileContentBlock.innerHTML = contentBlock.innerHTML
        parseHTML()
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
    if (page == 'toggle'){
        setNav(false)
        window.location.href = 'https://mc.yltboi.me'
    }
    if (page == 'portfolio'){
        setNav(false)
        setBlur(true)
        setMobileContentBlock(true)
        mobileContentBlock.innerHTML = '<h1><u>MY WORK</u></h1>'
        contentBlock.innerHTML = '<h1><u>MY WORK</u></h1>'
        contentBlock.innerHTML = `<div parsefile="subpages/${page}-content.html"></div>`
        mobileContentBlock.innerHTML = contentBlock.innerHTML
        parseHTML()
    }
    if (page == 'photos'){
        setNav(false)
        setBlur(true)
        setMobileContentBlock(true)
        mobileContentBlock.innerHTML = '<h1><u>MY PHOTOS</u></h1>'
        contentBlock.innerHTML = '<h1><u>MY PHOTOS</u></h1>'
        contentBlock.innerHTML = `<div parsefile="subpages/${page}-content.html"></div>`
        mobileContentBlock.innerHTML = contentBlock.innerHTML
        parseHTML()
    }
}

function setWallpaper(){
    imageBlock.style.background = `url('${randomImages[Math.floor(Math.random() * 6)]}') center / cover no-repeat, rgb(0, 0, 0, 1)`
    mobileImageBlock.style.background = `url('${randomImages[Math.floor(Math.random() * 6)]}') center / cover no-repeat, rgb(0, 0, 0, 1)`
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

window.addEventListener("rotate", () => {
    setViewportHeightReal()
})

if (mobileContentBlock.innerHTML == ''){
    setMobileContentBlock(false)
    setBlur(false)
}

setViewportHeightReal()

document.onload(setWallpaper());