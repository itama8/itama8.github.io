const path = location.pathname;
const legacy = path.match(/^\/(?:not-padgtp|not-a-padsvg)(?=\/|$)/);
if (legacy) {
  const destination = new URL('/not-a-padSVG/', location.origin);
  destination.pathname += path.slice(legacy[0].length).replace(/^\//, '');
  destination.search = location.search;
  destination.hash = location.hash;
  location.replace(destination.href);
}
