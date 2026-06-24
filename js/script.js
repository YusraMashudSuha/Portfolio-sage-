function updateClock() {
    const now = new Date(); // Gets the current system time
    
    // Formats the time into a localized 12 or 24-hour string
    const timeString = now.toLocaleTimeString(); 
    
    // Injects the live time into the HTML container
    document.getElementById('clock-display').textContent = timeString; 
}

// Executes the function immediately, then repeats every 1000ms (1 second)
updateClock(); 
setInterval(updateClock, 1000); 
