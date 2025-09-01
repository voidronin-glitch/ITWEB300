document.getElementById("loadBtn").addEventListener("click", function () {
    const ticketnum = document.getElementById("ticketInput").value;
    getTicket(ticketnum);
});

function getTicket(ticketnum) {
    if (!ticketnum) {
        alert("Please enter a ticket number.");
        return;
    }

    // Use local mock JSON file for testing
    var url = "tickets.json";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    // Parse the whole JSON file
                    var allTickets = JSON.parse(xhr.responseText);

                    // Check if ticket number exists
                    var ticketData = allTickets[ticketnum];
                    if (!ticketData) {
                        alert("Ticket not found.");
                        return;
                    }

                    // Update page fields with returned data
                    document.getElementById("requestDate").innerText = ticketData.requestDate;
                    document.getElementById("employeeID").innerText = ticketData.employeeID;
                    document.getElementById("userFirstName").innerText = ticketData.userFirstName;
                    document.getElementById("userLastName").innerText = ticketData.userLastName;
                    document.getElementById("problemDescription").innerText = ticketData.problemDescription;
                    document.getElementById("status").innerText = ticketData.status;
                    document.getElementById("response").innerText = ticketData.response;

                } catch (e) {
                    alert("Error parsing JSON.");
                }
            } else {
                alert("Error loading tickets.json");
            }
        }
    };

    xhr.send();
}
