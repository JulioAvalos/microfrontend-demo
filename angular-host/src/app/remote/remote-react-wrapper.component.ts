// remote-react-wrapper.component.ts
import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-remote-react-wrapper',
  standalone: true,
  template: `<div #reactContainer style="width: 100%; height: 100%;"></div>`
})
export class RemoteReactWrapperComponent implements OnInit, OnDestroy {
  @ViewChild('reactContainer', { static: true })
  container!: ElementRef<HTMLDivElement>;

  async ngOnInit() {
    try {
      // Dynamically construct the import path to hide it from static analysis:
      const remoteName = 'remoteReact';
      const moduleName = 'bootstrap';
      const importPath = `${remoteName}/${moduleName}`;
      // Use the Vite ignore comment on the dynamic import:
      // @ts-ignore
      const remoteModule = await import(/* @vite-ignore */  './bootstrap');
      if (remoteModule && remoteModule.mount) {
        remoteModule.mount(this.container.nativeElement, { /* optional props */ });
      } else {
        console.error('Mount function not found in remote module.');
      }
    } catch (error) {
      console.error('Error loading remote React bootstrap:', error);
    }
  }

  async ngOnDestroy() {
    try {
      const remoteName = 'remoteReact';
      const moduleName = 'bootstrap';
      const importPath = `${remoteName}/${moduleName}`;
      // @ts-ignore
      const remoteModule = await import(/* @vite-ignore */ './bootstrap');
      if (remoteModule && remoteModule.unmount) {
        remoteModule.unmount(this.container.nativeElement);
      }
    } catch (error) {
      console.error('Error unmounting remote React app:', error);
    }
  }
}
