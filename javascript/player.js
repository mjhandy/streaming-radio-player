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

    const btn = document.createElement("button");
    btn.setAttribute('id', item.callsign);
    btn.classList.add('btn');
    btn.classList.add('changeStation');
    btn.textContent = item.callsign;
    

    btn.addEventListener("click", () => {
      alert(item.actionMessage || `Button "${item.callsign}" clicked.`);
    });

    container.appendChild(btn);
  });
}

// Fetch JSON from external file
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