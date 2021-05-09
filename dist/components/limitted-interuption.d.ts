import { ComponentWrapper } from '../essential/aframe-wrapper';
interface LimittedInteruptionComponentSchema {
    canStart: boolean;
}
export declare class LimittedInteruption extends ComponentWrapper<LimittedInteruptionComponentSchema> {
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
