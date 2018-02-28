export function isFullname(value) {
  let template = /(.*)\s(.*)\s(.*)/g;
  let re = new RegExp(template);
  let result = re.test(value);
  return result;
}
