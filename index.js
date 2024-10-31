//ES6 MAP V-29

//DELETE()

// var myApp = new Map();

// myApp.set('key1', 'Bangladesh')
// myApp.set('key2', 'India')
// myApp.set('key3', 'Srinlanka')
// myApp.set('key4', 'Maldiv')
// myApp.set('key5', 'Nepal')
// myApp.set('key6', 'Thailand')

// myApp.delete('key1')
// myApp.delete('key2')

// for(let myValue of myApp.values()){
//     console.log(myValue);    
// }

//CLEAR()
// let myMap = new Map()

// myMap.set('key1', 'Bangladesh')
// myMap.set('key2', 'India')
// myMap.set('key3', 'Srilanka')
// myMap.set('key4', 'Nepal')
// myMap.set('key5', 'Bhutan')
// myMap.set('key6', 'Thailand')

// myMap.clear()

// for(let myValue of myMap.values()){
//     console.log(myValue);
// }


//GET()
// let myMap = new Map()

// myMap.set('key1', 'Bangladesh')
// myMap.set('key2', 'India')
// myMap.set('key3', 'Srilanka')
// myMap.set('key4', 'Nepal')
// myMap.set('key5', 'Bhutan')
// myMap.set('key6', 'Thailand')

// console.log(myMap.get('key2'));

//HAS()

let myMap = new Map()

myMap.set('key1', 'Bangladesh')
myMap.set('key2', 'India')
myMap.set('key3', 'Srilanka')
myMap.set('key4', 'Maldiv')
myMap.set('key5', 'Nepal')
myMap.set('key6', 'Thailand')

if(myMap.has('key7')){
 console.log("Yes, it is available")
}else {
    console.log("No, it is not available")
}





