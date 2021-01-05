import { wall, getRelativePos } from './index';

export default (container) => {
	const child = container.querySelector('canvas'); 
	const childCoords = child.getBoundingClientRect();
  return [
    wall(0, 0, 20, childCoords.height + childCoords.bottom),
    wall(childCoords.width, 0, 20, childCoords.height + childCoords.bottom),
    wall(0, 0, childCoords.width + childCoords.left, 20),
    wall(0, childCoords.height, childCoords.width + childCoords.left, 20),
  ]
}