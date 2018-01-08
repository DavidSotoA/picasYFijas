
var validators = {
  inputValidator: (data, input) => (data.length<4 && !data.includes(input) && input.match(/^\d$/)!=null)
}

var num = null;
    trie = 1;

function pushButton(data, id) {
  $("#input").val(data + id);
  $(`#${id}`).toggleClass(constants["CLASS_BUTTON_NUMBER_ACTIVE"]);
}

function dropButtonn(data) {
  let numToRemove = data[data.length-1];
  $("#input").val(data.slice(0, -1));
  $(`#${numToRemove}`).toggleClass(constants["CLASS_BUTTON_NUMBER_ACTIVE"]);
}

function resetNumbersPanel() {
  $("#input").val('');
  Array(10).fill().map((_, id) => $(`#${id}`).attr('class', constants["CLASS_BUTTON_NUMBER"]));
}

function resetTries() {
  Array(10).fill().forEach((_,num) => {
    $(`#trie${num+1}Area`).val('');
    $(`#trie${num+1}text`).text('');
  });
}

function insertTries() {
  let addTrie = ((num) => `<div class="trie"><span>${num}.</span><textarea readonly id="trie${num}Area" rows="1" cols="4" maxlength="4" placeholder="0000"></textarea><span id="trie${num}text"><span></div>`);
  Array(10).fill().forEach((_, num) => $("#tries").append(addTrie(num+1)));
}

function createRandomNumber() {
  let numbers = []
  do {
    let x = Array(4).fill().map( x => (Math.floor(Math.random()*10)).toString());
    numbers = x.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
  } while (numbers.length!=4)
  return numbers;
}

function searchPikesAndFixeds(realNumber, inputNumber) {
  let fixeds = Array(realNumber.length).fill().map((_, i) => realNumber[i] == inputNumber[i] ? 1 : 0).reduce((a,b) => a + b),
      pickes = realNumber.map( x => (inputNumber.indexOf(x)!=-1  && inputNumber.indexOf(x)!=realNumber.indexOf(x)) ? 1 : 0).reduce((a,b) => a + b);
  return {"pickes": pickes, "fixeds": fixeds};
}

function winner() {
  num = null
  $("#play").text("Jugar!");
  $("#instructions").text(constants["MESSAGE_WIN"]);
}

function loser() {
  $("#play").text("Jugar!");
  $("#instructions").text(constants.MESSAGE_LOSE(num.join('')));
  num = null
}

function printTrieResult(data, result) {
  $("#instructions").text(constants.MESSAGE_RESULT(result.pickes, result.fixeds));
  $(`#trie${trie}Area`).val(data);
  $(`#trie${trie}text`).text(`${result.pickes} pica${result.pickes==1 ? '' : 's'} y ${result.fixeds} fija${result.fixeds==1 ? '' : 's'}`);
}

function onEnterKey(data) {
  if (data.length<4){
    $("#instructions").text(constants["MESSAGE_FAIL"]);
  }else{
    let result = searchPikesAndFixeds(num, data.split(''));
    if (result.fixeds == 4) {
        winner();
    }else {
      printTrieResult(data, result);
      trie+=1;
      resetNumbersPanel();
      if (trie > 10) loser();
     }
  }
}
