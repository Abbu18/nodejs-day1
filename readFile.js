const fs = require('fs')
const path = require('path')

/*fs.readFile ('./learn.txt',{encoding : 'utf-8', flag : 'r'}, function(err,fileData){
    if (err){
        console.log('err')             //reading text file
    }
    else{
        console.log(fileData)
    }

})

fs.readFile ('./json/user.json',function(err,jsonData){
    if (err){
        console.log('err')              //reading json file
    }
    else{
        console.log(jsonData.toString())
    }

})

fs.readFile ('./json/user.json',function(err,jsonData){
    if (err){
        console.log('err')
    }
    else{
        const user = JSON.parse(jsonData)
        console.log(user)
    }

}) */

fs.readFile ('./json/users.json',function(err,jsonData){
    if (err){
        console.log('err')                  //array list of json file
    }
    else{
        const users = JSON.parse(jsonData)
        for (i=0; i < users.length;i++) {
            console.log(users[i])
        }
        
    }

})