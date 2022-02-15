function showTime() {
    var d = new Date();

    let hours = d.getHours();
    
    document.getElementById("mess-1").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'America/New_York'}  ) ;
    document.getElementById("mess-2").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'Europe/Stockholm'}  ) ;
    document.getElementById("mess-3").innerHTML = d.toLocaleTimeString() ;
    document.getElementById("mess-4").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'Europe/Rome'}  ) ;
    document.getElementById("mess-5").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'Europe/Berlin'}  ) ;
    document.getElementById("mess-6").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo'}  ) ;
    document.getElementById("mess-7").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata'}  ) ;
    document.getElementById("mess-8").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'Europe/Oslo'}  ) ;
    document.getElementById("mess-9").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'Australia/Darwin'}  ) ;
    document.getElementById("mess-10").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Hovd'}  ) ;
    document.getElementById("mess-11").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'Asia/Hovd'}  ) ;
    document.getElementById("mess-12").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'Europe/Helsinki'}  ) ;
    // document.getElementById("mess-1").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'America/New_York'}  ) ;
}
setInterval(showTime, 1000);


