function check() {
  var corruptedegg = "hsrmo5)(am`ebo)ogkpk_pd)]he/oflpj'*-187.,/+/.52+^41._15c_^0a9bplh`:n]'*&2-/#esc]5exHe_C<_YWPgLf@sF<d8$^qoi6^oqk^p!`bl=bpll!q6)944#m82)";
  
  //so you like js-statements?
  var answer = Array.from(document.forms["form"]["answer"].value).map((element, index) => String.fromCharCode(element.charCodeAt() - index % 9)).join('');

  if (answer == corruptedegg) {
    document.getElementById("egg").href = document.forms["form"]["answer"].value;
    document.getElementById("egg").innerHTML = "You did it!";
  }
  return false;
}
