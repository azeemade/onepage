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

