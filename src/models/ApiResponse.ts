export default class ApiResponse {
  public success: boolean;
  public msg: string|null;
  public content: any|null;

  constructor() {
    this.success = false;
    this.msg = 'Error system (from parsing http response in JS)';
    this.content = null;
  }
}
