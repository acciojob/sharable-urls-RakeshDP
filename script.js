// your code here
const URL = document.getElementById("url");
const nameInput = document.getElementByID("name")
const yearINput = document.getElementByID("year")

function handleSubmit(event){
	event.preventDefault()
	const name= nameInput.value;
	const year = yearINput.value;
	
	const queryString = `?name=${name}&year=${year}`;
	URL.textContent = `https://localhost:8080/${queryString}`
}