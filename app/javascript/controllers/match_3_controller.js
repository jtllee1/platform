import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from 'components/tools/timeout_manager';
import { clearAllEventListeners } from 'components/tools/event_listener_manager';
import { startMatch } from 'components/match3/start-match';
import { swap } from 'components/match3/swap';

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
