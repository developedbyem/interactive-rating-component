const nums = document.querySelectorAll("li");
const btn = document.querySelector("button");

const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thankyou-card");

const notif = document.querySelector(".notif");

nums.forEach((num) => {
  num.addEventListener("click", function (e) {
    const target = e.target;
    target.classList.add("active");

    nums.forEach((item) => {
      if (item !== num) {
        item.classList.remove("active");
      }
    });
  });
});

btn.addEventListener("click", () => {
  var currentActive = document.querySelector(".active");
  ratingCard.classList.add("hideRatingCard");
  thankYouCard.classList.add("showThankYouCard");
  notif.innerHTML = `You selected ${currentActive.innerHTML} out of 5`;
});
