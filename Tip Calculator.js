let billAmount = document.getElementById("amount");
let serviceLevel = document.getElementsByName("choice");
let persons = document.getElementById("persons");

  calculate.addEventListener("click", calculateTip);
	
	function calculateTip () {
  for( let i=0; i < serviceLevel.length; i++){
		if (serviceLevel[i].checked) {
			let total  = (billAmount.value * serviceLevel[i].value) / persons.value;
			document.getElementById("total").innerHTML = total;
	}
}
};
