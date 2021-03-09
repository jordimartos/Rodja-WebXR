import { ComponentWrapper } from '../essential/aframe-wrapper';
interface ColorComponentSchema {
    readonly color: string;
}
export declare class ColorComponent extends ComponentWrapper<ColorComponentSchema> {
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
