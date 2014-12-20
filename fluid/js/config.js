/*
 *****************************
 *****************************

	pump configurator javascript function file

 *****************************
 *****************************

*/


// flowrate function for left column pathway
/*
function flowrate() 
	{
    	//  initialize and declare variable to make a button for less than 30 psi
    	// onclick of the less than button run the function pressurelt
    	var lessButton = '<button id="less30" onclick="pressurelt()">Less than 30 psi</button>';
    	
    	//  initialize and declare variable to make a button for greater than 30 psi
    	// onclick of the greater than button run the function pressuregt
    	var greaterButton = '<button onclick="pressuregt()">Greater than 30 psi</button>'; 
    	
    	document.getElementById("pressure1").innerHTML = "What is your pressure?<br />";
	
		// add the less than and greater than 30 psi buttons to left column path
		document.getElementById("pressure1").innerHTML += lessButton + greaterButton;
	}

*/



// function to get the id of the button that is clicked
function getButton(clicked_id)
{
	var button = clicked_id;
	
	
	// 1 to 20 GPM flowrate block
	if (button === "1to20") 
	
		{	
			
			document.getElementById("pressure2").innerHTML += "What is your pressure?<br /> ";
			document.getElementById("pressure3").innerHTML = "";
			document.getElementById("pressure1").innerHTML = "";
			
			
		}
	
	// greater than 20 GPM flowrate block	
	else if (button === "greater20") 
	{
		
		
		document.getElementById("pressure3").innerHTML += "What is your pressure?<br /> ";
		document.getElementById("pressure2").innerHTML = "";
		document.getElementById("pressure1").innerHTML = "";
	}	
	
	
	// less than 1 GPM flowrate block	
	else if (button === "less1")
	{
		document.getElementById("pressure1").innerHTML += "What is your pressure?<br/>"
		document.getElementById("pressure3").innerHTML = "";
		document.getElementById("pressure2").innerHTML = "";
		
	
		
		
		// variables to make buttons for less than and greater than 30 psi pressure buttons
		var lessButton = '<button id="less30" onclick="getButton(this.id)">Less than 30 psi</button>';
		var greaterButton = '<button id ="greater30" onclick="greater30()"  >Greater than 30 psi</button>'; 
		
		// add the less than and greater than 30 psi buttons to left column path
		document.getElementById("pressure1").innerHTML += lessButton +" "  + greaterButton;		
	
			
	}
	else if(button === "less30")
	{
	document.getElementById("pressure1").innerHTML += "<p>Does your fluid contain particulate matter?</p>";	
	

	}	
	
	
	
	
	
	else
	{
	return 0;
	
	}

}


// pressure function for less than 30 psi
function pressurelt()
{
	// declare an initialize a variable for pressure
	// when pressurelt is clicked this assigns a string value for pressure for comparison later
	var pressure = "less than 30";
	
	// tests if pressure is less than 30 assigned from button click
	if(pressure === "less than 30")
	{
		document.getElementById("pressure1").innerHTML += '<p>Does your fluid contain particulate matter?';
	}
	
	
}
// pressure function for when greater than 30 psi button is clicked
function pressuregt()
{
	
	document.getElementById("pressure3").innerHTML +='<input type="checkbox" id="myCheck">';
	
	
	
	document.getElementById("pressure3").innerHTML += '<p>Does your fluid contain particulate matter2?';
	document.getElementById("pressure3").innerHTML += '<button id="yes" onClick="particulateYes()">Yes</button>  <button id = "no" onClick="particulateNo()">No</button>';
	
}

function col3Button() 

{
document.getElementById("pressure3").innerHTML += '<button>first</button>';
	
	
	
	
}









function checkBox() 

{
	var x = document.createElement("INPUT");
	var y = document.createElement("INPUT");
	x.setAttribute("type", "checkbox");
	x.setAttribute("id", "myCheck");
	y.setAttribute("type", "checkbox");
	y.setAttribute("id", "No");
	document.getElementById("pressure3").innerHTML += "Yes";
	document.getElementById("pressure3").appendChild(x);
	document.getElementById("pressure3").innerHTML += "No";
	document.getElementById("pressure3").appendChild(y);
	
}



// clear all and reset button to remove content from the configurator
function clearall()

{

document.getElementById("pressure1").innerHTML = "";
document.getElementById("pressure2").innerHTML = "";
document.getElementById("pressure3").innerHTML = "";

}


function greater30()
{
document.getElementById("pressure1").innerHTML += "<p>Does your fluid contain particulate matter?</p>";	


}






function particulateYes()
{

	document.getElementById("pressure3").innerHTML = "We recommend:<br/> Double diaphragm";
}

function particulateNo()
{

	document.getElementById("pressure3").innerHTML = "We recommend:<br/> Centrifual or gear";
}




