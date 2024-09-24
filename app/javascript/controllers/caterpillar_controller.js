import { Controller } from "@hotwired/stimulus"
import { continualMovement } from '../components/caterpillar/continual-movement';
import { levelAdjustor } from '../components/cellbuster/level-adjustor';

export default class extends Controller {
  connect() {
    continualMovement();
    levelAdjustor();
  }
}
