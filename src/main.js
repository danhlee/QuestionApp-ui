function loginSignupSwap() {
    var login = document.getElementById("login-box");
    var signup = document.getElementById("signup-box")
    
    if (signup.style.display === "none") {
        login.style.display = "none";
        signup.style.display = "block";
    } else {
      login.style.display = "block";
      signup.style.display = "none";
    }
}