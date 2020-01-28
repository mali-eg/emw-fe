import {Component, OnInit} from '@angular/core';

// @ts-ignore
declare var draw2d: any;
declare var example: any;
declare var HoverConnection: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'emw-fe';

  ngOnInit(): void {

    // const canvas = new draw2d.Canvas('gfx_holder');
    //
    // const testData = [];
    // for (let i = 0; i < 100; i++) {
    //   testData.push(Math.floor(Math.random() * 100));
    // }
    //
    // const sparkline = new draw2d.shape.diagram.Sparkline({width: 200, height: 80});
    // sparkline.setData(testData);
    // canvas.add( sparkline, 100, 60);
    // canvas.add(new draw2d.shape.basic.Label({text: 'draw2d.shape.diagram.Sparkline\nsimple to ' +
    //     'configure with some InputPort\'s and OutputPort\'s', x: 350, y: 80}));
    // const pie = new draw2d.shape.diagram.Pie({
    //   x: 140,
    //   y: 200,
    //   diameter: 80,
    //   data: [30, 60, 122, 4]
    // });
    // canvas.add(pie);
    // canvas.add(new draw2d.shape.basic.Label({text: 'draw2d.shape.diagram.Pie\nsimple to ' +
    //     'configure with some InputPort\'s and OutputPort\'s', x: 350, y: 180}));

    const app  = new example.Application();
    app.view.installEditPolicy(  new draw2d.policy.connection.DragConnectionCreatePolicy({
      // tslint:disable-next-line:only-arrow-functions
      createConnection: function(){
        return new HoverConnection();
      }
    }));
  }
}
