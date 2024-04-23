const buttonRegister = document.querySelector("#button_register");
const modalRegister = document.querySelector("#modal_register");
const closeModalButton = document.querySelector("#close_modal_button");
const buttonRegisterSubmit = document.querySelector("#button_submit_register");
const errorMessage = document.querySelector("#error_message");

const openModal = () => {
    modalRegister.classList.remove("hidden");
    modalRegister.classList.add("flex");
}

const closeModal = () => {
    modalRegister.classList.add("hidden");
    modalRegister.classList.remove("flex");
}

const submitRegistration = () => {
    const ime = document.querySelector("#ime");
    const prezime = document.querySelector("#prezime");
    const email = document.querySelector("#email");
    const brojTelefona = document.querySelector("#broj_telefona");
    const lozinka = document.querySelector("#lozinka");
    const potvrdaLozinke = document.querySelector("#potvrda_lozinke");
    const usloviKoristenja = document.querySelector("#terms");
    errorMessage.textContent = '';

    // Provjera uslova korištenja
    if (usloviKoristenja.checked === true) {

        // Provjera emaila
        if (email.value.includes("@")) {

            // Lozinka mora imati 6 karaktera minimalno
            if (lozinka.value.length >= 6) {
                // Provjera lozinke, da li se podudaraju
                if (lozinka.value === potvrdaLozinke.value) {
                    console.log('registracija je uspješna')
                } else {
                    errorMessage.textContent = 'Vaše lozinke se ne podudaraju!';
                }
            } else {
                errorMessage.textContent = 'Vaša lozinka mora imati minimalno 6 karaktera!';
            }

        } else {
            errorMessage.textContent = 'Vaš email mora biti validan!';
        }
    } else {
        errorMessage.textContent = 'Morate prihvatiti uslove korištenja!';
    }
}


buttonRegister.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
buttonRegisterSubmit.addEventListener("click", submitRegistration);