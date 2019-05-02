var connection = require("../config/connection.js");
var table_name = "pizzas";

function questions(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}



var orm = {

  selectAll :(table_name,callback) => {

    let query = `SELECT * FROM ${table_name};`;

    connection.query(query, (error, result)=>{
      if (error) throw error;
      callback(result);
    });

  },

  insertOne: (table_name, cols, vals, callback) => {

    let query = `INSERT INTO  ${table_name} (${cols.toString()}) VALUES (${questions(vals.length)});`;

    connection.query(query, vals, (error, result) => {
      if (error) throw error;
      console.log("Pizza has been added");
      callback(result);
    });

  },

  updateOne : (table_name, cols, vals, condition, callback) =>{

    let query = `UPDATE ${table_name} SET ${cols.toString()} = ? WHERE ${condition}`;

    connection.query(query, vals, (error, result) => {
      if (error) throw error;
      callback(result);
    });
  }
  }

module.exports = orm;
