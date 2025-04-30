const output  = document.getElementById('calc-output')
let operations;
output.value = '0'
const calculate = (operation) => {

    const operacionModificada = operation.replaceAll('X', '*').replaceAll('÷', '/').replaceAll('−', '-').replaceAll('×', '*') .replace(/√(\d+|\([^)]+\))/g, 'Math.sqrt($1)');
    console.log(operacionModificada)
     try {
        output.value = '0'
       modifyOutput(eval(operacionModificada));
        
     }catch (error) {
        output.value = 'Invalid Expression'

        return 'ERROR'
     }
     
}

const modifyOutput = (value) => {
    if (output.value === '0') {
        output.value = value
    } else {
        output.value += value
    }
}

const buttonsContainer = document.getElementById('buttons')

buttonsContainer.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn') ) {
        modifyOutput(event.target.innerText)
    }
    else if(event.target.classList.contains('btn-equal')) {
        calculate(output.value)
    }
    else if(event.target.classList.contains('btn-ac')) {
        output.value = '0'
    }
    else if(event.target.classList.contains('btn-delete')) {
        output.value = output.value.slice(0, -1)
        if (output.value === '') {
            output.value = '0'
        }
    }

})



