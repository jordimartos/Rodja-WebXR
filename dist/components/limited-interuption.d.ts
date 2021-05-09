import { ComponentWrapper } from '../essential/aframe-wrapper';
interface LimitedInteruptionComponentSchema {
    taskInterupt: number;
    canCalculate: boolean;
    canStart: boolean;
}
declare global {
    interface Window {
        tasksLimitedInterupt: number;
    }
}
export declare class LimitedInteruption extends ComponentWrapper<LimitedInteruptionComponentSchema> {
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
