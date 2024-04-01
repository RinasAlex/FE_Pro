let spanValue = document.querySelector('.countValue');
let buttons = document.querySelectorAll('.btn');
let count = 0;

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        const classes = event.currentTarget.classList;
       
        if (classes.contains('decrease')) {
            count--;
        } else if (classes.contains('increase')) {
            count++;
        } else { 
            count = 0; 
        }
        
        if (count > 0) {
        spanValue.style.color = "red";    
        }
        if(count < 0){
            spanValue.style.color = "blue";
        }
        if(count == 0){
            spanValue.style.color = "rgb(0, 0, 0, 0.7)";
        }

        spanValue.textContent = count;
    })
})