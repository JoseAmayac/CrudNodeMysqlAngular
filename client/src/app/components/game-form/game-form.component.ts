import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/game';
import { ActivatedRoute,Router } from '@angular/router'
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  edit:boolean = false;

  game:Game = {
    id:0,
    title:'',
    description:'',
    image:'',
    created_at: new Date()
  };

  constructor(private gameService:GamesService, private router:Router, private activeRoute:ActivatedRoute) { }

  saveNewGame(){
    delete this.game.created_at;
    delete this.game.id;
    this.gameService.saveGame(this.game)
         .subscribe(
           res => {
             console.log(res);
             this.router.navigate(['/games']);
           },
           err => console.error(err)
         );
  };
  ngOnInit() 
  {
    const params = this.activeRoute.snapshot.params;
    if(params.id){
      this.gameService.getGame(params.id).subscribe(
        res => {
          console.log(res)
          this.game = res
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  updateGame(){
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id,this.game)
        .subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/games'])
          },
          err => console.log(err)
        );
  }

}
