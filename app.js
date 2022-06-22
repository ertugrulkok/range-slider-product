const image = document.getElementById("image");
const i = document.getElementById("range");
const o = document.querySelector("output");
const totalprice = document.getElementById("price");
const selectedPrice = document.querySelector("#output");
const radioButtons = document.querySelectorAll('input[name="size"]');
let totalTotalPrice

for (const radioButton of radioButtons) {
  radioButton.addEventListener("change", showSelected);
}

function showSelected(e) {
  if (this.checked) {
    total = `${this.value}`;
    selectedPrice.innerText = "$" + `${total}`;
    image.src = `${this.src}`;

    i.addEventListener("input", function () {
      o.innerHTML = i.value + " " + "Piece(s)";

     totalTolalPrice = total * i.value;

      totalprice.innerHTML =
        "Total" + " " + " " + "$" + totalTolalPrice.toFixed(2);

    });
  }

   if(this.checked){
    totalTolalPrice = total * i.value;
    totalprice.innerHTML = "Total" + " " + " " + "$" + totalTolalPrice.toFixed(2);
        

    }
}