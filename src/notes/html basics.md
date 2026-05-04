---
title: HTML and CSS Basics
tags: [html, coding, cheat sheet]
layout: layout.njk
---

**note:** {} means optional and spaces between < and next char is to make my website use as text - for actual HTML don't use


**<h [1-6]>** - header

**<p>** - paragraph

**strong** - bold used for emotion

**b** - bold for importance

**em**- italic for emphasis

**i** - italic for other reason screen readers dont see

**ul**- unordered list

**ol** - ordered list

**li** - element in list

**div** - divider

**< !--[comment ]** - comment

**< a href="[link]">[display name]</a>** - hyperlink

**< img src="[path]" {width = “[px]”}{hight = “[px]”} {alt="[description (good to add)]}">** -image

**< table>**- neat table

**< tr>** -row in table

**< td>**- cell/data type in table

**< th>** table header

**< form action="[type]" method="[POST/GET]">** - form

**< input type="[eg. text,submit,checkbox, radio button (checkbox but only one option allowed)]" {name ="[name of input]}"**- input box

**< label for="[name of tag]">[text to use for label]</label>**

*DOM* - how js interacts with HTML

*legally* you have to accommodate all disabilities in many sectors

In css there are 5 elements: declaration blocks (start and end curly brackets), inside are declarations (specifications), selectors(declare which element you're styling)

declarations are formatted like properties:value; eg: color:grey;

use *<link rel="stylesheet" href="[relitive css file path]"> *to link the css file to the css file

use *id="[name]"* in the tag to refer to it later in css then use # to refer to it or #[name] [tag type]{tag type 2...} to select all descendants of that tag in a specific type or #[name] > [tag type]{tag type 2) for any immediate descendants

*class* = “[group name]” to make a group t make it easier to refer to in css use dot to refer to it

to just refer to one type of tag in a class use [tag type].[class] eg. p.jokes{...}

[class, id...]:[action eg. hover] refers only to when doing said action

color attribute can have values written like: color=[preset color], color=rgb(), color=rgba(), color:hsl(hue, saturation, light)

use font-family for font type eg. font-family: "Courier New”, monospace;

text-transform can be used with uppercase lowercase uppercase capitalize and none for values

text-decoration can be used with underline {text-deoration-color} {text decoration-line (underline overline line-through and none)}, {text-decoration-style} and {text-decoration-thickness} eg:

```css
p {
 text-decoration-line: underline;
 text-decoration-color: red;
 text-decoration-style: solid;
 text-decoration-thickness: 5px;
}
```

The box model describes the parts of a website; the content can be at  default size or at a set size then  there is a padding surrounding it and outside that is a border design.

border-width:[thickness]; - set border size

margin-[top/bottom/left/right]:[px];

instead of declaring directions separately you can do all at once by doing [property]:[top] [bottom] [left] [right];

 block element which starts a new line

inline -no new lin element

text-align:[left/right/center/justify(all lines full)]-align text

to align other block elements make a parent divider <div class="parent"> and child class<div class ="child>. In css make the child element have any width(.child{width:[chose%]}).for inline elements making them into block elements by giving their own div(view code below)

**justify-content:center;** - use if useing flex display to center an item

<div class="parent">
 < img src="photo.png" class="child">
</div>

for aligning to right and left use float:right; and float:left respectively