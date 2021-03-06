
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list li');
  
  
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
  
}

function deepestChild() {
  let items = document.querySelectorAll("#grand-node *");
  return items[items.length - 1];
 
}