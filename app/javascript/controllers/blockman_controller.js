import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager.js';
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { startBlockman } from '../components/blockman/start-blockman.js';
import { levelAdjustor } from '../components/cellbuster/level-adjustor.js';

export default class extends Controller {
  connect() {
    startBlockman();
    levelAdjustor();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
