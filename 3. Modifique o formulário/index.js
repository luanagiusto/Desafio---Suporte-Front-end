1 Select com as opções: SUV, Senda, Hatch e Pickup;

Código 
```
<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" wfd-id="639">
  <option selected="">Selecione</option>
  <option value="1">SUV</option>
  <option value="2">Senda</option>
  <option value="3">Hatch</option>
  <option value="4">Pickup</option>
</select>
```

Css:

```
button, input, optgroup, select, textarea {
    display: block;
    width: 100%;
    height: 50px;
    padding: .9375rem .75rem;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ddd;
    border-radius: .25rem;
}

```


1 Textarea com placeholder "Mensagem".


Código:
```
<div class="form-group" wfd-id="574"><input type="text" class="form-control is-invalid" message="message" required="" placeholder="Mensagem" data-bouncer-target="#invalid-message" wfd-id="577" aria-describedby="bouncer-error_bouncer-field_170" aria-invalid="true" id="bouncer-field_170">
<div id="invalid-message" class="invalid-feedback" wfd-id="575"><div class="error-message" id="bouncer-error_bouncer-field_170" wfd-id="576">Por favor, preencha esse campo</div></div></div>
```
