let themeButton = document.getElementById("themeButton");

if (localStorage.getItem("mode") == "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "Light mode";
}

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Light mode";
        localStorage.setItem("mode", "dark");
    }
    else {
        themeButton.textContent = "Dark mode";
        localStorage.setItem("mode", "light");
    }
});

let search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function() {
        let text = search.value.toLowerCase();
        let places = document.getElementsByClassName("place");
        let count = 0;

        for (let i = 0; i < places.length; i++) {
            if (places[i].textContent.toLowerCase().includes(text)) {
                places[i].style.display = "";
                count++;
            }
            else {
                places[i].style.display = "none";
            }
        }

        if (count == 0) {
            document.getElementById("noResults").style.display = "block";
        }
        else {
            document.getElementById("noResults").style.display = "none";
        }
    });
}

let pictures = document.getElementsByClassName("gallery-picture");
let currentPicture = 0;

function showPicture() {
    for (let i = 0; i < pictures.length; i++) {
        pictures[i].style.display = "none";
    }

    if (pictures.length > 0) {
        pictures[currentPicture].style.display = "block";
        document.getElementById("photoNumber").textContent = "Picture " + (currentPicture + 1) + " of " + pictures.length;
    }
}

if (pictures.length > 0) {
    showPicture();

    let nextButton = document.getElementById("next");
    let previousButton = document.getElementById("previous");

    nextButton.addEventListener("click", function() {
        currentPicture++;

        if (currentPicture == pictures.length) {
            currentPicture = 0;
        }

        showPicture();
    });

    previousButton.addEventListener("click", function() {
        currentPicture--;

        if (currentPicture < 0) {
            currentPicture = pictures.length - 1;
        }

        showPicture();
    });
}

let bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let date = document.getElementById("date").value;
        let destination = document.getElementById("destination").value;
        let people = document.getElementById("people").value;

        if (name == "" || email == "" || phone == "" || date == "" || destination == "" || people < 1) {
            document.getElementById("message").textContent = "Please complete all fields correctly.";
        }
        else {
            let booking = name + ", " + email + ", " + phone + ", " + date + ", " + destination + ", " + people;
            localStorage.setItem("booking", booking);
            document.getElementById("message").textContent = "Thank you " + name + ". Your enquiry has been saved.";
            bookingForm.reset();
        }
    });
}

let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("contactMessage").textContent = "Thank you. Your message has been received.";
        contactForm.reset();
    });
}                                             
