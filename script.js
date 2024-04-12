const btn = document.querySelector("button")
btn.addEventListener("click",Download);


function Download() {
    const a = document.createElement('a');
    a.target = "_blank"
    a.download = "Fire Shot";
    a.href = "https://drive.usercontent.google.com/download?id=1G0AGoykPuZYrH0ZwZwhg1y4N2hx7Fefb";

    a.click();
}