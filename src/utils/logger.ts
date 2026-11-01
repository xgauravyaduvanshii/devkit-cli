import { paint } from "./colors.js";

export function info(msg: string): void { console.log(paint("green", "ok  ") + msg); }
export function warn(msg: string): void { console.error(paint("yellow", "warn") + " " + msg); }
export function fail(msg: string): number { console.error(paint("red", "err ") + msg); return 1; }
