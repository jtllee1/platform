import { Controller } from "@hotwired/stimulus"
import { start2048 } from '../components/2048/start-2048';

export default class extends Controller {
  connect() {
    start2048();
  }
}
