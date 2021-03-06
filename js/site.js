 //Step ONE (GET = controller, accepts a request)
 function getValues() {
     let startValue = document.getElementById("startValue").value;
     let endValue = document.getElementById("endValue").value;

     displayValues(startValue, endValue);
 }

 //Final Step (DISPLAY = view)
 function displayValues(start, end) {

     //first get the ol element from the page
     element = document.getElementById("results");

     for (let i = start; i <= end; i++) {

         //next create a new li element
         let item = document.createElement("div");

         if (i % 2 == 0) {
             item.classList.add("boldItem");
         }

         else {
            item.classList.add("Item");
        }

         //add classes to the li element
         item.classList.add("col");

         //set the message for the li element
         item.innerHTML = i;

         //add the new item to the list
         element.appendChild(item);

     }
 }