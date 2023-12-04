window.onload = function() {
  var notification = document.getElementById('notification');
  var earthDayButton = document.getElementById('vallis-cold');
  var earthNightButton = document.getElementById('vallis-warm');
  
  function checkImage(imageName, expectedImage) {
  var img = new Image();
  img.src = imageName;

  img.onload = function() {
    if (img.src.includes(expectedImage)) {
      showNotification('Image found!');
    } else {
      showNotification('Image not found!');
    }
  };

  img.onerror = function() {
    showNotification('Image not found!');
  };
}

earthDayButton.addEventListener('click', function() {
  checkImage('thing.png', 'day');
});

earthNightButton.addEventListener('click', function() {
  checkImage('thing2.png', 'night');
});
};
