var elemID = "#res" ;
function orwithnands (a,b){
            if (!isNaN(a)&& !isNaN(b)) {
            return false;
             }
            return true;
            }
                $().ready(function(){
             var r = orwithnands(false,false);
            $(elemID).append("0,0->"+r+"<br/>");
            r = orwithnands(false,true);
            $(elemID).append("0,1->"+r+"<br/>");
            r = orwithnands(true,false);
            $(elemID).append("1,0->"+r+"<br/>");
            r = orwithnands(true,true);
            $(elemID).append("1,1->"+r+"<br/>");
        
    });