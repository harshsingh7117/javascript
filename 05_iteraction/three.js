// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "hello world"

for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
}

// maps(hold key value pair)

const map = new Map()
map.set('IN', "india")
map.set('IN', "india")
map.set('USA', "America")
map.set('FR', "france")

// console.log(map);

for (const [key ,value] of map) {
    // console.log(key, ':-', value);
}

const myobj = {
    'game1': 'nfs',
    'game2': 'spiderman'
}

for (const [key,value] of myobj) {
    console.log(key , ':-', value);
}