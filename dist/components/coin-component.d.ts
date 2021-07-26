import { ComponentWrapper } from '../essential/aframe-wrapper';
declare global {
    interface Window {
        isLooking: boolean;
    }
}
interface CoinComponentSchema {
    canStart: boolean;
}
export declare class CoinComponent extends ComponentWrapper<CoinComponentSchema> {
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
