var onMenuLoad = function(){
    var menus = [];
    menus.push({
        "id" : "format-oc-code",
        "name" : "Format OC Code",
    });
    menus.push({
        "id" : "ascii-art",
        "name" : "ASCII Art",
    });
    return menus;
}


var onMenuClicked = function(identifier, buffer){
    if(identifier == "format-oc-code") {
        return buffer + "\n" + "format oc code";
    } else if(identifier == "ascii-art") {
        return buffer + "\n" + "ascii art";
    } else{
        return "";
    }
}
