const questions = document.querySelectorAll(".question");
const responses = document.querySelectorAll(".response");


questions.forEach((question) => {
    question.addEventListener("click", ()=>{
        const dataId = question.getAttribute("data-id");
        const response = document.querySelector("[data-id='"+dataId+"'].response");

        responses.forEach((response)=>{
            response.style.display = "none"
        })
        if (response.style.display === "none" || response.style.display === "") {
            response.style.display = "block"
        } else {
            response.style.display = "none"
        }
    })
});


