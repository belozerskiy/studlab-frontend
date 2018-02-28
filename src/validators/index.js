export function isFio(value) {
  let template = /(.*)\s(.*)\s(.*)/g;
  let re = new RegExp(template);
  let result = re.test(value);
  return result;
}
