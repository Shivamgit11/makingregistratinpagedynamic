// console.log('person1: shows tickets');
// console.log('person2: shows tickets');

// const promisWifeBringingTickets = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('ticket');
//     }, 3000)
// });

// const getpopcorn = promisWifeBringingTickets.then((t) => {
//     console.log('wife: I have the tickets')
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject) => resolve(`${t} popcorn`))
// });

// const getButter = getpopcorn.then((t) => {
//     console.log('husband: I got some Popcorn')
//     console.log('husband: we should go in ');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} butter`))
// })

// getButter.then((t) => console.log(t));


// console.log('person4: shows tickets');
// console.log('person5: shows tickets');

// Async
// console.log('person1: shows tickets');
// console.log('person2: shows tickets');

// const preMovie = async () => {
//     const promisWifeBringingTickets = new Promise((resolve, reject) => {
//             setTimeout(() =>{
//                 resolve('ticket');
//             }, 3000)
//         });
//         const getpopcorn = new Promise((resolve,reject) => resolve('popcorn'));
//         const addButter = new Promise((resolve, reject) => resolve('butter'));
//         const getColdDrinks = new Promise((resolve, reject) => resolve('coldrinks'))    
//         let ticket = await promisWifeBringingTickets;
//         console.log(`wife: I have the ${ticket}`)
//         console.log('husband: we should go in');
//         console.log('wife: no i am hungry');

//         let popcorn = await getpopcorn;

//         console.log(`husband: I got some ${popcorn}`)
//         console.log('husband: we should go in ');
//         console.log('wife: I need butter on my popcorn');

//         let butter = await addButter;

//         console.log(`husband: i got some ${butter} on popcorn`);
//         console.log('husband: anything else darling')
//         console.log('wife: lets go we are getting late')
//         console.log('husband: thank you for the reminder *grins*')

//         let coldrinks = await getColdDrinks;
//         console.log(`husband: lets drink ${coldrinks} while we reach ticket counter`);
//         console.log('Another Person: Go fast the counter is going to close');
//         console.log('Husband: thanks')
//     return ticket;
// };

// preMovie().then((m) => console.log(`person3: showz${m}`));

// console.log('person4: shows tickets');
// console.log('person5: shows tickets');

//Promise All in async await

// console.log('person1: shows tickets');
// console.log('person2: shows tickets');

// const preMovie = async () => {
//     const promisWifeBringingTickets = new Promise((resolve, reject) => {
//             setTimeout(() =>{
//                 resolve('ticket');
//             }, 3000)
//         });
//         const getpopcorn = new Promise((resolve,reject) => resolve('popcorn'));
//         const getCandy = new Promise((resolve,reject) => resolve('candy'));
//         const getCoke = new Promise((resolve,reject) => resolve('coke'));    
//         let ticket = await promisWifeBringingTickets;
        
//         let [popcorn, candy, coke] = await Promise.all([getpopcorn,getCandy,getCoke]);
//         console.log(`${popcorn}, ${candy}, ${coke}`)
//     return ticket;
// };

// preMovie().then((m) => console.log(`person3: showz${m}`));

// console.log('person4: shows tickets');
// console.log('person5: shows tickets');

//Async await second
console.log('person1: shows tickets');
console.log('person2: shows tickets');

const preMovie = async () => {
    const promisWifeBringingTickets = new Promise((resolve, reject) => {
            setTimeout(() =>{
                reject('ticket');
            }, 3000)
        });
        let ticket;
        try {
            ticket = await promisWifeBringingTickets;
        }catch(e) {
            ticket = 'sad face'
        }
    return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows tickets');
console.log('person5: shows tickets');