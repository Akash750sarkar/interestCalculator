function calculate() {
    let p = Number(document.querySelector("#Principal").value);
    let r = Number(document.querySelector("#rate").value);
    let time = Number(document.querySelector("#time").value);

    let interest = (p * r * time) / 100;
    let total = p + interest;

    document.querySelector("#interest").textContent = interest;

    document.querySelector("#total").textContent = total;
}