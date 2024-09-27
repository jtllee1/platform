import { Controller } from "@hotwired/stimulus"
import { clearAllIntervals } from "../components/tools/timeout_manager.js";
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { startGame } from '../components/depthcharge/start-game.js';

export default class extends Controller {
  connect() {
    startGame();
  }

  disconnect() {
    clearAllIntervals();
    clearAllEventListeners();
  }
}
