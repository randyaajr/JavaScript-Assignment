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
    var inputDataStr = document.getElementById("numbers").value;



    inputDataStr.trim();
    console.log(inputDataStr);

    var inputDataArray = inputDataStr.split(" ");


    console.log(inputDataArray);

    var total = 0;
    for (var i = 0; i < inputDataArray.length; i++) {
        if (inputDataArray[i] != "") {
            total += parseFloat(inputDataArray[i]);
        }
    }

    if (document.getElementById("arrSum").checked) {
        total + inputDataArray[i];
    } else if (document.getElementById("arrAvg").checked) {
        total /= inputDataArray[i];
    } else if (document.getElementById("arrMax").checked) {
        total *= Math.max([...i]);
    } else if (document.getElementById("arrMin").checked) {
        total -= Math.min([...i]);
    }

    document.getElementById("result").innerHTML = total;

    return false;
};

function newFunction() {
    return [1, 3, 5, 6, 2, 4, 7, 8, 9];
}