function staffMember(name,age,email,salBruto){
    this.name = name;
    this.age = age;
    this.email = email;
    
    var bankBalance = bankBalance;
    
    this.getBalance = function(password){
        if(password === "1234"){
            return bankBalance;
        }else{
            return "Wrong password!";
        }
    }; 
};

var jack = new staffMember("Jack Spearrow",29,"jack@gmail.com",7500);
var bob = new staffMember("Bob Dylan",28,"bob@gmail.com",7501);
var fred = new staffMember("Fred Owne", 32, "freed@gmail.com", 6200);

var devOps = [jack,bob,fred];


function listAll(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
};



function addStaff(){
    confirm("ADD StaffMember");
    staffMember(prompt("Name...: "),prompt("Age...: "),prompt("email...: "),prompt("salBruto...: "));
};


