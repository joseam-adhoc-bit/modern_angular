import { Component, signal , computed , effect} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.css',
  templateUrl: './hello.html',
})
export class Hello {
  protected title ='Welcome to modern angular!';
  protected isdisabled=false;

  protected onClick()
  {
    console.log('Button clicked');
    this.isdisabled=!this.isdisabled;
  }
  protected count= signal(0);
  protected doubleCount= computed(()=>this.count()*2);
/*   {
    console.log("computed signal called");
    return this.count()*2;
  }); */

/*   protected getdoubleCount()
  {
    console.log("getdoubleCount method called");
    return this.count()*2;
  }
 */
private readonly countLog = effect( ()=> {
  console.log('Count Changed:',this.count())
});

  protected increaseCounter()
    {
      this.count.update( value => value + 1);
    }
    protected decreaseCounter()
    {
        this.count.update( value => value - 1);
    }
    protected resetCounter(){
      this.count.set(0);
    }
}
