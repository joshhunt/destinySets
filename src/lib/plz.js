const noop = () => {};

export default function plz(func, onError = noop, onFinally = noop) {
  try {
    func();
  } catch (e) {
    onError(e);
  } finally {
    onFinally();
  }
}
