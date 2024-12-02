document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const userName = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const userError = document.querySelector(".UserError");
    const emailError = document.querySelector(".EmailError");
    const subjectError = document.querySelector(".SubjectError");
    const messageError = document.querySelector(".MessageError");

    const namePattern = /^[A-Za-z0-9 ]{3,30}$/;
    const emailPattern = /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    const subjectPattern = /^[A-Za-z0-9 ]{3,70}$/;
    const messagePattern = /^[A-Za-z0-9 ]{3,300}$/;

    let isValid = true;

    // Reset previous error messages
    userError.innerText = "";
    emailError.innerText = "";
    subjectError.innerText = "";
    messageError.innerText = "";

    // Validate name
    if (!userName.value.trim()) {
        isValid = false;
        userError.innerText = "Name is required.";
    } else if (!namePattern.test(userName.value.trim())) {
        isValid = false;
        userError.innerText = "Invalid name. Please enter a name between 3 and 30 characters.";
    }

    // Validate email
    if (!email.value.trim()) {
        isValid = false;
        emailError.innerText = "Email is required.";
    } else if (!emailPattern.test(email.value.trim())) {
        isValid = false;
        emailError.innerText = "Invalid email. Please enter a valid email address.";
    }

    // Validate subject
    if (!subject.value.trim()) {
        isValid = false;
        subjectError.innerText = "Subject is required.";
    } else if (!subjectPattern.test(subject.value.trim())) {
        isValid = false;
        subjectError.innerText = "Invalid subject. Please enter a subject between 3 and 70 characters.";
    }

    // Validate message
    if (!message.value.trim()) {
        isValid = false;
        messageError.innerText = "Message is required.";
    } else if (!messagePattern.test(message.value.trim())) {
        isValid = false;
        messageError.innerText = "Invalid message. Please enter a message between 3 and 300 characters.";
    }

    // If all fields are valid, proceed with form submission
    if (isValid) {
        alert(
            `Your username is: ${userName.value.trim()}\nEmail is: ${email.value.trim()}\nSubject is: ${subject.value.trim()}\nMessage is: ${message.value.trim()}`
        );
        // Clear form fields
        userName.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
    }
});
