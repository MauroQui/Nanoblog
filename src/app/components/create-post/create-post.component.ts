import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[
    ArticulosService,
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  postForm:FormGroup;

  constructor(
    private fb: FormBuilder,
    private articulosService: ArticulosService
  ){
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    })
  }

  onSubmit(){
    if (this.postForm.valid) {
      console.log(this.postForm.value)
      const data = {
        ...this.postForm.value,
        userId: 1
      }
      this.articulosService.savePost(data).subscribe(response => {
        console.log('Respuesta del guardado en servidor: ', response)
      }

      )
    }
  }

}
