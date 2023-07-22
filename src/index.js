// Retrieve the form elements
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("timeRadio");
const planInput = document.getElementById("plan");
const addFieldsButton = document.getElementById("add-fields-btn");
const inputFieldsContainer = document.getElementById("input-fields");

const notesInput = document.getElementById("notes");
const installInput = document.getElementById("install");
const promoInput = document.getElementById("promo");
const outputBox = document.getElementById("outputBox");
const submitButton = document.getElementById("submitButton");

const twoManJobInput = document.getElementById("twoManJob");
const meshExtenderInput = document.getElementById("meshExtender");
const ladderInput = document.getElementById("ladder");

const copyButton = document.getElementById("copyBtn");
const textarea = document.getElementById("outputBox");
var checkboxString = "";
let fieldCount = 2; // set the initial count of input field sets

function generateString() {
  // Get the checkbox elements
  var checkBox1 = document.getElementById("twoManJob");
  var checkBox2 = document.getElementById("meshExtender");
  var checkBox3 = document.getElementById("ladder");

  // Check which checkboxes are ticked
  var checked1 = checkBox1.checked;
  var checked2 = checkBox2.checked;
  var checked3 = checkBox3.checked;

  // Generate string based on checkbox status
  let myString = "Situational: ";
  if (checked1) {
    myString += "Two man job, ";
  }
  if (checked2) {
    myString += "Bring mesh extender, ";
  }
  if (checked3) {
    myString += "Bring 32 ft ladder, ";
  }

  // Remove the trailing comma and display the string
  myString = myString.replace(/,\s*$/, "");
  checkboxString = myString;
}

addFieldsButton.addEventListener("click", function () {
  fieldCount++;

  // create a new input field set with unique ids
  const newFields = document.createElement("div");
  newFields.innerHTML = `
    <div>
      <label for="tower${fieldCount}">Tower Name:</label>
      <input type="text" id="tower${fieldCount}" name="tower${fieldCount}">

      <label for="distance${fieldCount}">Distance (m):</label>
      <input type="number" id="distance${fieldCount}" name="distance${fieldCount}">
    </div>
  `;

  inputFieldsContainer.appendChild(newFields);
});

// submitButton.addEventListener("click", function() {

// });

// Define a function to handle form submission
function submitForm() {
  // Retrieve the values entered by the user
  const dateValue = dateInput.value;
  const timeValue = timeInput.value;

  // let dateTime = dateValue + " " + timeValue;
  const planValue = planInput.value;
  // const towersValue = towersInput.value;
  // const distanceValue = distanceInput.value;
  // const towerAndDistance = towersValue + " " + distanceValue + "mi";
  const notesValue = notesInput.value;
  const promoValue = promoInput.value;
  const installValue = installInput.value;

  generateString();

  let inputStrings = "";

  for (let i = 1; i <= fieldCount; i++) {
    const towerInput = document.getElementById(`tower${i}`).value;
    const distanceInput = document.getElementById(`distance${i}`).value;

    if (towerInput !== "" || distanceInput !== "") {
      inputStrings += `Tower ${i}: ${towerInput}, Distance: ${distanceInput}mi\n`;
    }
  }

  console.log(inputStrings); // log the concatenated string to the console
  const boilerString =
    "Advised to download app. Please call 30mi prior. Put momentum router serial in close out notes";

  // Create a string that represents the output
  const outputString = `Date: ${dateValue} ${timeValue}\nPlan: ${planValue}\nTerm: ${installValue}\n${inputStrings}Promo: ${promoValue}\nNotes: ${notesValue}\n${checkboxString}\n${boilerString}`;

  // Output the string to the output box
  outputBox.value = outputString;
}

submitButton.addEventListener("click", submitForm);

copyButton.addEventListener("click", function () {
  // Select the text inside the textarea
  textarea.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");
});
