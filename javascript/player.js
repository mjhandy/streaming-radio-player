/**
 * Creates buttons from JSON data and appends them to a container.
 * @param {Array} data - Array of objects with 'label' and 'actionMessage'.
 * @param {string} containerId - The ID of the HTML container element.
 */
function createButtonsFromJSON(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear loading text
  console.log("data:", data);
  if (!Array.isArray(data)) {
    console.error("Invalid JSON format: Expected an array.");
    container.textContent = "Error: Invalid JSON format.";
    return;
  }

  //sort the data based on freq
  data.sort((a, b) => parseFloat(a.freq) - parseFloat(b.freq));

  // loop through 'data', and build the buttons with correct labels
  data.forEach((item) => {
    if (!item.callsign || typeof item.callsign !== "string") {
      console.warn("Skipping invalid item:", item);
      return;
    }

    // build out the station play buttons
    const btn = document.createElement("button");
    const radioPlayer = document.getElementById("radioPlayer");
    const radioName = document.getElementById("radioName");
    
    btn.setAttribute("id", item.callsign);
    btn.classList.add("btn", "btn-changeStation");
    // create the text node
    btn.append(document.createTextNode(item.freq));
    // button click event for changing radio station
    btn.addEventListener("click", () => {
      

      // stop any current audio
      radioPlayer.pause();
      // load the new stream
      radioPlayer.src = item.url;
      // update the display with the station name
      radioName.textContent = item.name;

      radioPlayer.play();
    });

    container.appendChild(btn);
  });

  // load a random station on initial load
}

// Fetch JSON file with station data from external file
fetch("./data/stations.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => createButtonsFromJSON(data, "radioStatonsButtons"))
  .catch((error) => {
    console.error("Error loading JSON:", error);
    document.getElementById("buttonContainer").textContent =
      "Failed to load buttons.";
  });

/**
 * Audio controls buttons
 * Play/Pause and Mute/Unmute
 */

// player control buttons
const radioPlayer = document.getElementById("radioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const playIcon = document.getElementById("playIcon");
const muteButton = document.getElementById("muteButton");
const muteIcon = document.getElementById("muteIcon");

playPauseButton.addEventListener("click", () => {
  // get play status
  // playButtonIcon();
});

muteButton.addEventListener("click", () => {
  console.log("mute button clicked");
  const status = muteButton.getAttribute("status");
  if (status === "muted") {
    muteButton.setAttribute("status", "playing");
  } else {
    muteButton.setAttribute("status", "muted");
  }
});