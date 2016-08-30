function staffMember(name,age,email,salBruto){
    this.name = name;
    this.age = age;
    this.email = email;
    
    var bankBalance = salBruto;
    
    this.getBalance = function(password){
        if(password === "1234"){
            return bankBalance;
            //console.log("# BankBalance..: " + bankBalance);
        }else{
            return "Wrong password!";
            //console.log("# Wrong password!");
        }
    }; 
};

var jack = new staffMember("Jack Spearrow",29,"jack@gmail.com",7500);
var bob = new staffMember("Bob Dylaen",28,"bob@gmail.com",7501);
var fred = new staffMember("Fred Owne", 32, "freed@gmail.com", 6200);

var devOps = [jack,bob,fred];


function listName(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i].name);
    }
};

function printStaff(obj) {
    
    console.log("# Staff Member #");
    console.log("# Name...: " + obj.name);
    console.log("# Age....: " + obj.age);
    console.log("# email..: " + obj.email);
    console.log("# Bank...: " + obj.getBalance(prompt("Password","write here...")));
    console.log("");
};

function list(array) {
	for (var i = 0; i < array.length; i++) {
		printStaff(array[i]);
	}
};

function search(array,name){
    for(var i = 0; i < array.length; i++){
        if(array[i].name === name){
            console.log("Staff OK : " + array[i].name);
            console.log("# Staff Member #");
            console.log("# Name...: " + array[i].name);
            console.log("# Age....: " + array[i].age);
            console.log("# email..: " + array[i].email);
            console.log("Bank.....: " + array[i].getBalance(prompt("Password..: ")));
        }
    }
};

//update function
function searchLetter(array,letter){
    for(var i = 0; i < array.length; i++){
        name = array[i].name.toLowerCase();
        //console.log(name);
        for(var j = 0; j < name.length; j++){
            for(var k = 0; k < letter.length; k++){
                if(name[j] === letter[k]){
                    console.log("Staff OK : " + name.toUpperCase());
                }
            }
        }
    }
};

//new function to add at the github
function addStaff(objName,array){
    
    objName = new staffMember(prompt("Name...: "),prompt("Age...: "),prompt("email...: "),prompt("salBruto...: "));
    
    array[array.length] = objName;
    
    confirm("# StaffMember added #");
};





