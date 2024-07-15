let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

function multiplyNumeric(obj, num) {
for (let key in obj) {
  if (!isNaN(obj[key]))
  obj[key] = obj[key] * num
}
};
console.log(`Initial WxH `,menu)


multiplyNumeric(menu, 3)
console.log(`After multiply `,menu)
// menu = {
//  width: 600,
//  height: 900,
//  title: 'My menu'
// };
