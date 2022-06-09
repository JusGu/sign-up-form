const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");
const error = document.getElementById("error");
const clickHandler = () => {
    if (pwd.value !== pwd2.value){
        error.textContent = "*Passwords Must Match";
        pwd.classList.add('error');
        pwd2.classList.add('error');
    } else {
        error.textContent = "";
        pwd.classList.remove('error');
        pwd2.classList.remove('error');
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("pwd").value = "";
        document.getElementById("pwd2").value = "";

    }
}