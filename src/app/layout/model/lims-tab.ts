
export class LimsTab {

  constructor(
    public title: string,
    public component: any,
    public dataContext?: any,
  ) {
    this.tabId = new Date().getTime();
  }

  readonly tabId: number;
  dataChanged?: boolean;
  shown? = false;
}
