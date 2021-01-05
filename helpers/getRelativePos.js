export default (parent, child) => {
	const parentCoords = parent.getBoundingClientRect();
  const childCoords = child.getBoundingClientRect();

  return {
    top: childCoords.top - parentCoords.top,
    right: childCoords.right - parentCoords.right,
    bottom: childCoords.bottom - parentCoords.bottom,
    left: childCoords.left - parentCoords.left,
  };
}