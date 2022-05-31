import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class AuthService {

  url = "https://jsonplaceholder.typicode.com/users";

  constructor() {

  }

  ngOnInit(): void {

  }

}
