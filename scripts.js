// Get the elements
const modal = document.getElementById('contact-modal');
const btn = document.getElementById('contact-btn');
const closeBtn = document.getElementById('close-btn');


btn.onclick = function() {
    modal.style.display = 'block';
}


closeBtn.onclick = function() {
    modal.style.display = 'none';
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
