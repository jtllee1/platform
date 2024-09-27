import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from 'components/tools/timeout_manager';
import { clearAllEventListeners } from 'components/tools/event_listener_manager';
import { control } from 'components/platform/control';

export default class extends Controller {
  connect() {
    control();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
