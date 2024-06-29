function decryptText() {

	//take the input from the user
	var str = document.getElementById('input-text').value;

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let result = "";
	for (let char of str){

		let index = alphabet.indexOf(char.toUpperCase());
		if (index === -1){
			result += char;
		} else {
			if(index==0){
				result += 'Z';
			}else{
				result +=  alphabet[index-1];
			}
		}
	}

	document.getElementById('output-text').value = result;
}