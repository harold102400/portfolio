const form = document.getElementById('form');
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputPhone = document.getElementById('phone');
    const messageBox = document.getElementById('message-box');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
        if (validateForm()) {
            form.submit();
        }
    });

    function validateForm() {
        return (
            inputName.parentElement.classList.contains('success') &&
            inputEmail.parentElement.classList.contains('success') &&
            inputPhone.parentElement.classList.contains('success') &&
            messageBox.parentElement.classList.contains('success')
        );
    }

    function checkInputs() {
        const usernameValue = inputName.value.trim();
        const inputEmailValue = inputEmail.value.trim();
        const inputPhoneValue = inputPhone.value.trim();
        const messageBoxValue = messageBox.value.trim();

        if (usernameValue === '') {
            setErrorFor(inputName, 'Username cannot be blank');
        } else {
            setSuccessFor(inputName);
        }

        if (inputEmailValue === '') {
            setErrorFor(inputEmail, 'Email cannot be blank');
        } else if (!isEmail(inputEmailValue)) {
            setErrorFor(inputEmail, 'Not a valid email');
        } else {
            setSuccessFor(inputEmail);
        }

        if (inputPhoneValue === '' || inputPhoneValue.length < 10) {
            setErrorFor(inputPhone, 'Phone cannot be blank');
        } else {
            setSuccessFor(inputPhone);
        }

        if (messageBoxValue === '' || messageBoxValue.length >= 150) {
            setErrorFor(messageBox, 'Message cannot be blank');
        } else {
            setSuccessFor(messageBox);
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.classList.add('error');
        formControl.classList.remove('success');
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.classList.add('success');
        formControl.classList.remove('error');
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

