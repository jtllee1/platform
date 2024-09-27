import { Controller } from "@hotwired/stimulus"
import { clearAllTimeouts } from 'components/tools/timeout_manager';
import { clearAllEventListeners } from 'components/tools/event_listener_manager';
import { startSimon } from 'components/simonsays/start-simon';
import { simonSays } from 'components/simonsays/simon-says';
import { cube } from 'components/cube/cube';
import { cubePress } from 'components/cube/cube-press';

export default class extends Controller {
  connect() {
    startSimon();
    simonSays();
    cube();
    cubePress();
  }

  disconnect() {
    clearAllTimeouts();
    clearAllEventListeners();
  }
}
