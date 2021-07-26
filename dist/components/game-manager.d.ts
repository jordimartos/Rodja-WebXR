import { ComponentWrapper } from '../essential/aframe-wrapper';
interface gameManagerSchema {
    readonly canStart: boolean;
}
declare global {
    interface Window {
        track: any;
    }
}
export declare class gameManagerComponent extends ComponentWrapper<gameManagerSchema> {
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
