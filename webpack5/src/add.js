export default function add(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}
