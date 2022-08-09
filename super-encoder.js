// https://www.codecademy.com/courses/learn-intermediate-javascript/projects/message-mixer-node
// -------------------- ERROR -------------------------
// $ node super-encoder.js encode
// Enter the message you would like to encrypt...
// > hello
// urrkn
// $ node super-encoder.js decode
// Enter the message you would like to encrypt...
// > urrkn
// nkrru

// Import the encryptors functions here.
const encryptors = require('./encryptors.js');
const { caesarCipher, symbolCipher, reverseCipher } = encryptors;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
    return reverseCipher(symbolCipher(caesarCipher(str, 6)));
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
    return caesarCipher(symbolCipher(reverseCipher(str, -6)));
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);
