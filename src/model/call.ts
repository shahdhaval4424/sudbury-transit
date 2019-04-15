import { destination } from './destination';
import { link } from './link';

export class call
{
    route : number;
    passing_time : string;
    destination : destination[];
    links : link[];
    if(data : any)
    {
        this.route  = data.route;
        this.passing_time = data.passing_time;
        data.destination.forEach(element => {
            this.destination.push(element);    
        });
        data.link.forEach(link => {
            this.links.push(link);
        });
    }
}