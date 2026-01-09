/**
 * Creates buttons from JSON data and appends them to a container.
 * @param {Array} data - Array of objects with 'label' and 'actionMessage'.
 * @param {string} containerId - The ID of the HTML container element.
 */
function createButtonsFromJSON(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear loading text

  if (!Array.isArray(data)) {
    console.error("Invalid JSON format: Expected an array.");
    container.textContent = "Error: Invalid JSON format.";
    return;
  }

  data.forEach(item => {
    if (!item.callsign || typeof item.callsign !== "string") {
      console.warn("Skipping invalid item:", item);
      return;
    }

    // build out the station play buttons
    const btn = document.createElement("button");
    btn.setAttribute('id', item.callsign);
    btn.classList.add('btn', 'btn-changeStation');

    // create the text node
    btn.append(document.createTextNode(item.name));

    // create the span
    const span = document.createElement('span');
    span.classList.add('bi', 'bi-caret-right-fill'); // bootstrap icon

    // append the span after the text
    btn.append(span);



    const radioPlayer = document.getElementById('radioPlayer');
    const radioName = document.getElementById('radioName');
    btn.addEventListener("click", () => {
      // alert(item.actionMessage || `Button "${item.callsign}" clicked. URL:"${item.url}"`);
      radioPlayer.src = item.url;
      radioPlayer.play();
      radioName.textContent = item.callsign + ' - ' + item.name;
    });

    container.appendChild(btn);
  });
}

// Fetch JSON file with station data from external file
fetch("./data/stations.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => createButtonsFromJSON(data, "radioStatonsButtons"))
  .catch(error => {
    console.error("Error loading JSON:", error);
    document.getElementById("buttonContainer").textContent = "Failed to load buttons.";
  });

// player control buttons
const radioPlayer = document.getElementById('radioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');
const muteButton = document.getElementById('muteButton');
const muteIcon = document.getElementById('muteIcon');


/**
 * Audio controls buttons
 * Play/Pause and Mute/Unmute
 */
playPauseButton.addEventListener("click", () => {
  // get play status
  const status = playPauseButton.getAttribute("status");
  if (status === 'stopped') {
    // change status to playing
    playPauseButton.setAttribute('status', 'playing');
    // update icon, if needed
    if (playIcon.classList.contains('bi-caret-right-fill')){
      playIcon.classList.remove('bi-caret-right-fill');
      playIcon.classList.add('bi-pause-fill');
    }
  } else {
  // change status to stopped
  playPauseButton.setAttribute('status', 'stopped');
  if (playIcon.classList.contains('bi-pause-fill') ){
    playIcon.classList.remove('bi-pause-fill');
    playIcon.classList.add('bi-caret-right-fill');
  }
}
  // check play status value, and change audio play status
  console.log('play button clicked:', status);
});

muteButton.addEventListener("click", () => {
  console.log('mute button clicked');
  const status = muteButton.getAttribute("status");
  if (status === 'muted'){
    muteButton.setAttribute('status', 'playing');
  } else {
    muteButton.setAttribute('status', 'muted');
  }
})