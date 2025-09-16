// Helper function to add logs
function addLog(message) {
  const logList = document.getElementById("log-list");
  const time = new Date().toLocaleTimeString();
  const li = document.createElement("li");
  li.textContent = `[${time}] ${message}`;
  logList.prepend(li); // latest on top
}

// Status element
const statusIndicator = document.getElementById("status-indicator");

// Control functions
function activateSprinklers() {
  statusIndicator.textContent = "Sprinklers Activated!";
  statusIndicator.className = "alert";
  addLog("Sprinklers activated to deter animals.");
  resetStatus();
}

function turnOnLights() {
  statusIndicator.textContent = "Lights Turned On!";
  statusIndicator.className = "alert";
  addLog("Lights turned on for deterrence.");
  resetStatus();
}

function triggerAlarm() {
  statusIndicator.textContent = "Alarm Triggered!";
  statusIndicator.className = "alert";
  addLog("Loud alarm triggered to scare animals.");
  resetStatus();
}

// Reset back to monitoring after 3 sec
function resetStatus() {
  setTimeout(() => {
    statusIndicator.textContent = "Monitoring...";
    statusIndicator.className = "monitoring";
  }, 3000);
}

// Simulated random detection logs every 10s
setInterval(() => {
  const detections = [
    "No intrusion detected.",
    "Motion detected near North Gate.",
    "Animal detected near crop field.",
    "Unknown movement in East zone.",
    "All clear."
  ];
  const randomMessage = detections[Math.floor(Math.random() * detections.length)];
  addLog(randomMessage);
}, 10000);
