---
author: "Tugi"
title: "Decentralized Color Changer"
description: "A website project that sets color when someone changes it on a decentralized web."
tags: ["markdown", "css", "html", "smartcontract"]
date: 2021-04-24
---

This is the first project ever that I have ever worked on something decentralized. The website contains a solidity smart contract and its ABI. 
<!--more-->

## Smart Contract

The contract is written in solidity, and the contract consists of two major functions that are to `set` the new color and to `get` the current color from the decentralized web, respectively. Moreover, it uses `mappings` to store the associative array data.

## The contract

#### Code block on REMIX IDE

```s
pragma solidity ^0.8.1;

contract colorKOTH {

    mapping(string => string) private color;

    function setColor(string memory _color, string memory _element) public  {
        color[_element] = _color;
    }

    function getColor(string memory _element) public view returns (string memory) {
        return color[_element];
    }

}
```

## The HTML Code block

{{< highlight html >}}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ColorHack</title>
    <link href="style/style.css" rel="stylesheet">
</head>
<body id = "body">
    <button id = "get_status_btn" class="glow-on-hover" title = "Get the latest color status of this page from the blockchain!" hidden>Get Color</button>
        <div id = "setColor">
            <div id = "color_box">
                <label for="color_input">Choose your color:</label> <input type="color" id = "color_input">
            </div>

            <div id = "resetColor" hidden>
                <button id = "set_status_btn" class="glow-on-hover" title = "Set your own favorite color and everyone around the web can see it! It requires so little ETH!">Set Color</button>
            </div>
        </div>
    <script src="code"></script>
    <script src="scripts/script.js"></script>
</body>
</html>
{{< /highlight >}}

