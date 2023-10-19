let container_start = document.querySelector('.start')
let container_main = document.querySelector('.main')
let btn_start = document.querySelector('.btn-start')

/**
 * - querySelectorAll() returns NodeList. 
 * - But with NodeList we can't use any Array functions, such as map(), reduce(), etc.
 * - We can convert it to Array using the spread operator [...].
 */
let numbers = [...document.querySelectorAll('input')];

container_main.style.display = 'none'

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
})