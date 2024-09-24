import { Controller } from "@hotwired/stimulus"
import { select } from '../components/connectfour/select';

export default class extends Controller {
  connect() {
    select();
  }
}
