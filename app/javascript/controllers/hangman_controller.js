import { Controller } from "@hotwired/stimulus"
import { clearAllEventListeners } from '../components/tools/event_listener_manager';
import { startHangman } from '../components/hangman/start-hangman';

export default class extends Controller {
  connect() {
    startHangman();
  }

  disconnect() {
    clearAllEventListeners();
  }
}
