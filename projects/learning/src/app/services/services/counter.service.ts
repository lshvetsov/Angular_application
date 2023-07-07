import {Injectable} from "@angular/core";

@Injectable()
export class CounterService {

  private toInactive: number = 0;
  private toActive: number = 0;

  userToActive(): void {
    this.toActive++;
    console.log(this.getCounter())
  }

  userToInactive(): void {
    this.toInactive++;
    console.log(this.getCounter())
  }

  getCounter(): {toActive: number, toInactive: number} {
    return {toActive: this.toActive, toInactive: this.toInactive};
  }

}
