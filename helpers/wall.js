import { Bodies } from 'matter-js';
import { mainBg } from '~/constants';

export default (x, y, width, height) =>  {
  return Bodies.rectangle(x, y, width, height,  {
    isStatic: true,
    render: { 
    	fillStyle: mainBg,
    }
  });
}