
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list li');
  
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[0].innerHTML = parseInt(rankedList[0].innerHTML) + n;
  }
  
}