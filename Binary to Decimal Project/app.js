
document.getElementById('convert-btn').addEventListener('click', function(e){
    const ui = new UI();
    // get input values
    const binaryValue = document.getElementById('binary-input').value;
    
    let reg1 = /^[01]{1,8}$/g;
    let valid = reg1.test(binaryValue);

    if (valid) {
        const value = ui.convertBinary(binaryValue);

        ui.showDecimal(value);
    } else {
        ui.showError('Not a Binary Number/Longer than 8 digits');
    }
    

});


class UI {
    
    showError(message){
        //create element small 
        document.getElementById('decimal-output').value = '';
        document.getElementById('binary-input').value = '';
        const button = document.getElementById('convert-btn');
        let span = document.createElement('span');
        // add classes
        span.className = `badge alert badge-danger float-right p-1`;
        // add text
        span.appendChild(document.createTextNode(message));
        // get parent
        const paragraph = document.querySelector('.card-text');
        // place span in paragrapgh
        paragraph.appendChild(span);
        //disable button
        button.disabled = true;




        //disappear and enable button after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
            button.disabled = false;
        }, 2000);
    }
    
    
    
    showDecimal(value) {

        const decimalOutput = document.getElementById('decimal-output');
        
        decimalOutput.value = value;
    }

    convertBinary(binaryValue) {
        const binaryArray = binaryValue.split('').reverse();

        const process = binaryArray.map(Number).map( (item, idx) => item * (Math.pow(2, idx)));

        const sum = process.reduce((a, b) => a + b, 0);
        
        return sum;
    }

    
}
