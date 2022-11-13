import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificacionesService {
  constructor(private toastr: ToastrService) {}

  showSuccess(mensaje: string) {
    this.toastr.success(mensaje);
  }
  showError(mensaje: string) {
    this.toastr.error(mensaje);
  }

  showWarnning(mensaje: string) {
    this.toastr.warning(mensaje);
  }
}
