import { ComponentWrapper } from '../essential/aframe-wrapper';
interface Distractor1ComponentSchema {
    canStart: boolean;
}
export declare class Distractor1Component extends ComponentWrapper<Distractor1ComponentSchema> {
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
