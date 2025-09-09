// HTML for the up, down, and done buttons 
const upButtonHtml = '<button class="upBtn">&uarr;</button>';
const downButtonHtml = '<button class="downBtn">&darr;</button>';
const doneButtonHtml = '<button class="doneBtn">&#x2713;</button>';

$(function() {
   $("#addBtn").click(addBtnClick);
   
   // Add item if user presses Enter
   $("#newItemText").keypress(function(event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
});

function addBtnClick() {
   let itemText = $("#newItemText").val().trim();

   // Don't add empty strings
   if (itemText.length !== 0) {
      addItem(itemText);

      // Clear text and put focus back in text input
      $("#newItemText").val("").focus();
   } 
}

function addItem(item) {      
   // Create a new <li> for the list
   let $newItem = $(`<li><span>${item}</span></li>`);
   
   // Up button moves item up one spot
   let $upButton = $(upButtonHtml).click(function() {
      let index = $(this.parentElement).index();
      moveItem(index, index - 1); 
   });
   
   // Down button moves item down one spot
   let $downButton = $(downButtonHtml).click(function() {
      let index = $(this.parentElement).index();
      moveItem(index, index + 1); 
   });
      
   // Add click handler for done button
   let $doneButton = $(doneButtonHtml).click(function() {
      let index = $(this.parentElement).index();
      removeItem(index);
   });

   // Add all buttons to the new item, and add new item to list
   $newItem.append($upButton, $downButton, $doneButton);
   $("ol").append($newItem);   
}

function moveItem(fromIndex, toIndex) {
   let $items = $("ol li");

   // Guard against invalid moves
   if (toIndex < 0 || toIndex >= $items.length) {
      return;
   }

   let $itemToMove = $items.eq(fromIndex).detach();

   if (toIndex > fromIndex) {
      // Moving down → insert after the new target
      $itemToMove.insertAfter($items.eq(toIndex));
   } else {
      // Moving up → insert before the new target
      $itemToMove.insertBefore($items.eq(toIndex));
   }
}

function removeItem(index) {
   $("ol li").eq(index).remove();
}
