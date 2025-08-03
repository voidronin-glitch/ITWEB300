// 1. Validate user input
function validateForm(formData) {
  if (!formData.name || !formData.email || !formData.issue) {
    alert("All fields are required.");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

// 2. Generate a ticket
function generateTicket(formData) {
  const ticketId = "TICKET-" + Date.now(); // Simple unique ID using timestamp

  return {
    id: ticketId,
    name: formData.name,
    email: formData.email,
    issue: formData.issue,
    submittedAt: new Date().toLocaleString()
  };
}

// 3. Submit the ticket to the server
function submitTicket(ticket) {
  // This would be an AJAX or fetch call in a real app
  // Example:
  // return fetch('/submit', { method: 'POST', body: JSON.stringify(ticket) });

  console.log("Submitting ticket to server:", ticket);
  // Simulate success
  return true;
}

// 4. Display the ticket summary
function displayTicketSummary(ticket) {
  const summary = `
    <h3>Support Ticket Summary</h3>
    <p><strong>ID:</strong> ${ticket.id}</p>
    <p><strong>Name:</strong> ${ticket.name}</p>
    <p><strong>Email:</strong> ${ticket.email}</p>
    <p><strong>Issue:</strong> ${ticket.issue}</p>
    <p><strong>Submitted At:</strong> ${ticket.submittedAt}</p>
  `;
  document.getElementById("ticketSummary").innerHTML = summary;
}

// 5. Search for tickets
function searchTickets(query) {
  // This would call the server with the query and return results
  // Example:
  // return fetch(`/search?query=${query}`).then(res => res.json());

  console.log("Searching tickets for:", query);

  // Simulate dummy results
  const dummyTickets = [
    { id: "TICKET-123", name: "Alice", issue: "Printer not working" },
    { id: "TICKET-124", name: "Bob", issue: "Email issues" }
  ];

  return dummyTickets.filter(ticket =>
    ticket.name.toLowerCase().includes(query.toLowerCase()) ||
    ticket.id.toLowerCase() === query.toLowerCase()
  );
}

// 6. Display the search results
function displaySearchResults(results) {
  if (results.length === 0) {
    document.getElementById("searchResults").innerHTML = "<p>No tickets found.</p>";
    return;
  }

  let output = "<h3>Search Results:</h3><ul>";
  results.forEach(ticket => {
    output += `<li><strong>${ticket.id}</strong>: ${ticket.name} - ${ticket.issue}</li>`;
  });
  output += "</ul>";

  document.getElementById("searchResults").innerHTML = output;
}
