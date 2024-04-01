const myobj ={
    js : 'javascript',
    cpp : 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myobj) {
    // console.log(`${key} shortcut is for ${myobj[key]}`);
}

const prog = ["js","java","cpp","py"]

for (const key in prog) {
    console.log(prog[key]);
}

// object forin loop
// arrays forof loop