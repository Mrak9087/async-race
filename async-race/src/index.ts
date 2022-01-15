import Garage from './garage/garage';

const garage = new Garage();
garage.init();

document.body.append(garage.node);
garage.renderCars();
