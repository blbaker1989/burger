
// Node Dependencies
var connection = require('./connection.js');




// MySQL database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});




// Methods
var orm = {


  selectAll: function(callback) {


    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },


  insertOne: function(burger_name, callback){
    //
    // var date = new Date();
    // var timestamp = ''+ date.getFullYear() + '-';
    // var month = '' + (date.getMonth() + 1);
    //
    //   if(month.length == 1){
    //     month = '0' + month;
    //   }
    // timestamp += month + '-';
    // var day = '' + date.getDate();
    //
    //   if(day.length == 1){
    //     day = '0' + day;
    //   }
    // timestamp += day + ' ';
    // var hour = '' + date.getHours();
    //
    //   if(hour.length == 1){
    //     hour = '0' + hour;
    //   }
    // timestamp += hour + ':';
    // var minute = '' + date.getMinutes();
    //
    //   if(minute.length == 1){
    //     minute = '0' + minute;
    //   }
    // timestamp += minute + ':';
    // var second = '' + date.getSeconds();
    //
    //   if(second.length == 1){
    //     second = '0' + second;
    //   }
    // timestamp += second;
    //

    // Run MySQL Query
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      eaten: false,
      // date: timestamp
    }, function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },


  updateOne: function(burgerID, callback){

    // Run MySQL Query
    connection.query('UPDATE burgers SET ? WHERE ?', [{eaten: true}, {id: burgerID}], function (err, result) {
        if (err) throw err;
        callback(result);
      });

  }

};



// Export
module.exports = orm;
