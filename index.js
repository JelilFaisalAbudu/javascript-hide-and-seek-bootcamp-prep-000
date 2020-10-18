
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
  let deepest = document.querySelectorAll("#grand-node *");
  deepest[deepest.length - 1]
}