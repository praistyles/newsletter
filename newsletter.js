const email = document.querySelector('.form-js');
const subscribeInput = document.getElementById('email');
const subscribeInputValue = subscribeInput.value.trim();
const errorMessage = document.getElementById('error-msg');





email.addEventListener("submit", (e) => {
    //e.preventDefault();

    validateForm()

})

//document.location='subscription.html'

function validateForm() {

    if (subscribeInputValue === '') {

      
        subscribeInput.style.border = "1px solid red";
        subscribeInput.classList.add('error-input');
    
        errorMessage.innerHTML = "Valid email required";

    } 



    
}



