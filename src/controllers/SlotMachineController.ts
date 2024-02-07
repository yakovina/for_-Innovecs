
import SlotMachineModel from '../models/SlotMachineModel';

class SlotMachineController {
    SlotMachine = new SlotMachineModel();

    play() {
        this.SlotMachine.start();
      setTimeout(() =>{
        this.SlotMachine.stop();
      }, 200);
    }
  
    isRunning() {
       return this.SlotMachine.isRunning;
    }
  
  };

  export default SlotMachineController;