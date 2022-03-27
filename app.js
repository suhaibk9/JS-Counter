const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");
let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    console.log(styles);
    if (styles.contains("reset")) count = 0;
    else if (styles.contains("decrease")) count--;
    else count++;
    if (count > 0) value.style.color = "green";
    if (count < 0) value.style.color = "red";
    if (count == 0) value.style.color = "black";
    value.textContent = count;
  });
});
