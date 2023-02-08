// Set the interval to check for the form element

let ticked = 0;
const intervalId = setInterval(function() {
	
	try {
	// Basic Answer Field
	let answer1 = document.getElementsByClassName("TestedWord_word_placeholder__2xuzY").item(0).innerHTML.split('"">')[1].split("</span")[0];
	let input_field1 = document.getElementsByClassName("Input_input__3CI_c").item(0);
	input_field1.placeholder = answer1
	// Basic Answer Field
	let answer2 = document.getElementsByClassName("TestedWord_word_placeholder__2xuzY").item(1).innerHTML.split('"">')[1].split("</span")[0];
	let input_field2 = document.getElementsByClassName("Input_input__3CI_c").item(1);
	input_field2.placeholder = answer2
	// Basic Answer Field
	let answer3 = document.getElementsByClassName("TestedWord_word_placeholder__2xuzY").item(1).innerHTML.split('"">')[1].split("</span")[0];
	let input_field3 = document.getElementsByClassName("Input_input__3CI_c").item(2);
	input_field3.placeholder = answer3
	} catch {
}

	// Advanced Input Field
	let ADV_awnser1 = document.getElementsByClassName("BlurredWord__word BlurredWord__word--blurred").item(0).innerHTML.split('"">')[1].split("</span")[0];
	let ADV_input1 = document.getElementsByClassName("List__WordInput__input").item(0);
	ADV_input1.placeholder = ADV_awnser1

	
});
