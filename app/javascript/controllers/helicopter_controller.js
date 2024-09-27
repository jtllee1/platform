import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager.js';
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { movement } from '../components/helicopter/movement.js';
import { start } from '../components/helicopter/start.js';

export default class extends Controller {
  connect() {
    movement();
    start();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
