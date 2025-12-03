import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage { id: string; text: string; type?: 'info' | 'success' | 'error' }

@Injectable({ providedIn: 'root' })
export class ToastService {
  private messagesSub = new BehaviorSubject<ToastMessage[]>([]);
  messages$ = this.messagesSub.asObservable();

  push(text: string, type: ToastMessage['type'] = 'info', timeout = 3000) {
    const id = String(Date.now()) + Math.random().toString(16).slice(2, 8);
    const msg: ToastMessage = { id, text, type };
    this.messagesSub.next([...this.messagesSub.getValue(), msg]);
    if (timeout > 0) setTimeout(() => this.remove(id), timeout);
  }

  remove(id: string) {
    this.messagesSub.next(this.messagesSub.getValue().filter(m => m.id !== id));
  }
}
