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

const schemaScript = document.createElement('script');
schemaScript.type = 'application/ld+json';
schemaScript.text = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Adithya Shetty",
    "alternateName": "Adi",
    "jobTitle": "Web Developer and Graphic Designer",
    "image": "https://adishe77y.vercel.app/your-profile-pic.jpg",
    "url": "https://adishe77y.vercel.app/"
  }
});
document.head.appendChild(schemaScript);
