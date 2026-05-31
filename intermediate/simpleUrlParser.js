function simpleURLParser(route, url) {
  if (!route || !url) return false;
  const routeSegments = route.split("/").filter(Boolean);
  const urlSegments = url.split("/").filter(Boolean);

  if (routeSegments.length !== urlSegments.length) return false;

  const validParamRegex = /^[a-zA-Z0-9-]+$/;

  return routeSegments.every((routeSeg, index) => {
    const urlSeg = urlSegments[index];

    if (routeSeg.startsWith(":")) {
      return validParamRegex.test(urlSeg);
    }

    return routeSeg === urlSeg;
  });
}

export { simpleURLParser };
