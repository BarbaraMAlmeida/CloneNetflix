//pesquisa
let search = document.querySelector('i#search')
let inputSearch = document.createElement('input')
let divSearch = document.querySelector('.searchMovies')

search.addEventListener("click", () => {
    divSearch.style.transition = "3s"
    inputSearch.placeholder = 'Títulos, séries e filmes'
    divSearch.appendChild(inputSearch)
    divSearch.style.border = "1px solid white"   
})


//notifications
let notifications = document.querySelector("#header-right i#bell")
let notificationsBanner = document.querySelector('section#banner-Notifications')
notifications.addEventListener("click",() => {
    notificationsBanner.classList.toggle('open')
})


//profiles
let profileIcon = document.querySelector('#profile i')
let profile = document.querySelector('#profile img')
let bannerProfiles = document.querySelector('#bannerProfiles')


profile.addEventListener('mouseover', () => {
    profileIcon.style.transition = ".4s"
    profileIcon.style.transform = "rotateX(180deg)"

    bannerProfiles.classList.add('open')
    //ABRIR MODAL 
})

profile.addEventListener('mouseout', () => {
    profileIcon.style.transition = ".2s"
    profileIcon.style.transform = "rotateX(-360deg)"
    bannerProfiles.classList.remove('open')
    //fechar MODAL 
})


//Movies Description 

let movieContainer = document.querySelector("#movieD")
console.log(movieContainer)
let description = document.querySelector(".description")

movieContainer.addEventListener("mouseover", () => {
    description.classList.add("open")
})

movieContainer.addEventListener("mouseout", () => {
    description.classList.remove("open")
})

