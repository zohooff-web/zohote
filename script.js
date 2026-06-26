/* ======================================
   ZOHO RECRUITMENT PORTAL
   SCRIPT.JS - PART 1
====================================== */

const form = document.getElementById("applicationForm");

const successBox = document.getElementById("successBox");

const applicationID = document.getElementById("applicationID");

form.addEventListener("submit", function(e){

e.preventDefault();

/* INPUTS */

const name = document.getElementById("name").value.trim();

const age = document.getElementById("age").value.trim();

const father = document.getElementById("father").value.trim();

const email = document.getElementById("email").value.trim();

const phone = document.getElementById("phone").value.trim();

const address = document.getElementById("address").value.trim();

const resume = document.getElementById("resume").files[0];

const agree = document.getElementById("agree").checked;

/* EMPTY CHECK */

if(
name==="" ||
age==="" ||
father==="" ||
email==="" ||
phone==="" ||
address==="")
{

alert("Please fill all the required fields.");

return;

}

/* NAME */

if(name.length<3){

alert("Enter a valid full name.");

return;

}

/* AGE */

if(isNaN(age)){

alert("Age must be a number.");

return;

}

if(age<18 || age>60){

alert("Age should be between 18 and 60.");

return;

}

/* EMAIL */

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailPattern.test(email)){

alert("Invalid Email Address.");

return;

}

/* PHONE */

const phonePattern=/^[6-9]\d{9}$/;

if(!phonePattern.test(phone)){

alert("Enter valid 10 digit mobile number.");

return;

}

/* ADDRESS */

if(address.length<10){

alert("Enter complete address.");

return;

}

/* RESUME */

if(!resume){

alert("Please upload your resume.");

return;

}

const extension=resume.name.split(".").pop().toLowerCase();

if(extension!=="pdf"){

alert("Only PDF Resume is accepted.");

return;

}

/* DECLARATION */

if(!agree){

alert("Please accept the declaration.");

return;

}

/* PART 2 CONTINUES HERE */



/* ======================================
   SCRIPT.JS - PART 2
====================================== */

/* Generate Random Application ID */

const randomNumber = Math.floor(100000 + Math.random() * 900000);

const generatedID = "ZH2026-" + randomNumber;

/* Show Application ID */

applicationID.innerHTML = generatedID;

/* Hide Form */

document.querySelector(".container").style.display = "none";

/* Show Success Popup */

successBox.style.display = "flex";

/* Disable Page Scroll */

document.body.style.overflow = "hidden";

/* Close Success Box Button */

const submitAgainBtn = successBox.querySelector("button");

submitAgainBtn.addEventListener("click", function () {

    document.body.style.overflow = "auto";

    location.reload();

});

});
