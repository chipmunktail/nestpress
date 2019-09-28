export interface IHistory {
    readonly id: number;
    readonly text: string;
    readonly todoId: number;
    readonly isDel: number;
    readonly operateType: string;
    readonly time: Date;
  }
