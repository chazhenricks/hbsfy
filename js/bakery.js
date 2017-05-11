"use strict";

let inventory = [];
let bakery = {};



bakery.loadInventory = () =>{
    return new Promise((resolve, reject) =>{
        let inventoryLoader = new XMLHttpRequest();
        inventoryLoader.open("GET", 'inventory.json');
        inventoryLoader.send();

        inventoryLoader.addEventListener("load", function(){
            var data = JSON.parse(this.responseText);
            inventory = data;
            resolve(data);
        });
        inventoryLoader.addEventListener("error", function(){
            reject("YOU DONE GOOFED");
        });
    });
};

module.exports = bakery;
