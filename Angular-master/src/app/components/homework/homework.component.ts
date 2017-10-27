import { Component, OnInit } from '@angular/core';
import { GetmypoService } from '../../services/getmypo.service';
@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
private img:string;
private body:string;
private Root: RootObject;
constructor(private getpokemonService:GetmypoService) { }
ngOnInit() {
    this.img="../../assets/img/bulbasaur.jpg"
    this.body="ฟุชิงิดาเนะเป็นโปเกมอนสัตว์เลื้อยคลานมีลักษณะคล้ายคางคกหรือไดโนเสาร์ ลักษณะเด่นที่จำง่ายคือหัวต้นไม้ที่มีลักษณะคล้ายหัวหอมโทชุคาโซที่เป็นปรสิตบนหัวเห็ดของพาราสซึ่งในที่สุดปรสิตนี้จะลามทั่วทั้งตัวกลายเป็นพาราเซ็คท์?หัวต้นไม้นี้จะทำให้ฟุชิงิดาเนะสามารถรับพลังงานเสริมจากแสงอาทิตย์ในช่วงกลางวันและหัวต้นไม้ก็จะเจริญเติบโตและแข็งแรงขึ้นในตอนกลางคืนซึ่งเจริญเติบโตจากเมล็ดพืชที่ฝังไว้บนหลังเมื่อตอนเกิดหัวต้นไม้ของฟุชิงิดาเนะกับตัวฟุชิงิดาเนะจะเอื้อประโยชน์ให้กันและกัน ซึ่งไม่เหมือนกับเชื้อราฟุชิงิดาเนะมีท่าต่อสู้รูปแบบพืชที่หลากหลาย ละอองผงกลิ่นหอม กลีบดอกไม้ และเมล็ดพืชจะออกมาจากหัวบนหลังของมันได้ ส่วนเถาวัลย์และใบไม้จะออกมาจากส่วนท้องของมัน ซึ่งทำให้เกิดเป็นท่าต่อสู้ต่าง ๆที่หัวบนหลังของฟุชิงิดาเนะอาจมีอะไรบางอย่างยิงออกมาได้ ซึ่งมันจะใช้ดูดกลืนแสงแดด และอาจเป็นการเพิ่มพลังตนเอง เรียกท่านี้ว่า Synthesis (สังเคราะห์แสง) หรืออาจยิงลำแสงทรงพลังที่เรียกว่า Solarbeam (โซล่าร์บีม) ไปที่ศัตรูก็ได้"
    this.getpokemonService.getdatapo().subscribe((response) => {
      this.Root = response;
    }) 
  }
}
interface RootObject {
  forms: Form[];
  abilities: Ability[];
  stats: Stat[];
  name: string;
  weight: number;
  moves: Move[];
  sprites: Sprites;
  held_items: any[];
  location_area_encounters: string;
  height: number;
  is_default: boolean;
  species: Species;
  id: number;
  order: number;
  game_indices: GameIndice[];
  base_experience: number;
  types: Type[];
}

      interface Form {
          url: string;
          name: string;
      }
  
      interface Ability2 {
          url: string;
          name: string;
      }
  
      interface Ability {
          slot: number;
          is_hidden: boolean;
          ability: Ability2;
      }
  
      interface Stat2 {
          url: string;
          name: string;
      }
  
      interface Stat {
          stat: Stat2;
          effort: number;
          base_stat: number;
      }
  
      interface MoveLearnMethod {
          url: string;
          name: string;
      }
  
      interface VersionGroup {
          url: string;
          name: string;
      }
  
      interface VersionGroupDetail {
          move_learn_method: MoveLearnMethod;
          level_learned_at: number;
          version_group: VersionGroup;
      }
  
      interface Move2 {
          url: string;
          name: string;
      }
  
      interface Move {
          version_group_details: VersionGroupDetail[];
          move: Move2;
      }
  
      interface Sprites {
          back_female?: any;
          back_shiny_female?: any;
          back_default: string;
          front_female?: any;
          front_shiny_female?: any;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
      }
  
      interface Species {
          url: string;
          name: string;
      }
  
      interface Version {
          url: string;
          name: string;
      }
  
      interface GameIndice {
          version: Version;
          game_index: number;
      }
  
      interface Type2 {
          url: string;
          name: string;
      }
  
      interface Type {
          slot: number;
          type: Type2;
      }
  
      
  
  
  
