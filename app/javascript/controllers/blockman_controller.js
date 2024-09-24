import { Controller } from "@hotwired/stimulus"
import { startBlockman } from '../components/blockman/start-blockman';
import { levelAdjustor } from '../components/cellbuster/level-adjustor';

export default class extends Controller {
  connect() {
    startBlockman();
    levelAdjustor();
  }
}
