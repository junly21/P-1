const container = document.querySelector(".container");
const writing_container = document.querySelector(".writing_container");
const writing_btn= document.querySelector(".upper-right");
const submit_btn= document.querySelector(".enroll");

function startWriting(){
    container.classList.add("hidden");
    writing_container.classList.remove("hidden");
}

function submitWriting(){
    container.classList.remove("hidden");
    writing_container.classList.add("hidden");
}

writing_btn.addEventListener("click", startWriting);
submit_btn.addEventListener("click", submitWriting);
