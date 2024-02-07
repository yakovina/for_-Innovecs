import { SLOT_NAMES_ENUM } from '../constants';
import SlotMachineController from '../controllers/SlotMachineController';
import { paintSlotMashine } from '../mocks/slotMashine';
import SlotView from './slotView';

class SlotMachineView {
    playButton: HTMLElement | null;
    controller: SlotMachineController;

    
    init() {
        const element = document.createElement('div');
        element.innerHTML = paintSlotMashine();
        document.body.appendChild(element);

        this.controller = new SlotMachineController();
        this.playButton = document.getElementById('playButton');
        this.playButton?.addEventListener('click',() => {
        if (!this.controller.isRunning()) {
            this.controller.play();
        }
        });
        this.render();
    }
    
    render() {
        Object.values(SLOT_NAMES_ENUM).forEach(slotClass => {
        new SlotView(slotClass);
        });
    }
    
}

export default SlotMachineView;