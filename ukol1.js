/*Založte proměnné pro jméno, vek, vahu v kg a a vysku v metrech - nastavte jim libovolnou hodnotu. 
Spočtěte BMI Do konzole vypište větu ve formátu:
"Jmenuji se Petra, je mi 34 let, vážím 65kg, měřím 1.67m a moje BMI je 23,2.".
*/


let jmeno = 'Katka';
let vek = 26;
let vaha = 55;
let vyska = 1.73;
let BMI = vaha / vyska ** 2;
console.log(BMI);
console.log(
  'Jmenuji se ' +
    jmeno +
    ', je mi ' +
    vek +
    ' let, vazim ' +
    vaha +
    ' kg, merim ' +
    vyska +
    ' m a moje BMI je ' +
    BMI
);
