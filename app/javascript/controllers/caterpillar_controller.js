import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from 'components/tools/timeout_manager';
import { clearAllEventListeners } from 'components/tools/event_listener_manager';
import { continualMovement } from 'components/caterpillar/continual-movement';
import { levelAdjustor } from 'components/cellbuster/level-adjustor';

export default class extends Controller {
  connect() {
    continualMovement();
    levelAdjustor();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
