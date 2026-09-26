
function filterEvents(category) {
    var events = document.querySelectorAll(".event");

    for (var i = 0; i < events.length; i++) {
        if (category == "all" || events[i].classList.contains(category)) {
            events[i].style.display = "block";
        } else {
            events[i].style.display = "none";
        }
    }
}

var form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var subject = document.getElementById("subject").value.trim();
        var message = document.getElementById("message").value.trim();
        var result = document.getElementById("formMessage");

        if (name == "" || email == "" || subject == "" || message == "") {
            result.textContent = "Please complete all required fields.";
            result.style.color = "red";
        } else {
            result.textContent = "Thank you. Your message has been received.";
            result.style.color = "green";
            form.reset();
        }
    });
}
