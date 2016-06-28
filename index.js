export default {
  type(val, type) {
    if (typeof val !== type) {
      throw new TypeError(`Expected '${val}' to be a '${type}', got '${typeof val}'`);
    }
  },
};
