// src/typings.d.ts

declare module 'remoteReact/bootstrap';

declare module 'remoteReact/bootstrap' {
  export function mount(element: HTMLElement, props?: any): void;
  export function unmount(element: HTMLElement): void;
}
