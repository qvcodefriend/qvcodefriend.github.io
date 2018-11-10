

var onMenuClicked = function(identifier){
    var lines = invocation.selectionLines;
    if(lines.length == 0){
        return {
            'result':false,
            'error':'No lines selected'
        };
    }
    
    system.log(invocation.selections);

    return {'result':true};
}
