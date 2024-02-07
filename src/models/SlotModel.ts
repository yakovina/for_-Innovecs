import { SLOT_EVENTS_ENUM } from "../constants";

class Slot {
    name: string;
    isRunning: boolean;
    currAngle: number;

    constructor(name: string) {
      this.name = name;
      this.isRunning = false;
      this.getRandomPanel();
    }

    getRandomPanel() {
        //TODO: add mappping constants
    const rand = Math.random();
    if (rand < 0.33) {
      this.currAngle = 0;
    } else if (rand < 0.66) {
      this.currAngle = 120;
    } else {
      this.currAngle = 240;
    }
  };

  start() {
    this.isRunning = true;
    global.emitter.emit(this.name + SLOT_EVENTS_ENUM.START, {currAngle: this.currAngle});
  }

  stop() {
    this.isRunning = false;
        this.getRandomPanel();
        global.emitter.emit(this.name + SLOT_EVENTS_ENUM.STOP, {currAngle: this.currAngle});
  }
}

export default Slot;