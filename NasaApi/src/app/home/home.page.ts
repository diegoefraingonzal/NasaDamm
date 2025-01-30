
import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  selectedDate: string = ''; // Inicialización para evitar el error
  imageData: any;

  constructor(private nasaService: NasaService) {}

  loadImageOfTheDay() {
    const formattedDate = this.selectedDate.split('T')[0]; // Ajustar para obtener solo la fecha
    this.nasaService.getImageOfTheDay(formattedDate).subscribe((data) => {
      this.imageData = data;
    });
  }
}