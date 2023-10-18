let container_start = document.querySelector('.start')
let container_main = document.querySelector('.main')
let btn_start = document.querySelector('.btn-start')
let numbers = document.querySelectorAll('input')

container_main.style.display = 'none'

btn_start.addEventListener('click', function(){
    container_start.style.display = 'none'
    container_main.style.display = 'flex'
    numbers = ++numbers.split('')
    for (i=0; i<numbers.lenght(); i+=1){
        answer = numbers[i]
        let ans = document.querySelector('.answer')
        ans.innerHTML = `Ваша цифра`    
    }
})