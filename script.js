let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
// above variable stores the buttons as nodeList

// Converting the NodeList(buttons) into array
let buttonsArray = Array.from(buttons);
let str = '';

//for Each  separates the array values into different variables

//  buttonsArray.forEach(function(btn))  ---> Function

// Arrow function
buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {

        if (e.target.innerHTML == 'DEL') {
            str = str.substring(0, str.length - 1);
            display.value = str;
        } else if (e.target.innerHTML == 'AC') {
            str = '';
            display.value = str;

        } else if (e.target.innerHTML == '=') {
            str = eval(str);
            display.value = str;
        } else {

            str += e.target.innerHTML;
            display.value = str;
        }
    })
})

console.log(buttons)
