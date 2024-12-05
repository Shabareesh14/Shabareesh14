let arr = [10,500,43,50];

let firstMin = Infinity;
let secondMin = Infinity;

for(let i = 0; i < arr.length; i++){
	if(arr[i] < firstMin){
		secondMin = firstMin;
		firstMin = arr[i];
	}
	else if(arr[i] < secondMin && arr[i] !== firstMin){
		secondMin = arr[i];
	}
 	console.log(secondMin);
}


const frequency = (arr1,item)=>{
	let count = 0;
	for(let i = 0; i < arr1.length; i++){
		if(arr1[i] === item){
			count++;
		}
	}
	return count;
}
const a =[1,2,1,2,2,3];
console.log(frequency(a,1));
console.log(frequency(a,2));
console.log(frequency(a,3));


let arr2=[10,41,8,16,20,36,9,13,20];
	
	/*for(let i = 0; i <= arr2.length-1; i++){
		for(let j = 0; j < i; j++){
			var temp = arr2[j];
			arr2[j] = arr2[i+1];
		
		}
		console.log();
	}*/
	
	
		largest1 = -Infinity,largest2 = -Infinity,largest3 = -Infinity;
		smallest1 = Infinity,smallest2 = Infinity,smallest3 = Infinity;
		
	for(let i = 0; i < arr2.length; i++){
		
		if(arr2[i] > largest1){
			largest3 = largest2;
			largest2 = largest1;
			largest1 = arr2[i];
		}
		
		else if(arr2[i] > largest2){
			largest3 = largest2;
			largest2 = arr2[i];
		}
		
		else if(arr2[i] > largest3){
			largest3 = arr2[i];
		}
		
		if(arr2[i] < smallest1){
			smallest3 = smallest2;
			smallest2 = smallest1;
			smallest1 = arr2[i];
		}
		
		else if(arr2[i] < smallest2){
			smallest3 = smallest2;
			smallest2 = arr2[i];
		}
		
		else if(arr2[i] < smallest3){
			smallest3 = arr2[i];
		}
	}
	
	let sum3Largest = largest1 + largest2 + largest3;
	let product3Smallest = smallest1*smallest2*smallest3;
	
	if(sum3Largest === product3Smallest){
		console.log("Equal");
	}
	else if(sum3Largest > product3Smallest){
		console.log("sum3Largest");
	}
	else{
		console.log("product3Smallest");
	}
	console.log(sum3Largest);
	console.log(product3Smallest);