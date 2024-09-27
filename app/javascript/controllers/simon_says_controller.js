import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager.js';
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { startSimon } from '../components/simonsays/start-simon.js';
import { simonSays } from '../components/simonsays/simon-says.js';
import { cube } from '../components/cube/cube.js';
import { cubePress } from '../components/cube/cube-press.js';

export default class extends Controller {
  connect() {
    startSimon();
    simonSays();
    cube();
    cubePress();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
