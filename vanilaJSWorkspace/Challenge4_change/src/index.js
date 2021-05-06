const country = document.querySelector("select"),
    option = country.querySelector("option");

const USER_CT = "Country";

function saveCountry(text){
    localStorage.setItem(USER_CT, text);
}

function handleChange(event){
    const value = event.target.value;
    saveCountry(value);
}

function setCountry(){ // 값 불러오는 함수. 아무 값도 없으면 아무것도 안하기.
    country.addEventListener("change", handleChange);
}

function loadCountry(){
    const currentId = localStorage.getItem(USER_CT);
    const selectId = document.getElementById(currentId);
    // selectId = 
    console.log(selectId);

    // const currentText = document.getElementById(currentId).textContent;
    // option.textContent = currentText;
}

function getCountry(){
    const currentCountry = localStorage.getItem(USER_CT);
    setCountry();
    if (currentCountry === null){
        ;
    }
    else{
        loadCountry();
    }
    
}

function init()
{
    getCountry();
}

init();