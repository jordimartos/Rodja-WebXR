import { ComponentWrapper } from '../essential/aframe-wrapper';
interface CameraFrustumComponentSchema {
    canSee: string;
}
export declare class CameraFrustumComponent extends ComponentWrapper<CameraFrustumComponentSchema> {
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
