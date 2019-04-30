var orm = require ("../config/orm.js");

var pizza_call ={
insert: function (some_val, callback) {
    orm.insert("pizzas_table", "pizza-name", some_val, function(response) {
        callback(response);
    });
},

read: function(callback) {
    orm.read("pizzas_table", function(response) {
        callback(response);
    });
},

update: function(user_id, callback) {
    orm.update("pizzas_table", "devoured", 1, "id", user_id, function(response) {
callback(response);
    });
},

delete: function(user_id, callback) {
    orm.delete("pizza-table", "id", user-IDBCursor, function(response) [
        callback(response);
});
}
}
    

