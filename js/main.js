var i = 0;
while (i < 10) {

  if (i == 5) {
    i++;
    continue;
  }

  document.write(`${i++}<br />`);

  if (i == 7) {
    break;
  }
}

/*
document.write(0);
document.write(1);
document.write(2);
document.write(3);
document.write(4);
document.write(5);
document.write(6);
document.write(7);
document.write(8);
document.write(9);
*/
