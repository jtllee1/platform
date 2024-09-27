import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager.js';
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { continualMovement } from '../components/caterpillar/continual-movement.js';
import { levelAdjustor } from '../components/cellbuster/level-adjustor.js';

export default class extends Controller {
  connect() {
    continualMovement();
    levelAdjustor();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
