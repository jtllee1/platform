import { Controller } from "@hotwired/stimulus"
import { startMatch } from '../components/match3/start-match';
import { swap } from '../components/match3/swap';

export default class extends Controller {
  connect() {
    startMatch();
    swap();
  }
}
