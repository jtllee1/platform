import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager';
import { clearAllEventListeners } from '../components/tools/event_listener_manager';
import { startBalloon } from '../components/balloonblast/start-balloon';

export default class extends Controller {
  connect() {
    startBalloon();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
