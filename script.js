fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(res => {
    if (res.ok) {
      console.log('SUCCESS') 

    } else{
      console.log("Not Successful") 

    }



    res.json()
}) 
       
    
.then(data => console.log(data))
.catch(error => console.log('ERROR'))