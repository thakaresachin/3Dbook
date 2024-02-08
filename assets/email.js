function sendMail(){
    let parms={
        name :document.getElementById("fname").value,
        email :document.getElementById("lname").value,
        subject:document.getElementById("subject").value
       
    }
    emailjs.send("service_m2ri3zj","template_ky9g7li",parms).then(alert("email send!!"))

    
}

const form = document.getElementById('contactform');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.fname.value;
  const email = form.elements.lname.value;
  const message = form.elements.subject.value;

  if (name && email && message) {
    contactform.innerHTML='please enter valid values'
  } else {
    contactform.innerHTML='email send'
  }
});
