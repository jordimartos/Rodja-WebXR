import { ComponentWrapper } from '../essential/aframe-wrapper';
interface CameraComponentSchema {
    canSee: boolean;
}
export declare class CameraComponent extends ComponentWrapper<CameraComponentSchema> {
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
