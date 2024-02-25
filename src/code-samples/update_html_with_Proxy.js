const original = { name: '' };

const reactive = new Proxy(original, {
  set(target, prop, value) {
    if (prop === 'name') {
      document.querySelector('#intro_name').textContent = value;
    }
    return Reflect.set(target, prop, value);
  }
});

// window.reactive = reactive;
export default reactive;
