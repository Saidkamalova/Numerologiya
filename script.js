let container_start = document.querySelector('.start')
let container_main = document.querySelector('.main')
let container_choice = document.querySelector('.choice')
let container_compatibility = document.querySelector('.compatibility')
let container_result = document.querySelector('.result')

let btn_num = document.querySelector('.number')
let btn_couple = document.querySelector('.couple')

let btn_together = document.querySelector('.together')
let btn_start = document.querySelector('.begin')
let description = document.querySelector('.description')

/**
 * - querySelectorAll() returns NodeList. 
 * - But with NodeList we can't use any Array functions, such as map(), reduce(), etc.
 * - We can convert it to Array using the spread operator [...].
 */
let numbers = [...document.querySelectorAll('input')];

container_main.style.display = 'none'
container_start.style.display = 'none'
container_compatibility.style.display = 'none'
container_result.style.display = 'none'

btn_num.addEventListener('click', function(){
    container_choice.style.display = 'none'
    container_start.style.display = 'flex'

    btn_start.addEventListener('click', function(){
        container_start.style.display = 'none'
        container_main.style.display = 'flex'

        /**
         * 1. Extract each number from inputs and split:
         * - `<input value="3">, <input value="10">, <input value="1998">`
         * - `[ ['3'], ['1', '0'], ['1', '9', '9', '8'] ]`
         * 2. Convert to a flat array: 
         * - `['3', '1', '0', '1', '9', '9', '8']`
         */
        const singleNumbers = numbers.map(n => n.value.split('')).flat();
        console.log(singleNumbers);

        /**
         * 3. Caculate total sum: `3 + 10 + 1998 = 31`
         **/ 
        let totalSum = singleNumbers.reduce((sum, currentNumber) => sum + parseInt(currentNumber), 0);
        console.log(totalSum);

        /**
         * 4. Calculate final result:
         * - 31 % 10 = 1
         * - int( 31 / 10 ) = 3
         * - 1 + 3 = 4
         */
        while(totalSum >= 10) {
            let tmp = totalSum % 10;
            totalSum = parseInt(totalSum/10);
            totalSum += tmp;
        }

        const ans = document.querySelector('.answer')
        ans.innerHTML = `Ваша цифра: ${totalSum}`;

        if (totalSum == 1){
            description.innerHTML = 'Такие люди имеют «наполеоновские» планы, ставят перед собой задачи одну за другой и легко их достигают, благодаря своему упорству, настойчивости и, конечно же, фортуне. Они умеют зарабатывать деньги и чаще всего обладают материальным благополучием.'
        }
        if (totalSum == 2){
            description.innerHTML = 'Люди с Числом судьбы 2 самые добродушные и доброжелательные из всех. Они всю жизнь будут выполнять роль миротворцев, давая советы, выступая посредниками в перемириях, помогая другим в решении семейных вопросов и психоэмоциональных проблем. Хотя сами со своими эмоциями будут справляться далеко не всегда.'
        }
        if (totalSum == 3){
            description.innerHTML = 'Это порядочные люди с обостренным чувством справедливости. Пацифисты. Избегают вступать в конфликты и противостояния, стремятся к миру в отношениях любой ценой. Люди с Числом судьбы 3 очень искусно владеют речью, красиво сочиняют, говорят и пишут, увлекаются творческой деятельностью.'
        }
        if (totalSum == 4){
            description.innerHTML = 'Они самостоятельные и очень организованные. Любят во всем порядок и других призывают его создавать и поддерживать. Практичны и дальновидны, но часто мыслят негативно и готовятся к худшему.'
        }
        if (totalSum == 5){
            description.innerHTML = 'Они натуры увлекающие и многосторонне развитые. Сильны во всем, что связано с речью, коммуникациями и общением. Они любят знакомиться с новыми людьми, завязывать контакты и много общаться. Благодаря этому их деятельность часто связана с журналистикой, средствами связи, рекламой, торговлей и работой с клиентами.'
        }
        if (totalSum == 6){
            description.innerHTML = 'Число 6 несет в себе энергию любви, заботы, воспитания и ответственности, что делает его сильным числом в нумерологии.'
        }
        if (totalSum == 7){
            description.innerHTML = 'Они обладают высокой интуицией и увлекаются эзотерическими учениями. Стремятся постичь смысл жизни, найти ответы на сложные и вечные вопросы. Их привлекает все тайное, мистическое, необъяснимое и непознанное. Они видят вещие сны, слышат голоса и им доступно то, что скрыто от других.'
        }
        if (totalSum == 8){
            description.innerHTML = 'Люди с Числом судьбы 8 — мудрые правители и прекрасные организаторы. Они имеют здоровые амбиции и не злоупотребляют своей властью. С готовностью берут на себя ответственность на множество людей в различных жизненных сферах. Возглавляют организации, занимаются политикой, могут стать известными и уважаемыми личностями.'
        }
        if (totalSum == 9){
            description.innerHTML = 'Люди с Числом судьбы 9 проживут очень активную, динамичную и насыщенную событиями жизнь. С ними все время что-то происходит, и они оказываются во что-то вовлеченными. Обладают большой силой, но не всегда знают, как ее правильно использовать.'
        }
    })

})

btn_couple.addEventListener('click', function(){
    container_choice.style.display = 'none'
    container_compatibility.style.display = 'flex'

    btn_together.addEventListener('click', function(){
        container_compatibility.style.display = 'none'
        container_result.style.display = 'flex'

        let n1 = document.querySelector('.num1')
        let n2 = document.querySelector('.num2')
        if (n1 == 1 && n2 == 1){
            description.innerHTML = 'Какой-то текст про совместимость'
        }
    })
})