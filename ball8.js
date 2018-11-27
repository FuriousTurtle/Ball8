let i = '1';
while (i < 10000) {
let userQuestion=prompt("Quel est votre question ?");
let eightBall =(Math.floor(Math.random() * 2));
console.log(userQuestion);
switch (eightBall) {
  case 1:
    eightBall = "Oui";
    break;
      case 0:
    eightBall = "Non";
    break;
}
alert("La boule a repondu : "+eightBall);
}