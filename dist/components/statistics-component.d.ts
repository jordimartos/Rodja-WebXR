import { ComponentWrapper } from '../essential/aframe-wrapper';
interface StatisticsComponentSchema {
    canStart: boolean;
}
declare global {
    interface Window {
        impulsivityScore: number;
        omissionScore: number;
    }
}
export declare class StatisticsComponent extends ComponentWrapper<StatisticsComponentSchema> {
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
