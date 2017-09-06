//jquery enabled, written vanilla

var box = document.getElementById('screen');
  
  function toScreen(x) {
    box.value += x;
    if(x === 'c') {
      box.value = '';
    }
  }
//equals button
  function solution() {
    x = box.value;
    x = eval(x);
    box.value = x;
  }
//^2 button
  function squared() {
    x = box.value;
    x = eval(x * x);
    box.value = x;
  }
//CE button
  function backspace() {
    var num = box.value;
    var len = num.length-1;
    var replaceNum = num.substring(0, len);
    box.value = replaceNum;
  }

