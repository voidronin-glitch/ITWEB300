const ticketTypeElement = document.getElementById("ticketType");
if (ticketTypeElement) {
  ticketTypeElement.addEventListener("change", showFields);
}

function showFields() {
  const computerFields = document.getElementById("computerFields");
  if (computerFields) computerFields.style.display = "none";
  const softwareFields = document.getElementById("softwareFields");
  if (softwareFields) softwareFields.style.display = "none";
  const ticketTypeElem = document.getElementById("ticketType");
  const type = ticketTypeElem && ticketTypeElem.value ? ticketTypeElem.value : "";
  const networkFields = document.getElementById("networkFields");

  if (type === "computer" && computerFields) {
    computerFields.style.display = "block";
  } else if (type === "software" && softwareFields) {
    softwareFields.style.display = "block";
  } else if (type === "network" && networkFields) {
    networkFields.style.display = "block";
  }
}
