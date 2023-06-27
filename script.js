// -----------------------------------SPLICE----------------------------------------

// let arr = ["apple", "banana", "kiwi", "orange", "pinapple", "cherry"]; //splice original arrayni elementlarini o'chgirish, olib tashlash uchun ishlatiladi
// let body = document.querySelector(".body");
// display();
// let newArr = [...arr];
// function display() {
//   arr.forEach((v, i) => {
//     return (body.innerHTML += `
//     <div class='cont' onclick='remove(${i})'>
//         <p>${v}</p>
//     </div>`);
//   });
// }
// function remove(i) {
//   arr.splice(i, 1);
// }




// window.addEventListener("load", () => {
//     arr.forEach((v, i) => {
//       let div = document.createElement("div");
//       let p = document.createElement("p");
//       body.appendChild(div);
//       div.appendChild(p);
//       div.classList.add("cont");
//       p.innerText += v;

//       document.querySelectorAll(".cont").forEach((v, i) => {
//         v.addEventListener("click", () => {
//           body.removeChild(v);
//         });
//       });
//     });
//   });
