import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager.js';
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { select } from '../components/connectfour/select.js';

export default class extends Controller {
  connect() {
    select();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
