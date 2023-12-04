window.onload = function() {
  var notification = document.getElementById('notification');
  var earthDayButton = document.getElementById('vallis-warm');
  var earthNightButton = document.getElementById('vallis-cold');

  earthDayButton.addEventListener('click', function() {
    checkImage('thing2.png');
  });

  earthNightButton.addEventListener('click', function() {
    checkImage('thing.png');
  });

  function checkImage(imageName) {
    var img = new Image();
    img.src = imageName;

    img.onload = function() {
      showNotification('Image found!');
    };

    img.onerror = function() {
      showNotification('Image not found!');
    };
  }

  function showNotification(message) {
    if (Notification.permission === 'granted') {
      new Notification('Image Checker', { body: message });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
          new Notification('Image Checker', { body: message });
        }
      });
    }
  }
};