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



    numberStr.trim();
    console.log(numberStr);

    var numberArr = numberStr.split(" ");


    console.log(numberArr);

    var total = 0;
    for (var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] != "") {
            total += parseFloat(numberArr[i]);
        }
    }

    if (document.getElementById("arrSum").checked) {
        total + numberArr[i];
    } else if (document.getElementById("arrAvg").checked) {
        total /= numberArr[i];
    } else if (document.getElementById("arrMax").checked) {
        total *= Math.max([...i]);
    } else if (document.getElementById("arrMin").checked) {
        total -= Math.min([...i]);
    }

    document.getElementById("result").innerHTML = total;

    return false;
};