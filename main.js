var typed = new Typed(".text", {
    strings:["Fresher", "Web Developer"],
    typeSpeed:150,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.getElementById("moreLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
  
    var hiddenText = document.getElementById("hiddenText");
  
    // Toggle visibility of hidden text
    if (hiddenText.style.display === "none") {
      hiddenText.style.display = "block";
      this.textContent = "Less"; // Change anchor text to "Less"
    } else {
      hiddenText.style.display = "none";
      this.textContent = "More"; // Change anchor text back to "More"
    }
  });

const btn = document.getElementById('button');

  document.getElementById('form')
   .addEventListener('submit', function(event) {
     event.preventDefault();
  
     btn.value = 'Sending...';
  
     const serviceID = 'service_ros7acy';
     const templateID = 'template_oua9n0p';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Email Sent Successfully!",
          icon: "success"
        });
        document.getElementById('form').reset();
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });
