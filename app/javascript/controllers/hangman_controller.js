import { Controller } from "@hotwired/stimulus"
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { startHangman } from '../components/hangman/start-hangman.js';

export default class extends Controller {
  connect() {
    startHangman();
  }

  disconnect() {
    clearAllEventListeners();
  }
}
