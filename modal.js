var modal = document.getElementById("modal");

function displayModal() {
    modal.style.display = "flex";
    timeout()
}
function removeModal() {
    modal.style.display = "none";
}
function timeout(){
    setTimeout(() => {
        modal.style.display = "none";
    }, 3000);
}