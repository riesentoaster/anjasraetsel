function check() {
  var key = document.forms['form']['answer'].value;
  var response;
  if (key == "1559142843-5b8fcb9de0af") {
    response =  "https://images.unsplash.com/photo-" + key + "?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";
  } else {
    response = "";
  }
  document.getElementsByTagName('a')[0].href = response;
  return false;
}
