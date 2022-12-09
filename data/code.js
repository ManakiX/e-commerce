// Sample data: example
let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
    
    {
        id: 1,
        productName: "Luffy Jordan ",
        Price: "3 000",
        brand:"Jordans",
    },
    {
        id: 2,
        productName: " Zoro Jordans",
        Price: 3000,
        brand:"Jordans",
    },
    {
        id: 3,
        productName: "Sanji Straw-Hat",
        Price:3000,
        Brand:"One Piece",
    },
    {
        id: 4,
        productName: "Jimbe yeezy",
        Price:3000,
        Brand:"One Piece",
    },
    {
        id: 5,
        productName: "law yeezy",
        Price:1500
 ,      Brand:"One Piece",
    },
    {
        id: 6,
        productName: "Ussop yeezy",
        price:1500,
        brand:"One Piece",
    }
];
let art = JSON.parse(localStorage.getItem('Catalog'));
Object.keys(art).forEach((artIndex) => {
    let a = art[artIndex];
    let b = document.querySelector('tbody');
    b.innerHTML += `
    <tr>
        <td>${a.size}</td>
        <td>${a.image}</td>
        <td>${a.title}</td>
        <td>${a.medium}</td>
        <td>${a.price}</td>
        <td>${a.delete}</td>
        <td>${a.edit}</td>
    </tr>
    `
})