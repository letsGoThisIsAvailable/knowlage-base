---
title: python basics
tags: [python, coding, cheat sheet]
layout: layout.njk
---

arr.del(arr) delet arr or index

**Sets** = list no duplacates uses curly brackets has a|b or a.union(b) to combine and  a&b to find values shared a-b or a.diference(b) for values in a but not in b a.symetric_difference(b) or ^ for values only one has like XOR and no a[index] feature

**Tuples** - list with multiple data types

**Dictionaries** - declared as a={x:1,y:2,z:3} in example the letters are called keys and nums are called values use a[key] instead of a[index] add new key with a[5]=d no duplicate keys

If you want more than one argument in a function use *args which will contain all arguments used in calling the faunction

****kwargs** - like *args but for dictionaries (key words)

**Except as e** - var e is assigned error type

**Exception** - user mistake leading to errors

**var** = open([name][location][mode]) - open a file
**modes**:
*r*=read
*r*=read (binary)
*r+ *- read and right
*w*=override and read
*a*=append data
add ‘b’ after letter for binary mode (not human read-able but faster)

close-finish editing a file

**var.read({amount of letters})** - add contents of file into var

**var2 = var.readline({amount})**-add contents of a line into var

**var2 = var.readlines()** - read file and return as arr of lines

**with open(.., r.) as var:** - better for exception handlings

**with open(.., [w/a]) as var** -  make and edit a new file

**var.write()** add to a file

**var.writelines([line],{line2}, {line3}...)**

**var.split("[seach term]")**- make a arr of strs. new index created after each time search term found

# terms :

*prosedaral programing* - reusing bits of code with functions

*divide and conquor* - break up problem into smaller problems then solve

*dynamic programing* - divide acn conquer but into several of the SAME task instad of diif ones

*greedy algorithm* - use best solution depending on current step in algorithm

*big o notation* - how hard and long is algorithm in worst case scenario measured by how it scales: exponential not at all, liniar...

**big-O notation** - O(1) constant time, O(n) -linear, O(n^2) - exponential O(logn) logarithmic etc.

*pure function* - returns same output ALWAYS

*traditinial progreming* - output can change

pure function uses no other outside function

*class p*: makes a class

*class c(p)* - make a child class of p called c

*c=P() - *assign c variable to class p

*[class].[object]* get an object from a class

*issubclass([parent][child])* - intuitive 

can use super() as a standin for parent class

