//FEATURES API
const features = [
    {
        image: "./images/features/f1.webp",
        feature: "Free Shipping",
    },
    {
        image: "./images/features/f2.webp",
        feature: "Online Order",
    },
    {
        image: "./images/features/f3.webp",
        feature: "Save Money",
    },
    {
        image: "./images/features/f4.webp",
        feature: "Promotions",
    },
    {
        image: "./images/features/f5.webp",
        feature: "Happy Sell",
    },
    {
        image: "./images/features/f6.webp",
        feature: "F 24/7 Support",
    },
];

// FOR DISPLAY ALL FEATURES DYNAMICALLY
const feature = document.querySelector(".feature");
const featureShow = () => {
    let featureHTML = "";
    features.map((curEle) => {
        featureHTML += `<div class="fe-box">
    <img src="${curEle.image}" alt="feature">
        <h6>${curEle.feature}</h6>
</div>`;
    });
    feature.innerHTML = featureHTML;
};
document.onload = featureShow();
