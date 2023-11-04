function toggleButton(selector) {
  const turnOnOff = document.querySelector(selector);
   if (!turnOnOff.classList.contains('is-toggled')) {
turnOnOff.classList.add('is-toggled');
  } else {
     turnOnOff.classList.remove('is-toggled');
  }
}