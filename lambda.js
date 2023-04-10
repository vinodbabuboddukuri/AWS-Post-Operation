const AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var tableName = "CustomerDetails";

    var params = {
        TableName : tableName,
        Item:{
            "Email" : event.Email,
            "Branch" : event.Branch,
            "FirstName" : event.FirstName,
            "LastName" : event.LastName,
            "PhoneNumber" : event.PhoneNmber,
            "Certificates" : event.Certificates,
            "Specialised" : event.Specialised
            }
};
docClient.put(params, function(err,data){
   if(err){
      callback(err); 
   }
    
else{
        callback(null,"sucessfully updated data");
    }
})
};