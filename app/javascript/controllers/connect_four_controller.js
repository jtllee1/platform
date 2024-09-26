import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from '../components/tools/timeout_manager';
import { clearAllEventListeners } from '../components/tools/event_listener_manager';
import { select } from '../components/connectfour/select';

export default class extends Controller {
  connect() {
    select();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
