import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
//import { DUMMY_USERS } from '../dummy-users';

//const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required: true}) id!:string;
  // @Input({required: true}) avatar!:string;
  // @Input({required: true}) name!:string;
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>(); //or select = output<string>();
  @Input({ required: true }) selected!: boolean;
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/'+this.avatar());
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
