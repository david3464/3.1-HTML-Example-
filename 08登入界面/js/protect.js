document.onkeydown=function(){
    var e = window.event||arguments[0];
    if(e.keyCode==123){
    	alert('1');
            return false;
    }

    else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
    	alert('2');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==85)){
            alert('3');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==83)){
           alert('4');
           return false;
    }
}
document.oncontextmenu=function(){
	alert('请尊重劳动成果！www.jsdaima.com');
    return false;
}