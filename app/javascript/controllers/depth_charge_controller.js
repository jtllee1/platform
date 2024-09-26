import { Controller } from "@hotwired/stimulus"
import { clearAllIntervals } from "../components/tools/timeout_manager";
import { clearAllEventListeners } from '../components/tools/event_listener_manager';
import { startGame } from '../components/depthcharge/start-game';

export default class extends Controller {
  connect() {
    startGame();
  }

  disconnect() {
    clearAllIntervals();
    clearAllEventListeners();
  }
}
