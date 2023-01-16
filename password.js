function checkPassword()
{
    var passwordBoxObject= document.getElementById("passwordBox");
    var passwordEntered= passwordBoxObject.value;
    console.log("User entered password: ", passwordEntered);
    var sitePassword= "codeclub";

    if(passwordEntered == sitePassword)
    {
        window.location.assign("members.html");
    }
    else
    {
        document.getElementById("incorrectPassword").style.color= "red";
        document.getElementById("incorrectPassword").innerHTML= " Incorrect Password. Please try again...";
    }
}      