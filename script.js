let allow_arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '(', ')', '+', '-', '*', '/'];
let keyarr = ['49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '190']
let button = document.querySelectorAll('.btns');
Array.from(button).forEach((btn) => {
    btn.addEventListener('click', () => {
        for (let a = 0; a <= allow_arr.length; a++) {
            if (btn.innerHTML == allow_arr[a]) {

                input.innerHTML += btn.innerHTML;
            }

        }
        if (btn.innerHTML == 'e') {
            input.innerHTML += '2.7182818';
        }
        if (btn.innerHTML == 'C') {
            input.innerHTML = "";
        }
        if (btn.innerHTML == 'sin') {
            input.innerHTML = Math.sin(input.innerHTML)
        }
        if (btn.innerHTML == 'cos') {
            input.innerHTML = Math.cos(input.innerHTML)
        }
        if (btn.innerHTML == 'tan') {
            input.innerHTML = Math.tan(input.innerHTML)
        }
        if (btn.innerHTML == "=") {
            input.innerHTML = eval(input.innerHTML)
        }
        if (btn.innerHTML == "π") {
            input.innerHTML += "3.141592653589793"
        }

    })
})



