import { ADDED_ANGLE, DEFAULT_TIMEOUT, SLOT_EVENTS_ENUM } from "../constants";
import { transformSlot } from "../utils";

class SlotView {
  slotName: string;
  slotElement: HTMLElement | null;
  timer: ReturnType<typeof setTimeout>;
 
  constructor(slotName: string) {
    this.slotName = slotName;
    this.slotElement = document.querySelector('.' + slotName);
    this.init();
  }
 
  init() {
    global.emitter.on(this.slotName + SLOT_EVENTS_ENUM.START, ({currAngle}) => {
      this.spin(currAngle);
    });
    global.emitter.on(this.slotName + SLOT_EVENTS_ENUM.STOP, ({currAngle})=> {
      this.stop(currAngle);
    })
  }

  transform(currAngle: number) {
    this.slotElement.style.transform = transformSlot(currAngle);
  }

  spin(currAngle: number) {
    let angle = currAngle;
    this.timer = setInterval(() =>{
      this.transform(currAngle)
      angle += ADDED_ANGLE;
    }, DEFAULT_TIMEOUT);
  }

  stop(currAngle: number) {
    clearInterval(this.timer);
    if (!this.slotElement || !this.slotElement.style.transform ){
    this.transform(currAngle);
    }
  }
}
export default SlotView;