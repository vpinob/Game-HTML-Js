var colorList = [];
var resultTrue = cellNumber = cellCounter = 0;
var myVar = setInterval(function(){ randomCell() }, 1000);
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

function maxChar(e, contentBox, maxLength)
{
	var unicode=e.keyCode? e.keyCode : e.charCode;
	
	if(unicode==8 || unicode==46 || unicode==13 || unicode==9 || unicode==37 || unicode==39 || unicode==38 || unicode==40)
		return true;
					
		if(contentBox.length>=maxLength)					
			return false;
		return true;
}
function checkIt(evt) 
{
	evt = (evt) ? evt : window.event
	var charCode = (evt.which) ? evt.which : evt.keyCode
			
	if (charCode > 31 && (charCode < 48 || charCode > 57)) 
	{
		alert("This field accept only numbers!");
		return false
	}
	return true
}

function notEmptyTextField()
{
	if(document.getElementById('colNumber').value.length==0)
	{
		document.getElementById('colNumber').focus();
		alert("Field is blank")
	}
	else if(document.getElementById('rowNumber').value.length==0)
	{
		document.getElementById('rowNumber').focus();
		alert("Field is blank")
	}
	else{
		generateTable();
	}
}
		
function generateTable()
{
	var randColor= '';
	var Table1 = '<table class="Table1" border = "1">';
	var hightCell = (210/document.getElementById('rowNumber').value);
	var lengthCell = (210/document.getElementById('colNumber').value);
	document.getElementById("scoNumber").value = 0;
	resultTrue = cellCounter = cellNumber = 0
	colorList=[];
	
	for(i=0;i<document.getElementById('rowNumber').value;i++){
		Table1+='<tr>';
			
		for(j=0;j<document.getElementById('colNumber').value;j++){
			cellCounter++;
			while(true)
			{
				randColor = getRandomColor();
				if(colorList.indexOf(randColor)==-1)
				{
					colorList.push(randColor);
					Table1+='<td onclick="compareColor('+cellCounter+');" id="td'+cellCounter+';" style="background-color:'+randColor+'; padding:'+hightCell+'px '+lengthCell+'px;">';
					break;
				}
			}
		}
		Table1+='</tr>';
	}
	Table1+='</table>';
	document.getElementById("Paragraph").innerHTML = Table1;
}

function getRandomColor()
{
	hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F") 
    var setRandomColor = "#";
	
	for (var i=0;i<6;i++)
	{
		setRandomColor+= hexadecimal[Math.round(Math.random()*14)];
	}
	return setRandomColor 
}

function randomCell() 
{	
	cellNumber = Math.round(Math.random()*cellCounter);
	document.getElementById("ColorField").style.backgroundColor = colorList[cellNumber];
	
}

function compareColor(i) 
{	
	var color = colorToHex(document.getElementById("ColorField").style.backgroundColor).toUpperCase();
	
	if(color.localeCompare(colorList[i]))
	{
		resultTrue++;
		document.getElementById("scoNumber").value = resultTrue;
	}
}	

function colorToHex(color)
{
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    
    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);
    
    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16);
}
		
			
			
			
			