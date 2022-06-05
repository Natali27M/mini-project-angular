import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})

export class HeaderComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  // onCheckboxChange(event: any) {
  //   if (event.target.checked) {
  //     // this.theme = true;
  //     localStorage.setItem("checked", "true");
  //   } else {
  //     // this.theme = false;
  //     localStorage.setItem("checked", "false");
  //   }
  // }

}
