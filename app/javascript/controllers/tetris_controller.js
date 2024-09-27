import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from 'components/tools/timeout_manager';
import { clearAllEventListeners } from 'components/tools/event_listener_manager';
import { startTetris } from 'components/tetris/start-tetris';

export default class extends Controller {
  connect() {
    startTetris();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
