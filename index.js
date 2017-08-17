function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var elements = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = parseInt(elements[i].innerHTML) + n
  }
}

function deepestChild() {
  var element = document.querySelector('#grand-node')
  while (element) {
    if (element.children.length === 0) {
      return element
    }
    element = element.children[0]
  }
}
