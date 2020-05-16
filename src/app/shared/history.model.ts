export class HistoryModel {
  fields: number[];
  result: string;
  date: Date;

  constructor(fields, result) {
    this.fields = fields;
    this.result = result;
    this.date = new Date();
  }
}
