---
title: Basic IT Terms
tags: [IT terms, standards]
layout: layout.njk
---
frontend - design
backend - logic
apis to communicate between frntend and backend
search w/ [protocal]://[domain]/[site]
cloud hosting - mix of physical and virtual hosting recorces and price scales for size
dedicated hosting - server just for you
ipv6 - 8x4
ipv4 - 2x4
ip packet - “message”- includes ‘ip header’(including, address from and to, and more) and ip data' (contents)
DNS - url -> ip
tcp - protocal to solve for out of order, lost, or corrrupted packets but has a small delay used when order matters like text
udp - doesnt do tcp protections BUT faster
types of packets:
	get - recive
	post - send
	put - update
	delete - remove
http response:
	diff versions but mainly 1.1 2.1 used
	after ‘http’ version' there is a num from 100 - 599 to show if successfull then ‘ok’ if good (eg. 404)
	100-199 - informatinial (100-coninue on)
	200-299- successfull (200-ok)
	300-399 - redirected (301-redirected to diff site for everyone 302-same but only that user
	400-499 - client error (400 - bad data 401 -account needed 403 - refused eg. perm issue 404 - not found on server)
	500-599 - server error (500 - generic issue)
http response header:
The Date header specifies the date and time the HTTP response was generated
 The Server header describes the web server software used to generate the response.
 The Content-Length header describes the length of the response.
 The Content-Type header describes the media type of the resource returned (e.g. HTML document, image, video).
http request header:
	host - domain
	user-agent - user details
	The Accept header informs the web server what type of content the client will accept as the response.
	The Accept-Language header indicates the language and optionally the locale that the client prefers.
	The Content-type header indicates the type of content being transmitted in the request body.


https -  same format and response num just encrypted

if just using html will be default size/color... css then specifies that then js adds an actual functionality
 IMAP - manages reciving messages
 SMTP - manages sending messages ()also rarely reciving)
 POP - does equivelent ov imap and smtp but deletes message after, now-adays used only for message automation
 FTP - used for transferring files
 SFTP - ftp but secure
 SSH - used for accesing remote device (encrypted)
 website - many pages
 web app - like website but usualy more interactive
 webpage - one part of site
 inspect element:
 	elements-clientside code (double click to edit)
 	consile - js errors
 	sorces - shows all related files
	performence - shows what browser is doing and when for optimasation
	memory - shows whats useing most memory
libraries-reusable/versitile (many forms) so is more customisable
frameworks - one use "blueprint/template" so is less customisable
apis/gateways have 3 types: browser apis rest apis and sensor-based apis
browser api - built into browser eg. geolocation api
web apis/web services - online service apis
sensor apis- iot apis/does physical stuff