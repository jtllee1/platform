// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { grid } from '../components/cellbuster/grid';
import { levelAdjustor } from '../components/cellbuster/level-adjustor';
import { laser } from '../components/cellbuster/laser';
import { timer } from '../components/cellbuster/timer';
import { generateEnemies } from '../components/cellbuster/generate-enemies';

// Call your functions here, e.g:
// initSelect2();
grid();
levelAdjustor();
laser();
timer();
generateEnemies();
