import { SLOT_NAMES_ENUM } from "../constants";
import Slot from "./SlotModel";

class SlotMachineModel {
    slots: Slot[];
    isRunning: boolean;

    constructor() {
        this.slots = Object.values(SLOT_NAMES_ENUM).map(slotName => new Slot(slotName));
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        this.slots.forEach(function(slot) {
            slot.start();
        });
    }

    stop() {
        this.isRunning = false;
        this.slots.forEach((slot) => {
            slot.stop();
        })
        }
  };

    export default SlotMachineModel;