export const parseFilterParams = (params: { [x: string]: any }) => {
  return Object.keys(params)
    .filter(key => params[key] !== undefined)
    .map(key => {
      if (Array.isArray(params[key])) {
        let response = '';

        params[key].forEach((filter: string, index: number) => {
          response = response.concat(
            `${key}=${filter}${index !== params[key].length - 1 ? '&' : ''}`,
          );
        });
        return response;
      }
      return [key, params[key]]
        .map(value => encodeURIComponent(value))
        .join('=');
    })
    .join('&');
};
