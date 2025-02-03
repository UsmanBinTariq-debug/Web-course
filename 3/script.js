document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const messageElement = document.getElementById('success');
        messageElement.style.display = 'block';
    });
});

function submitted(){
    document.getElementById('success').style.opacity = 1
}