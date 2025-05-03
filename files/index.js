const saveBtn = document.querySelector(`#save-btn`);
const inputEl = document.querySelector(`#input-el`);
const ulEl = document.querySelector(`#ul-el`);

let myLeads = [`aaaaaaa`, `bbbbbbbbbb`, `ccccc`];

saveBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += `<li>${myLeads[i]} </li`;
}
