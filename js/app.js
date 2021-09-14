const formId = document.getElementById("form");
const formElements = formId.elements;

const getFormData = () => {
  let data = {};
  for (const element of formElements) {
    if (element.value.length > 0) {
      data[element.name] = element.value;
    }
  }
  return data;
};

formId.addEventListener("change", (e) => {
  let data = getFormData();
  localStorage.setItem("formData", JSON.stringify(data));
});

const populateForm = () => {
  if (localStorage.key("formData")) {
    const savedData = JSON.parse(localStorage.getItem("formData")); // get and parse the saved data from localStorage
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};

populateForm();
