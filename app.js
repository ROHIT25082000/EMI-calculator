const container = document.querySelector('.container');
const form = document.querySelector('form');
const AmountElement = document.querySelector('.amount');   
const rateElement = document.querySelector('.rate');  
const timeElement = document.querySelector('.time');
const calculateButton = document.querySelector('button');


addAllEvents();  


function addAllEvents() {
    calculateButton.addEventListener('click', calculateAmount);
}

// calculate amount of money
function calculateAmount(e) {
    let amount = Number(AmountElement.value); 
    let rate = Number(rateElement.value);   
    let duration = Number(timeElement.value);  
   
    if(isNaN(amount) || isNaN(rate) || isNaN(duration) || amount === 0 || rate === 0 || duration === 0) {
        alert('Enter Proper values ');
    }else {
       
        // graphic  

        let element = document.createElement('img'); 
        element.src = 'loading.gif';

        let r = rate/1200;   
        let P = amount;  
        let n = duration * 12;    
        let EMI = P * r * (((1 + r)** n)/((1 + r)**n - 1));
        
        let EMIElement = document.createElement('div');  
        EMIElement.className = 'result'
        let text = document.createElement('h2');   
        
        text.innerHTML = `Your monthy EMI`; 
        EMIElement.appendChild(text);   
        
        let valueNumber = document.createElement('h3');
        valueNumber.innerHTML = `<b>$${EMI.toFixed(2)}</b>`  
        EMIElement.appendChild(valueNumber);
        isCalculated = true;
        
        if(form.lastElementChild !== calculateButton) {
            form.lastChild.remove();
        } 
        
        form.appendChild(element); 
        setTimeout(function(){
                form.removeChild(element);
                form.appendChild(EMIElement);
        }, 2000);
        
    }
    e.preventDefault();  
}

