<!DOCTYPE html>
<html>
  <head>
    <title></title>


   
   
    <link rel="stylesheet" href="./css/main.css">
  </head>
  <body>
    <div id="streamingRadio" class="radio">
      <div class="radio_info">
        <div id="radioName"></div>
      </div>
      <div clsss="radio_player">
        <audio id="radioPlayer">
      </div>
      <div class="radio_controls">
        <button type="button" id="playPauseButton" name="playPauseButton" class="btn btn-control btn-icon">
          <span class="icon bi bi-caret-right-fill">

          </span>
        </button>
        <button type="button" name="mute" class="btn btn-control btn-icon">
          <span class="icon bi bi-volume-mute-fill">

          </span>
        </button>
      </div>
      <div id="radioStatonsButtons" class="radio_stations"></div>
    </div>
    <script src="./javascript/player.js"></script>
  </body>
</html>