//전역변수를 줄이는 것에는 var사용, 즉시실행함수/즉시객체초기화, 네임스페이스 패턴이 있다.

//1. 객체 리터럴 네임스페이싱
//	- 하나의 전역객체 만든 후, 모든 함수, 객체, 변수를 여기 추가함.
//	- 나중에 추가하지 않아도 선언시 리터럴로 미리 선언도 가능.
//	- 체계적이지만 모든 변수, 함수에 상위객체 다붙여야해서 소스코드량 늘어남.
//	- 전역 인스턴스가 하나뿐이라 코드의 한 부분만 수정되어도 전역 인스턴스 수정하게 됨.
//	- 매번 객체 접근, 이름이 중첩되고 길어져서 검색 느려짐.
	
var NEXT = {};
NEXT.Girl = function() {
	console.log('beautiful');
}
NEXT.Boy = {
	console.log('sexy');
} 
NEXT.peopleNum = 100;
NEXT.getPeopleNum = function() {
	return this.peopleNum;	//this를 써서, 새로운 전역변수에 넣으면 이 값은 받아오기 힘들다.
							//그래서 this는 절대 네임스페이스로 사용되고 있는 객체를 참조해선 안됨.
}

NEXT.modules = {};
NEXT.modules.module1 = {};
NEXT.modules.module1.data = {a:1, b:2};

NEXT.Girl(); //beautiful
console.log(NEXT.modules.module1.data.a) //b

console.log(NEXT.getPeopleNum()); //100
var NEXT2 = NEXT.getPeopleNum;
console.log(NEXT2); //undefined



//2. 범용 네임스페이스 함수
//	- 이미 있는걸 재정의하지 않기 위해, 미리 선언되었는지 확인하고 정의.
var NEXT = {};
if (typeof NEXT === "undefined") {
	var NEXT = {}; 
} //이걸 통째로 var NEXT = NEXT || {} 라고 써도 됨.



//3. 샌드박스 패턴
//	- 코드들이 전역 범위 더럽히지 않고 맘껏 쓰이도록 유효범위 정해줌.
function Sandbow() {
	var args = Array.prototype.slice.call(arguments),
	callback = args.pop(),
	modules = (args[0] && typeof args[0] === "string") ? args : args[0],
	        i;
	 
	    // 함수가 생성자로 호출되도록 보장(new를 강제하지 않는 패턴)
	    if (!(this instanceof Sandbox)) {
	        return new Sandbox(modules, callback);
	    }
	 
	    // this에 필요한 프로퍼티들을 추가
	    this.a = 1;
	    this.b = 2;
	 
	    // "this객체에 모듈을 추가"
	    // 모듈이 없거나 "*"(전부)이면 사용 가능한 모든 모듈을 사용한다는 의미입니다.
	    if (!modules || modules === '*' || modules[0] === '*') {
	        modules = [];
	        for (i in Sandbox.Modules) {
	            if (Sandbox.modules.hasOwnProperty(i)) {
	                modules.push(i);
	            }
	        }
	    }
	 
	    // 필요한 모듈들을 초기화
	    var m_length = modules.length;
	    for (i=0; i<m_length; i+=1) {
	        Sandbox.modules[modules[i]](this);
	    }
	 
	    // 콜백 함수 호출
	    callback(this);
	}
	 
	// 필요한 프로토타입 프로퍼티들을 추가
	Sandbox.prototype = {
	    name: "JayJin",
	    getName: function () {
	        return this.name;
	    }
};


	