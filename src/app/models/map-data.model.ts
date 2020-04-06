export class MapData {
  constructor(
    public id?: number,
    public name?: string,
    public items?: Mark[],
    public image?: string
  ) {
    this.items = [];
  }
}

export class Mark {
  constructor(
    public id?: number,
    public name?: string,
    public x?: number | string,
    public y?: number | string,
    public showEvent?: any,
    public showDetail?: any
  ) {}
}
