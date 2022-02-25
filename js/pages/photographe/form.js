'use strict';

export default class Form {
    manageFields() {
        let form = document.getElementById('contact-form');
        let firstName = document.getElementById('first-name');
        let lastName = document.getElementById('last-name');
        let email = document.getElementById('email');
        let message = document.getElementById('message');
        const TEXTEREGEX = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ.\s-]{2,25}$/;
        const EMAILREGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = this.checkNames(firstName, TEXTEREGEX) &&
                this.checkNames(lastName, TEXTEREGEX) &&
                this.checkEmail(email, EMAILREGEX) &&
                this.checkMessage(message);

            if (isValid) {
                firstName.style.border = 'none';
                lastName.style.border = 'none';
                email.style.border = 'none';
                message.style.border = 'none';
                document.getElementById('contact-form').reset();
                // form.style.display = 'none';
            } else {
                this.errorVerification(firstName, lastName, email, message, TEXTEREGEX, EMAILREGEX);
            }
        });
        // form.firstName.addEventListener("blur", this.checkNames(firstName, TEXTEREGEX));
    }

    errorVerification(firstName, lastName, email, message, TEXTEREGEX, EMAILREGEX) {
        this.checkNames(firstName, TEXTEREGEX);
        this.checkNames(lastName, TEXTEREGEX);
        this.checkEmail(email, EMAILREGEX);
        this.checkMessage(message);
    }

    checkNames(elt, TEXTEREGEX) {
        if (elt.value.trim().length < 2 || elt.value.trim() === "" || !elt.value.match(TEXTEREGEX)) {
            elt.parentElement.setAttribute('data-error-visible', 'true');
            elt.style.border = '2px solid red';
            return false;
        } else {
            elt.parentElement.setAttribute('data-error-visible', 'false');
            elt.style.border = '2px solid green';
            return true;
        }
    }

    checkEmail(elt, EMAILREGEX) {
        if (elt.value.trim().match(EMAILREGEX) && elt.value.trim() !== "") {
            elt.parentElement.setAttribute('data-error-visible', 'false');
            elt.style.border = '2px solid green';
            return true;
        }
        elt.parentElement.setAttribute('data-error-visible', 'true');
        elt.style.border = '2px solid red';
        return false;
    }

    checkMessage(elt) {
        if (elt.value.trim() === '' || elt.value.trim() == null) {
            elt.parentElement.setAttribute('data-error-visible', 'true');
            elt.style.border = '2px solid red';
            return false;
        }
        elt.parentElement.setAttribute('data-error-visible', 'false');
        elt.style.border = '2px solid green';
        return true;
    }
}
