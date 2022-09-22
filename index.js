import './index.css';

(function (w) {
  let inputEl = document.querySelector('#input-el');
  let saveEl = document.querySelector('#input-btn');
  let myLeads = [];
  let ulEl = document.querySelector('#ul-el');
  const containerEL = document.getElementById('container');
  let tabBtn = document.querySelector('#savetab-btn');

  saveEl.addEventListener('click', function () {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    renderLeads();
  });

  function renderLeads() {
    let listitems = '';
    for (let i = 0; i < myLeads.length; i++) {
      // ulEl.innerHTML += '<li>' + myLeads[i] + '</li';
      // method: 2
      // const li = document.createElement("li")
      // li.textContent = myLeads[i]
      // ulEl.append(li)
      //method 3
      // listitems += '<li><a target = "_blank" href = "' + myLeads[i] + '">' + myLeads[i] + '</a></li>';
      //alternative method using template string, it helps in writing in  ultiple strings
      listitems += `<li>
                        <a target = "_blank" href = "${myLeads[i]}">
                          ${myLeads[i]}
                        </a>
                      </li>`;
    }
    ulEl.innerHTML = listitems;
  }

  w.renderLeads = renderLeads;
})(window);

//'www.google.com', 'www.facebook.com'
