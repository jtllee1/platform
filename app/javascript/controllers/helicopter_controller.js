import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from 'components/tools/timeout_manager';
import { clearAllEventListeners } from 'components/tools/event_listener_manager';
import { movement } from 'components/helicopter/movement';
import { start } from 'components/helicopter/start';

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
