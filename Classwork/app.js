// const path = require('path');
// const fs = require('fs');

//1)

// fs.writeFile(path.join(__dirname, 'ExOne-1.txt'), 'Some Data', (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     } else {
//         fs.readFile(path.join(__dirname, 'ExOne-1.txt'), 'utf-8', (err, info) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             } else {
//                 fs.writeFile(path.join(__dirname, 'ExOne-2.txt'), info, (err) => {
//                     if (err) {
//                         console.log(err);
//                         throw err;
//                     }
//                 })
//             }
//         })
//     }
// });

//2)

// fs.writeFile(path.join(__dirname, 'ExTwo.txt'), 'Some Data', (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     } else {
//         fs.readFile(path.join(__dirname, 'ExTwo.txt'), 'utf-8', (err, info) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             } else {
//                 fs.mkdir(path.join(__dirname, 'ExTwo'), (err) => {
//                     if (err) {
//                         console.log(err);
//                         throw err;
//                     } else {
//                         fs.writeFile(path.join(__dirname, 'ExTwo', 'ExTwo-2.txt'), info, (err) => {
//                             if (err) {
//                                 console.log(err);
//                                 throw err;
//                             } else {
//                                 fs.unlink(path.join(__dirname, 'ExTwo.txt'), (err) => {
//                                     if (err) {
//                                         console.log(err);
//                                         throw err;
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

//3)

// fs.mkdir(path.join(__dirname, 'ExThree'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     } else {
//         for (let i = 0; i < 5; i++) {
//             fs.writeFile(path.join(__dirname, 'ExThree', `ExThree-${i}.txt`), `${new Date()}`, (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//             });
//             fs.mkdir(path.join(__dirname, 'ExThree', `ExThreeFolder-${i}`), (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//             });
//         }
//         fs.readdir(path.join(__dirname, 'ExThree'), (err, data) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//             data.map(value => {
//                 const status = value.endsWith('txt')
//                 if (status) {
//                     for (let i = 0; i < 5; i++) {
//                         fs.truncate(path.join(__dirname, 'ExThree', `ExThree-${i}.txt`), (err) => {
//                             if (err) {
//                                 console.log(err);
//                                 throw err;
//                             }
//                         });
//                     }
//                 }
//
//             });
//             for (let i = 0; i < 5; i++) {
//                 fs.rename(path.join(__dirname, 'ExThree', `ExThreeFolder-${i}`), path.join(__dirname, 'ExThree', `ExThreeFolder_NEW-${i}`), (err) => {
//                     if (err) {
//                         console.log(err);
//                         throw err;
//                     }
//                 });
//             }
//         });
//     }
// });
