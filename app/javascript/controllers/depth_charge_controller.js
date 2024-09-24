import { Controller } from "@hotwired/stimulus"
import { startGame } from '../components/depthcharge/start-game';

export default class extends Controller {
  connect() {
    startGame();
  }
}
