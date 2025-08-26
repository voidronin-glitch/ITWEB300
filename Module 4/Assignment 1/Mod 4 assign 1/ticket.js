$("#ticketType").change(function () {
  let type = $(this).val();
  $("#computerFields, #softwareFields, #networkFields").hide(); // hide all
  if (type === "computer") $("#computerFields").show();
  if (type === "software") $("#softwareFields").show();
  if (type === "network") $("#networkFields").show();
});
