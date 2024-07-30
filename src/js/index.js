const li = document.querySelectorAll("li");
const btn = document.querySelector(".submit-btn");
const div = document.querySelectorAll("div");
const selected = document.getElementsByClassName("selected");
const selectedRating = document.querySelector(".selected-rating");


li.forEach(function (item) {
    item.addEventListener("click", () => {
        const itemSelectedNow = document.querySelector(".selected");

        if (itemSelectedNow) {
            itemSelectedNow.classList.remove("selected");
        }

        item.classList.add("selected");
    });
});

btn.addEventListener("click", function () {
    div.forEach(function (element) {
        if (element.classList.contains("hide")) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });

    for (let i = 0; i < selected.length; i++) {
        let selectedNumber = selected[i].innerHTML;
        selectedRating.innerHTML = `You selected ${selectedNumber} out of 5`;
    }
});
