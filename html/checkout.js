


      const txtOutput=document.getElementById("output");
      const txtName=document.getElementById("name");
      const btnPay=document.getElementById("cart");
      const address=document.getElementById("address");
    
      //adding an eventlistener
      btnPay.addEventListener("click",processOrder);
      
      
      //process oreder function
      function processOrder(event){
         if(theform.checkValidity()){
            event.preventDefault();
            let name=txtName.value;
            let add=address.value;
            const deliveryDate=new Date();
            deliveryDate.setDate(deliveryDate.getDate()+7);
            txtOutput.innerText=`${name}, Your order will be delivered to ${add} on ${deliveryDate}`;
            localStorage.removeItem("cart");
         }
      }
    
        