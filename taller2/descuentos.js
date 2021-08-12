const coupons = ["low", "medium", "high", "super_high"];
let price;
let coupon;
let discount;
let finalPrice;
let result;
function discountPrice() {
    price = document.getElementById("InputPrice");
    price = parseInt(price.value);
    coupon = document.getElementById("InputCoupon");
    coupon = coupon.value;
    switch (coupon) {
        case "low":
            discount = 0.9;
        break;
        case "medium":
            discount = 0.8;
        break;
        case "high":
            discount = 0.65;
        break;
        case "super_high":
            discount = 0.5;
        break;
        default:
        break;
    }
    finalPrice = price * discount;
    result = document.getElementById("result");
    result.innerText = "Precio final: " + finalPrice;
}
