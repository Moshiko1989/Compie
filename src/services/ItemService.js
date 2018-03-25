import { markets } from '../markets.json';


// const items = [
//     {
//         name: 'item zero',
//         _id: '100'
//     },
//     {
//         name: 'item one',
//         _id: '101'
//     },
//     {
//         name: 'item two',
//         _id: '102'
//     },
//     {
//         name: 'item three',
//         _id: '103'
//     },
// ]


function loadItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(markets);
        }, 1000);
    });
}

export default {
    loadItems,
}