function bicoinCurrency(event){
    event.preventDefault()

    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data =>{
        const currency = document.querySelector('#currency').value;
        console.log(data)
        const bicoin = data.bpi[currency].rate;

        if(bicoin !== undefined){
            document.querySelector('#result').innerHTML =`1 bicoin is equal ${bicoin} ${currency}.`;
        }
        
        else{
            document.querySelector('#result').innerHTML = `invalid currency`
        }
    
        
    })
    .catch (Error =>{
        document.querySelector('#result').innerHTML = `Sorry there is a ${Error}}`
    })

    return false

}



document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('form').onsubmit = bicoinCurrency;


   
})