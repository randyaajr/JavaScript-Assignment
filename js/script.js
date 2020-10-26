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

    var numberArr = numberStr.split(" ");
    var result = 0;

    if (numberArr != "") {
        if (document.getElementById("arrSum").checked) {

            for (var i = 0; i < numberArr.length; i++)
                if (numberArr[i] != "") {
                    result = result + parseFloat(numberArr[i]);
                }

        } else if (document.getElementById("arrAvg").checked) {

            var count = 0;
            for (var i = 0; i < numberArr.length; i++)
                if (numberArr[i] != "") {
                    result = result + parseFloat(numberArr[i]);
                    count++;
                }
            result = result / count;

        } else if (document.getElementById("arrMax").checked) {

            result = Math.max(...numberArr);

        } else {


            numberArr.sort();
            result = Math.min(...numberArr);
            // result = Math.min(...numberArr);

        }

        document.getElementById("result").innerHTML = result;

    } else {
        alert("Please enter a numeric value with spaces to proceed.");
    }
}

//Popup

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}