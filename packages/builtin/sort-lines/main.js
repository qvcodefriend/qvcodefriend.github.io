
var onMenuClicked = function(identifier){

    var lines = invocation.selectionLines;
    if(lines.length == 0){
        return {
            'result':false,
            'error':'No lines selected'
        };
    }

    if(lines.length == 1){
        return {
            'result':false,
            'error':'At least 2 lines should be selected'
        };
    }

    if(invocation.selections.length != 1){
        return {
            'result':false,
            'error':'Only support 1 selected range'
        };
    }

    // sort
    if( identifier == 'sort-lines.ascending-case-sensitive') {
        lines.sort();
    } else if (identifier == 'sort-lines.ascending-case-insensitive') {
        lines.sort(function(a,b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
    } else if (identifier == 'sort-lines.decending-case-sensitive') {
        lines.sort();
        lines.reverse();
    } else if (identifier == 'sort-lines.decending-case-insensitive') {
        lines.sort(function(a,b) {
            return -a.toLowerCase().localeCompare(b.toLowerCase());
        });
    } else {
        lines.sort();
    }

    var firstLine = invocation.firstSelection[0];
    var endLine = invocation.firstSelection[2];
    invocation.removeLinesFromTo(firstLine,endLine);

    invocation.insertLinesAtIndex(lines,firstLine);
    
    return {
        'result':true
    };
}
