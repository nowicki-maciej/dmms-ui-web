import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserPlus,
  faUserMinus,
  faUserEdit
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from "vue";

library.add(
  faUserPlus,
  faUserMinus,
  faUserEdit
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
