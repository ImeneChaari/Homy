function validation() {
    let name, mail, phone, subject, message;
  
    name = document.getElementById("name").value;
    mail = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;

    const regMail = /^(.+(@)(gmail|yahoo|hotmail|outlook)\.(com|tn|fr|net|org))$/;
    const regPhone= /\d{8}/;

 
    if (name=="" || mail=="" || phone=="" || subject=="" || message=="")  alert("Please fill in all the fields!");
    else {
        if (!regMail.test(mail) || !regPhone.test(phone)) alert("Invalid input");
        else alert("Thank you! Your submission has been recieved.");
    }

  }





