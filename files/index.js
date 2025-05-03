const saveBtn = document.querySelector(`#save-btn`);
const inputEl = document.querySelector(`#input-el`);
const ulEl = document.querySelector(`#ul-el`);

let myLeads = [];

saveBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  localStorage.setItem(`myLeads`, JSON.stringify(myLeads));
  console.log(myLeads);
  renderLeads();
  inputEl.value = ``;
});

let renderLeads = () => {
  ulEl.innerHTML = ``;
  for (let i = 0; i < myLeads.length; i++) {
    const li = document.createElement(`li`);
    const a = document.createElement(`a`);
    a.href = myLeads[i];
    a.textContent = myLeads[i];
    a.target = `_blank`;
    li.append(a);
    ulEl.append(li);
  }
};

myLeads = JSON.parse(localStorage.getItem(`myLeads`));
renderLeads();
