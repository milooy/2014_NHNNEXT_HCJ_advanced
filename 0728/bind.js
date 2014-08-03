var myFunction = {

   getName : function() {
            	
       setTimeout(function() {

               console.log(this.phone);
           }.bind(this),1500);
   },
   setName : function(newName) {
       this.name = newName;
   }
}

var myProduct = {phone : "iphone", com: "apple"}
myFunction.getName.apply(myProduct);


//보통 콜백에 바인드를 지정해줌. this를 확인하고 바인드해줌. 