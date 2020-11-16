var a = [1, 2, NaN, 3, 'd', 4, 5, 'a', 'b', null];

/*for (var i = 0; i < a.length; i++) {
  document.write(`${a[i]}<br />`);
}*/

/*a.forEach(
  function(element) {
    if (element != null && (!isNaN(element) || typeof element == 'string')) {
      document.write(`${element}<br />`);
    }
  }
);*/

for (let index in a) {
  document.write(`${index}: ${a[index]}<br />`);
}

for (let el of a) {
  document.write(`${a.indexOf(el)}: ${el}<br />`);
}
