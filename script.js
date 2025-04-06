function stringChop(str, size) {
  // your code here
	let arr=[];
	for(let i=0; i<str.length; i=i+5){
		arr.push(str.slice(i,i+5));
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
