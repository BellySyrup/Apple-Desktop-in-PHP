function createDockParameters(name){
      return [
          {
            name:      name,
            extension: '.png',
            sizes:     [80, 160],
            onclick:   function(){
                         alert('You clicked on the first icon. You can configure arbitrary JavaScript to be executed when an icon is clicked. In this example an alert box is displayed.');
                       }
          },
          {
            name:      name,
            extension: '.png',
            sizes:     [80, 160],
            onclick:   function(){
                         alert('You clicked on the first icon. You can configure arbitrary JavaScript to be executed when an icon is clicked. In this example an alert box is displayed.');
                       }
          },
          {
            name:      name,
            extension: '.png',
            sizes:     [80, 160],
            onclick:   function(){
                         alert('You clicked on the first icon. You can configure arbitrary JavaScript to be executed when an icon is clicked. In this example an alert box is displayed.');
                       }
          },
          {
            name:      name,
            extension: '.png',
            sizes:     [80, 160],
            onclick:   function(){
                         alert('You clicked on the first icon. You can configure arbitrary JavaScript to be executed when an icon is clicked. In this example an alert box is displayed.');
                       }
          },
          {
            name:      name,
            extension: '.png',
            sizes:     [80, 160],
            onclick:   function(){
                         alert('You clicked on the first icon. You can configure arbitrary JavaScript to be executed when an icon is clicked. In this example an alert box is displayed.');
                       }
          },
          {
            name:      name,
            extension: '.png',
            sizes:     [80, 160],
            onclick:   function(){
                         alert('You clicked on the first icon. You can configure arbitrary JavaScript to be executed when an icon is clicked. In this example an alert box is displayed.');
                       }
          },
          {
            name:      name,
            extension: '.png',
            sizes:     [80, 160],
            onclick:   function(){
                         alert('You clicked on the first icon. You can configure arbitrary JavaScript to be executed when an icon is clicked. In this example an alert box is displayed.');
                       }
          },
          {
            name:      name,
            extension: '.png',
            sizes:     [80, 160],
            onclick:   function(){
                         alert('You clicked on the first icon. You can configure arbitrary JavaScript to be executed when an icon is clicked. In this example an alert box is displayed.');
                       }
          },
          {
            name:      name,
            extension: '.png',
            sizes:     [80, 160],
            onclick:   function(){
                         alert('You clicked on the first icon. You can configure arbitrary JavaScript to be executed when an icon is clicked. In this example an alert box is displayed.');
                       }
          }
        ];
    }

    var dock = new MacStyleDock(
        document.getElementById('dock'),
        (window.XMLHttpRequest
            ? createDockParameters('mac-icon-')
            : createDockParameters('mac-icon-solid-')),
        80,
        160,
        2);
