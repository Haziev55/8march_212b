document.querySelector('button').addEventListener('click', function(){
document.querySelector('header').classList.toggle('open');
})

window.addEventListener("keydown", (e) => {
if (e.key === "Escape") {
document.querySelector("header").classList.remove("open");
}
});

document.getElementById("menu").addEventListener("click", (event))