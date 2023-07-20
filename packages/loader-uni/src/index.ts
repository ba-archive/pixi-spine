/* eslint-disable spaced-comment */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../global.d.ts" />
import '@pixi-spine/loader-base'; // Side effect install atlas loader
import { SpineLoader } from './SpineLoader';
export * from './Spine';
export * from './versions';

// Install the loader
// @ts-ignore
window.spineLoader = new SpineLoader().installLoader();
export { SpineLoader };