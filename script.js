export function check(answer) {
  if (answer == "1559142843-5b8fcb9de0af") {
    document.getElementByID("response").innerHTML = "https://images.unsplash.com/photo-" + answer + "?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";
  } else {
    document.getElementByID("response").innerHTML = "not quite";
  }
  return false;
}
