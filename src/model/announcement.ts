export class annoucement
{
    id : number;
    body_en : string;
    start : string;
    finish : string;
    important : boolean;
    created_at : string;
    updated_at: string;
    title_en : string;
    title_fr : string;
    body_fr : string;
    constructor(data : any)
    {
        if(data)
        {
            this.id = data.id;
            this.body_en = data.body_en;
            this.start = data.start;
            this.finish = data.finish;
            this.important = data.important;
            this.created_at = data.created_at;
            this.updated_at = data.updated_at;
            this.title_en = data.title_en;
            this.title_fr = data.title_fr
            this.body_fr = data.body_fr;
        }
    }
}