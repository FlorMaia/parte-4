const btnSigIn = document.getElementById("sign-in"),
      btnSigUp = document.getElementById("sing-up")
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login"),

btnSigIn.addEventListener("click" ,e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")

})

btnSigUp.addEventListener("click" ,e => {
    form.LoginclassList.add("hide");
    formRegister.classList.remove("hide")

})
