import { link } from './link';

export class destination
{
    number : number;
    name : string
    links : link[];
    if(data : any)
    {
        this.number = data.number;
        if(data.name)
            this.name = data.name;
        data.links.forEach(link => {
            this.links.push(link);
        });
    }
}