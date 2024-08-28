



const name = "kashmir";
const encode = name.split("");
let code = '';
let decodeValue = '';

encode.forEach((char) => {
    const unicodeValue = char.codePointAt(0) + "k";
    console.log(unicodeValue);
    code = code + unicodeValue;
});
console.log(code);

const decode = code.split("k");
// console.log(decode);

decode.forEach((el,i)=>{
    let output = String.fromCharCode(el);
    decodeValue = decodeValue + output;

})

console.log(decodeValue);




