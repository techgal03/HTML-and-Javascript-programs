var person = {
	fName : "Adithya",
	lName : "Ramesh",
	age : 10,
	fullname : function(){
		return this.fName + this.lName;
	}
}

function bulbon(){
	document.getElementById('image').src = 'bulbon.gif';
			}

function bulboff(){
	document.getElementById('image').src='bulboff.gif';
			}

function showtxt(){
	document.getElementById('hidetext').style = 'display:block';
	}

function changeTxt(){
	document.getElementById("demo").innerHTML = person.fName ;
	}

function findtype(){
	var x  = [1, 2, 3];
	alert(typeof x);
}


/* person.fullName(){
	flname = fName + lName;
	document.getElementById("demo").innerHTML = flname;
} */
