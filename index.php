<!DOCTYPE html>
<html>
  <head>
    <title></title>

    <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
    <!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="./css/main.css">
  </head>
  <body>
    <div id="streamingRadio" class="radio">
      <div class="radio_info"></div>
      <div class="radio_controls">
        <button type="button" name="playPause" class="btn btn-icon">
          <span class="material-symbols-rounded">
            play_arrow
          </span>
        </button>
        <button type="button" name="mute" class="btn btn-icon">
          <span class="material-symbols-rounded">
            volume_off
          </span>
        </button>
      </div>
      <div id="radioStatons" class="radio_stations"></div>
    </div>
  </body>
</html>