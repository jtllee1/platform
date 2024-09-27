import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager.js';
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { startBalloon } from '../components/balloonblast/start-balloon.js';

export default class extends Controller {
  connect() {
    startBalloon();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
