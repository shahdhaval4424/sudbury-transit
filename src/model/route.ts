import { stop } from './stop';

export class route
{
    number : number;
    stops : stop[];
    constructor(data : any)
    {
        if(data)
        {
            this.number = data.number;
            if(data.stop)
                data.stop.forEach(stop => {
                    this.stops.push(stop);
                });
        }   
    }
}