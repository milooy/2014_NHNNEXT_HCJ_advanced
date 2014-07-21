function callcall(arg1, arg2){
    var string = "";

    string += "this value: " + this;
    for (i in callcall.arguments) {
        string += "arguments: " + callcall.arguments[i];
        string += "<br />";
    }
    return string;
}

document.write(callcall(1, 2)); //여기의 this는 [object Window]이다. arguments가 1과 2가 넘어옴. 
document.write(callcall.call(3, 4, 5)); //여기의 this는 3이다. arguments가 4와 5가 넘어옴. 

//<apply와 call 차이>
//apply는 함수 인자를 배열 형태로 전달, call은 인자를 쉼표로 구분지어 전달
//haha.apply(valueForThis, [arg1, arg2])
//haha.call(valueForThis, arg1, arg2, ...)
