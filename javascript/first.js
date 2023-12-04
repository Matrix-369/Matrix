let result = document.getElementById('result');
			let R = result;
			

			function input(value){
				R.value += value;
				console.log(R.value);
			}			
			let M = maths = () => {
				const exp = eval(R.value);
				R.value = exp;	
				return R.value;		
			}
			clr = () => {
				R.value = '';	
				console.log(R.value);			
			}
			function Clr() {
				R.value = R.value.substring(0,R.value.length - 1);
				console.log(R.value);			
			}
			function percent() {
				const P = eval(R.value);
				R.value = P * 100;
			}
			function square() {
				const S = Math.sqrt(R.value);
				R.value = S;
			}
			function solve(e){
				if(e.key === 'Enter') {
					maths();
				}
				else if(e.key === 'Delete') {
					clr();
				}
			}
			let x = document.querySelector('#help');
			let I = document.querySelector('#img');
			x.style.left = '-270px';
			I.innerHTML = '<button class="img" onclick="s();"><i class="fa-solid fa-handshake-angle"></i></button>'
			function s() {
				if(x.style.left === '-270px') {
					x.style.left = '0px';
					I.innerHTML = '<button class="img" onclick="s();"><i class="fa-solid fa-xmark"></i></button>'
				}
				else{
					x.style.left = '-270px';
					I.innerHTML = '<button class="img" onclick="s();"><i class="fa-solid fa-handshake-angle"></i></button>'
				}
			} 
			let O = document.querySelector('#calcy');
			let T = document.querySelector('#txt');

			O.style.top = '-586px';

			function calcy() {
				if (O.style.top === '-586px') {
					O.style.top = '0px'	;
					T.style.display = 'none';				
				}
				else{
					O.style.top = '-586px';
					T.style.display = 'flex';
				}
            }
			