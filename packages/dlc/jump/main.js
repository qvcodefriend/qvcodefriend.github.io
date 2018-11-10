
var onMenuClicked = function(identifier){
    system.log(invocation.selections);
    if(invocation.selectionExist){
        return {
            'result':false
        };
    }

    var firstSelection = invocation.firstSelection;

    if(identifier == 'jump.up-20-lines'){
        var startline = firstSelection[0];
        var startcol = firstSelection[1];

        startline -= 20;
        if(startline < 0){
            startline = 0;
        }

        invocation.selections = [[startline,startcol,startline,startcol]];

    }else if(identifier == 'jump.down-20-lines'){
        var startline = firstSelection[0];
        var startcol = firstSelection[1];

        startline += 20;
        if(startline >= invocation.lineCount){
            startline = invocation.lineCount -1;
        }

        invocation.selections = [[startline,startcol,startline,startcol]];
    }else{
        return {
            'result':false
        };
    }

    return {'result':true};
}