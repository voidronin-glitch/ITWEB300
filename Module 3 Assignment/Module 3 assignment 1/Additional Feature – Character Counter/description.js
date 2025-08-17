document.getElementById("ticketDesc").addEventListener("input", updateCount);

function updateCount() {
  const text = document.getElementById("ticketDesc").value;
  const count = text.length;
  const counter = document.getElementById("charCount");

  counter.innerText = count + " / 500";

  if (count > 500) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}
