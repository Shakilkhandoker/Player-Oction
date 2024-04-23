function getConvertedValue(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseInt(value);
  return convertedValue;
}

const allBtn = document.getElementsByClassName("add-btn");
for (const btn of allBtn) {
  btn.addEventListener("click", (event) => {
    // console.log(event.target.parentNode.childNodes[1].innerText);
    const name = event.target.parentNode.childNodes[1].innerText;
    console.log(name);
    // console.log(event.target.parentNode.childNodes[3].childNodes[1].innerText);
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    console.log(price);
    // console.log(event.target.parentNode.childNodes[5].childNodes[1].innerText);
    const category =
      event.target.parentNode.childNodes[5].childNodes[1].innerText;
    console.log(category);

    const selectedPlayerList = document.getElementById(
      "selected-players-container"
    );

    const div = document.createElement("div");
    div.classList.add('selected-players')
    const li1 = document.createElement("li");
    li1.innerText = name;
    const li2 = document.createElement("li");
    li2.innerText = price;
    const li3 = document.createElement("li");
    li3.innerText = category;

    div.appendChild(li1);
    div.appendChild(li2);
    div.appendChild(li3);
    selectedPlayerList.appendChild(div);

    // todo-get the total cost 
    const totalCost = document.getElementById("total-cost").innerText;
    const cost = parseInt(totalCost) + parseInt(price);
    document.getElementById("total-cost").innerText = cost;

    // todo-get the 

  });
}


