/*
 * Ajax Test
 * 
 * [응답값]
   Andre Schurrle,24 ronaldo,30 iniesta,31 xabi alonso,34 *
 */

(function() {

    var URL = "http://localhost:8000/data.txt";
    var count = 0;
  
    var oMyAjax = {

      xhr_async : function(sURL) {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function() {
          if (req.readyState == 4 &&  req.status == 200) {
              this.execFirstMessage(req.responseText);
            }
        }.bind(this);
        req.open("GET" , sURL , true);
        req.send(null);
      },
      
      myCallback : function(result) {
        var _ele = document.querySelector("#result");
        _ele.innerHTML += "<div class='list'>" + result + "</div>";
      },
      
      toggleLayer : function() {
        if (count == 10) {
          clearTimeout(animator);
          return;
        }
        var _ele = document.querySelector("#result > .list");
        
        console.log(count);

        if(_ele) {
        	_ele.style.visibility = (_ele.style.visibility !=="hidden") ? "hidden" : "visible";	
        	count++;
        }
        var animator = setTimeout(this.toggleLayer.bind(this), 500);
        
      },
      execFirstMessage : function(msg) {
      	setTimeout(function() {
		alert("다 받아 진 거 같네요. 확인을 누르면 데이터가 보여요 ");
		this.myCallback(msg);
	}.bind(this),2000);
      }

    }
    oMyAjax.xhr_async(URL);
    // oMyAjax.execFirstMessage();
    oMyAjax.toggleLayer();
  
})();
