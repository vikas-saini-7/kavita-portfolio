/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});



// }

// ##################################
// send contact form details to google sheet
    const form = document.querySelector("#form");
    const submitButton = document.querySelector("#submit");
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwMzvOuiC1Blw_kzdFc_oCJiA38Yo9qfhMHO5OCh-mwSmjY0fGF0smPg3OPu9XlPoxs/exec'

   form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
     let requestBody = new FormData(form);
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert(`Success! Your Message has been Sent. I'll reply you soon`, response)
          submitButton.disabled = false;
          form.reset();
        })
       .catch(error => {
       alert('Error!', error.message);
         submitButton.disabled = false
       }
       )
   })