'use strict';

export default class Modal {
    manageModal(unPhotographer) {
        const modalBtn = document.querySelector("#btn-contact");
        const closeBtn = document.querySelector('.close-form-icon');
        
        if (modalBtn) {
            modalBtn.addEventListener('click', this.launchModal.bind(this));
            this.displayPhName(unPhotographer);
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', this.closeModal);
        }

        document.addEventListener('keyup', (key) => {
            // ECHAP pour fermer
            if (key.code == "Escape") {
                let modalbg = document.getElementById("form-dialog");
                modalbg.style.display = 'none';
            }
        });
    }
    // Ouverture modale
    launchModal() {

        const modalbg = document.getElementById("form-dialog");
        modalbg.style.display = 'flex';

        document.addEventListener('keyup', this.tabPressed.bind(this));

        this.formInputs = [];

        modalbg.querySelectorAll("input").forEach(input=>{
            this.formInputs.push(input.id)
        })
        modalbg.querySelectorAll("textarea").forEach(input=>{
            this.formInputs.push(input.id)
        })
        modalbg.querySelectorAll("button").forEach(input=>{
            this.formInputs.push(input.id)
        })
        document.getElementById("close-btn").focus();
    }
    // Fermeture modale
    closeModal() {
        
        document.removeEventListener('keyup', this.tabPressed);

        let modalbg = document.getElementById("form-dialog");
        modalbg.style.display = 'none';
    }
    // Affichage nom du photographe dans formulaire
    displayPhName(unPhotographer) {

        let phName = document.getElementById('ph-form-name');
        let phNameTemplate = `${unPhotographer.name}`
        phName.innerHTML = phNameTemplate;
    }

    tabPressed(event) {
        if (event.keyCode !== 9) return;
  
        if (this.formInputs.indexOf(document.activeElement.id)=== -1) 
        document.getElementById("close-btn").focus();
    }
};