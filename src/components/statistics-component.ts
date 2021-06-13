import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface StatisticsComponentSchema {
   canStart: boolean;
}

declare global {
  interface Window { impulsivityScore: number;omissionScore:number}
                      
}

export class StatisticsComponent extends ComponentWrapper<StatisticsComponentSchema> {
  constructor() {
    super('statistics-component', {
        canStart: {
        type: 'boolean',
        default: false,
      },
    });
  }

  init() {
    let allStats={
      myStats:''
    };

    

    if(sessionStorage.getItem("allStats") != null)
    {
      allStats = JSON.parse(sessionStorage.getItem("allStats"));
      console.log("all stats is"+allStats)
    }


    let statistics = {   
    }
    console.log(statistics);
   
    let date: Date = new Date();  
    allStats[date.toString()] = {...allStats[date.toString()],statistics};
    sessionStorage.setItem('allStats',JSON.stringify(allStats));
    
    setTimeout(function () 
  
  {
    window.open('../../finalPage.html',"_self");
  }, 5000);
   
  }
    

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}

new StatisticsComponent().register();
