import { Controller } from "@hotwired/stimulus"
import { clearAllEventListeners } from '../components/tools/event_listener_manager.js';
import { sort } from "../components/home/sort.js"
import { sortScroll } from "../components/home/sort-scroll.js"

export default class extends Controller {
  connect() {
    sort();
    sortScroll();
  }

  disconnect() {
    clearAllEventListeners();
  }
}
