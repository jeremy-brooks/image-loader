createLists = () => {
  let yearsToCreate = 41;
  let monthsToCreate = ["1023", "1123", "1223", "0123", "0223", "0323"];
  let forecastVariables = ["z500", "abc", "cde"];

  let yearDropDown = document.getElementById("yearDropDown");
  let dateDropDown = document.getElementById("dateDropDown");
  let forecastVariableDropdown = document.getElementById(
    "forecastVariableDropDown"
  );

  for (let yearCount = yearsToCreate; yearCount > 0; yearCount--) {
    let option = document.createElement("option");
    let now = new Date();
    let label = now.getFullYear() - yearCount;
    option.text = label;
    option.value = `./data/${label}`;
    yearDropDown.appendChild(option);
  }

  monthsToCreate.forEach((month) => {
    let option = document.createElement("option");
    option.text = month;
    dateDropDown.appendChild(option);
  });

  forecastVariables.forEach((forecastVariable) => {
    let option = document.createElement("option");
    option.text = forecastVariable;
    forecastVariableDropdown.appendChild(option);
  });
};
