function getTickets(employeeId) {
    if (!employeeId) {
        alert("Please enter a valid employee ID.");
        return;
    }

    var xhr = new XMLHttpRequest();
    var url = "tickets.xml";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var xmlDoc = xhr.responseXML;
            var tickets = xmlDoc.getElementsByTagName("ticket");

            var table = document.getElementById("ticketTable");
            table.innerHTML = "";

            var header = `<tr>
                <th>Request Date</th>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Problem</th>
                <th>Status</th>
                <th>Response</th>
            </tr>`;
            table.innerHTML += header;

            var found = false;

            for (var i = 0; i < tickets.length; i++) {
                var empId = tickets[i].getElementsByTagName("employeeID")[0].childNodes[0].nodeValue;

                if (empId.trim() === employeeId.trim()) {
                    found = true;
                    var date = tickets[i].getElementsByTagName("requestDate")[0].childNodes[0].nodeValue;
                    var fname = tickets[i].getElementsByTagName("firstName")[0].childNodes[0].nodeValue;
                    var lname = tickets[i].getElementsByTagName("lastName")[0].childNodes[0].nodeValue;
                    var problem = tickets[i].getElementsByTagName("problem")[0].childNodes[0].nodeValue;
                    var status = tickets[i].getElementsByTagName("status")[0].childNodes[0].nodeValue;
                    var response = tickets[i].getElementsByTagName("response")[0].childNodes[0].nodeValue;

                    var row = `<tr>
                        <td>${date}</td>
                        <td>${empId}</td>
                        <td>${fname}</td>
                        <td>${lname}</td>
                        <td>${problem}</td>
                        <td>${status}</td>
                        <td>${response}</td>
                    </tr>`;
                    table.innerHTML += row;
                }
            }

            if (!found) {
                table.innerHTML += `<tr><td colspan="7">No tickets found for Employee ID: ${employeeId}</td></tr>`;
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}
