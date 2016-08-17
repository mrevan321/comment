function reveal(){
	// creates the variables for the reveal
// creats new div
var newDiv=document.createElement('div')
// newdiv color
var att=document.createAttribute("class")
att.value="newColor"
newDiv.setAttributeNode(att)
// get info from user input,comment, and pic
	var text=document.getElementById('user').value
	var text2=document.getElementById('com').value
	var pictureURL = document.getElementById("pictureURL").value

// creates the delete button
		  var d = document.createElement('button');
	  d.innerText = "Delete";
	   d.className = "deletebutton";
	   // IMPORTANT  . this is saying using the function below
	  d.addEventListener('click', removeComment, false)


	 

	

	


	 // creates new elements 
	var img = document.createElement("img")
  img.setAttribute("src", pictureURL)  //contains source in picture url

//creates new tags
	newdate=document.createElement('p')
	newh2=document.createElement('h2')
	newh3=document.createElement('h3')

// enters in information from
	newdate.textContent=( Date() )
	newh2.textContent=('Username: ' + text )

	newh3.textContent=('Comment: ' + text2 )

	//order of the new tags in the result di
	result.appendChild(newDiv)
	newDiv.appendChild(newdate)
	newDiv.appendChild(newh2)
	newDiv.appendChild(newh3)
	newDiv.appendChild(img)
	 newDiv.appendChild(d)
		
	// document.getElementById('result').appendChild(d)
	
}

 function erase() {
  document.getElementById('user').value = "";
   document.getElementById('com').value = "";
   document.getElementById('pictureURL').value = "";
 }



function removeComment(e){
	var target, parent, grandparent
	// pick selected target
	target=e.target  //button
	parent=target.parentNode //looks at div
	grandparent=target.parentNode.parentNode  //looks at the body
// remove parent(div) from grandparent (body)
	grandparent.removeChild(parent)
}
// 
var comments=document.getElementById('result')
// when button is clicked , anon function(remove comment)
comments.addEventListener('click', function(e){removeComment(e)}, false)