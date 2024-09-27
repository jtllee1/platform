import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager.js';
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { startPong } from '../components/pong/start-pong.js';
import { movePaddle } from '../components/pong/move-paddle.js';

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
