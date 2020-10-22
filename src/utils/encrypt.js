import CryptoJS from 'crypto-js';

export default CryptoJS;

export function getAesStr(word, key, padding) {
  var skey = CryptoJS.enc.Utf8.parse(key);
  var spadding = CryptoJS.enc.Utf8.parse(padding);

  let encrypted = CryptoJS.AES.encrypt(word, skey, {
    iv: spadding,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}

export function getAesDecrypt(word, key, padding) {
  var skey = CryptoJS.enc.Utf8.parse(key);
  var spadding = CryptoJS.enc.Utf8.parse(padding);

  let decrypt = CryptoJS.AES.decrypt(word, skey, {
    iv: spadding,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}
export function random32Word() {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let nums = '';
  for (let i = 0; i < 32; i++) {
    let id = parseInt(Math.random() * 61);
    nums += chars[id];
  }
  return nums;
}

export function encodeUTF8(s) {
  var i,
    r = [],
    c,
    x;
  for (i = 0; i < s.length; i++)
    if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
    else if (c < 0x800) r.push(0xc0 + ((c >> 6) & 0x1f), 0x80 + (c & 0x3f));
    else {
      if ((x = c ^ 0xd800) >> 10 === 0)
        //对四字节UTF-16转换为Unicode
        (c = (x << 10) + (s.charCodeAt(++i) ^ 0xdc00) + 0x10000),
          r.push(0xf0 + ((c >> 18) & 0x7), 0x80 + ((c >> 12) & 0x3f));
      else r.push(0xe0 + ((c >> 12) & 0xf));
      r.push(0x80 + ((c >> 6) & 0x3f), 0x80 + (c & 0x3f));
    }
  return r;
}

export function sha1Encrypt(str) {
  var data = new Uint8Array(encodeUTF8(str));
  var i, j, t;
  var l = (((data.length + 8) >>> 6) << 4) + 16,
    s = new Uint8Array(l << 2);
  s.set(new Uint8Array(data.buffer)), (s = new Uint32Array(s.buffer));
  for (t = new DataView(s.buffer), i = 0; i < l; i++)
    s[i] = t.getUint32(i << 2);
  s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
  s[l - 1] = data.length << 3;
  var w = [],
    rol = function (n, c) {
      return (n << c) | (n >>> (32 - c));
    },
    k = [1518500249, 1859775393, -1894007588, -899497514],
    m = [1732584193, -271733879, null, null, -1009589776],
    f = [
      function () {
        return (m[1] & m[2]) | (~m[1] & m[3]);
      },
      function () {
        return m[1] ^ m[2] ^ m[3];
      },
      function () {
        return (m[1] & m[2]) | (m[1] & m[3]) | (m[2] & m[3]);
      },
      function () {
        return m[1] ^ m[2] ^ m[3];
      }
    ];
  (m[2] = ~m[0]), (m[3] = ~m[1]);
  for (i = 0; i < s.length; i += 16) {
    var o = m.slice(0);
    for (j = 0; j < 80; j++)
      (w[j] =
        j < 16
          ? s[i + j]
          : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1)),
        (t =
          (rol(m[0], 5) + f[(j / 20) | 0]() + m[4] + w[j] + k[(j / 20) | 0]) |
          0),
        (m[1] = rol(m[1], 30)),
        m.pop(),
        m.unshift(t);
    for (j = 0; j < 5; j++) m[j] = (m[j] + o[j]) | 0;
  }
  t = new DataView(new Uint32Array(m).buffer);
  for (let i = 0; i < 5; i++) m[i] = t.getUint32(i << 2);

  var hex = Array.prototype.map
    .call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
      return (e < 16 ? '0' : '') + e.toString(16);
    })
    .join('');

  return hex;
}
