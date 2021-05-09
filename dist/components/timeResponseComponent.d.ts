import { ComponentWrapper } from '../essential/aframe-wrapper';
interface TimeResponseSchema {
    canStart: boolean;
}
declare global {
    interface Window {
        TimeResponse: number;
    }
}
export declare class TimeResponseComponent extends ComponentWrapper<TimeResponseSchema> {
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
