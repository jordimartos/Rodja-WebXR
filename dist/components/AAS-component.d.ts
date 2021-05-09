import { ComponentWrapper } from '../essential/aframe-wrapper';
interface AASSchema {
    canStart: boolean;
    canCalculate: boolean;
}
declare global {
    interface Window {
        AAS: number;
    }
}
export declare class ASSComponent extends ComponentWrapper<AASSchema> {
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
