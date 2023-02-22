const form = document.getElementById("contactForm")
const names = [];
const telephoneNumbers= [];
let lines = '';

form.addEventListener(`submit`, function(e){
    e.preventDefault();

    addLine();
    refreshTable();
});

function addLine(){
    const inputContactName = document.getElementById("contactName");
    const inputTelephoneNumber = document.getElementById("telephoneNumber");
    if (names.includes(inputContactName.value)){
        alert(`The name ${inputContactName.value} was already inserted`)
    }else{

    names.push(inputContactName.value);
    telephoneNumbers.push(inputTelephoneNumber);

    let line = `<tr>`;
    line += `<td>${inputContactName.value}</td>`;
    line += `<td>${inputTelephoneNumber.value}</td>`;
    line += `</tr>`;
    
    lines += line;
    }

    inputContactName.value = '';
    inputTelephoneNumber.value = '';
}

function refreshTable(){
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = lines;
}