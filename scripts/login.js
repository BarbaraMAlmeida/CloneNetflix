let password_visible = document.querySelector("i#password_visible")
let input_pass = document.querySelector("input#senha")
console.log(input_pass)

let password_unvisible = document.querySelector("i#password_unvisible")
password_unvisible.addEventListener("click" , () =>{
    password_unvisible.style.display = 'none'
    password_visible.style.display = 'block'
    input_pass.setAttribute('type', 'text')
})


password_visible.addEventListener("click", () =>{
    password_visible.style.display = 'none'
    password_unvisible.style.display = 'block'
    input_pass.setAttribute('type', 'password')
    
})


