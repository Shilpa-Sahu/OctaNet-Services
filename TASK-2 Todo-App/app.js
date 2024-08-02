
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
	if(inputBox.value === ''){
		alert("You must write something ! ");
	}else{
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = " ";
}

       listContainer.addEventListener("click", function(event){
			if(event.target.tagName === "LI"){
				event.target.classList.toggle("checked");
				saveData();
	 		}
			else if(event.target.tagName === "SPAN"){
				event.target.parentElement.remove();
				saveData();
			}

		}, false);

		function saveData (){
			localStorage.setItem("data",listContainer.innerHTML);
		}
				
			 function showTask(){
				listContainer.innerHTML = localStorage.getItem("data");
			 }

             showTask();

			 function displayDateTime() {
				const date = new Date();
				const options = {
				  year: 'numeric',
				  month: 'long',
				  day: 'numeric',
				  hour: '2-digit',
				  minute: '2-digit',
				//   second: '2-digit'
				};
				document.getElementById('currentDateTime').innerHTML = date.toLocaleTimeString('en-US', options);
			  }
			  
			  setInterval(displayDateTime, 1000); // Update every second
			  











// btn.addEventListener("click",function(){
// 	let item = document.createElement("li");
//     item.innerText=inp.value;
// 	let dltbtn = document.createElement("button");
// 	dltbtn.innerText="delete";
// 	dltbtn.classList.add("delete");
// 	item.appendChild(dltbtn);
// 	ul.appendChild(item);
//    inp.value="";
// 	});
 
// 	  
		
// 	  });

			