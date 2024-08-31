
function appendAlertBox(targetElementId,alertType) {
    // Define the HTML content as a string
    const htmlContent = `
        <p class="text-white">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolor 
        </p>
        <div class="d-flex justify-content-between">
          <div class="rounded-pill pe-2 ps-1 w-25 alertcolor1 d-flex align-items-center justify-content-center alertsusheight" style="background-color: ${getColorByAlertType(alertType)};">
            <div class="suspicioussize alertfoncolor">
              ${alertType}
            </div>
          </div>
          <p class="ipcolor eventstransparncy">
            IP:223.2662.12
          </p>
        </div>
    `;
  
    // Create a new div element and set its innerHTML
    const newDiv = document.createElement('div');
    newDiv.innerHTML = htmlContent.trim();
  
    // Find the target element by its ID and append the new div to it
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.appendChild(newDiv);
    } else {
      console.error(`Element with ID "${targetElementId}" not found.`);
    }
    
  }


  function getColorByAlertType(alertType) {
    switch (alertType) {
      case "suspicious":
        return "orange";
      case "scanner":
        return "#01ADD9";
      case "behavior":
        return "#55049B";
      case "correlation":
        return "#3C8704";
      default:
        return "white"; // Default color if no match
    }
  }

//   export default appendAlertBox;


// const grid5bottompanel=(container)=>{
//  // Create main container
// const rowDiv = document.createElement('div');
// rowDiv.className = 'row ps-4 text-white squareopa mt-5';

// // Create Unpaired column
// const unpairedDiv = document.createElement('div');
// unpairedDiv.className = 'col-auto square1 me-3';
// const unpairedSquare = document.createElement('div');
// unpairedSquare.className = 'square';
// unpairedDiv.appendChild(unpairedSquare);
// rowDiv.appendChild(unpairedDiv);
// rowDiv.appendChild(document.createTextNode('Unpaired'));

// // Create Recognised column
// const recognisedDiv = document.createElement('div');
// recognisedDiv.className = 'col-auto square2 me-3 ms-2';
// const recognisedSquare = document.createElement('div');
// recognisedSquare.className = 'square';
// recognisedDiv.appendChild(recognisedSquare);
// rowDiv.appendChild(recognisedDiv);
// rowDiv.appendChild(document.createTextNode('Recognised'));

// // Create Active column
// const activeDiv = document.createElement('div');
// activeDiv.className = 'col-auto square3 me-3 ms-2';
// const activeSquare = document.createElement('div');
// activeSquare.className = 'square';
// activeDiv.appendChild(activeSquare);
// rowDiv.appendChild(activeDiv);
// rowDiv.appendChild(document.createTextNode('Active'));

// // Create Non-Active column
// const nonActiveDiv = document.createElement('div');
// nonActiveDiv.className = 'col-auto square4 me-3 ms-2';
// const nonActiveSquare = document.createElement('div');
// nonActiveSquare.className = 'square';
// nonActiveDiv.appendChild(nonActiveSquare);
// rowDiv.appendChild(nonActiveDiv);
// rowDiv.appendChild(document.createTextNode('Non-Active'));

// // Append the row to the document body (or any other container)
// document.body.appendChild(rowDiv);
// }
// grid5bottompanel("container");
   // Existing code in main.js

   // Declare variables for the data
   const totalLogEvents = ["1986.2K","320","3502","206"];
   const avgPerHour = ["144,672","13","146","12"];
  //  const avgLabel = "avg per hour";

   // Function to update the dashboard
   function updateDashboard() {

       const elements = document.getElementsByClassName("a");

       for(let i=0; i<elements.length; i++) {
        elements[i].innerText = totalLogEvents[i]
       }

       const avgElement = document.querySelectorAll('.h5');

       for(let i=0; i<avgElement.length; i++) {
        avgElement[i].innerHTML = `${avgPerHour[i]} <span class="h6 opacity-50">avg per hour</span>`
       }
   }

   // Call the function to update the dashboard when the DOM is fully loaded
   document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    appendAlertBox('alertsfontsize',"suspicious");
    appendAlertBox('alertsfontsize',"scanner");
    appendAlertBox('alertsfontsize',"behavior");
    appendAlertBox('alertsfontsize',"correlation");
    appendAlertBox('alertsfontsize',"suspicious");
    appendAlertBox('alertsfontsize',"scanner");
    appendAlertBox('alertsfontsize',"behavior");
    appendAlertBox('alertsfontsize',"correlation");
   });


   


// main.js

// Sample notification messages and warning messages
const notificationMessages = [
  'New comment added on your post',
  'User @john_doe liked your comment',
  'New follower: @jane_doe'
];

const warningMessages = [
  'Server down for maintenance',
  'Unusual login attempt detected',
  'Password change required'
];

// Function to update notification counts
function updateNotificationCounts() {
  const notificationCount = notificationMessages.length;
  const warningCount = warningMessages.length;

  document.getElementById("notificationCount").innerText = notificationCount;
  document.getElementById("warningCount").innerText = warningCount;
}

// Function to populate notification dropdown
function populateNotifications() {
  const notificationList = document.getElementById("notificationList");
  notificationList.innerHTML = notificationMessages.map(message => `<li class="dropdown-item">${message}</li>`).join('');
}

// Function to populate warning dropdown
function populateWarnings() {
  const warningList = document.getElementById("warningList");
  warningList.innerHTML = warningMessages.map(message => `<li class="dropdown-item">${message}</li>`).join('');
}

// Initialize the dropdowns with event listeners and populate with data
document.addEventListener('DOMContentLoaded', () => {
  updateNotificationCounts(); // Update counts on load
  populateNotifications(); // Populate notifications
  populateWarnings(); // Populate warnings
});