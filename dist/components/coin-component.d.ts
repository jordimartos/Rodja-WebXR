import { ComponentWrapper } from '../essential/aframe-wrapper';
interface CoinComponentSchema {
    canStart: boolean;
}
export declare class CoinComponent extends ComponentWrapper<CoinComponentSchema> {
    constructor();
    init(): void;
    update(): void;
    start(): void;
    play(): void;
    pause(): void;
    tick(): void;
    remove(): void;
    destroy(): void;
}
export {};
