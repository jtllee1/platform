import { Controller } from "@hotwired/stimulus"
import { grid } from '../components/cellbuster/grid';
import { levelAdjustor } from '../components/cellbuster/level-adjustor';
import { laser } from '../components/cellbuster/laser';
import { timer } from '../components/cellbuster/timer';
import { generateEnemies } from '../components/cellbuster/generate-enemies';

export default class extends Controller {
  connect() {
    grid();
    levelAdjustor();
    laser();
    timer();
    generateEnemies();
  }
}
