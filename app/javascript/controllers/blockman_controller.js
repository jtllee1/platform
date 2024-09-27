import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from 'components/tools/timeout_manager';
import { clearAllEventListeners } from 'components/tools/event_listener_manager';
import { startBlockman } from 'components/blockman/start-blockman';
import { levelAdjustor } from 'components/cellbuster/level-adjustor';

export default class extends Controller {
  connect() {
    startBlockman();
    levelAdjustor();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
