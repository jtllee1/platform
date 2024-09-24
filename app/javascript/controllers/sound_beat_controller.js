import { Controller } from "@hotwired/stimulus"
import { control } from '../components/platform/control';

export default class extends Controller {
  connect() {
    control();
  }
}
