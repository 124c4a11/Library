window.onload = function() {
  const textReveal = baffle('.page-title');

  textReveal.set({
    characters: '░██ ▒><▒░ /█░▓▒ ▒▒▓ >█▓░> ▒██░ ░▓▓ ░▒█░ <░█░',
    speed: 120
  });
  textReveal.start();
  textReveal.reveal(4000);
}