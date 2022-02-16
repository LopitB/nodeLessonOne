// require('./test/helper')

// const {greeting}= require('./helper');
//
// greeting('Bohdan');

// console.log(__filename);
// console.log(__dirname);

// const{test}=require('./test/helper')
//
// test()
// console.log(process.cwd(), 'process');
// console.log(__dirname, 'app dirname');

// console.log(name);


// const path = require('path');

// const joinedPath=path.join(__dirname, 'test2', 'files', 'public', 'text.txt');
//
// console.log(joinedPath);

// const normalizedPath=path.normalize('test/\\//test23////test1//text.txt');
//
// console.log(normalizedPath, 'NORMALIZED');
//
// const resolvedPath=path.resolve('test///files//public///file.txt');
//
// console.log(resolvedPath, 'RESOLVED');


// const os = require('os');

// console.log(os.cpus());
// console.log(os.cpus().length);

// console.log(os.arch());

// const path = require('path');
// const fs = require('fs');

// fs.writeFileSync(path.join(__dirname,'files','file.txt'), 'SOME DATA');

// fs.writeFile(path.join(__dirname,'files','file2.txt'), 'SOME DATA', (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// });

// fs.readFile(path.join(__dirname, 'files', 'file2.txt'),'utf-8', (err, data)=>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//
//     console.log(data)
// })

// for (let i = 0; i < 1000; i++) {
//     fs.appendFile(path.join(__dirname, 'files', 'file2.txt'), '\nTEST',{flag:'w'}, (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
// }

// fs.truncate(path.join(__dirname, 'files', 'file2.txt'),(err)=>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// });
//
// fs.unlink(path.join(__dirname, 'files', 'file2.txt'), (err)=>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// });

// fs.mkdir(path.join(__dirname, 'public', 'files', 'test', 'test2'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// });

// fs.rmdir(path.join(__dirname,'test2'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// });

// fs.readdir(path.join(__dirname, 'test'), (err, data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//
//     console.log(data)
// });

// fs.rename(path.join(__dirname, 'test', 'test2.txt'),
//     path.join(__dirname, 'public', 'files','test','test2','test2.txt'),
//     (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// });