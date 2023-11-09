function toggleButton(selector) {
  const turnOnOff = document.querySelector(selector);
   if (!turnOnOff.classList.contains('is-toggled')) {
    turnOffPreviousButton();  
    turnOnOff.classList.add('is-toggled');
  } else {
     turnOnOff.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const PreviousButton = document.querySelector('.is-toggled');

  if (PreviousButton) {
    PreviousButton.classList.remove('is-toggled');
  }
}