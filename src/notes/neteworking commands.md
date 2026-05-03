---
title: networking commands
tags: [networking, linux, terminal, cheat sheet]
layout: layout.njk
---
**ping ____** - in terminal type ‘ping [ip adress]’ to ping a device (if you don't know your adress do 192.168.57.1) use to check if device in a specific address.
**ping ____** -c # - send a certain amount of packets to a device 

**netstat** -ano - find all connections being used (used to see if two machines are talking).

**ip a** - similar to ifconfig

**route** - used to check what gateway information packets are being funneled through

**iwconfig** - like ifconfig but for checking specific devices like laptops.

**ifconfig** - find network data.

**inet**  -  ip adress
**inet6** inv6 adress
**ether** - mac (media access control) adress
**netmask** - subnetting

**ping ______** - check what devices use an ip adress (checks until response or key pressed).

**arp -a** - find used ip addresses and their respective mac addresses.

**nmap #.#.#.#** - scan an ip adress
**nmap #.#.#.#/#** - scan a range of ip addresses