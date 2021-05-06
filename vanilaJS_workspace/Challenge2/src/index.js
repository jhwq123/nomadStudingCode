// body background-color 변경
// 화면의 가로축 사이즈인가? 이게 3단계에 걸쳐서 달라져야됨.
// if랑 else로 돌리면됨 옐로900 퍼플700 블루500 단계로.
const colors = ["#3498db", "#8e44ad", "#f1c40f"];

const body = document.querySelector("body");
body.style.backgroundColor = colors[0];

function handleResize(){
    console.log(innerWidth)
    if(innerWidth <= 500 && innerWidth > 0){
        body.style.backgroundColor = colors[0];
    }
    else if(innerWidth <= 700 && innerWidth > 500){
        body.style.backgroundColor = colors[1];
    }
    else{
        body.style.backgroundColor = colors[2];
    }
}

window.addEventListener("resize", handleResize);