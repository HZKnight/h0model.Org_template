//Orologio:
function createtime(){
    
    var time = new Date();
    
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
	
    var dName = time.getDay()+1;
    var mName = time.getMonth()+1;
    var year = time.getFullYear();
    var dayNr = ((time.getDate()<10) ? "0" : "")+ time.getDate();
	
    var abbrev ="AM";
    var twentyfore = true;
	
    if(!twentyfore){
    
        if (hours>=12) abbrev="PM";
        if (hours>12) hours=hours-12;
        if (hours==0) hours=12;
        
    } else {
        
        abbrev="";
        
    }
    
    if(hours<=9) hours="0"+hours;
    if (minutes<=9) minutes="0"+minutes; 
    if (seconds<=9) seconds="0"+seconds;
		
    if(dName==1) Day = "Domenica";
    if(dName==2) Day = "Luned&igrave;";
    if(dName==3) Day = "Marted&igrave;";
    if(dName==4) Day = "Mercoled&igrave;";
    if(dName==5) Day = "Gioved&igrave;";
    if(dName==6) Day = "Venerd&igrave;";
    if(dName==7) Day = "Sabato";
	
    if(mName==1) Month="Gennaio";
    if(mName==2) Month="Febbraio";
    if(mName==3) Month="Marzo";
    if(mName==4) Month="Aprile";
    if(mName==5) Month="Maggio";
    if(mName==6) Month="Giugno";
    if(mName==7) Month="Luglio";
    if(mName==8) Month="Agosto";
    if(mName==9) Month="Settembre";
    if(mName==10) Month="Ottobre";
    if(mName==11) Month="Novembre";
    if(mName==12) Month="Dicembre";	
	
    var ctime=""+Day+" "+dayNr+" "+Month+" "+year+" -  Ore "+hours+":"+minutes+"."+seconds+" "+abbrev+"";
	
    if (document.all){ 
        document.all.clock.innerHTML=ctime;
    } else if (document.getElementById) {
        document.getElementById("clock").innerHTML=ctime;
    } 
    
}
	
if (!document.all&&!document.getElementById)
    createtime();

function loadtime(){
    if (document.all||document.getElementById) setInterval("createtime()",1000);
}
   





//-------------------------------------------------------------------------------------------------------
//TODO: tutto il codice sottostante va aggiornato e spostato in un file js appropiato
//-------------------------------------------------------------------------------------------------------

//Pop-up
//N.B.: Non occorre modificare il titolo qui perche il titolo cambia a seconda del titolo rella pagina.	   
function articolo(str,dat) 
{
	searchWin = window.open(str,'articolo',dat);
}
	   
//Aggiungi a preferiti
//configure the two variables below to match yoursite's own info
var bookmarkurl="http://www.modeltreno.tk"
var bookmarktitle="Modeltreno.Tk - Un viaggio nel mondo del modellismo ferroviario"
	   
function addbookmark()
{
	if (document.all)
		window.external.AddFavorite(bookmarkurl,bookmarktitle)
}

function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 35) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}

function load(){
    loadtime();
    move();
}