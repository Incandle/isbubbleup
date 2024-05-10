function checkBubbleStatus() {
    fetch('https://bubble.io')
        .then(response => {
            if (response.ok) {
                document.getElementById('status').textContent = 'No';
            } else {
                document.getElementById('status').textContent = 'Yes';
            }
        })
        .catch(() => {
            document.getElementById('status').textContent = 'Yes';
        });
}

// Check status on load
window.onload = checkBubbleStatus;
