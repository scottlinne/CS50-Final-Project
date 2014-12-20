/*
 *****************************
 *****************************

	pump configurator javascript function file

 *****************************
 *****************************

*/



// function to get the id of the button that is clicked and performs the if else statements
function getButton(clicked_id)
{
var button = clicked_id;
	
	
	// 1 to 20 GPM flowrate block
	if (button === "1to20") 
	
		{	
			
			document.getElementById("pressure2").innerHTML = "What is your pressure?<br /> ";
			document.getElementById("pressure3").innerHTML = "";
			document.getElementById("pressure1").innerHTML = "";
			
			// create buttons for less than 30ps and greater than 30 psi
			document.getElementById("pressure2").innerHTML += '<button id="1to20less30" onclick="getButton(this.id)">Less than 30 psi</button>';
			document.getElementById("pressure2").innerHTML += '<button id="1to20greater30" onclick="getButton(this.id)">Greater than 30 psi</button>';
		}

	// greater than 20 GPM flowrate block	
	else if (button === "greater20") 
	{
		
		document.getElementById("pressure3").innerHTML = "What is your pressure?<br /> ";
		document.getElementById("pressure2").innerHTML = "";
		document.getElementById("pressure1").innerHTML = "";
				
		// add the less than and greater than 30 psi buttons to left column path
		document.getElementById("pressure3").innerHTML += '<button id="greater20less30" onclick="getButton(this.id)">Less than 30 psi</button><button id ="greater20greater30" onclick="getButton(this.id)" >Greater than 30 psi</button>';
		
	}	
	
	
	// less than 1 GPM flowrate block	
	else if (button === "less1")
	{
		document.getElementById("pressure1").innerHTML = "What is your pressure?<br/>"
		document.getElementById("pressure3").innerHTML = "";
		document.getElementById("pressure2").innerHTML = "";
		
		// variables to make buttons for less than and greater than 30 psi pressure buttons
		lessButton = '<button id="less30" onclick="getButton(this.id)">Less than 30 psi</button>';
		greaterButton = '<button id ="greater30" onclick=" "  >Greater than 30 psi</button>'; 
		
		// add the less than and greater than 30 psi buttons to left column path
		document.getElementById("pressure1").innerHTML += lessButton +" "  + greaterButton + "<br/><p id='pressure1.1'></p>";		
			
	}
	
	
	// Less than 30psi button
	else if(button === "less30")
	{
		// write question asking about Particulate Matter
		document.getElementById("pressure1.1").innerHTML = "<p>Does your fluid contain particulate matter?</p>";	
		// create variable for the Yes button
		var particulateYesButton = '<button id="particulateYes" onclick="getButton(this.id)">Yes</button>';
		//create variable for the No button		
		var particulateNoButton = '<button id="particulateNo" onclick="getButton(this.id)">No</button>';
		
		document.getElementById("pressure1.1").innerHTML += particulateYesButton + particulateNoButton;						
		
	}	
	
	else if(button === "1to20greater30" || button === "1to20less30")
	{
		document.getElementById("pressure2").innerHTML = "<p>Does your fluid contain particulate matter?";
		document.getElementById("pressure2").innerHTML +='<button>Yes</button><button>No</button>';
	
	}
	
	// ask if fluid contains particulate matter
	// tests if flow rate was greater than 20 GPM for right column
	// creates two buttons yes and no to capture the answer	
	else if(button === "greater20greater30")
	{
		document.getElementById("pressure3").innerHTML = "<p>Does your fluid contain particulate matter?";
		document.getElementById("pressure3").innerHTML += '<button id="yes" onclick="getButton(this.id)">Yes</button><button id="no" onclick="getButton(this.id)">No</button>';
	}
	
	
	// ask if they need a drum or carboy question
	// create buttons for yes and no	
	else if(button === "greater20less30")
	{
		document.getElementById("pressure3").innerHTML = "<p>Do you need to use your pump in a drum or carboy?";
		document.getElementById("pressure3").innerHTML += '<button id="yes" onclick="">Yes</button><button>No</button>';
		
	}
	
	
	
	else if(button === "particulateYes")
	{
	
	document.getElementById("pressure1.1").innerHTML = "<p>Do you require a pulseless Flow?";
	document.getElementById("pressure1.1").innerHTML += '<button id="pulselessYes" onclick="pulselessYes()">Yes</button> <button>No</button>';
	}	
	
	
	else
	{
	return 0;
	
	}

}



// clear all and reset button to remove content from the configurator
function clearall()

{

document.getElementById("pressure1").innerHTML = "";
document.getElementById("pressure2").innerHTML = "";
document.getElementById("pressure3").innerHTML = "";

}



// all my functions //////////////////////////////////////////

function particulateYes()
{

	document.getElementById("pressure3").innerHTML = "We recommend:<br/> Double diaphragm";
}

function particulateNo()
{

	document.getElementById("pressure3").innerHTML += "We recommend:<br/> Centrifual or gear";
}

function pulselessYes()
{
	document.getElementById("pressure1.1").innerHTML += '<br/>We recommend:<br> <a href="http://www.coleparmer.com/Category/Progressing_Cavity_Pumps/43429" target="_blank">Progressing Cavity pump<br/><img src="http://static.coleparmer.com/small_images/7540006.jpg" /></a>';
}

  
	// currently not used
	function ifs()
	{
	
		// ask what is your pressure
		
			// if (pressure <30 && particulate matter === Yes && pulseless flow === Yes)
			// you need a progressing cavity pump
			{
				
			}
	
		// else if(pressure > 30 && particulate matter === yes)
			// you need a Peristaltic tubing, prgressing cavity  or bellows pumps
			{
				
			}
	
			
	
				
	}



