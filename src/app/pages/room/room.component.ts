import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

@Component({
  selector: 'app-room',
  standalone: true,
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  private route=inject(ActivatedRoute);
  roomID: string='';
  @ViewChild('root')
  root!: ElementRef;
  constructor() { }

  ngOnInit() :void{

    //réception de roomId de la route
    this.route.params.subscribe(params => {
      this.roomID= params['roomId'];
      console.log(params['roomId']);
    });
  }

  ngAfterViewInit() :void{
    // generate Kit Token
      const appID = 1651648085;
      const serverSecret = "f10f1fe24c62c47b592c31b1bc512d56";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        this.roomID,
        Date.now().toString(), //date,  // userID
        Date.now().toString() //date
      );

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);

        // Start a call.
        zp.joinRoom({
          container: this.root.nativeElement,
          sharedLinks: [
            {
              name: 'Personal link',
              url:
              window.location.protocol + '//' +
              window.location.host + window.location.pathname +
                '?roomID=' +
                this.roomID,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
          },
        });
  }

}
