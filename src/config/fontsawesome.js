import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArchive,
  faBook,
  faBookMedical,
  faCamera,
  faCaretDown,
  faCaretRight,
  faCloudDownloadAlt,
  faCogs,
  faEllipsisH,
  faMinusSquare,
  faPlusSquare,
  faRetweet,
  faShare,
  faShareAlt,
  faShareSquare,
  faSignOutAlt,
  faUserEdit,
  faUserMinus,
  faUserPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from "vue";

library.add(
  faUserPlus,
  faUserMinus,
  faUserEdit,
  faCamera,
  faCaretDown,
  faCaretRight,
  faBook,
  faShare,
  faCogs,
  faUsers,
  faCloudDownloadAlt,
  faEllipsisH,
  faSignOutAlt,
  faBookMedical,
  faArchive,
  faPlusSquare,
  faMinusSquare,
  faRetweet,
  faShareSquare,
  faShareAlt,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
