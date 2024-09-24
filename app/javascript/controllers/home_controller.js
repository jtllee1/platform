import { Controller } from "@hotwired/stimulus"
import { sort } from "../components/home/sort"
import { sortScroll } from "../components/home/sort-scroll"

export default class extends Controller {
  connect() {
    sort();
    sortScroll();
  }
}
