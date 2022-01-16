import Garage from './garage/garage';
import Winners from './winners/winners';

const garage = new Garage();
garage.init();

document.body.append(garage.node);
garage.renderCars();

// const winners = new Winners();
// document.body.append(winners.render());
// winners.renderWinners();
