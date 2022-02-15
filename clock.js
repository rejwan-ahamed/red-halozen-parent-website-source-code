function showTime() {
    var d = new Date();
    
    document.getElementById("clock").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' });
 
}
setInterval(showTime, 1000);



// d.toLocaleString('en-US', { timeZone: 'America/New_York' });

// document.getElementById("clock").innerHTML = d.toLocaleTimeString();