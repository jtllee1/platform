import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager.js';
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { startTetris } from '../components/tetris/start-tetris.js';

export default class extends Controller {
  connect() {
    startTetris();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
