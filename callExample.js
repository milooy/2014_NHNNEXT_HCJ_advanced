var myfunction = {
  getName: function() {
    return this.name;
  },
  setName : function(newName) {
    this.name = newName;
  }
}

var mySNS = {name: "Line"};
var myProduct = {name: "jisu", phone: "iPhone"};

myfunction.setName.call(mySNS, "kakao");