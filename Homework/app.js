const path = require('path');
const fs = require('fs');


// fs.mkdir(path.join(__dirname, 'main'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     } else {
//         fs.mkdir(path.join(__dirname, 'main', 'online'), (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         });
//
//         fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         });
//     }
// });

// fs.appendFile(path.join(__dirname, 'app.js'),
//     '\nconst onlineUsers = [\n' +
//     '{ name: "Andrii", age: 22, city: "Lviv" }, ' +
//     '\n{ name: "Bohdan", age: 20, city: "Kyiv" }, ' +
//     '\n{ name: "Tanya", age: 21, city: "Poltava" }' +
//     '\n]; ', (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     });
//
// fs.appendFile(path.join(__dirname, 'app.js'),
//     '\nconst inPersonUsers = [\n' +
//     '{ name: "Katya", age: 19, city: "Odessa" }, ' +
//     '\n{ name: "Ira", age: 23, city: "Dnipro" }, ' +
//     '\n{ name: "Boris", age: 21, city: "Poltava" }' +
//     '\n]; ', (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     });

// const onlineUsers = [
//     { name: "Andrii", age: 22, city: "Lviv" },
//     { name: "Bohdan", age: 20, city: "Kyiv" },
//     { name: "Tanya", age: 21, city: "Poltava" }
// ];
// const inPersonUsers = [
//     { name: "Katya", age: 19, city: "Odessa" },
//     { name: "Ira", age: 23, city: "Dnipro" },
//     { name: "Boris", age: 21, city: "Poltava" }
// ];


// for (let i = 0; i < onlineUsers.length; i++) {
//     for (const user in onlineUsers[i]) {
//         fs.writeFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), `${user}:${onlineUsers[i][user]}\n`, {flag: 'a'}, (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
//     }
// }
//
// for (let i = 0; i < inPersonUsers.length; i++) {
//     for (const user in inPersonUsers[i]) {
//         fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'), `${user}:${inPersonUsers[i][user]}\n`, {flag: 'a'}, (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
//     }
// }

// fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'), 'utf-8', (err, personUsers) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     } else {
//         fs.readFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), 'utf-8', (err, onlineUsers) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             } else {
//                 fs.writeFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), personUsers, (err) => {
//                     if (err) {
//                         console.log(err);
//                         throw err;
//                     } else {
//                         fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'), onlineUsers, (err) => {
//                             if (err) {
//                                 console.log(err);
//                                 throw err;
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })