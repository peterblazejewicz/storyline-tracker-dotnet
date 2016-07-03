import { Component, OnInit, ElementRef } from '@angular/core';
import * as dialogPolyfill from 'dialogPolyfill';
import { ModalService } from './modal.service';

@Component({
  moduleId: module.id,
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css']
})
export class ModalComponent implements OnInit {
  cancelAction: (e: any) => void;
  cancelText: string;
  dialog: any; // HTMLDialogElement
  message: string;
  okAction: (e: any) => void;
  okText: string;
  title: string;

  private defaults = {
    title: 'Confirmation',
    message: 'Do you want to cancel your changes?',
    cancelText: 'Cancel',
    okText: 'OK'
  };

  constructor(private el: ElementRef,
    private modalService: ModalService) {
    modalService.activate = this.activate.bind(this);
  }

  activate(message: string = this.defaults.message, title: string = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.okText = this.defaults.okText;
    this.cancelText = this.defaults.cancelText;
    let promise = new Promise<boolean>((resolve, reject) => {
      this.cancelAction = (e: any) => resolve(false);
      this.okAction = (e: any) => resolve(true);
      this.showModal();
    });
    return promise;
  }
  ngOnInit() {
    let dialog = this.el.nativeElement.querySelector('.mdl-dialog');
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    this.dialog = dialog;
  }

  showModal() {
    this.dialog.showModal();
    document.onkeyup = (e: Event) => {
      this.closeModal();
      this.cancelAction(null);
    };
  }

  closeModal() {
    if(this.dialog.open === true) {
      this.dialog.close();
    }
    document.onkeydown = null;
  }

  ok(event: Event) {
    this.okAction(event);
    this.closeModal();
  }
  cancel(event: Event) {
    this.cancelAction(event);
    this.closeModal();
  }

}
