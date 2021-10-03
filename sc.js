function valid()
{
    var name=document.forms["regform"]["name"];
    var add=document.forms["regform"]["address"];
    var email=document.forms["regform"]["email"];
    var sub=document.forms["regform"]["subject"];
    var p1=document.forms["regform"]["p1"];
    var p2=document.forms["regform"]["p2"];
    if(name.value="")
    {
        window.alert("Please enter your name");
        name.focus();
        return false;
    }
    if(add.value="")
    {
        window.alert("Please enter your address");
        add.focus();
        return false;
    }
    if(sub.selectedIndex<1)
    {
        window.alert("Please select a value");
        sub.focus();
        return false;
    }
    if(add.length<10)
    {
        window.alert("Address must contain min 10 digits");
        add.focus();
        return false;
    }
    if(p1==p2)
    {
        return true;
    }
    else
    {
        window.alert("Password is no same");
        return false;
    }
    var atp=email.indexOf("@");
    var dot=email.lastIndexOf(".");
    if(atp<1)
    {
        window.alert("Email no valid");
        return false;
    }
}