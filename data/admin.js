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
        productName: "Sanji Jordans",
        price:3000,
        brand:"One Piece",
    },
    {
        id: 4,
        productName: "Jimbe yeezy",
        price:3000,
        brand:"One Piece",
    },
    {
        id: 5,
        productName: "law yeezy",
        price:2000
 ,      brand:"One Piece",
    },
    {
        id: 6,
        productName: "Ussop yeezy",
        price:2000,
        brand:"One Piece",
    },
    {
        id: 7,
        productName: "Luffy T-shirt",
        price:700,
        brand:"One Piece",
    },
    {
        id: 8,
        productName: "Mihawk Hoody",
        price:1000,
        brand:"One Piece",
    }
];
Object.keys(products).forEach((productsIndex) => {
    let item = products[productsIndex];
    let table = document.querySelector('tbody');
    table.innerHTML += `
    <tr>
        <td>${item.productName}</td>
        <td>R${item.price}</td>
        <td>${item.brand}<button id="adm" onclick="addCart()">Add to cart</button><button id="add" onclick="del()">Delete</button></td>
    </tr>
    `
})