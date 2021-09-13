const formId = document.getElementById("form");
const formElements = formId.elements;
const submitBtn = document.getElementById("submit");

const getFormData = () => {
  let data = { [formId]: {} }; // create an empty object with the formIdentifier as the key and an empty object as its value
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formId][element.name] = element.value;
    }
  }
  return data;
};

submitBtn.onclick = (event) => {
  event.preventDefault();
  data = getFormData();
  localStorage.setItem(formId, JSON.stringify(data[formId]));
};

const populateForm = () => {
  if (localStorage.key(formId)) {
    const savedData = JSON.parse(localStorage.getItem(formId)); // get and parse the saved data from localStorage
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};
document.onload = populateForm();
