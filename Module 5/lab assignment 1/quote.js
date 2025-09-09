$(function () { 
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   const apiUrl = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;

   $.ajax({
      url: apiUrl,
      type: "GET",
      dataType: "json",   // Expect JSON response
      success: function (data) {
         // If API returned an error message
         if (data.error) {
            $("#quotes").html(data.error);
            return;
         }

         // Otherwise, build the list of quotes
         let html = "<ol>";
         data.forEach(function (item) {
            html += `<li>${item.quote} - ${item.source}</li>`;
         });
         html += "</ol>";

         $("#quotes").html(html);
      },
      error: function () {
         $("#quotes").html("Error fetching quotes. Please try again later.");
      }
   });
}
