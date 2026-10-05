// Mobile menu

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// Project buttons

function showProject(projectName) {

    alert(
        "Project selected: " + projectName
    );

}


// Contact form

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        alert(
            "Thank you for contacting me!"
        );

        contactForm.reset();

    }
);