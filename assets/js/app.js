var curr_modal = ""

const openModal = (input) => {
    curr_modal = document.getElementById(input.dataset.target);
    curr_modal.style.display = "flex";
}

const closeModal = () => {
    curr_modal.style.display = "none";
    curr_modal = "";
}

window.onclick = event => {
    if (event.target == curr_modal) {
        curr_modal.style.display = "none";
        curr_modal = "";
    }
}

const el = document.querySelector('#confetti-image')
el.classList.add("scale-in-center")

const removeConfetti = () => {
    el.classList.remove("scale-in-center")
    el.classList.add("scale-out-bottom")
}
setTimeout(removeConfetti, 2000);