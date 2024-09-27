import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager.js';
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { startMatch } from '../components/match3/start-match.js';
import { swap } from '../components/match3/swap.js';

export default class extends Controller {
  connect() {
    startMatch();
    swap();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
