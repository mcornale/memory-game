import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faAtom,
  faBahai,
  faBell,
  faBomb,
  faBookmark,
  faBrain,
  faBug,
  faCloud,
  faCodeBranch,
  faDiceFive,
  faDragon,
  faFireAlt,
  faHamburger,
  faLemon,
  faMeteor,
} from '@fortawesome/free-solid-svg-icons';

const ICONS_ARR = [
  faCoffee,
  faAtom,
  faBahai,
  faBell,
  faBomb,
  faBookmark,
  faBrain,
  faBug,
  faCloud,
  faCodeBranch,
  faDiceFive,
  faDragon,
  faFireAlt,
  faHamburger,
  faLemon,
  faMeteor,
];

const GAME_GRID_SIZES = {
  '4x4': 16,
  '6x6': 36,
};

const GAME_THEMES = {
  NUMBERS: 'numbers',
  ICONS: 'icons',
};

const NUM_OF_PLAYERS = 4;

export { GAME_GRID_SIZES, GAME_THEMES, NUM_OF_PLAYERS, ICONS_ARR };
