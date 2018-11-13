[Code Friend](https://qvcodefriend.github.io/) / [Marketplace](https://qvcodefriend.github.io/marketplace) / [Develop](https://qvcodefriend.github.io/develop) / [About Me](https://github.com/everettjf)

## How To Create Your Own Package

`Code Friend`'s builtin utilities are implemented in `JavaScript` language, for examples, `ASCII Text` and `Sort lines`. Source code of them is [Here](https://github.com/qvcodefriend/qvcodefriend.github.io/tree/master/packages/builtin).

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

1. Each menu's JavaScript is run under separated context.
2. `entry.js` describes all the JavaScript files and the run order the menu includes.
3. Menu id can include a `dot` for supply 2 or more menu items in one menu directory. e.g. [See the Jump Menu Id](https://github.com/qvcodefriend/qvcodefriend.github.io/blob/master/packages/dlc/manifest.json)

### Open Source Packages

The `builtin` and `DLC Pack 1` is opensource under [Here](https://github.com/qvcodefriend/qvcodefriend.github.io/tree/master/packages)

### API Document

There are two global variable now, `invocation` and `system`.

#### invocation

*getter and setter*

1) [getter] invocation.contentUTI

@return string : The Unique Type Identifier (UTI) of the content in the buffer.

2) [getter] invocation.tabWidth

@return integer : The number of space characters represented by a tab character in the buffer.

3) [getter] invocation.indentationWidth

@return integer : The number of space characters used for indentation of the text in the buffer.

4) [getter] invocation.usesTabsForIndentation

@return integer : A Boolean value that indicates whether tabs are used for indentation.

5) [getter] invocation.selectionExist

@return boolean : Whether there is selection of text.

6) [getter,setter] invocation.selections

@return array of array of integer : the 2nd array is always 4 elements, which are `[beginLine,beginCol,endLine,endCol]`. So the value of `selections` is 

```
[
[beginLine,beginCol,endLine,endCol],
[beginLine,beginCol,endLine,endCol],
[beginLine,beginCol,endLine,endCol]
]
```

But in most cases, there is only 1 selection. And the `firstSelection` came out.

7) [getter] invocation.firstSelection

@return array of integer : always 4 elements.

```
[beginLine,beginCol,endLine,endCol]
```

8) [getter] invocation.selectionStrings

@return array of string : All the strings represented by `selections`. Similar to `selections`, in most cases there is only 1 string.

9) [getter] invocation.selectionLines

@return array of string : All the strings represented by `selections`. `selectionLines` join all the lines represented by `selection` together.

10) [getter,setter] invocation.completeBuffer

@return string : All the content of current file.
@setter : Assign string to `completeBuffer` will overwrite the content of current file.

11) [getter,setter] invocation.lines

@return array of strings : All the lines of current file.
@setter : Assign array of strings to `lines` will overwrite the content of current file.


12) [getter] invocation.lineCount

@return integer : Line count of current file.

*method*

1) invocation.insertLinesAtIndex(ArrayOfString,Integer)

Insert lines at specified line index.

```
// Insert 3 lines in front of current file.
invocation.insertLinesAtIndex([
    'first line',
    'second line',
    'third line'
    ],0);
```

2) invocation.appendLines(ArrayOfString)

Append lines to the end of current file.

```
// Append 3 lines to the end of current file.
invocation.appendLines([
    'first line',
    'second line',
    'third line'
    ]);
```


3) invocation.removeLinesFromTo(Integer,Integer)

Remove lines from line index to line index.

```
// Remove lines from index 5 to 10
invocation.removeLinesFromTo(5,10);
```

4) invocation.assignLineAtIndex(String,Integer)

Assign string to line at index.

```
// Overwrite the line 1 to 'Hello world'
invocation.assignLineAtIndex('Hello world',1);
```

#### system

*method*

1) system.log(String)

Log string using `NSLog`.

2) system.openURL(String)

Open URL.

---

Enjoy :)





