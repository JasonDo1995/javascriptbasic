console.log('hello world from video 13');
let arrtop4 = ['CHELSEA', 'MU', 'MAN', 'LIVERPOOL'];
let i = 0;
// while (i < arrtop4.length) {
//     if (arrtop4[i].length === 4) {
//         console.log('top 4:', i + 1, arrtop4[i])
//     }
//     else if (arrtop4[i].length === 20) { console.log('top 4:', i + 1, arrtop4[i]) }
//     else { console.log('top 4:', i + 1, arrtop4[i]) };
//     i++;
// }
while (i < arrtop4.length) {
    i++;

    if (arrtop4[i] === 'MAN') {
        console.log('found it:', arrtop4[i])
        continue;

    }
    console.log('check i:', i);


}