import { Controller } from "@hotwired/stimulus"
import { startHangman } from '../components/hangman/start-hangman';

export default class extends Controller {
  connect() {
    startHangman();
  }
}
