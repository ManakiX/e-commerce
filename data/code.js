// Sample data: example
let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
    {
        id: 1,
        productName: "Luffy Jorden ",
        Price: "3 000",
        brand:"Jordens",
    },
    {
        id: 2,
        productName: " Zoro Jorden",
        Price: "3 000",
        brand:"Jordens",
    },
    {
        id: 3,
        productName: "Sanji Straw-Hat",
        Price:"3 000",
        Brand:"One Piece",
    },
    {
        id: 4,
        productName: "Jimbe yeezy",
        Price:"1 500",
        Brand:"One Piece",
    },
    {
        id: 5,
        productName: "law yeezy",
        Price:"1 500"
 ,      Brand:"One Piece",
    },
    {
        id: 6,
        productName: "Ussop yeezy",
        price:"1 500",
        brand:"One Piece",
    }
];
// const categories = [...new Set(product.map((item)=>
//     {return item}))]
//     let i = 0;
//     document.getElementById('root').innerHTML = categories.map((item)=>
//     {wrapper.innerHTML += 
//         var {productName, price, brand} = item;
//         return(
//             <div class="box"></div>
//         )
//     })
const categories = [...new Set(product.map((item)=>
        {return item}))]
        let i = 0;
        document.getElementById('root').innerHTML = categories.map((item)=>{
        innerHTML += 
        `
        <div class="box"></div>
                `
    })