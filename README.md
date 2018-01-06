# Angular DropDown

<br>
```
  <select id="category" name="category" ngModel #catergory="ngModel" class="form-control">
    <option value=""></option>
    <option *ngFor="let c of categories" [value]="c.id">{{c.name}}</option>
  </select> 
```
