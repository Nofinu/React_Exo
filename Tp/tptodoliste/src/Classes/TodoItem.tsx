
export class TodoItem {
  private static _count =0;
  private _id: number;
  private _isDone: boolean;

  constructor(private _title:string,private _description:string, private _dueDate: string[]){
    this._id = ++TodoItem._count
    this._isDone = false
  }

  get getTitle () : string{
    return this._title
  }

  get getDescription () : string{
    return this._description
  }

  get getDate() : string[]{
    return this._dueDate
  }

  get getIsDone () :boolean{
    return this._isDone
  }

  get getId () : number {
    return this._id
  }

  set IsDone (value : boolean){
    this._isDone = value
  }
}