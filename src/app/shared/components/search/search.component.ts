import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'iti-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  @Output('submit') submitEvent = new EventEmitter<any>();
  @Output('limpar') limparEvent = new EventEmitter<any>();

  filtrarRoutesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filtrarRoutesForm = this.formBuilder.group(
      {
        descricao: []
      }
    );
  }

  getDescricao(): string{
    return this.filtrarRoutesForm.controls['descricao'].value;
  }

  enviar(){
    this.submitEvent.emit();
  }

  limparDados(){
    this.filtrarRoutesForm.reset();
    this.limparEvent.emit();
  }

}
