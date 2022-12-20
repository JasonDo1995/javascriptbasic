console.log('hello world from video 12');
let arrtop4 = ['MU', 'CHEALSEA', 'MAN', 'LIVERPOIL'];
// for (i = 0; i < arrtop4.length; i++) {
//     console.log('rank:', i + 1, arrtop4[i]);
// }
let i = 0
// while (i < arrtop4.length) { console.log('rank:', i + 1, arrtop4[i],); i++ };
do { console.log('rank:', i + 1, arrtop4[i],); i++ }
while (i < arrtop4.length);

let o = 0;
let flag = false;
while (!flag) {
    console.log('check flag:', o)
    o++;
    if (o === 10) flag = true;
}