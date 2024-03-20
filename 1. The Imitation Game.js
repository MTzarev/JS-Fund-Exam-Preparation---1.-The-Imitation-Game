function examPrep(input) {
    let arr = input.slice();
    let message = input.shift();
    let currentLine = input.shift();
 
    while (currentLine !== 'Decode') {
 
        let tempMessage = '';
        let tokens = currentLine.split('|');
 
        let command = tokens[0];
 
        if (command === 'Move') {
 
            let lettersNumber = Number(tokens[1]);
            let lettersToMove = message.substring(0, lettersNumber);
            tempMessage = message.replace(lettersToMove, '');
            tempMessage += lettersToMove;
            message = tempMessage;
 
        } else if (command === 'Insert') {
 
            let index = Number(tokens[1]);
            let value = tokens[2];
 
            tempMessage = message.split('');
            tempMessage.splice(index, 0, value);
            message = tempMessage.join('');
 
        } else if (command === 'ChangeAll') {
 
            let substring = tokens[1];
            let replacement = tokens[2];
 
            tempMessage = message.replace(new RegExp(substring, 'g'), replacement);
            message = tempMessage;
        }
 
        currentLine = arr.shift();
 
    }
 
    console.log(`The decrypted message is: ${message}`);
 
}
examPrep([
    'zzHe',
    'ChangeAll|z|l',
    'Insert| 2|o',
    'Move|3',
    'Decode'
]);