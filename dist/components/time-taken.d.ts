import { ComponentWrapper } from '../essential/aframe-wrapper';
interface TimeTakenSchema {
    canStart: boolean;
}
declare global {
    interface Window {
        timeTaken: number;
        startTime: any;
    }
}
export declare class timeTakenComponent extends ComponentWrapper<TimeTakenSchema> {
    constructor();
    init(): void;
    update(): void;
    play(): void;
    pause(): void;
    tick(): void;
    remove(): void;
    destroy(): void;
}
export {};
