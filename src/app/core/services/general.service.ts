import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor() {}

  getSeverity = (status: any) => {
    switch (status.toLowerCase()) {
      case 'activo':
        return 'success';

      case 'inactivo':
        return 'warning';

      case 'denegado':
        return 'danger';

      default:
        return 'secondary';
    }
  };
}
