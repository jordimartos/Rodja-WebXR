import { ComponentWrapper } from '../essential/aframe-wrapper';
interface CoinDistarctorComponentSchema {
    canStart: boolean;
    myNumber: number;
    myTrack: number;
}
export declare class CoinDistractorComponent extends ComponentWrapper<CoinDistarctorComponentSchema> {
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
