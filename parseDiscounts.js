//Task with strings
const list = document.querySelectorAll('li');
const discountsList = Array.from(list);
const getPriceFromText = text => parseInt(text.match(/\d+(?=\$)/)[0]);
const originalPrice = getPriceFromText(document.getElementById('totalPrice').innerText);
let discounts = {};
let result = [];

discountsList.forEach(item => {
  const text = item.innerText;
  const codeName = text.match(/'.*?'/)[0].replace(/'/g, "");
  const priceWithDiscount = getPriceFromText(text);
  const discount = originalPrice - priceWithDiscount;
  const discountData = {[codeName]: discount};
  Object.assign(discounts, discountData);
});

const getBestCode = () =>
  Object.keys(discounts).reduce((a, b) =>
    discounts[a] > discounts[b] ? {
      bestCode: a,
      bestCodeDiscount: discounts[a]
    } : {
      bestCode: b,
      bestCodeDiscount: discounts[b]
    });

result.push(discounts, getBestCode(discounts), {originalPrice});

document.getElementById('result').innerHTML= '<code>' + JSON.stringify(result) + '</code>';
