import { Bodies } from 'matter-js';

export default (x, y, width, height, color) => {
	return Bodies.rectangle(x, y, width, height, {
		isStatic: true,
		restitution: 1,
		render: { fillStyle: color }
	});
}