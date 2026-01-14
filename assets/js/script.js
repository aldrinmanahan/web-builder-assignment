const phoneInput = document.getElementById('contactNumber');

phoneInput.addEventListener('input', function (e) {
  // Replace anything that is NOT a digit with an empty string
  e.target.value = e.target.value.replace(/\D/g, '');
});

if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}