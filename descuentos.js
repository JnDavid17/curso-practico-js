
function calculatePriceWithDiscount (price,discount, coupon){
    let discountValue = parseInt(discount);
    if (coupon =="yoqse") {
        discountValue=discountValue+10;
    }
    let auxDiscount = document.getElementById("discount-title");
    auxDiscount.innerText = discountValue+"% DCTO";
    const percentagePriceWithDiscount = 100-discount;
    const priceWithDiscount = (price * percentagePriceWithDiscount)/100;
    return priceWithDiscount;
}




function priceDiscount(){
    debugger;
    document.getElementById("products").style.display = "flex";
    let inputPrice = document.getElementById("InputPrice");
    let inputDiscount = document.getElementById("InputDiscount");
    let coupon = document.getElementById("discountCoupon")


    let priceValue = inputPrice.value;
    let discountValue = inputDiscount.value;
    let couponValue = coupon.value;

    let auxPrice = document.getElementById("originalPrice");
    auxPrice.innerText = "$"+priceValue;


    let priceWithDiscount = calculatePriceWithDiscount(priceValue,discountValue,couponValue);

    const aux = document.getElementById("discountedPrice");
    aux.innerText = "$"+priceWithDiscount ;

    let substraction = priceValue - priceWithDiscount;
    let substractionValue = document.getElementById("save");
    substractionValue.innerText = "Save $"+substraction;

    let status = document.getElementById("status-product");
    status.innerText="Out of stock"
}

document.getElementById("calculatePrice").addEventListener("click",priceDiscount)
document.getElementById("products").style.display = "none";