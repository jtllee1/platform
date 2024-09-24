import { Controller } from "@hotwired/stimulus"
import { startTetris } from '../components/tetris/start-tetris';

export default class extends Controller {
  connect() {
    startTetris();
  }
}
