function docSearch() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

function dropMenu(num) {
  document.getElementById("myDropdown" + num).classList.toggle("show");
};

function docFunctions(num) {
 var a = document.getElementById("docTitle");
 var b = document.getElementById("docDesc");
  if (num == 1) {
  a.innerHTML = "$add[num1;num2]";
  b.innerHTML = "<code>$var[a;1]<br> $var[a;$add[$var;1]]<br>$consoleOutput[[a]]</code><br>Output = 2<br><br><b>TIP!</b><br><i>Use just $var to output the variable currently being modified.</i>";
  } else if (num == 2) {
  a.innerHTML = "$sub[num1;num2]";
  b.innerHTML = "<code>$var[a;1]<br> $var[a;$sub[$var;1]]<br>$consoleOutput[[a]]</code><br>Output = 0<br><br><b>TIP!</b><br><i>Use just $var to output the variable currently being modified.</i>";
  } else if (num == 3) {
  a.innerHTML = "$div[num1;num2]";
  b.innerHTML = "<code>$var[a;4]<br> $var[a;$div[$var;2]]<br>$consoleOutput[[a]]</code><br>Output = 2<br><br><b>TIP!</b><br><i>Use just $var to output the variable currently being modified.</i>"; 
  }
};

function docFuncExtensions(num) {
 var a = document.getElementById("docTitle");
 var b = document.getElementById("docDesc");
  if (num == 1) {
  a.innerHTML = ".allowDecimals[length]";
  b.innerHTML = "<code>$var[a;5]<br> $var[a;$div[$var;2].allowDecimals[3]]<br>$consoleOutput[[a]]</code><br>Output = 2.250<br><br><b>TIP!</b><br><i>Use just $var to output the variable currently being modified.</i>";
  } 
};