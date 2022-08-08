const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const again = document.querySelector('.again');
const button = document.querySelector('.btn');
const backbutton = document.querySelector('.back');
const rates = document.querySelectorAll('.no');
const rating = document.querySelector('.rating');


button.addEventListener('click', change);
function change() {
    box2.classList.remove ("hidden");
    box1.style = "display: none";

}

backbutton.addEventListener('click', goback);
function goback() {
    box2.classList.add ("hidden");
    box1.style = "display: block";
    again.innerHTML = "<h3>Rate Again</h3>";
}

rates.forEach((rate) => {
    rate.addEventListener('click', display);
    function display() {
        rating.innerHTML = rate.innerHTML;
    }
})


