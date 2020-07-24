import { Component, ChangeDetectorRef, ComponentFactoryResolver, ViewContainerRef, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';
import { FormControl, Validators } from '@angular/forms';
import { FileValidator } from './file.validators';
import { HttpClient } from '@angular/common/http';
import { StlRendererComponent } from './stl-renderer/stl-renderer.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  
  title = 'stl-demo';
  file = new FormControl('');
  camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 15 )
  imagePath: string;
  imgURL: any;
  stlfiles = ['assets/Stanford_Bunny_sample.stl'];
  _reload = false;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private _vcr: ViewContainerRef,
    private viewContainerRef: ViewContainerRef) {}

  onChange(){
    debugger;
    this.stlfiles.splice(0, 1, this.file.value)
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(StlRendererComponent);

    const viewContainerRef = this.vc;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).stlmodels = this.stlfiles;
  }
}
