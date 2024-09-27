import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from 'components/tools/timeout_manager';
import { clearAllEventListeners } from 'components/tools/event_listener_manager';
import { startPong } from 'components/pong/start-pong';
import { movePaddle } from 'components/pong/move-paddle';

export default class extends Controller {
  connect() {
    startPong();
    movePaddle();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
