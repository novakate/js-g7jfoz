/*Nechte uživatele zadat 3 čísla a určete největší z nich - výsledek vypište do konzole ve formátu "Největší číslo je A: 37".
 */

let a = Number(prompt('Zadej A:'));
let b = Number(prompt('Zadej B:'));
let c = Number(prompt('Zadej C:'));

if (a > b) {
  if (a > c) {
    console.log('Největší je A s hodnotou ' + a);
  } else {
    console.log('Největší je C s hodnotou ' + c);
  }
} else {
  if (b > c) {
    console.log('Největší je B s hodnotou ' + b);
  } else {
    console.log('Největší je C s hodnotou ' + c);
  }
}

if (a > b && a > c) {
  consol.log('Největší je A s hodnotou ' + a);
} else if (b > a && b > c) {
  console.log('Největší je B s hodnotou' + b);
} else {
  console.log('Největší je C s hodnotou ' + c);
}
