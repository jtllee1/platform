import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from 'components/tools/timeout_manager';
import { clearAllEventListeners } from 'components/tools/event_listener_manager';
import { start2048 } from 'components/2048/start-2048';

export default class extends Controller {
  connect() {
    start2048();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
