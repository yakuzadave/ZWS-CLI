require('dotenv').config()
const axios = require("axios");
const fs = require("fs-extra");
const vorpal = require("vorpal")();
const Filesync = require("lowdb/adapters/FileSync");
const adapter = new Filesync("db.json");
const low = require("lowdb");
const db = low(adapter);

vorpal
  .command("order pizza [type] [otherThings...]", "Orders a type of food.")
  .option("-s, --size <size>", "Size of pizza.")
  .option("-a, --anchovies", "Include anchovies.")
  .option("-p, --pineapple", "Include pineapple.")
  .option("-o", "Include olives.")
  .option("-d, --delivery", "Pizza should be delivered")
  .action(function(args, cb) {
    this.log(args);
    cb();
  });

vorpal
  .catch("[words...]", "Catches incorrect commands")
  .action(function(args, cb) {
    this.log(args.words.join(" ") + " is not a valid command.");
    cb();
  });

vorpal.delimiter("ZWS:").show();