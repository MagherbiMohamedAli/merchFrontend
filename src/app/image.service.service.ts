import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private selectedImage: File | null = null;

  setSelectedImage(image: File): void {
    this.selectedImage = image;
  }

  getSelectedImage(): File | null {
    return this.selectedImage;
  }
}
