---
title: linux file management commands
tags: [file management, linux, terminal, cheat sheet]
layout: layout.njk
---

mkdir ____ -  make a new folder with specified name

echo “____” - return a text to the terminal
echo “____” > ___.txt - write to a file
echo “____” >> ____.txt - add to a .txt file 

locate ____ - search current location

chmod ___  ______ - change file permission by enterring the following  first arguments:
777 - Read, Write, and eXecute 

cp ____   ____ - move a file to different folder

ls  - show current folder contents 
ls ___  show stated folder.
'ls -la' -show hidden files in current directory. The thing it says before file name are:
 
file types: 
 - > file
 d > directory
 
 permissions:
w > write
 r > read
 x > execute

______ > _____ - put text into a file

touch _____ > create a new file

cat ____.txt - display a .txt file in terminal

systemd-analyze blame - shows all startup operations and time to take