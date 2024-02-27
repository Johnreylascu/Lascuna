function updateDateTime() {
    var currentDate = new Date();
    var dateTimeString = "Current Date and Time: " + currentDate.toLocaleString();
    var dateTimeElement = document.getElementById("dateTimeDisplay");
    dateTimeElement.textContent = dateTimeString;
}

// Update date and time initially
updateDateTime();

// Update date and time every second
setInterval(updateDateTime, 1000);