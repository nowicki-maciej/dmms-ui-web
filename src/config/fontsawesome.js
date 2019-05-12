import { library } from '@fortawesome/fontawesome-svg-core'
import {
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
  faRetweet,
  faShareSquare,
  faShareAlt,
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
