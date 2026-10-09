// Initialize clock immediately on load and update every second
updateLiveClock();
setInterval(updateLiveClock, 1000);

        function updateLiveClock() {
            const now = new Date();
            const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
            const dateString = now.toLocaleDateString('en-US', dateOptions).toUpperCase();
            const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
            const timeString = now.toLocaleTimeString('en-US', timeOptions).toUpperCase();
            
            const clockEl = document.getElementById('live-clock');
            if (clockEl) {
                clockEl.textContent = dateString + ' • ' + timeString;
            }
        }
