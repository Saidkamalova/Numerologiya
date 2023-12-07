let container_start = document.querySelector('.start')
let container_main = document.querySelector('.main')
let container_choice = document.querySelector('.choice')
let container_compatibility = document.querySelector('.compatibility')
let container_result = document.querySelector('.result')
let container_language = document.querySelector('.language')

let btn_russian = document.querySelector('.russian')
let btn_ozb = document.querySelector('.ozb')

let btn_num = document.querySelector('.number')
let btn_couple = document.querySelector('.couple')

let btn_back = document.querySelector('.back')
let btn_back2 = document.querySelector('.back2')
let btn_together = document.querySelector('.together')
let btn_start = document.querySelector('.begin')
let description = document.querySelector('.description')
let description2 = document.querySelector('.description2')

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
container_choice.style.display = 'none'

btn_russian.addEventListener('click', function(){
    container_language.style.display = 'none'
    container_choice.style.display = 'flex'

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

        btn_back.addEventListener('click', function(){
            container_main.style.display = 'none'
            container_choice.style.display = 'flex'
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
                description2.innerHTML = 'Какой-то текст про совместимость'
            }
        })

        btn_back2.addEventListener('click', function(){
            container_result.style.display = 'none'
            container_choice.style.display = 'flex'
        })
    })
})

btn_ozb.addEventListener('click', function(){
    btn_num.innerHTML = 'Raqamni bilish'
    btn_couple.innerHTML = 'Moslikni bilish'
    btn_couple.style.fontSize = '35px'
    let h1 = document.querySelector('h1')
    h1.innerHTML = "Tug'ilgan kuningizni kiriting"
    btn_start.innerHTML = 'Raqamni bilish'
    let h2 = container_compatibility.querySelector('h1')
    h2.innerHTML = 'Ikkita raqam kiriting'
    btn_together.innerHTML = 'Moslikni bilish'
    btn_together.style.fontSize = '35px'
    btn_back.innerHTML = 'Orqaga'
    btn_back2.innerHTML = 'Orqaga'

    container_language.style.display = 'none'
    container_choice.style.display = 'flex'

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
            ans.innerHTML = `Sizning raqamingiz: ${totalSum}`;

            if (totalSum == 1){
                description.innerHTML = 'Бундай одамларда «Наполеон» планлари бор, улар оркали яна яна вазифаларни ўрунг-чурун таъсирлар, уларни асанлик билан эришади, уларнинг сабр, қаттиқлик ва яқиндошлиги билан амалга оширилади. Улар пул ишлашни билади ва кўп тарада материал маънавий баҳоланишга эга бўлади.'
            }
            if (totalSum == 2){
                description.innerHTML = 'Улар бутун умрини сухбатгўйлар ролини бажариш, совет бериш, тинчликларда медиатор бўлиш, боғлиқ масалалар ва руҳий-эмоционал муаммоларда бошқаларга ёрдам бериш ҳамда муҳталиф масалаларни ҳал қилишда камтарадиган бўлади. Хотамки, улар озларини бошқалар билан бўлишда қалъа билан бошқармаслик қилмоқда.'
            }
            if (totalSum == 3){
                description.innerHTML = 'Бу хақиқатдан ҳонимли одамлар бўлиб, адолатчилик чуқур муҳофаза билан ташаббуска эга. Пацифистлар. Конфликтларга ва қарши кўзғолишларга қўшилмайди, универсал муносабатлар билан таҳаммул этиб, муносабатларда сулҳга йўналшишган. Жизненное число 3 га эга бўлган одамлар очиқ мазмунлик билан сўзлашда очиқ махоратга эга, кўринади, сўз ёзишда яхши ишлайди ва санъатга ёққанлик билан шугулланади.'
            }
            if (totalSum == 4){
                description.innerHTML = 'Улар мустақил ва жуда тартибли инсонлар. Ҳамма жойда тартибни ёхуд бошқаларга қўллашни кўраса, тартибни яратиш ва қўллашни сўрайдилар. Амалий ва дидактик, лекин кўп марта ҳамнегатив фикрланадилар ва яхши кўринадилар.'
            }
            if (totalSum == 5){
                description.innerHTML = 'Улар энгиловчи ва кўп жанрли ривожланган табиатга эга. Сўзлаш, мулоқот ва алоқа билан боғлиқ ҳамма ишларда кучли. Улар янги одамлар билан танишишни, боғланишлар ўрнатишни ва кўп бўлишни севишадилар. Бу сабабли, уларнинг фаолияти часто журналистика, муассасалар, реклама, савдо ва мижозлар билан ишлаш билан боғлиқ бўлади.'
            }
            if (totalSum == 6){
                description.innerHTML = '6-сон эшитиш, етказиш, тарбия ва жавобгарлилик энергиясини олиб боради, бундай қилиб у қидириб туриш нумерологияда кучли сон бўлиб туради.'
            }
            if (totalSum == 7){
                description.innerHTML = 'Уларнинг ёқуви ёқутланган интуицияга эга ва эзотерика илмлари билан шугулланадилар. Улар ҳаётнинг маънисини ташқарилаш, кўзгу ва давра соғлиған саволларга жавоб топишни истайдилар. Уларни қизиқ қилади ҳамма рамзий, мистика, тушушмаёган ва нуқсони етарли воситалар. Улар олаётган таъриф, овозларни эшитиш ва бошқаларга йопиқ бўлган ниманида билади.'
            }
            if (totalSum == 8){
                description.innerHTML = '8-га эга одамлар — ақлли ҳукмрон ва замонавий ташкилотчилар. Уларда саҳиҳ амалиётлар бор ва улар ҳуқуқи билан зиёнламайдилар. Шунингдек, улар кўп турли ҳайдовчи сфераларда бир нечта одамга масъулият олмоқда қатъий ишонадилар. Ташкилотларнинг раҳбарлигини олиб, сиёсат билан шугулланадилар, танинган ва муҳтарам шахслар бўлишмоқ мумкин.'
            }
            if (totalSum == 9){
                description.innerHTML = '9-га эга одамлар жадал, динамик ва событиялар билан тўлқин жўнайдиган, бекор, насибли ҳайдовчи яшайдиган. Улар билан ҳамён ёритилган ва улар қandайси-қandайси ҳолатларга олиб келинадиган. Улар катта қувватга эга, лекин уни ҳамеша правильнo қandай қўллаб-қувватлашни билмайдилар.'
            }
        })

        btn_back.addEventListener('click', function(){
            container_main.style.display = 'none'
            container_choice.style.display = 'flex'
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
                description2.innerHTML = 'Какой-то текст про совместимость'
            }
        })
        
        btn_back2.addEventListener('click', function(){
            container_result.style.display = 'none'
            container_choice.style.display = 'flex'
        })
    })
})