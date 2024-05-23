const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// Application of map
const brands = products.map(product => product.brand);
// console.log(brands);
// const productsName= products.map(names => names.name);
// console.log(productsName);
// const productPrice = products.map(prices => prices.price);
// console.log(productPrice);
// const productColor = products.map(pColor => pColor.color);
// console.log(productColor);
// console.log(productColor.length);

// const lengthName = productsName.length;
// console.log(lengthName);


// Application of forEach

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));
// products.forEach(product => console.log(product.price));


// Application of filter

const cheap = products.filter( p => p.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);

const oneBrand = products.filter(p => p.brand.includes('casio'));
// console.log(oneBrand);

const favColor = products.filter( col => col.color.includes('yellow'));
// console.log(favColor);

const allBrand = products.filter(pr => pr.brand);
// console.log(allBrand);



// Application of find
// ------------------------------------------------------------
const special = products.find( prod => prod.name.includes('one'));
// console.log(special);

const priceRange = products.find( pr => pr.price >= 7000);
console.log(priceRange);


