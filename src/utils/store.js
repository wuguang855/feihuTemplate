const memory_store = {};
let memory_store_state = 0; // 0:未初始化 1.已初始化

if (memory_store_state === 0) {
  if (window.localStorage) {
    Object.keys(window.localStorage).forEach((name) => {
      memory_store[name] = window.localStorage.getItem(name);
    });
  }
  memory_store_state = 1;
}

export function set(name, value) {
  memory_store[name] = value;
  if (window.localStorage) {
    window.localStorage.setItem(name, value);
  }
}

export function get(name) {
  return memory_store[name];
}

export function remove(name) {
  delete memory_store[name];
  if (window.localStorage) {
    window.localStorage.removeItem(name);
  }
}
