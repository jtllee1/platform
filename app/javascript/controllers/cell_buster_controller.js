import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager.js';
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { grid } from '../components/cellbuster/grid.js';
import { levelAdjustor } from '../components/cellbuster/level-adjustor.js';
import { laser } from '../components/cellbuster/laser.js';
import { timer } from '../components/cellbuster/timer.js';
import { generateEnemies } from '../components/cellbuster/generate-enemies.js';

export default class extends Controller {
  connect() {
    grid();
    levelAdjustor();
    timer();
    laser();
    timer();
    generateEnemies();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
