'use strict';

export default class Form {
    TEXTEREGEX = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ.\s-]{2,25}$/;
    EMAILREGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    constructor() {
        window.check = this.addListener.bind(this);
    }
    manageFields() {
        const FORM = document.getElementById('contact-form');
        const FIRSTNAME = document.getElementById('first-name');
        const LASTNAME = document.getElementById('last-name');
        const EMAIL = document.getElementById('email');
        const MESSAGE = document.getElementById('message');

        FORM.addEventListener('submit', (e) => {
            // On stoppe la propagation de l'évenement
            e.preventDefault();
            
            const IS_FORM_VALID = this.checkNames(FIRSTNAME, this.TEXTEREGEX) &&
                this.checkNames(LASTNAME, this.TEXTEREGEX) &&
                this.checkEmail(EMAIL, this.EMAILREGEX) &&
                this.checkMessage(MESSAGE, this.TEXTEREGEX);

            if (IS_FORM_VALID) {
                FIRSTNAME.style.border = 'none';
                LASTNAME.style.border = 'none';
                EMAIL.style.border = 'none';
                MESSAGE.style.border = 'none';
                // Affichage champs du form dans console
                this.consoleDisplayFields(FIRSTNAME, LASTNAME, EMAIL, MESSAGE);
                FORM.reset();
                return;
            }

            this.errorVerification(FIRSTNAME, LASTNAME, EMAIL, MESSAGE, this.TEXTEREGEX, this.EMAILREGEX);
        });
    }
    // Création écouteur des champs du form
    addListener(target) {
        target.onblur = () => {
            this.checkInput(target)
        }
    }
    // Récupération du type de champ + appel test conditions
    checkInput(target) {
        target.onblur = null;
        // console.log("I am the method 'checkInput'.", target, target.type);
        let isTargetValid;
        switch (target.type) {
            case "text": isTargetValid = this.checkNames(target); break;
            case "email": isTargetValid = this.checkEmail(target); break;
            case "textarea": isTargetValid = this.checkMessage(target); break;
        }
        if (!isTargetValid) {
            target.parentElement.setAttribute('data-error-visible', 'true');
            target.style.border = '2px solid red';
        }
        if (isTargetValid) {
            target.parentElement.setAttribute('data-error-visible', 'false');
            target.style.border = '2px solid green';
        }
    }

    consoleDisplayFields(FIRSTNAME, LASTNAME, EMAIL, MESSAGE) {
        console.group('Form Fields');
        console.log(`Prénom : ${FIRSTNAME.value}`);
        console.log(`Nom : ${LASTNAME.value}`);
        console.log(`Email : ${EMAIL.value}`);
        console.log(`Message : ${MESSAGE.value}`);
    }

    errorVerification(FIRSTNAME, LASTNAME, EMAIL, MESSAGE, TEXTE_REGEX, EMAIL_REGEX) {
        this.checkNames(FIRSTNAME, TEXTE_REGEX);
        this.checkNames(LASTNAME, TEXTE_REGEX);
        this.checkEmail(EMAIL, EMAIL_REGEX);
        this.checkMessage(MESSAGE, TEXTE_REGEX);
    }

    checkNames(elt, TEXTE_REGEX) {
        if (elt.value.trim().length < 2 || elt.value.trim() === "" || !elt.value.match(TEXTE_REGEX)) {
            elt.parentElement.setAttribute('data-error-visible', 'true');
            elt.style.border = '2px solid red';
            return false;
        }
        return true;
    }

    checkEmail(elt, EMAIL_REGEX) {
        if (elt.value.trim().match(EMAIL_REGEX) && elt.value.trim() !== "") {
            return true;
        }
        elt.parentElement.setAttribute('data-error-visible', 'true');
        elt.style.border = '2px solid red';
        return false;
    }

    checkMessage(elt, TEXTE_REGEX) {
        if (elt.value.trim() === '' || elt.value.trim() == null || !elt.value.match(TEXTE_REGEX)) {
            elt.parentElement.setAttribute('data-error-visible', 'true');
            elt.style.border = '2px solid red';
            return false;
        }
        return true;
    }
}