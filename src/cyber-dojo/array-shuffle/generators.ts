import { GeneratorFn } from './generator-fn';

export const dummyZeroGenerator: GeneratorFn = () => 0;

export const dummyAlmostOneGenerator: GeneratorFn = () => 0.999999;

export const mathGenerator: GeneratorFn = () => Math.random();
