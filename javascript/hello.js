let x = Number(prompt('enter value of cofficient of x square'));
let y = Number(prompt('enter value of cofficient of x'));
let z = Number(prompt('enter value of cofficient of c'));
solve(x,y,z);
function solve(a,b,c) {
	const eqn = document.querySelector('.eqn');
	eqn.innerHTML = `${a}x<sup>2</sup>+${b}x+${c} = 0`
	// const V = eval(Q);
	// console.log(V);
	let s = Math.sqrt(-(b*b - 4*c*a));
	console.log(s);
	const x = 2 * a;
	const S = (-b - s)/x;
	console.log(2*a);
	const p = (-b + s)/x;
	const soluTion = [];
	soluTion.push(S);
	soluTion.push(p);
	let print = document.querySelector('.prn');
	for (let i = 0; i < soluTion.length; i++) {
		print.innerHTML += `<p>${soluTion[i]}</p>`;
	}
	if (soluTion[0] === soluTion[1]) {
		print.innerHTML = `<p>${soluTion[1]}</p>`;
	}
}
b = 2;
c = 4;
a = 3;
let s = Math.sqrt(-(b*b - 4*c*a));

console.log(s);