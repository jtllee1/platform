import { Controller } from "@hotwired/stimulus"
import { startPong } from '../components/pong/start-pong';
import { movePaddle } from '../components/pong/move-paddle';

export default class extends Controller {
  connect() {
    startPong();
    movePaddle();
  }
}
