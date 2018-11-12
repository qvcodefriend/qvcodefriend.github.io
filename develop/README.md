[Code Friend](https://qvcodefriend.github.io/) / [Marketplace](https://qvcodefriend.github.io/marketplace) / [Develop](https://qvcodefriend.github.io/develop) / [About Me](https://github.com/everettjf)

## How To Create Your Own Package

`Code Friend`'s builtin utilities are implemented in `Javascript` language, for examples, `ASCII Text` and `Sort lines`. Source code of them is [Here](https://github.com/qvcodefriend/qvcodefriend.github.io/tree/master/packages/builtin).

This is called a package. 
![](/media/15419514349346.jpg)

`manifest.json` contains all required information for the package.

1. name/version/author/website/description
2. menu items



### Tutorial

1) Create GitHub Pages like this one : <https://github.com/qvcodefriend/qvcodefriend.github.io> , and clone `packages/helloworld` directory.

2) Create `manifest.json` in `packages/helloworld` directory, and create directory for each menu item with `menu id`.

```
{
    "name":"Hell world",
    "version":"1.0",
    "author":"everettjf",
    "website":"https://everettjf.github.io",
    "description":"Insert hello world to the end",
    "menu":[
        {
            "id":"hello",
            "name":"Hello world"
        }
    ]
}
```

3) Create `entry.js` and `main.js`.

```
// entry.js
var entry = [
    'main.js'
];
```

```
// main.js
var onMenuClicked = function(identifier){

    invocation.appendLines(['Hello World']);

    return {
        'result':true
    };
};
```

4) That's all. Publish your code and `Add Package in Code Friend macOS App`.

### More Detail

1. Each menu's Javascript is run under separated context.
2. `entry.js` describes all the Javascript files and the run order the menu includes.
3. Menu id can include a `dot` for supply 2 or more menu items in one menu directory. e.g. [See the Jump Menu Id](https://github.com/qvcodefriend/qvcodefriend.github.io/blob/master/packages/dlc/manifest.json)

### Open Source Packages

The `builtin` and `DLC Pack 1` is opensource under [Here](https://github.com/qvcodefriend/qvcodefriend.github.io/tree/master/packages)

### API Document

There are two global variable now, `invocation` and `system`.

#### invocation

*getter and setter*

1. [getter] invocation.contentUTI
2. [getter] invocation.tabWidth
3. [getter] invocation.indentationWidth
4. [getter] invocation.usesTabsForIndentation
5. [getter] invocation.selectionExist
6. [getter,setter] invocation.selections
7. [getter] invocation.firstSelection
7. [getter] invocation.selectionStrings
7. [getter] invocation.selectionLines
6. [getter,setter] invocation.completeBuffer
6. [getter,setter] invocation.lines
7. [getter] invocation.lineCount

> selections is an array of [beginLine,beginCol,endLine,endCol]
> so firstSelection is [beginLine,beginCol,endLine,endCol]

*method*

1. invocation.insertLinesAtIndex(ArrayOfString,Integer)
2. invocation.appendLines(ArrayOfString)
3. invocation.removeLinesFromTo(Integer,Integer)
4. invocation.assignLineAtIndex(String,Integer)

#### system

*method*

1. system.log(String)
2. system.openURL(String)



---

Enjoy :)





