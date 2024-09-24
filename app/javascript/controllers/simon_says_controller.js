import { Controller } from "@hotwired/stimulus"
import { startSimon } from '../components/simonsays/start-simon';
import { simonSays } from '../components/simonsays/simon-says';
import { cube } from '../components/cube/cube';
import { cubePress } from '../components/cube/cube-press';

export default class extends Controller {
  connect() {
    startSimon();
    simonSays();
    cube();
    cubePress();
  }
}
