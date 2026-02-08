/*

Computer Networks
    1)Internet
        Computer network that interconnects billions of computing devices throughout the world
    
    2)Network Model
        1)To reduce the complexity, networks are organized as a stack of layers.
        2)Each layer offers certain services to the layers above it and abstracts the layers below it.
        3)network layer
            1)Application layer
                1)Purpose: 
                    Interface for users and applications to send/receive data.
                2)Why we use it: 
                    This is the layer we directly interact with to use the network.
                3)Real-life example: 
                    Using Gmail, WhatsApp, or a web browser.
            2)Transport layer
                1)it ensures data is delivered correctly from sender to receiver.
                2)Protocol:
                    1)TCP
                    2)UDP
            3)Network
                1)it decides the path and destination of data using IP addresses.
                2)Protocol:
                    1)Ip
            4)Data Link
                1)Purpose: 
                    Ensures data reaches the correct device in the same network and checks for errors.
                2)Why we use it: 
                    To avoid sending data to the wrong device and detect/correct errors.
                3)Real-life example: 
                    Switch directing a file from your computer to your friend’s computer in your office network.
            5)Physical
                1)Purpose: 
                    1)Send raw bits (0s and 1s) data as radio signals or eletrical signals through medium
                    2)connection medium:
                        1)WI-FI -> radio signals
                        2)cables -> eletrical signals
                        3)mobile network -> radio signals
                2)Why we use it: 
                    1)Without it, data can’t travel between devices.

    3)Protocol
        A protocol is a standard set of rules that allow electronic devices to communicate and understand one another.

    4)Layer Name	             Protocol
        Application	             HTTP, SMTP
        Transport	             TCP, UDP
        Network	                 IP
        Data Link	             Ethernet, Wi-Fi
        Physical	             10 Base T, 802.11

    5)Wired Network Cables
        Cables are what connect different devices to each other, allowing data to be transmitted over them.

    6)Network Port
        Network ports are generally directly attached to the devices that make up a computer network.

    7)Hub
        Transfers data to every other port connected to the hub

    8)MAC Address
        Media Access Control (MAC) address is a globally unique identifier attached to an individual network interface.

    9)Switch
        1)A switch is a network device.
        2)It connects many computers or devices in a network.
        3)When one device sends data, the switch sends it only to the device that needs it, not to everyone.

    10)Hub Vs Switch
                Hub	                                                Switch
        1)Operates at the Physical Layer	                Operates at the Data Link Layer
        2)Sends data to all connected devices	            Sends data only to the destination device
        3)Collisions happen more often	                    Collisions happen less
        4)Cannot store MAC addresses	                    Stores MAC addresses to know where to send data


    11)IP Address
        1)IP addresses belong to the networks, not the devices attached to those networks.
        2)Example: 172.16.254.1

    12)Router
        1)Router is a device
        2)Forward data between independent networks.
        3)Store route information for different networks all over the world.
        4)Network Layer device

    13)Wireless Router
        Wireless Routers are combination of
        1)Router
        2)Switch
        3)Wireless Access Point
            Allows other Wi-Fi devices to connect to a wired network.

    14)Network
        it is group of connected devices

    15)Types of network
        Type	               Area	                          Example
        PAN	                   Very small	                Bluetooth phone+watch
        LAN	                   Small	                    Home Wi-Fi, Office LAN
        CAN	                   Campus	                    College network
        MAN	                   City	                        Cable TV network
        WAN	                   Large	                    Internet
        VPN	                   Anywhere	                    Secure office access

    16)Ways to connect devices to a network
        1) Wired (Cable)
            Examples:
            1)Switch
            2)Direct cable to router
        2)Wireless (Wi-Fi)
            Examples:
            1)Wi-Fi router
            2)Access point
        3)Mobile / Cellular Network
            Examples:
            1)4G/5G
            2)Mobile hotspot

    17)Socket Address(IP + Port = Socket Address)
        A Socket Address is the exact location of a program on a network.
        Ex -> 192.168.1.10:3000
    
















*/