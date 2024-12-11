// Cookies
const cookiesBtn = document.getElementById("cookies-btn");
const containerCookie = document.querySelector(".container-cookie");

cookiesBtn.addEventListener("click", () => {
    localStorage.setItem("acceptedCookies", "true");
    containerCookie.style.display = "none";
});

if (localStorage.getItem("acceptedCookies") === "true") {
    containerCookie.style.display = "none";
} else {
    containerCookie.style.display = "block";
}



// Cross 
const cross = document.querySelector(".cross");



cross.addEventListener("click", ()=>{
    containerCookie.style.display = "none"
})