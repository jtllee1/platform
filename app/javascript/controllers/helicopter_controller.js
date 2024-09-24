import { Controller } from "@hotwired/stimulus"
import { movement } from '../components/helicopter/movement';
import { start } from '../components/helicopter/start';

export default class extends Controller {
  connect() {
    movement();
    start();
  }
}
