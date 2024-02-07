import { EventEmitter } from "events";
import SlotMachineView from "./views/slotMachineView.ts";


  global.emitter = new EventEmitter();
  const slotMachine = new SlotMachineView();
  slotMachine.init();