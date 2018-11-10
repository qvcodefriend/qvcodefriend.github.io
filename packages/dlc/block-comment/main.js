

var onMenuClicked = function(identifier){
    system.log(invocation.selections);
    if(!invocation.selectionExist){
        return {
            'result':false
        };
    }
    var firstsel = invocation.selections[0];
    
    var startline = firstsel[0];
    var startcol = firstsel[1];
    var endline = firstsel[2];
    var endcol = firstsel[3];
    
    var lines = invocation.lines;
    var startcontent = lines[startline];
    var endcontent = lines[endline];

    if(startline == endline){
        var newstart = startcontent.substring(0,startcol) + "/*" + startcontent.substring(startcol,endcol)
                + "*/" + endcontent.substring(endcol,endcontent.length);
        invocation.assignLineAtIndex(newstart,startline);

    } else{
        var newstart = startcontent.substring(0,startcol) + "/*" + startcontent.substring(startcol,startcontent.length);
        var newend = endcontent.substring(0,endcol) + "*/" + endcontent.substring(endcol,endcontent.length);
        invocation.assignLineAtIndex(newstart,startline);
        invocation.assignLineAtIndex(newend,endline);
    }

    return {'result':true};
}
