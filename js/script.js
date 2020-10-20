function userForm() {





    var myForm = document.mainform;
    console.log(myForm);


    var firstname = myForm.fname.value;
    var lastname = myForm.lname.value;
    var email = myForm.emailAddress.value;
    var address = myForm.address.value;
    var addressC = myForm.city.value;
    var addressP = myForm.province.value;


    document.getElementById("fullName").innerHTML = firstname + " " + lastname;
    document.getElementById("email-address").innerHTML = email;
    document.getElementById("address-in").innerHTML = address + " " + addressC + " " + addressP;


    if (myForm.membership.value == "member1") {
        document.getElementById("memberships").innerHTML = "Premium Membership";

    } else if (myForm.membership.value == "member2") {
        document.getElementById("memberships").innerHTML = "Standard Membership";
    } else {
        document.getElementById("memberships").innerHTML = "Basic Membership";
    }



}

//Excels section
function myExcelFuns() {
    var numberStr = document.getElementById("numbers").value;



    numberStr = numberStr.trim();
    console.log(numberStr);

    var numberArr = numberStr.split(" ");

    console.log(numberArr);




    var result;
    if (document.getElementById("arrSum").checked) {
        result = 0;
        for (var i = 0; i < numberArr.length; i++)
            if (numberArr[i] != "") {
                result = result + parseFloat(numberArr[i]);
            }
    } else if (document.getElementById("arrAvg").checked) {
        result = 0;
        for (var i = 0; i < numberArr.length; i++)
            if (numberArr[i] != "") {
                result = result += numberArr[i] / parseFloat(numberArr[i]);
            }
    } else if (document.getElementById("arrMax").checked) {
        result = 0;
        for (var i = 0; i < numberArr.length; i++)
            if (numberArr[i] != "") {
                result = Math.max(...numberArr);
            }
    } else if (document.getElementById("arrMin").checked) {
        result = 0;
        for (var i = 0; i < numberArr.length; i++)
            if (numberArr[i] != "") {
                result = Math.min(...numberArr);
            }
    } else {
        result = 0;
    }


    document.getElementById("result").innerHTML = result;

    return false;

    /*
    1. Fixed the code that puts the result into the HTML
    2. Fixed cpde so when splitted, array converts into a number
    3. Untilized Math.max(), Math.min() and spread syntax (...).
    4. Reworked the calculation and assigned the values to each variable
    */

};