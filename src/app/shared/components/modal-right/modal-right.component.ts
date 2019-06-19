import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-modal-right',
  templateUrl: './modal-right.component.html',
  styleUrls: ['./modal-right.component.scss']
})
export class ModalRightComponent implements OnInit, OnDestroy {
  @Input() close = null;
  @Input() closeModalSubscription;
  @Input() modalRightWidth;
  @Output() closed = new EventEmitter<boolean>();

  public fadeOut = '';
  private eventsSubscription: any;

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  constructor() {}

  ngOnInit() {
    this.eventsSubscription = this.closeModalSubscription.subscribe(() => {
      this.close = true;
      this.closeModal();
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  public closeModal(): void {
    if (this.close) {
      this.fadeOut = 'fade-out-modal';
      setTimeout(() => this.closed.emit(false), 200);
    } else {
      this.fadeOut = '';
      this.closed.emit(false);
    }
  }
}
