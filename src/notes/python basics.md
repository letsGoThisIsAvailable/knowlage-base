---
title: python basics
tags: [coding, cheat sheet]
layout: layout.njk
---
**arr.del(arr)** delete arr or index

**Sets** = list no duplicates uses curly brackets has a|b or a.union(b) to combine and  a&b to find values shared a-b or a.diference(b) for values in a but not in b a.symetric_difference(b) or ^ for values only one has like XOR and no a[index] feature

**Tuples** - list with multiple data types

**Dictionaries** - declared as a={x:1,y:2,z:3} in example the letters are called keys and nums are called values use a[key] instead of a[index] add new key with a[5]=d no duplicate keys

If you want more than one argument in a function use *args which will contain all arguments used in calling the function

**kwargs - like *args but for dictionaries (key words)

**Except as e** - var e is assigned error type

**Exception** - user mistake leading to errors

**var** = open([name][location][mode]) - open a file
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

**var.split("[seach term]")**- make an arr of stars. new index created after each time search term found

# terms :

*procedural programing* - reusing bits of code with functions

*divide and conquer* - break up problem into smaller problems then solve

*dynamic programing* - divide and conquer but into several of the SAME task instead of different ones

*greedy algorithm* - use best solution depending on current step in algorithm

*big o notation* - how hard and long is the algorithm in the worst case scenario measured by how it scales: exponential not at all, linear...

**big-O notation** - O(1) constant time, O(n) -linear, O(n^2) - exponential O(log(n)) logarithmic etc.

*pure function* - returns same output ALWAYS

*traditional programming* - output can change

pure function uses no other outside function

*class p*: makes a class

*class c(p)* - make a child class of p called c

*c=P() - *assign c variable to class p

*[class].[object]* get an object from a class

*issubclass([parent][child])* - intuitive

can use super() as a standing for parent class