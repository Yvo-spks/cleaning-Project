function letStarted () {
        let firstName = prompt("What is your First Name?");
        let email = prompt("What is your Email?");
        let age = prompt("How old are you?");

        if (age >= 15) {
            alert ("Hi" + " " + firstName + " " + "Let's get started with some more cleaning tips!👌😍")
        } else {
            alert (" Oops Sorry" + " " + firstName + " " + "Tips are not available 😞")
        }

    }

    letButton = document.querySelector("button");

    letButton.addEventListener("click", letStarted)