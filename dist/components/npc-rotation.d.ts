import { ComponentWrapper } from '../essential/aframe-wrapper';
interface NPCRotattionSchema {
    readonly canStart: boolean;
}
export declare class NPCRotation extends ComponentWrapper<NPCRotattionSchema> {
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
