import { call } from './call';
import { link } from './link';

export class stop {
    number : number;
    name : string;
    latitude : number;
    longitude : number;
    calls : call[];    
    links : link[];
    showDetails : boolean;
    icon:string = 'arrow-dropdown-circle';
    constructor(data : any)
    {
        if(data)
        {
            this.number = data.number;
            this.name = data.name;
            this.latitude = data.latitude;
            this.longitude = data.longitude;
            if(data.call)
                data.call.forEach(call => {
                    this.calls.push(call);
                });
            if(data.link)
                data.link.forEach(link => {
                    this.links.push(link)
                });
        }
    }
}