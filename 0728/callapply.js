//#1
//call 이나 apply 를 사용해서 context를 변경하는 예제를 직접 만들고
//그 상황에서 사용된 this 가 무엇을 가리키는지 설명하세요.

var personalInfo = {
	girlAge : "13",
	chickAge : "25",
	grandAge : "90",

	getAge : function() {
		return this.age; // context인 personalInfo오브젝트의 age를 반환함.
	},
	setAge : function(newAge) {
		this.age = newAge; // context인 personalInfo의 age에 newAge를 넣음.
	}
}

var grandma = {
	age : "80",
	hair : "white"
};
personalInfo.setAge.call(grandma, personalInfo.grandAge);
personalInfo.getAge.call(grandma);

personalInfo.setAge.call(grandma, personalInfo.girlAge);
personalInfo.getAge.call(grandma);

// 2
// prototype 기반의 코드를 작성하세요.

function myList() {
	this.nameArray = [];
}

myList.prototype.addName = function(newName) {
	this.nameArray[this.nameArray.length] = newName;
}
myList.prototype.getAllNames = function() {
	return this.nameArray;
}
myList.prototype.removeName = function(removeName) {
	for (var i = 0; i < this.nameArray.length; i++) {
		if (this.nameArray[i] == removeName) {
			this.nameArray.splice(i, 1);
		}
	}
	return this.nameArray;
}

var oName = new myList();
oName.addName("henry");
oName.getAllNames(); // ["henry"];
oName.addName("john");
oName.getAllNames(); // ["henry", "john"];
oName.removeName("john"); // ["henry"]

//3
//클릭이벤트는 비동기함수기 때문에 다 끝나고 실행. 내부함수가 아직 안끝나서 클로저 영역에 i=3으로 들어가있다. 그리곤 클로저의 i를 참조하며 클릭이벤트 발생.
//그래서 그걸 즉시실행함수에 넣어두고 루프 도는 상황의 i를 받아온다.
//0부터 시작하니까 +1 해준다

//<ul>
//<li>apple</li>
//<li>orange</li>
//<li>melon</li>
//</ul>
//
//ul{
//	  list-style:none;
//	  margin:50px auto;
//	  width :800px;
//	}
//	ul>li{
//	  width : 200px;
//	  height : 200px;
//	  outline : 1px solid red;
//	  display : inline-block;
//	  margin-left :10px;
//	  text-align:center;
//	  font-size : 1.5em;
//	  line-height : 200px;
//	}

document.addEventListener("DOMContentLoaded", function() {
	registerEvents();

	function registerEvents() {
		var liList = document.querySelectorAll("ul>li");
		var len = liList.length;

		for (var i = 0; i < len; ++i) {
			(function(myi) {
				liList[myi].addEventListener("click", function() {
					alert(myi + 1 + "번째과일을 선택하셨습니다.");
				});
			})(i);
		}
	}
});
