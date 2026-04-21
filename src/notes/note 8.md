---
title: networking commands
tags: [networking, linux, terminal, cheet sheet]
layout: layout.njk
---

ping ____ - in terminal type ‘ping [ip adress]’ to ping a device (if you don't know your adress do 192.168.57.1) use to check if device in a specific adress.
ping ____ -c # - send a certin amount of packets to a device  

netstat -ano - find all conections being used (used to see if two machines are talking).

ip a - simmilar to ifconfig

route - used to check what gateway information packets are being funneled through

iwconfig - like ifconfig but for checking spesific devices like laptops.

ifconfig - find network data.



inet  -  ip adress
inet6 inv6 adress
ether - mac (media access controll) adress
netmask - subnetting

ping ______ - check what devices use an ip adress (checks untill response or key pressed).

arp -a - find used ip adresses and their respective mac adresses.

nmap #.#.#.# - scan an ip adress
nmap #.#.#.#/# - scan a range of ip adresses