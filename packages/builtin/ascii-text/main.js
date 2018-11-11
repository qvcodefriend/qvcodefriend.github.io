
var onMenuClicked = function(identifier){
    
    var style = 1;
    if( identifier == 'ascii-text.style1') {
        style = 1;
    } else if( identifier == 'ascii-text.style2') {
        style = 2;
    } else {
        style = 3;
    }
    
    if(invocation.selectionStrings.length == 0){
        return {
            "result":false,
            "error":"No selection text"
        };
    }

    if(invocation.selectionStrings.length >= 100){
        return {
            "result":false,
            "error":"Too long (>= 100)"
        };
    }

    var selectionString = invocation.selectionStrings[0].trim();
    var asciitext = beginGenerator(selectionString,style);
    
    var selections = invocation.selections;
    var lineIndexAfterFirstSelection = selections[0][2] + 1;
    
    invocation.insertLinesAtIndex([asciitext],lineIndexAfterFirstSelection);
    
    return {"result":true};
}
