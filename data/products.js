// Sample data: example
let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
    
    {
        id: 1,
        productName: "Luffy Jordan ",
        price: 3000,
        brand:"Jordans",
    },
    {
        id: 2,
        productName: " Zoro Jordans",
        price: 3000,
        brand:"Jordans",
    },
    {
        id: 3,
        productName: "Sanji Straw-Hat",
        price:3000,
        Brand:"One Piece",
    },
    {
        id: 4,
        productName: "Jimbe yeezy",
        price:3000,
        Brand:"One Piece",
    },
    {
        id: 5,
        productName: "law yeezy",
        price:1500
 ,      Brand:"One Piece",
    },
    {
        id: 6,
        productName: "Ussop yeezy",
        price:1500,
        brand:"One Piece",
    }
];
Object.keys(products).forEach((productsIndex) => {
    let item = products[productsIndex];
    let table = document.querySelector('tbody');
    b.innerHTML += `
    <tr>
        <td>${item.productName}</td>
        <td>${item.price}</td>
        <td>${item.brand}</td>
    </tr>
    `
})