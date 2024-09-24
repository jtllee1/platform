import { Controller } from "@hotwired/stimulus"
import { startBalloon } from '../components/balloonblast/start-balloon';

export default class extends Controller {
  connect() {
    startBalloon();
  }
}
