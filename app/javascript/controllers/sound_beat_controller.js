import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager.js';
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { control } from '../components/platform/control.js';

export default class extends Controller {
  connect() {
    control();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
