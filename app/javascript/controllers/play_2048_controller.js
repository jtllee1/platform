import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager.js';
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { start2048 } from '../components/2048/start-2048.js';

export default class extends Controller {
  connect() {
    start2048();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
