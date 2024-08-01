(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Ic = "167",
  Ss = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  Ts = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  wp = 0,
  wu = 1,
  Rp = 2,
  Cp = 0,
  bf = 1,
  Pp = 2,
  Jn = 3,
  si = 0,
  Yt = 1,
  Dn = 2,
  Ri = 0,
  ls = 1,
  Ru = 2,
  Cu = 3,
  Pu = 4,
  Lp = 5,
  ss = 100,
  Ip = 101,
  Dp = 102,
  Np = 103,
  Up = 104,
  Op = 200,
  Fp = 201,
  Bp = 202,
  kp = 203,
  Pl = 204,
  Ll = 205,
  zp = 206,
  Hp = 207,
  Vp = 208,
  Gp = 209,
  Wp = 210,
  Xp = 211,
  qp = 212,
  Yp = 213,
  jp = 214,
  Kp = 0,
  Zp = 1,
  $p = 2,
  ao = 3,
  Jp = 4,
  Qp = 5,
  em = 6,
  tm = 7,
  wf = 0,
  nm = 1,
  im = 2,
  Ci = 0,
  sm = 1,
  rm = 2,
  am = 3,
  om = 4,
  lm = 5,
  cm = 6,
  um = 7,
  Lu = "attached",
  hm = "detached",
  Rf = 300,
  sr = 301,
  rr = 302,
  Il = 303,
  Dl = 304,
  Ao = 306,
  ar = 1e3,
  Mi = 1001,
  oo = 1002,
  Gt = 1003,
  Cf = 1004,
  Fr = 1005,
  rn = 1006,
  Za = 1007,
  ni = 1008,
  ri = 1009,
  Pf = 1010,
  Lf = 1011,
  jr = 1012,
  Dc = 1013,
  ms = 1014,
  wn = 1015,
  oa = 1016,
  Nc = 1017,
  Uc = 1018,
  or = 1020,
  If = 35902,
  Df = 1021,
  Nf = 1022,
  _n = 1023,
  Uf = 1024,
  Of = 1025,
  Ks = 1026,
  lr = 1027,
  Oc = 1028,
  Fc = 1029,
  Ff = 1030,
  Bc = 1031,
  kc = 1033,
  $a = 33776,
  Ja = 33777,
  Qa = 33778,
  eo = 33779,
  Nl = 35840,
  Ul = 35841,
  Ol = 35842,
  Fl = 35843,
  Bl = 36196,
  kl = 37492,
  zl = 37496,
  Hl = 37808,
  Vl = 37809,
  Gl = 37810,
  Wl = 37811,
  Xl = 37812,
  ql = 37813,
  Yl = 37814,
  jl = 37815,
  Kl = 37816,
  Zl = 37817,
  $l = 37818,
  Jl = 37819,
  Ql = 37820,
  ec = 37821,
  to = 36492,
  tc = 36494,
  nc = 36495,
  Bf = 36283,
  ic = 36284,
  sc = 36285,
  rc = 36286,
  Pi = 2200,
  fm = 2201,
  kf = 2202,
  Kr = 2300,
  Zr = 2301,
  Fo = 2302,
  Ws = 2400,
  Xs = 2401,
  lo = 2402,
  zc = 2500,
  dm = 2501,
  pm = 0,
  zf = 1,
  ac = 2,
  mm = 3200,
  _m = 3201,
  Hf = 0,
  gm = 1,
  yi = "",
  zt = "srgb",
  It = "srgb-linear",
  Hc = "display-p3",
  bo = "display-p3-linear",
  co = "linear",
  st = "srgb",
  uo = "rec709",
  ho = "p3",
  Es = 7680,
  Iu = 519,
  xm = 512,
  vm = 513,
  ym = 514,
  Vf = 515,
  Mm = 516,
  Sm = 517,
  Tm = 518,
  Em = 519,
  oc = 35044,
  Du = "300 es",
  ii = 2e3,
  fo = 2001;
class ki {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const Dt = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let Nu = 1234567;
const Hr = Math.PI / 180,
  cr = 180 / Math.PI;
function Rn() {
  const r = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Dt[r & 255] +
    Dt[(r >> 8) & 255] +
    Dt[(r >> 16) & 255] +
    Dt[(r >> 24) & 255] +
    "-" +
    Dt[e & 255] +
    Dt[(e >> 8) & 255] +
    "-" +
    Dt[((e >> 16) & 15) | 64] +
    Dt[(e >> 24) & 255] +
    "-" +
    Dt[(t & 63) | 128] +
    Dt[(t >> 8) & 255] +
    "-" +
    Dt[(t >> 16) & 255] +
    Dt[(t >> 24) & 255] +
    Dt[n & 255] +
    Dt[(n >> 8) & 255] +
    Dt[(n >> 16) & 255] +
    Dt[(n >> 24) & 255]
  ).toLowerCase();
}
function Pt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Vc(r, e) {
  return ((r % e) + e) % e;
}
function Am(r, e, t, n, i) {
  return n + ((r - e) * (i - n)) / (t - e);
}
function bm(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function Vr(r, e, t) {
  return (1 - t) * r + t * e;
}
function wm(r, e, t, n) {
  return Vr(r, e, 1 - Math.exp(-t * n));
}
function Rm(r, e = 1) {
  return e - Math.abs(Vc(r, e * 2) - e);
}
function Cm(r, e, t) {
  return r <= e
    ? 0
    : r >= t
    ? 1
    : ((r = (r - e) / (t - e)), r * r * (3 - 2 * r));
}
function Pm(r, e, t) {
  return r <= e
    ? 0
    : r >= t
    ? 1
    : ((r = (r - e) / (t - e)), r * r * r * (r * (r * 6 - 15) + 10));
}
function Lm(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function Im(r, e) {
  return r + Math.random() * (e - r);
}
function Dm(r) {
  return r * (0.5 - Math.random());
}
function Nm(r) {
  r !== void 0 && (Nu = r);
  let e = (Nu += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function Um(r) {
  return r * Hr;
}
function Om(r) {
  return r * cr;
}
function Fm(r) {
  return (r & (r - 1)) === 0 && r !== 0;
}
function Bm(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function km(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function zm(r, e, t, n, i) {
  const s = Math.cos,
    a = Math.sin,
    o = s(t / 2),
    l = a(t / 2),
    c = s((e + n) / 2),
    u = a((e + n) / 2),
    h = s((e - n) / 2),
    f = a((e - n) / 2),
    d = s((n - e) / 2),
    g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * u, l * h, l * f, o * c);
      break;
    case "YZY":
      r.set(l * f, o * u, l * h, o * c);
      break;
    case "ZXZ":
      r.set(l * h, l * f, o * u, o * c);
      break;
    case "XZX":
      r.set(o * u, l * g, l * d, o * c);
      break;
    case "YXY":
      r.set(l * d, o * u, l * g, o * c);
      break;
    case "ZYZ":
      r.set(l * g, l * d, o * u, o * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i
      );
  }
}
function bn(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function $e(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Gf = {
  DEG2RAD: Hr,
  RAD2DEG: cr,
  generateUUID: Rn,
  clamp: Pt,
  euclideanModulo: Vc,
  mapLinear: Am,
  inverseLerp: bm,
  lerp: Vr,
  damp: wm,
  pingpong: Rm,
  smoothstep: Cm,
  smootherstep: Pm,
  randInt: Lm,
  randFloat: Im,
  randFloatSpread: Dm,
  seededRandom: Nm,
  degToRad: Um,
  radToDeg: Om,
  isPowerOfTwo: Fm,
  ceilPowerOfTwo: Bm,
  floorPowerOfTwo: km,
  setQuaternionFromProperEuler: zm,
  normalize: $e,
  denormalize: bn,
};
class Me {
  constructor(e = 0, t = 0) {
    (Me.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Pt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = this.x - e.x,
      a = this.y - e.y;
    return (this.x = s * n - a * i + e.x), (this.y = s * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Fe {
  constructor(e, t, n, i, s, a, o, l, c) {
    (Fe.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, s, a, o, l, c);
  }
  set(e, t, n, i, s, a, o, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = i),
      (u[2] = o),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = n),
      (u[7] = a),
      (u[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      a = n[0],
      o = n[3],
      l = n[6],
      c = n[1],
      u = n[4],
      h = n[7],
      f = n[2],
      d = n[5],
      g = n[8],
      _ = i[0],
      p = i[3],
      m = i[6],
      y = i[1],
      v = i[4],
      S = i[7],
      R = i[2],
      w = i[5],
      b = i[8];
    return (
      (s[0] = a * _ + o * y + l * R),
      (s[3] = a * p + o * v + l * w),
      (s[6] = a * m + o * S + l * b),
      (s[1] = c * _ + u * y + h * R),
      (s[4] = c * p + u * v + h * w),
      (s[7] = c * m + u * S + h * b),
      (s[2] = f * _ + d * y + g * R),
      (s[5] = f * p + d * v + g * w),
      (s[8] = f * m + d * S + g * b),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * a * u - t * o * c - n * s * u + n * o * l + i * s * c - i * a * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      h = u * a - o * c,
      f = o * l - u * s,
      d = c * s - a * l,
      g = t * h + n * f + i * d;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return (
      (e[0] = h * _),
      (e[1] = (i * c - u * n) * _),
      (e[2] = (o * n - i * a) * _),
      (e[3] = f * _),
      (e[4] = (u * t - i * l) * _),
      (e[5] = (i * s - o * t) * _),
      (e[6] = d * _),
      (e[7] = (n * l - c * t) * _),
      (e[8] = (a * t - n * s) * _),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * a + c * o) + a + e,
        -i * c,
        i * l,
        -i * (-c * a + l * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(Bo.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Bo.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Bo.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Bo = new Fe();
function Wf(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return !0;
  return !1;
}
function $r(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function Hm() {
  const r = $r("canvas");
  return (r.style.display = "block"), r;
}
const Uu = {};
function Zs(r) {
  r in Uu || ((Uu[r] = !0), console.warn(r));
}
function Vm(r, e, t) {
  return new Promise(function (n, i) {
    function s() {
      switch (r.clientWaitSync(e, r.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case r.WAIT_FAILED:
          i();
          break;
        case r.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
const Ou = new Fe().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199
  ),
  Fu = new Fe().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735
  ),
  br = {
    [It]: {
      transfer: co,
      primaries: uo,
      luminanceCoefficients: [0.2126, 0.7152, 0.0722],
      toReference: (r) => r,
      fromReference: (r) => r,
    },
    [zt]: {
      transfer: st,
      primaries: uo,
      luminanceCoefficients: [0.2126, 0.7152, 0.0722],
      toReference: (r) => r.convertSRGBToLinear(),
      fromReference: (r) => r.convertLinearToSRGB(),
    },
    [bo]: {
      transfer: co,
      primaries: ho,
      luminanceCoefficients: [0.2289, 0.6917, 0.0793],
      toReference: (r) => r.applyMatrix3(Fu),
      fromReference: (r) => r.applyMatrix3(Ou),
    },
    [Hc]: {
      transfer: st,
      primaries: ho,
      luminanceCoefficients: [0.2289, 0.6917, 0.0793],
      toReference: (r) => r.convertSRGBToLinear().applyMatrix3(Fu),
      fromReference: (r) => r.applyMatrix3(Ou).convertLinearToSRGB(),
    },
  },
  Gm = new Set([It, bo]),
  Xe = {
    enabled: !0,
    _workingColorSpace: It,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(r) {
      if (!Gm.has(r))
        throw new Error(`Unsupported working color space, "${r}".`);
      this._workingColorSpace = r;
    },
    convert: function (r, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return r;
      const n = br[e].toReference,
        i = br[t].fromReference;
      return i(n(r));
    },
    fromWorkingColorSpace: function (r, e) {
      return this.convert(r, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function (r, e) {
      return this.convert(r, e, this._workingColorSpace);
    },
    getPrimaries: function (r) {
      return br[r].primaries;
    },
    getTransfer: function (r) {
      return r === yi ? co : br[r].transfer;
    },
    getLuminanceCoefficients: function (r, e = this._workingColorSpace) {
      return r.fromArray(br[e].luminanceCoefficients);
    },
  };
function $s(r) {
  return r < 0.04045
    ? r * 0.0773993808
    : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function ko(r) {
  return r < 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let As;
class Wm {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      As === void 0 && (As = $r("canvas")),
        (As.width = e.width),
        (As.height = e.height);
      const n = As.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = As);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = $r("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        s = i.data;
      for (let a = 0; a < s.length; a++) s[a] = $s(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor($s(t[n] / 255) * 255))
          : (t[n] = $s(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
let Xm = 0;
class Xf {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: Xm++ }),
      (this.uuid = Rn()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push(zo(i[a].image)) : s.push(zo(i[a]));
      } else s = zo(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function zo(r) {
  return (typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && r instanceof ImageBitmap)
    ? Wm.getDataURL(r)
    : r.data
    ? {
        data: Array.from(r.data),
        width: r.width,
        height: r.height,
        type: r.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let qm = 0;
class bt extends ki {
  constructor(
    e = bt.DEFAULT_IMAGE,
    t = bt.DEFAULT_MAPPING,
    n = Mi,
    i = Mi,
    s = rn,
    a = ni,
    o = _n,
    l = ri,
    c = bt.DEFAULT_ANISOTROPY,
    u = yi
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: qm++ }),
      (this.uuid = Rn()),
      (this.name = ""),
      (this.source = new Xf(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Me(0, 0)),
      (this.repeat = new Me(1, 1)),
      (this.center = new Me(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Fe()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Rf) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case ar:
          e.x = e.x - Math.floor(e.x);
          break;
        case Mi:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case oo:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case ar:
          e.y = e.y - Math.floor(e.y);
          break;
        case Mi:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case oo:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
bt.DEFAULT_IMAGE = null;
bt.DEFAULT_MAPPING = Rf;
bt.DEFAULT_ANISOTROPY = 1;
class Je {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (Je.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      h = l[8],
      f = l[1],
      d = l[5],
      g = l[9],
      _ = l[2],
      p = l[6],
      m = l[10];
    if (
      Math.abs(u - f) < 0.01 &&
      Math.abs(h - _) < 0.01 &&
      Math.abs(g - p) < 0.01
    ) {
      if (
        Math.abs(u + f) < 0.1 &&
        Math.abs(h + _) < 0.1 &&
        Math.abs(g + p) < 0.1 &&
        Math.abs(c + d + m - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2,
        S = (d + 1) / 2,
        R = (m + 1) / 2,
        w = (u + f) / 4,
        b = (h + _) / 4,
        P = (g + p) / 4;
      return (
        v > S && v > R
          ? v < 0.01
            ? ((n = 0), (i = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(v)), (i = w / n), (s = b / n))
          : S > R
          ? S < 0.01
            ? ((n = 0.707106781), (i = 0), (s = 0.707106781))
            : ((i = Math.sqrt(S)), (n = w / i), (s = P / i))
          : R < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (s = 0))
          : ((s = Math.sqrt(R)), (n = b / s), (i = P / s)),
        this.set(n, i, s, t),
        this
      );
    }
    let y = Math.sqrt(
      (p - g) * (p - g) + (h - _) * (h - _) + (f - u) * (f - u)
    );
    return (
      Math.abs(y) < 0.001 && (y = 1),
      (this.x = (p - g) / y),
      (this.y = (h - _) / y),
      (this.z = (f - u) / y),
      (this.w = Math.acos((c + d + m - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ym extends ki {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Je(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Je(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: rn,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n
    );
    const s = new bt(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace
    );
    (s.flipY = !1),
      (s.generateMipmaps = n.generateMipmaps),
      (s.internalFormat = n.internalFormat),
      (this.textures = []);
    const a = n.count;
    for (let o = 0; o < a; o++)
      (this.textures[o] = s.clone()),
        (this.textures[o].isRenderTargetTexture = !0);
    (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let i = 0, s = this.textures.length; i < s; i++)
        (this.textures[i].image.width = e),
          (this.textures[i].image.height = t),
          (this.textures[i].image.depth = n);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let n = 0, i = e.textures.length; n < i; n++)
      (this.textures[n] = e.textures[n].clone()),
        (this.textures[n].isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Xf(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class _s extends Ym {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class qf extends bt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = Gt),
      (this.minFilter = Gt),
      (this.wrapR = Mi),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class jm extends bt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = Gt),
      (this.minFilter = Gt),
      (this.wrapR = Mi),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Wt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let l = n[i + 0],
      c = n[i + 1],
      u = n[i + 2],
      h = n[i + 3];
    const f = s[a + 0],
      d = s[a + 1],
      g = s[a + 2],
      _ = s[a + 3];
    if (o === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = h);
      return;
    }
    if (o === 1) {
      (e[t + 0] = f), (e[t + 1] = d), (e[t + 2] = g), (e[t + 3] = _);
      return;
    }
    if (h !== _ || l !== f || c !== d || u !== g) {
      let p = 1 - o;
      const m = l * f + c * d + u * g + h * _,
        y = m >= 0 ? 1 : -1,
        v = 1 - m * m;
      if (v > Number.EPSILON) {
        const R = Math.sqrt(v),
          w = Math.atan2(R, m * y);
        (p = Math.sin(p * w) / R), (o = Math.sin(o * w) / R);
      }
      const S = o * y;
      if (
        ((l = l * p + f * S),
        (c = c * p + d * S),
        (u = u * p + g * S),
        (h = h * p + _ * S),
        p === 1 - o)
      ) {
        const R = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        (l *= R), (c *= R), (u *= R), (h *= R);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i],
      l = n[i + 1],
      c = n[i + 2],
      u = n[i + 3],
      h = s[a],
      f = s[a + 1],
      d = s[a + 2],
      g = s[a + 3];
    return (
      (e[t] = o * g + u * h + l * d - c * f),
      (e[t + 1] = l * g + u * f + c * h - o * d),
      (e[t + 2] = c * g + u * d + o * f - l * h),
      (e[t + 3] = u * g - o * h - l * f - c * d),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      i = e._y,
      s = e._z,
      a = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(n / 2),
      u = o(i / 2),
      h = o(s / 2),
      f = l(n / 2),
      d = l(i / 2),
      g = l(s / 2);
    switch (a) {
      case "XYZ":
        (this._x = f * u * h + c * d * g),
          (this._y = c * d * h - f * u * g),
          (this._z = c * u * g + f * d * h),
          (this._w = c * u * h - f * d * g);
        break;
      case "YXZ":
        (this._x = f * u * h + c * d * g),
          (this._y = c * d * h - f * u * g),
          (this._z = c * u * g - f * d * h),
          (this._w = c * u * h + f * d * g);
        break;
      case "ZXY":
        (this._x = f * u * h - c * d * g),
          (this._y = c * d * h + f * u * g),
          (this._z = c * u * g + f * d * h),
          (this._w = c * u * h - f * d * g);
        break;
      case "ZYX":
        (this._x = f * u * h - c * d * g),
          (this._y = c * d * h + f * u * g),
          (this._z = c * u * g - f * d * h),
          (this._w = c * u * h + f * d * g);
        break;
      case "YZX":
        (this._x = f * u * h + c * d * g),
          (this._y = c * d * h + f * u * g),
          (this._z = c * u * g - f * d * h),
          (this._w = c * u * h - f * d * g);
        break;
      case "XZY":
        (this._x = f * u * h - c * d * g),
          (this._y = c * d * h - f * u * g),
          (this._z = c * u * g + f * d * h),
          (this._w = c * u * h + f * d * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      s = t[8],
      a = t[1],
      o = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      h = t[10],
      f = n + o + h;
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / d),
        (this._x = (u - l) * d),
        (this._y = (s - c) * d),
        (this._z = (a - i) * d);
    } else if (n > o && n > h) {
      const d = 2 * Math.sqrt(1 + n - o - h);
      (this._w = (u - l) / d),
        (this._x = 0.25 * d),
        (this._y = (i + a) / d),
        (this._z = (s + c) / d);
    } else if (o > h) {
      const d = 2 * Math.sqrt(1 + o - n - h);
      (this._w = (s - c) / d),
        (this._x = (i + a) / d),
        (this._y = 0.25 * d),
        (this._z = (l + u) / d);
    } else {
      const d = 2 * Math.sqrt(1 + h - n - o);
      (this._w = (a - i) / d),
        (this._x = (s + c) / d),
        (this._y = (l + u) / d),
        (this._z = 0.25 * d);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Pt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      a = e._w,
      o = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = n * u + a * o + i * c - s * l),
      (this._y = i * u + a * l + s * o - n * c),
      (this._z = s * u + a * c + n * l - i * o),
      (this._w = a * u - n * o - i * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      s = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = s), this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const d = 1 - t;
      return (
        (this._w = d * a + t * this._w),
        (this._x = d * n + t * this._x),
        (this._y = d * i + t * this._y),
        (this._z = d * s + t * this._z),
        this.normalize(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, o),
      h = Math.sin((1 - t) * u) / c,
      f = Math.sin(t * u) / c;
    return (
      (this._w = a * h + this._w * f),
      (this._x = n * h + this._x * f),
      (this._y = i * h + this._y * f),
      (this._z = s * h + this._z * f),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      i = Math.sqrt(1 - n),
      s = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class D {
  constructor(e = 0, t = 0, n = 0) {
    (D.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Bu.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Bu.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * i),
      (this.y = s[1] * t + s[4] * n + s[7] * i),
      (this.z = s[2] * t + s[5] * n + s[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements,
      a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a),
      (this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a),
      (this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.x,
      a = e.y,
      o = e.z,
      l = e.w,
      c = 2 * (a * i - o * n),
      u = 2 * (o * t - s * i),
      h = 2 * (s * n - a * t);
    return (
      (this.x = t + l * c + a * h - o * u),
      (this.y = n + l * u + o * c - s * h),
      (this.z = i + l * h + s * u - a * c),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * i),
      (this.y = s[1] * t + s[5] * n + s[9] * i),
      (this.z = s[2] * t + s[6] * n + s[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      a = t.x,
      o = t.y,
      l = t.z;
    return (
      (this.x = i * l - s * o),
      (this.y = s * a - n * l),
      (this.z = n * o - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ho.copy(this).projectOnVector(e), this.sub(Ho);
  }
  reflect(e) {
    return this.sub(Ho.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Pt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ho = new D(),
  Bu = new Wt();
class ci {
  constructor(
    e = new D(1 / 0, 1 / 0, 1 / 0),
    t = new D(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Tn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Tn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Tn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0
            ? e.getVertexPosition(a, Tn)
            : Tn.fromBufferAttribute(s, a),
            Tn.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Tn);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            ga.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            ga.copy(n.boundingBox)),
          ga.applyMatrix4(e.matrixWorld),
          this.union(ga);
    }
    const i = e.children;
    for (let s = 0, a = i.length; s < a; s++) this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Tn),
      Tn.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(wr),
      xa.subVectors(this.max, wr),
      bs.subVectors(e.a, wr),
      ws.subVectors(e.b, wr),
      Rs.subVectors(e.c, wr),
      fi.subVectors(ws, bs),
      di.subVectors(Rs, ws),
      Gi.subVectors(bs, Rs);
    let t = [
      0,
      -fi.z,
      fi.y,
      0,
      -di.z,
      di.y,
      0,
      -Gi.z,
      Gi.y,
      fi.z,
      0,
      -fi.x,
      di.z,
      0,
      -di.x,
      Gi.z,
      0,
      -Gi.x,
      -fi.y,
      fi.x,
      0,
      -di.y,
      di.x,
      0,
      -Gi.y,
      Gi.x,
      0,
    ];
    return !Vo(t, bs, ws, Rs, xa) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Vo(t, bs, ws, Rs, xa))
      ? !1
      : (va.crossVectors(fi, di),
        (t = [va.x, va.y, va.z]),
        Vo(t, bs, ws, Rs, xa));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Tn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Tn).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (qn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        qn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        qn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        qn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        qn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        qn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        qn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        qn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(qn),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const qn = [
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
  ],
  Tn = new D(),
  ga = new ci(),
  bs = new D(),
  ws = new D(),
  Rs = new D(),
  fi = new D(),
  di = new D(),
  Gi = new D(),
  wr = new D(),
  xa = new D(),
  va = new D(),
  Wi = new D();
function Vo(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    Wi.fromArray(r, s);
    const o =
        i.x * Math.abs(Wi.x) + i.y * Math.abs(Wi.y) + i.z * Math.abs(Wi.z),
      l = e.dot(Wi),
      c = t.dot(Wi),
      u = n.dot(Wi);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return !1;
  }
  return !0;
}
const Km = new ci(),
  Rr = new D(),
  Go = new D();
class Vn {
  constructor(e = new D(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Km.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    Rr.subVectors(e, this.center);
    const t = Rr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Rr, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Go.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(Rr.copy(e.center).add(Go)),
            this.expandByPoint(Rr.copy(e.center).sub(Go))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Yn = new D(),
  Wo = new D(),
  ya = new D(),
  pi = new D(),
  Xo = new D(),
  Ma = new D(),
  qo = new D();
class yr {
  constructor(e = new D(), t = new D(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Yn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Yn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Yn.copy(this.origin).addScaledVector(this.direction, t),
        Yn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Wo.copy(e).add(t).multiplyScalar(0.5),
      ya.copy(t).sub(e).normalize(),
      pi.copy(this.origin).sub(Wo);
    const s = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(ya),
      o = pi.dot(this.direction),
      l = -pi.dot(ya),
      c = pi.lengthSq(),
      u = Math.abs(1 - a * a);
    let h, f, d, g;
    if (u > 0)
      if (((h = a * l - o), (f = a * o - l), (g = s * u), h >= 0))
        if (f >= -g)
          if (f <= g) {
            const _ = 1 / u;
            (h *= _),
              (f *= _),
              (d = h * (h + a * f + 2 * o) + f * (a * h + f + 2 * l) + c);
          } else
            (f = s),
              (h = Math.max(0, -(a * f + o))),
              (d = -h * h + f * (f + 2 * l) + c);
        else
          (f = -s),
            (h = Math.max(0, -(a * f + o))),
            (d = -h * h + f * (f + 2 * l) + c);
      else
        f <= -g
          ? ((h = Math.max(0, -(-a * s + o))),
            (f = h > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (d = -h * h + f * (f + 2 * l) + c))
          : f <= g
          ? ((h = 0),
            (f = Math.min(Math.max(-s, -l), s)),
            (d = f * (f + 2 * l) + c))
          : ((h = Math.max(0, -(a * s + o))),
            (f = h > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (d = -h * h + f * (f + 2 * l) + c));
    else
      (f = a > 0 ? -s : s),
        (h = Math.max(0, -(a * f + o))),
        (d = -h * h + f * (f + 2 * l) + c);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, h),
      i && i.copy(Wo).addScaledVector(ya, f),
      d
    );
  }
  intersectSphere(e, t) {
    Yn.subVectors(e.center, this.origin);
    const n = Yn.dot(this.direction),
      i = Yn.dot(Yn) - n * n,
      s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i),
      o = n - a,
      l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      h = 1 / this.direction.z,
      f = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - f.x) * c), (i = (e.max.x - f.x) * c))
        : ((n = (e.max.x - f.x) * c), (i = (e.min.x - f.x) * c)),
      u >= 0
        ? ((s = (e.min.y - f.y) * u), (a = (e.max.y - f.y) * u))
        : ((s = (e.max.y - f.y) * u), (a = (e.min.y - f.y) * u)),
      n > a ||
      s > i ||
      ((s > n || isNaN(n)) && (n = s),
      (a < i || isNaN(i)) && (i = a),
      h >= 0
        ? ((o = (e.min.z - f.z) * h), (l = (e.max.z - f.z) * h))
        : ((o = (e.max.z - f.z) * h), (l = (e.min.z - f.z) * h)),
      n > l || o > i) ||
      ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Yn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Xo.subVectors(t, e), Ma.subVectors(n, e), qo.crossVectors(Xo, Ma);
    let a = this.direction.dot(qo),
      o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    pi.subVectors(this.origin, e);
    const l = o * this.direction.dot(Ma.crossVectors(pi, Ma));
    if (l < 0) return null;
    const c = o * this.direction.dot(Xo.cross(pi));
    if (c < 0 || l + c > a) return null;
    const u = -o * pi.dot(qo);
    return u < 0 ? null : this.at(u / a, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ue {
  constructor(e, t, n, i, s, a, o, l, c, u, h, f, d, g, _, p) {
    (Ue.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, s, a, o, l, c, u, h, f, d, g, _, p);
  }
  set(e, t, n, i, s, a, o, l, c, u, h, f, d, g, _, p) {
    const m = this.elements;
    return (
      (m[0] = e),
      (m[4] = t),
      (m[8] = n),
      (m[12] = i),
      (m[1] = s),
      (m[5] = a),
      (m[9] = o),
      (m[13] = l),
      (m[2] = c),
      (m[6] = u),
      (m[10] = h),
      (m[14] = f),
      (m[3] = d),
      (m[7] = g),
      (m[11] = _),
      (m[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Ue().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Cs.setFromMatrixColumn(e, 0).length(),
      s = 1 / Cs.setFromMatrixColumn(e, 1).length(),
      a = 1 / Cs.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      l = Math.cos(i),
      c = Math.sin(i),
      u = Math.cos(s),
      h = Math.sin(s);
    if (e.order === "XYZ") {
      const f = a * u,
        d = a * h,
        g = o * u,
        _ = o * h;
      (t[0] = l * u),
        (t[4] = -l * h),
        (t[8] = c),
        (t[1] = d + g * c),
        (t[5] = f - _ * c),
        (t[9] = -o * l),
        (t[2] = _ - f * c),
        (t[6] = g + d * c),
        (t[10] = a * l);
    } else if (e.order === "YXZ") {
      const f = l * u,
        d = l * h,
        g = c * u,
        _ = c * h;
      (t[0] = f + _ * o),
        (t[4] = g * o - d),
        (t[8] = a * c),
        (t[1] = a * h),
        (t[5] = a * u),
        (t[9] = -o),
        (t[2] = d * o - g),
        (t[6] = _ + f * o),
        (t[10] = a * l);
    } else if (e.order === "ZXY") {
      const f = l * u,
        d = l * h,
        g = c * u,
        _ = c * h;
      (t[0] = f - _ * o),
        (t[4] = -a * h),
        (t[8] = g + d * o),
        (t[1] = d + g * o),
        (t[5] = a * u),
        (t[9] = _ - f * o),
        (t[2] = -a * c),
        (t[6] = o),
        (t[10] = a * l);
    } else if (e.order === "ZYX") {
      const f = a * u,
        d = a * h,
        g = o * u,
        _ = o * h;
      (t[0] = l * u),
        (t[4] = g * c - d),
        (t[8] = f * c + _),
        (t[1] = l * h),
        (t[5] = _ * c + f),
        (t[9] = d * c - g),
        (t[2] = -c),
        (t[6] = o * l),
        (t[10] = a * l);
    } else if (e.order === "YZX") {
      const f = a * l,
        d = a * c,
        g = o * l,
        _ = o * c;
      (t[0] = l * u),
        (t[4] = _ - f * h),
        (t[8] = g * h + d),
        (t[1] = h),
        (t[5] = a * u),
        (t[9] = -o * u),
        (t[2] = -c * u),
        (t[6] = d * h + g),
        (t[10] = f - _ * h);
    } else if (e.order === "XZY") {
      const f = a * l,
        d = a * c,
        g = o * l,
        _ = o * c;
      (t[0] = l * u),
        (t[4] = -h),
        (t[8] = c * u),
        (t[1] = f * h + _),
        (t[5] = a * u),
        (t[9] = d * h - g),
        (t[2] = g * h - d),
        (t[6] = o * u),
        (t[10] = _ * h + f);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Zm, e, $m);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      tn.subVectors(e, t),
      tn.lengthSq() === 0 && (tn.z = 1),
      tn.normalize(),
      mi.crossVectors(n, tn),
      mi.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (tn.x += 1e-4) : (tn.z += 1e-4),
        tn.normalize(),
        mi.crossVectors(n, tn)),
      mi.normalize(),
      Sa.crossVectors(tn, mi),
      (i[0] = mi.x),
      (i[4] = Sa.x),
      (i[8] = tn.x),
      (i[1] = mi.y),
      (i[5] = Sa.y),
      (i[9] = tn.y),
      (i[2] = mi.z),
      (i[6] = Sa.z),
      (i[10] = tn.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      a = n[0],
      o = n[4],
      l = n[8],
      c = n[12],
      u = n[1],
      h = n[5],
      f = n[9],
      d = n[13],
      g = n[2],
      _ = n[6],
      p = n[10],
      m = n[14],
      y = n[3],
      v = n[7],
      S = n[11],
      R = n[15],
      w = i[0],
      b = i[4],
      P = i[8],
      M = i[12],
      E = i[1],
      L = i[5],
      k = i[9],
      O = i[13],
      K = i[2],
      q = i[6],
      G = i[10],
      j = i[14],
      W = i[3],
      ie = i[7],
      ae = i[11],
      ue = i[15];
    return (
      (s[0] = a * w + o * E + l * K + c * W),
      (s[4] = a * b + o * L + l * q + c * ie),
      (s[8] = a * P + o * k + l * G + c * ae),
      (s[12] = a * M + o * O + l * j + c * ue),
      (s[1] = u * w + h * E + f * K + d * W),
      (s[5] = u * b + h * L + f * q + d * ie),
      (s[9] = u * P + h * k + f * G + d * ae),
      (s[13] = u * M + h * O + f * j + d * ue),
      (s[2] = g * w + _ * E + p * K + m * W),
      (s[6] = g * b + _ * L + p * q + m * ie),
      (s[10] = g * P + _ * k + p * G + m * ae),
      (s[14] = g * M + _ * O + p * j + m * ue),
      (s[3] = y * w + v * E + S * K + R * W),
      (s[7] = y * b + v * L + S * q + R * ie),
      (s[11] = y * P + v * k + S * G + R * ae),
      (s[15] = y * M + v * O + S * j + R * ue),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      s = e[12],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      h = e[6],
      f = e[10],
      d = e[14],
      g = e[3],
      _ = e[7],
      p = e[11],
      m = e[15];
    return (
      g *
        (+s * l * h -
          i * c * h -
          s * o * f +
          n * c * f +
          i * o * d -
          n * l * d) +
      _ *
        (+t * l * d -
          t * c * f +
          s * a * f -
          i * a * d +
          i * c * u -
          s * l * u) +
      p *
        (+t * c * h -
          t * o * d -
          s * a * h +
          n * a * d +
          s * o * u -
          n * c * u) +
      m *
        (-i * o * u - t * l * h + t * o * f + i * a * h - n * a * f + n * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      h = e[9],
      f = e[10],
      d = e[11],
      g = e[12],
      _ = e[13],
      p = e[14],
      m = e[15],
      y = h * p * c - _ * f * c + _ * l * d - o * p * d - h * l * m + o * f * m,
      v = g * f * c - u * p * c - g * l * d + a * p * d + u * l * m - a * f * m,
      S = u * _ * c - g * h * c + g * o * d - a * _ * d - u * o * m + a * h * m,
      R = g * h * l - u * _ * l - g * o * f + a * _ * f + u * o * p - a * h * p,
      w = t * y + n * v + i * S + s * R;
    if (w === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / w;
    return (
      (e[0] = y * b),
      (e[1] =
        (_ * f * s -
          h * p * s -
          _ * i * d +
          n * p * d +
          h * i * m -
          n * f * m) *
        b),
      (e[2] =
        (o * p * s -
          _ * l * s +
          _ * i * c -
          n * p * c -
          o * i * m +
          n * l * m) *
        b),
      (e[3] =
        (h * l * s -
          o * f * s -
          h * i * c +
          n * f * c +
          o * i * d -
          n * l * d) *
        b),
      (e[4] = v * b),
      (e[5] =
        (u * p * s -
          g * f * s +
          g * i * d -
          t * p * d -
          u * i * m +
          t * f * m) *
        b),
      (e[6] =
        (g * l * s -
          a * p * s -
          g * i * c +
          t * p * c +
          a * i * m -
          t * l * m) *
        b),
      (e[7] =
        (a * f * s -
          u * l * s +
          u * i * c -
          t * f * c -
          a * i * d +
          t * l * d) *
        b),
      (e[8] = S * b),
      (e[9] =
        (g * h * s -
          u * _ * s -
          g * n * d +
          t * _ * d +
          u * n * m -
          t * h * m) *
        b),
      (e[10] =
        (a * _ * s -
          g * o * s +
          g * n * c -
          t * _ * c -
          a * n * m +
          t * o * m) *
        b),
      (e[11] =
        (u * o * s -
          a * h * s -
          u * n * c +
          t * h * c +
          a * n * d -
          t * o * d) *
        b),
      (e[12] = R * b),
      (e[13] =
        (u * _ * i -
          g * h * i +
          g * n * f -
          t * _ * f -
          u * n * p +
          t * h * p) *
        b),
      (e[14] =
        (g * o * i -
          a * _ * i -
          g * n * l +
          t * _ * l +
          a * n * p -
          t * o * p) *
        b),
      (e[15] =
        (a * h * i -
          u * o * i +
          u * n * l -
          t * h * l -
          a * n * f +
          t * o * f) *
        b),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = 1 - n,
      a = e.x,
      o = e.y,
      l = e.z,
      c = s * a,
      u = s * o;
    return (
      this.set(
        c * a + n,
        c * o - i * l,
        c * l + i * o,
        0,
        c * o + i * l,
        u * o + n,
        u * l - i * a,
        0,
        c * l - i * o,
        u * l + i * a,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, s, a) {
    return this.set(1, n, s, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      s = t._x,
      a = t._y,
      o = t._z,
      l = t._w,
      c = s + s,
      u = a + a,
      h = o + o,
      f = s * c,
      d = s * u,
      g = s * h,
      _ = a * u,
      p = a * h,
      m = o * h,
      y = l * c,
      v = l * u,
      S = l * h,
      R = n.x,
      w = n.y,
      b = n.z;
    return (
      (i[0] = (1 - (_ + m)) * R),
      (i[1] = (d + S) * R),
      (i[2] = (g - v) * R),
      (i[3] = 0),
      (i[4] = (d - S) * w),
      (i[5] = (1 - (f + m)) * w),
      (i[6] = (p + y) * w),
      (i[7] = 0),
      (i[8] = (g + v) * b),
      (i[9] = (p - y) * b),
      (i[10] = (1 - (f + _)) * b),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Cs.set(i[0], i[1], i[2]).length();
    const a = Cs.set(i[4], i[5], i[6]).length(),
      o = Cs.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      En.copy(this);
    const c = 1 / s,
      u = 1 / a,
      h = 1 / o;
    return (
      (En.elements[0] *= c),
      (En.elements[1] *= c),
      (En.elements[2] *= c),
      (En.elements[4] *= u),
      (En.elements[5] *= u),
      (En.elements[6] *= u),
      (En.elements[8] *= h),
      (En.elements[9] *= h),
      (En.elements[10] *= h),
      t.setFromRotationMatrix(En),
      (n.x = s),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, i, s, a, o = ii) {
    const l = this.elements,
      c = (2 * s) / (t - e),
      u = (2 * s) / (n - i),
      h = (t + e) / (t - e),
      f = (n + i) / (n - i);
    let d, g;
    if (o === ii) (d = -(a + s) / (a - s)), (g = (-2 * a * s) / (a - s));
    else if (o === fo) (d = -a / (a - s)), (g = (-a * s) / (a - s));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = h),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = f),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = d),
      (l[14] = g),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, s, a, o = ii) {
    const l = this.elements,
      c = 1 / (t - e),
      u = 1 / (n - i),
      h = 1 / (a - s),
      f = (t + e) * c,
      d = (n + i) * u;
    let g, _;
    if (o === ii) (g = (a + s) * h), (_ = -2 * h);
    else if (o === fo) (g = s * h), (_ = -1 * h);
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -f),
      (l[1] = 0),
      (l[5] = 2 * u),
      (l[9] = 0),
      (l[13] = -d),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = _),
      (l[14] = -g),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Cs = new D(),
  En = new Ue(),
  Zm = new D(0, 0, 0),
  $m = new D(1, 1, 1),
  mi = new D(),
  Sa = new D(),
  tn = new D(),
  ku = new Ue(),
  zu = new Wt();
class zn {
  constructor(e = 0, t = 0, n = 0, i = zn.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      s = i[0],
      a = i[4],
      o = i[8],
      l = i[1],
      c = i[5],
      u = i[9],
      h = i[2],
      f = i[6],
      d = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(Pt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, d)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(f, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-Pt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(o, d)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-h, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(Pt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-Pt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(f, d)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c)));
        break;
      case "YZX":
        (this._z = Math.asin(Pt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-h, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, d)));
        break;
      case "XZY":
        (this._z = Math.asin(-Pt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(f, c)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-u, d)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      ku.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ku, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return zu.setFromEuler(this), this.setFromQuaternion(zu, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
zn.DEFAULT_ORDER = "XYZ";
class Gc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Jm = 0;
const Hu = new D(),
  Ps = new Wt(),
  jn = new Ue(),
  Ta = new D(),
  Cr = new D(),
  Qm = new D(),
  e_ = new Wt(),
  Vu = new D(1, 0, 0),
  Gu = new D(0, 1, 0),
  Wu = new D(0, 0, 1),
  Xu = { type: "added" },
  t_ = { type: "removed" },
  Ls = { type: "childadded", child: null },
  Yo = { type: "childremoved", child: null };
class nt extends ki {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Jm++ }),
      (this.uuid = Rn()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = nt.DEFAULT_UP.clone());
    const e = new D(),
      t = new zn(),
      n = new Wt(),
      i = new D(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new Ue() },
        normalMatrix: { value: new Fe() },
      }),
      (this.matrix = new Ue()),
      (this.matrixWorld = new Ue()),
      (this.matrixAutoUpdate = nt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Gc()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Ps.setFromAxisAngle(e, t), this.quaternion.multiply(Ps), this;
  }
  rotateOnWorldAxis(e, t) {
    return Ps.setFromAxisAngle(e, t), this.quaternion.premultiply(Ps), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Vu, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Gu, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Wu, e);
  }
  translateOnAxis(e, t) {
    return (
      Hu.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Hu.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Vu, e);
  }
  translateY(e) {
    return this.translateOnAxis(Gu, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Wu, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(jn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ta.copy(e) : Ta.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      Cr.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? jn.lookAt(Cr, Ta, this.up)
        : jn.lookAt(Ta, Cr, this.up),
      this.quaternion.setFromRotationMatrix(jn),
      i &&
        (jn.extractRotation(i.matrixWorld),
        Ps.setFromRotationMatrix(jn),
        this.quaternion.premultiply(Ps.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Xu),
            (Ls.child = e),
            this.dispatchEvent(Ls),
            (Ls.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(t_),
        (Yo.child = e),
        this.dispatchEvent(Yo),
        (Yo.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      jn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), jn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(jn),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(Xu),
      (Ls.child = e),
      this.dispatchEvent(Ls),
      (Ls.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let s = 0, a = i.length; s < a; s++)
      i[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Cr, e, Qm), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Cr, e_, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            )),
      t === !0)
    ) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) i[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((i.type = "BatchedMesh"),
        (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (i.sortObjects = this.sortObjects),
        (i.drawRanges = this._drawRanges),
        (i.reservedRanges = this._reservedRanges),
        (i.visibility = this._visibility),
        (i.active = this._active),
        (i.bounds = this._bounds.map((o) => ({
          boxInitialized: o.boxInitialized,
          boxMin: o.box.min.toArray(),
          boxMax: o.box.max.toArray(),
          sphereInitialized: o.sphereInitialized,
          sphereRadius: o.sphere.radius,
          sphereCenter: o.sphere.center.toArray(),
        }))),
        (i.maxInstanceCount = this._maxInstanceCount),
        (i.maxVertexCount = this._maxVertexCount),
        (i.maxIndexCount = this._maxIndexCount),
        (i.geometryInitialized = this._geometryInitialized),
        (i.geometryCount = this._geometryCount),
        (i.matricesTexture = this._matricesTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (i.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (i.boundingSphere = {
            center: i.boundingSphere.center.toArray(),
            radius: i.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (i.boundingBox = {
            min: i.boundingBox.min.toArray(),
            max: i.boundingBox.max.toArray(),
          }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            s(e.shapes, h);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        i.material = o;
      } else i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        u = a(e.images),
        h = a(e.shapes),
        f = a(e.skeletons),
        d = a(e.animations),
        g = a(e.nodes);
      o.length > 0 && (n.geometries = o),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        h.length > 0 && (n.shapes = h),
        f.length > 0 && (n.skeletons = f),
        d.length > 0 && (n.animations = d),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
nt.DEFAULT_UP = new D(0, 1, 0);
nt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const An = new D(),
  Kn = new D(),
  jo = new D(),
  Zn = new D(),
  Is = new D(),
  Ds = new D(),
  qu = new D(),
  Ko = new D(),
  Zo = new D(),
  $o = new D();
class Nn {
  constructor(e = new D(), t = new D(), n = new D()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), An.subVectors(e, t), i.cross(An);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    An.subVectors(i, t), Kn.subVectors(n, t), jo.subVectors(e, t);
    const a = An.dot(An),
      o = An.dot(Kn),
      l = An.dot(jo),
      c = Kn.dot(Kn),
      u = Kn.dot(jo),
      h = a * c - o * o;
    if (h === 0) return s.set(0, 0, 0), null;
    const f = 1 / h,
      d = (c * l - o * u) * f,
      g = (a * u - o * l) * f;
    return s.set(1 - d - g, g, d);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Zn) === null
      ? !1
      : Zn.x >= 0 && Zn.y >= 0 && Zn.x + Zn.y <= 1;
  }
  static getInterpolation(e, t, n, i, s, a, o, l) {
    return this.getBarycoord(e, t, n, i, Zn) === null
      ? ((l.x = 0),
        (l.y = 0),
        "z" in l && (l.z = 0),
        "w" in l && (l.w = 0),
        null)
      : (l.setScalar(0),
        l.addScaledVector(s, Zn.x),
        l.addScaledVector(a, Zn.y),
        l.addScaledVector(o, Zn.z),
        l);
  }
  static isFrontFacing(e, t, n, i) {
    return An.subVectors(n, t), Kn.subVectors(e, t), An.cross(Kn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      An.subVectors(this.c, this.b),
      Kn.subVectors(this.a, this.b),
      An.cross(Kn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Nn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Nn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, s) {
    return Nn.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Nn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Nn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      s = this.c;
    let a, o;
    Is.subVectors(i, n), Ds.subVectors(s, n), Ko.subVectors(e, n);
    const l = Is.dot(Ko),
      c = Ds.dot(Ko);
    if (l <= 0 && c <= 0) return t.copy(n);
    Zo.subVectors(e, i);
    const u = Is.dot(Zo),
      h = Ds.dot(Zo);
    if (u >= 0 && h <= u) return t.copy(i);
    const f = l * h - u * c;
    if (f <= 0 && l >= 0 && u <= 0)
      return (a = l / (l - u)), t.copy(n).addScaledVector(Is, a);
    $o.subVectors(e, s);
    const d = Is.dot($o),
      g = Ds.dot($o);
    if (g >= 0 && d <= g) return t.copy(s);
    const _ = d * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return (o = c / (c - g)), t.copy(n).addScaledVector(Ds, o);
    const p = u * g - d * h;
    if (p <= 0 && h - u >= 0 && d - g >= 0)
      return (
        qu.subVectors(s, i),
        (o = (h - u) / (h - u + (d - g))),
        t.copy(i).addScaledVector(qu, o)
      );
    const m = 1 / (p + _ + f);
    return (
      (a = _ * m),
      (o = f * m),
      t.copy(n).addScaledVector(Is, a).addScaledVector(Ds, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Yf = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  _i = { h: 0, s: 0, l: 0 },
  Ea = { h: 0, s: 0, l: 0 };
function Jo(r, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? r + (e - r) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? r + (e - r) * 6 * (2 / 3 - t)
      : r
  );
}
class De {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor
        ? this.copy(i)
        : typeof i == "number"
        ? this.setHex(i)
        : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = zt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Xe.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = Xe.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      Xe.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = Xe.workingColorSpace) {
    if (((e = Vc(e, 1)), (t = Pt(t, 0, 1)), (n = Pt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - s;
      (this.r = Jo(a, s, e + 1 / 3)),
        (this.g = Jo(a, s, e)),
        (this.b = Jo(a, s, e - 1 / 3));
    }
    return Xe.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = zt) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const a = i[1],
        o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                t
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = i[1],
        a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = zt) {
    const n = Yf[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = $s(e.r)), (this.g = $s(e.g)), (this.b = $s(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = ko(e.r)), (this.g = ko(e.g)), (this.b = ko(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = zt) {
    return (
      Xe.fromWorkingColorSpace(Nt.copy(this), e),
      Math.round(Pt(Nt.r * 255, 0, 255)) * 65536 +
        Math.round(Pt(Nt.g * 255, 0, 255)) * 256 +
        Math.round(Pt(Nt.b * 255, 0, 255))
    );
  }
  getHexString(e = zt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Xe.workingColorSpace) {
    Xe.fromWorkingColorSpace(Nt.copy(this), t);
    const n = Nt.r,
      i = Nt.g,
      s = Nt.b,
      a = Math.max(n, i, s),
      o = Math.min(n, i, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a) (l = 0), (c = 0);
    else {
      const h = a - o;
      switch (((c = u <= 0.5 ? h / (a + o) : h / (2 - a - o)), a)) {
        case n:
          l = (i - s) / h + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / h + 2;
          break;
        case s:
          l = (n - i) / h + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = Xe.workingColorSpace) {
    return (
      Xe.fromWorkingColorSpace(Nt.copy(this), t),
      (e.r = Nt.r),
      (e.g = Nt.g),
      (e.b = Nt.b),
      e
    );
  }
  getStyle(e = zt) {
    Xe.fromWorkingColorSpace(Nt.copy(this), e);
    const t = Nt.r,
      n = Nt.g,
      i = Nt.b;
    return e !== zt
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          i * 255
        )})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(_i), this.setHSL(_i.h + e, _i.s + t, _i.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(_i), e.getHSL(Ea);
    const n = Vr(_i.h, Ea.h, t),
      i = Vr(_i.s, Ea.s, t),
      s = Vr(_i.l, Ea.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      i = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * n + s[6] * i),
      (this.g = s[1] * t + s[4] * n + s[7] * i),
      (this.b = s[2] * t + s[5] * n + s[8] * i),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Nt = new De();
De.NAMES = Yf;
let n_ = 0;
class Fn extends ki {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: n_++ }),
      (this.uuid = Rn()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = ls),
      (this.side = si),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Pl),
      (this.blendDst = Ll),
      (this.blendEquation = ss),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new De(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = ao),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Iu),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Es),
      (this.stencilZFail = Es),
      (this.stencilZPass = Es),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== ls && (n.blending = this.blending),
      this.side !== si && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== Pl && (n.blendSrc = this.blendSrc),
      this.blendDst !== Ll && (n.blendDst = this.blendDst),
      this.blendEquation !== ss && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== ao && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== Iu && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== Es && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== Es && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== Es && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures),
        a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
  onBeforeRender() {
    console.warn("Material: onBeforeRender() has been removed.");
  }
}
class Si extends Fn {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new De(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new zn()),
      (this.combine = wf),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const xt = new D(),
  Aa = new Me();
class Xt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = oc),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.gpuType = wn),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return (
      Zs(
        "THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
      ),
      this._updateRange
    );
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Aa.fromBufferAttribute(this, t),
          Aa.applyMatrix3(e),
          this.setXY(t, Aa.x, Aa.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        xt.fromBufferAttribute(this, t),
          xt.applyMatrix3(e),
          this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      xt.fromBufferAttribute(this, t),
        xt.applyMatrix4(e),
        this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      xt.fromBufferAttribute(this, t),
        xt.applyNormalMatrix(e),
        this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      xt.fromBufferAttribute(this, t),
        xt.transformDirection(e),
        this.setXYZ(t, xt.x, xt.y, xt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = bn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = $e(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = $e(t, this.array)), (n = $e(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = $e(t, this.array)),
        (n = $e(n, this.array)),
        (i = $e(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = $e(t, this.array)),
        (n = $e(n, this.array)),
        (i = $e(i, this.array)),
        (s = $e(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== oc && (e.usage = this.usage),
      e
    );
  }
}
class jf extends Xt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Kf extends Xt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class vn extends Xt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let i_ = 0;
const fn = new Ue(),
  Qo = new nt(),
  Ns = new D(),
  nn = new ci(),
  Pr = new ci(),
  Et = new D();
class Pn extends ki {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: i_++ }),
      (this.uuid = Rn()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Wf(e) ? Kf : jf)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Fe().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return fn.makeRotationFromQuaternion(e), this.applyMatrix4(fn), this;
  }
  rotateX(e) {
    return fn.makeRotationX(e), this.applyMatrix4(fn), this;
  }
  rotateY(e) {
    return fn.makeRotationY(e), this.applyMatrix4(fn), this;
  }
  rotateZ(e) {
    return fn.makeRotationZ(e), this.applyMatrix4(fn), this;
  }
  translate(e, t, n) {
    return fn.makeTranslation(e, t, n), this.applyMatrix4(fn), this;
  }
  scale(e, t, n) {
    return fn.makeScale(e, t, n), this.applyMatrix4(fn), this;
  }
  lookAt(e) {
    return Qo.lookAt(e), Qo.updateMatrix(), this.applyMatrix4(Qo.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Ns).negate(),
      this.translate(Ns.x, Ns.y, Ns.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new vn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ci());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this
      ),
        this.boundingBox.set(
          new D(-1 / 0, -1 / 0, -1 / 0),
          new D(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          nn.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (Et.addVectors(this.boundingBox.min, nn.min),
                this.boundingBox.expandByPoint(Et),
                Et.addVectors(this.boundingBox.max, nn.max),
                this.boundingBox.expandByPoint(Et))
              : (this.boundingBox.expandByPoint(nn.min),
                this.boundingBox.expandByPoint(nn.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Vn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this
      ),
        this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((nn.setFromBufferAttribute(e), t))
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Pr.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (Et.addVectors(nn.min, Pr.min),
                nn.expandByPoint(Et),
                Et.addVectors(nn.max, Pr.max),
                nn.expandByPoint(Et))
              : (nn.expandByPoint(Pr.min), nn.expandByPoint(Pr.max));
        }
      nn.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        Et.fromBufferAttribute(e, s),
          (i = Math.max(i, n.distanceToSquared(Et)));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            Et.fromBufferAttribute(o, c),
              l && (Ns.fromBufferAttribute(e, c), Et.add(Ns)),
              (i = Math.max(i, n.distanceToSquared(Et)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = t.position,
      i = t.normal,
      s = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Xt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      o = [],
      l = [];
    for (let P = 0; P < n.count; P++) (o[P] = new D()), (l[P] = new D());
    const c = new D(),
      u = new D(),
      h = new D(),
      f = new Me(),
      d = new Me(),
      g = new Me(),
      _ = new D(),
      p = new D();
    function m(P, M, E) {
      c.fromBufferAttribute(n, P),
        u.fromBufferAttribute(n, M),
        h.fromBufferAttribute(n, E),
        f.fromBufferAttribute(s, P),
        d.fromBufferAttribute(s, M),
        g.fromBufferAttribute(s, E),
        u.sub(c),
        h.sub(c),
        d.sub(f),
        g.sub(f);
      const L = 1 / (d.x * g.y - g.x * d.y);
      isFinite(L) &&
        (_.copy(u)
          .multiplyScalar(g.y)
          .addScaledVector(h, -d.y)
          .multiplyScalar(L),
        p
          .copy(h)
          .multiplyScalar(d.x)
          .addScaledVector(u, -g.x)
          .multiplyScalar(L),
        o[P].add(_),
        o[M].add(_),
        o[E].add(_),
        l[P].add(p),
        l[M].add(p),
        l[E].add(p));
    }
    let y = this.groups;
    y.length === 0 && (y = [{ start: 0, count: e.count }]);
    for (let P = 0, M = y.length; P < M; ++P) {
      const E = y[P],
        L = E.start,
        k = E.count;
      for (let O = L, K = L + k; O < K; O += 3)
        m(e.getX(O + 0), e.getX(O + 1), e.getX(O + 2));
    }
    const v = new D(),
      S = new D(),
      R = new D(),
      w = new D();
    function b(P) {
      R.fromBufferAttribute(i, P), w.copy(R);
      const M = o[P];
      v.copy(M),
        v.sub(R.multiplyScalar(R.dot(M))).normalize(),
        S.crossVectors(w, M);
      const L = S.dot(l[P]) < 0 ? -1 : 1;
      a.setXYZW(P, v.x, v.y, v.z, L);
    }
    for (let P = 0, M = y.length; P < M; ++P) {
      const E = y[P],
        L = E.start,
        k = E.count;
      for (let O = L, K = L + k; O < K; O += 3)
        b(e.getX(O + 0)), b(e.getX(O + 1)), b(e.getX(O + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new Xt(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let f = 0, d = n.count; f < d; f++) n.setXYZ(f, 0, 0, 0);
      const i = new D(),
        s = new D(),
        a = new D(),
        o = new D(),
        l = new D(),
        c = new D(),
        u = new D(),
        h = new D();
      if (e)
        for (let f = 0, d = e.count; f < d; f += 3) {
          const g = e.getX(f + 0),
            _ = e.getX(f + 1),
            p = e.getX(f + 2);
          i.fromBufferAttribute(t, g),
            s.fromBufferAttribute(t, _),
            a.fromBufferAttribute(t, p),
            u.subVectors(a, s),
            h.subVectors(i, s),
            u.cross(h),
            o.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, _),
            c.fromBufferAttribute(n, p),
            o.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(g, o.x, o.y, o.z),
            n.setXYZ(_, l.x, l.y, l.z),
            n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, d = t.count; f < d; f += 3)
          i.fromBufferAttribute(t, f + 0),
            s.fromBufferAttribute(t, f + 1),
            a.fromBufferAttribute(t, f + 2),
            u.subVectors(a, s),
            h.subVectors(i, s),
            u.cross(h),
            n.setXYZ(f + 0, u.x, u.y, u.z),
            n.setXYZ(f + 1, u.x, u.y, u.z),
            n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Et.fromBufferAttribute(e, t),
        Et.normalize(),
        e.setXYZ(t, Et.x, Et.y, Et.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array,
        u = o.itemSize,
        h = o.normalized,
        f = new c.constructor(l.length * u);
      let d = 0,
        g = 0;
      for (let _ = 0, p = l.length; _ < p; _++) {
        o.isInterleavedBufferAttribute
          ? (d = l[_] * o.data.stride + o.offset)
          : (d = l[_] * u);
        for (let m = 0; m < u; m++) f[g++] = c[d++];
      }
      return new Xt(f, u, h);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new Pn(),
      n = this.index.array,
      i = this.attributes;
    for (const o in i) {
      const l = i[o],
        c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [],
        c = s[o];
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u],
          d = e(f, n);
        l.push(d);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let h = 0, f = c.length; h < f; h++) {
        const d = c[h];
        u.push(d.toJSON(e.data));
      }
      u.length > 0 && ((i[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        h = s[c];
      for (let f = 0, d = h.length; f < d; f++) u.push(h[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const h = a[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Yu = new Ue(),
  Xi = new yr(),
  ba = new Vn(),
  ju = new D(),
  Us = new D(),
  Os = new D(),
  Fs = new D(),
  el = new D(),
  wa = new D(),
  Ra = new Me(),
  Ca = new Me(),
  Pa = new Me(),
  Ku = new D(),
  Zu = new D(),
  $u = new D(),
  La = new D(),
  Ia = new D();
class qt extends nt {
  constructor(e = new Pn(), t = new Si()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      s = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      wa.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l],
          h = s[l];
        u !== 0 &&
          (el.fromBufferAttribute(h, e),
          a ? wa.addScaledVector(el, u) : wa.addScaledVector(el.sub(t), u));
      }
      t.add(wa);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      s = this.matrixWorld;
    i !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ba.copy(n.boundingSphere),
      ba.applyMatrix4(s),
      Xi.copy(e.ray).recast(e.near),
      !(
        ba.containsPoint(Xi.origin) === !1 &&
        (Xi.intersectSphere(ba, ju) === null ||
          Xi.origin.distanceToSquared(ju) > (e.far - e.near) ** 2)
      ) &&
        (Yu.copy(s).invert(),
        Xi.copy(e.ray).applyMatrix4(Yu),
        !(n.boundingBox !== null && Xi.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, Xi)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry,
      a = this.material,
      o = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      u = s.attributes.uv1,
      h = s.attributes.normal,
      f = s.groups,
      d = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = f.length; g < _; g++) {
          const p = f[g],
            m = a[p.materialIndex],
            y = Math.max(p.start, d.start),
            v = Math.min(
              o.count,
              Math.min(p.start + p.count, d.start + d.count)
            );
          for (let S = y, R = v; S < R; S += 3) {
            const w = o.getX(S),
              b = o.getX(S + 1),
              P = o.getX(S + 2);
            (i = Da(this, m, e, n, c, u, h, w, b, P)),
              i &&
                ((i.faceIndex = Math.floor(S / 3)),
                (i.face.materialIndex = p.materialIndex),
                t.push(i));
          }
        }
      else {
        const g = Math.max(0, d.start),
          _ = Math.min(o.count, d.start + d.count);
        for (let p = g, m = _; p < m; p += 3) {
          const y = o.getX(p),
            v = o.getX(p + 1),
            S = o.getX(p + 2);
          (i = Da(this, a, e, n, c, u, h, y, v, S)),
            i && ((i.faceIndex = Math.floor(p / 3)), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = f.length; g < _; g++) {
          const p = f[g],
            m = a[p.materialIndex],
            y = Math.max(p.start, d.start),
            v = Math.min(
              l.count,
              Math.min(p.start + p.count, d.start + d.count)
            );
          for (let S = y, R = v; S < R; S += 3) {
            const w = S,
              b = S + 1,
              P = S + 2;
            (i = Da(this, m, e, n, c, u, h, w, b, P)),
              i &&
                ((i.faceIndex = Math.floor(S / 3)),
                (i.face.materialIndex = p.materialIndex),
                t.push(i));
          }
        }
      else {
        const g = Math.max(0, d.start),
          _ = Math.min(l.count, d.start + d.count);
        for (let p = g, m = _; p < m; p += 3) {
          const y = p,
            v = p + 1,
            S = p + 2;
          (i = Da(this, a, e, n, c, u, h, y, v, S)),
            i && ((i.faceIndex = Math.floor(p / 3)), t.push(i));
        }
      }
  }
}
function s_(r, e, t, n, i, s, a, o) {
  let l;
  if (
    (e.side === Yt
      ? (l = n.intersectTriangle(a, s, i, !0, o))
      : (l = n.intersectTriangle(i, s, a, e.side === si, o)),
    l === null)
  )
    return null;
  Ia.copy(o), Ia.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(Ia);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: Ia.clone(), object: r };
}
function Da(r, e, t, n, i, s, a, o, l, c) {
  r.getVertexPosition(o, Us),
    r.getVertexPosition(l, Os),
    r.getVertexPosition(c, Fs);
  const u = s_(r, e, t, n, Us, Os, Fs, La);
  if (u) {
    i &&
      (Ra.fromBufferAttribute(i, o),
      Ca.fromBufferAttribute(i, l),
      Pa.fromBufferAttribute(i, c),
      (u.uv = Nn.getInterpolation(La, Us, Os, Fs, Ra, Ca, Pa, new Me()))),
      s &&
        (Ra.fromBufferAttribute(s, o),
        Ca.fromBufferAttribute(s, l),
        Pa.fromBufferAttribute(s, c),
        (u.uv1 = Nn.getInterpolation(La, Us, Os, Fs, Ra, Ca, Pa, new Me()))),
      a &&
        (Ku.fromBufferAttribute(a, o),
        Zu.fromBufferAttribute(a, l),
        $u.fromBufferAttribute(a, c),
        (u.normal = Nn.getInterpolation(La, Us, Os, Fs, Ku, Zu, $u, new D())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = { a: o, b: l, c, normal: new D(), materialIndex: 0 };
    Nn.getNormal(Us, Os, Fs, h.normal), (u.face = h);
  }
  return u;
}
class la extends Pn {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: s,
        depthSegments: a,
      });
    const o = this;
    (i = Math.floor(i)), (s = Math.floor(s)), (a = Math.floor(a));
    const l = [],
      c = [],
      u = [],
      h = [];
    let f = 0,
      d = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0),
      g("z", "y", "x", 1, -1, n, t, -e, a, s, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, s, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new vn(c, 3)),
      this.setAttribute("normal", new vn(u, 3)),
      this.setAttribute("uv", new vn(h, 2));
    function g(_, p, m, y, v, S, R, w, b, P, M) {
      const E = S / b,
        L = R / P,
        k = S / 2,
        O = R / 2,
        K = w / 2,
        q = b + 1,
        G = P + 1;
      let j = 0,
        W = 0;
      const ie = new D();
      for (let ae = 0; ae < G; ae++) {
        const ue = ae * L - O;
        for (let Ce = 0; Ce < q; Ce++) {
          const Ve = Ce * E - k;
          (ie[_] = Ve * y),
            (ie[p] = ue * v),
            (ie[m] = K),
            c.push(ie.x, ie.y, ie.z),
            (ie[_] = 0),
            (ie[p] = 0),
            (ie[m] = w > 0 ? 1 : -1),
            u.push(ie.x, ie.y, ie.z),
            h.push(Ce / b),
            h.push(1 - ae / P),
            (j += 1);
        }
      }
      for (let ae = 0; ae < P; ae++)
        for (let ue = 0; ue < b; ue++) {
          const Ce = f + ue + q * ae,
            Ve = f + ue + q * (ae + 1),
            Y = f + (ue + 1) + q * (ae + 1),
            J = f + (ue + 1) + q * ae;
          l.push(Ce, Ve, J), l.push(Ve, Y, J), (W += 6);
        }
      o.addGroup(d, W, M), (d += W), (f += j);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new la(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function ur(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? i.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function kt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = ur(r[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function r_(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r[t].clone());
  return e;
}
function Zf(r) {
  const e = r.getRenderTarget();
  return e === null
    ? r.outputColorSpace
    : e.isXRRenderTarget === !0
    ? e.texture.colorSpace
    : Xe.workingColorSpace;
}
const a_ = { clone: ur, merge: kt };
var o_ = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  l_ = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ni extends Fn {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = o_),
      (this.fragmentShader = l_),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = ur(e.uniforms)),
      (this.uniformsGroups = r_(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture
        ? (t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[i] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[i] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[i] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[i] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: a.toArray() })
        : (t.uniforms[i] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class $f extends nt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Ue()),
      (this.projectionMatrix = new Ue()),
      (this.projectionMatrixInverse = new Ue()),
      (this.coordinateSystem = ii);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const gi = new D(),
  Ju = new Me(),
  Qu = new Me();
class Ht extends $f {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = cr * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Hr * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return cr * 2 * Math.atan(Math.tan(Hr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    gi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(gi.x, gi.y).multiplyScalar(-e / gi.z),
      gi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(gi.x, gi.y).multiplyScalar(-e / gi.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Ju, Qu), t.subVectors(Qu, Ju);
  }
  setViewOffset(e, t, n, i, s, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Hr * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      (s += (a.offsetX * i) / l),
        (t -= (a.offsetY * n) / c),
        (i *= a.width / l),
        (n *= a.height / c);
    }
    const o = this.filmOffset;
    o !== 0 && (s += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + i,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Bs = -90,
  ks = 1;
class c_ extends nt {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const i = new Ht(Bs, ks, e, t);
    (i.layers = this.layers), this.add(i);
    const s = new Ht(Bs, ks, e, t);
    (s.layers = this.layers), this.add(s);
    const a = new Ht(Bs, ks, e, t);
    (a.layers = this.layers), this.add(a);
    const o = new Ht(Bs, ks, e, t);
    (o.layers = this.layers), this.add(o);
    const l = new Ht(Bs, ks, e, t);
    (l.layers = this.layers), this.add(l);
    const c = new Ht(Bs, ks, e, t);
    (c.layers = this.layers), this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, i, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === ii)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        i.up.set(0, 1, 0),
        i.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1);
    else if (e === fo)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        i.up.set(0, -1, 0),
        i.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [s, a, o, l, c, u] = this.children,
      h = e.getRenderTarget(),
      f = e.getActiveCubeFace(),
      d = e.getActiveMipmapLevel(),
      g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, i),
      e.render(t, s),
      e.setRenderTarget(n, 1, i),
      e.render(t, a),
      e.setRenderTarget(n, 2, i),
      e.render(t, o),
      e.setRenderTarget(n, 3, i),
      e.render(t, l),
      e.setRenderTarget(n, 4, i),
      e.render(t, c),
      (n.texture.generateMipmaps = _),
      e.setRenderTarget(n, 5, i),
      e.render(t, u),
      e.setRenderTarget(h, f, d),
      (e.xr.enabled = g),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Jf extends bt {
  constructor(e, t, n, i, s, a, o, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : sr),
      super(e, t, n, i, s, a, o, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class u_ extends _s {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new Jf(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : rn);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new la(5, 5, 5),
      s = new Ni({
        name: "CubemapFromEquirect",
        uniforms: ur(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Yt,
        blending: Ri,
      });
    s.uniforms.tEquirect.value = t;
    const a = new qt(i, s),
      o = t.minFilter;
    return (
      t.minFilter === ni && (t.minFilter = rn),
      new c_(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const tl = new D(),
  h_ = new D(),
  f_ = new Fe();
class vi {
  constructor(e = new D(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = tl.subVectors(n, t).cross(h_.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(tl),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || f_.getNormalMatrix(e),
      i = this.coplanarPoint(tl).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const qi = new Vn(),
  Na = new D();
class Wc {
  constructor(
    e = new vi(),
    t = new vi(),
    n = new vi(),
    i = new vi(),
    s = new vi(),
    a = new vi()
  ) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(i),
      o[4].copy(s),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = ii) {
    const n = this.planes,
      i = e.elements,
      s = i[0],
      a = i[1],
      o = i[2],
      l = i[3],
      c = i[4],
      u = i[5],
      h = i[6],
      f = i[7],
      d = i[8],
      g = i[9],
      _ = i[10],
      p = i[11],
      m = i[12],
      y = i[13],
      v = i[14],
      S = i[15];
    if (
      (n[0].setComponents(l - s, f - c, p - d, S - m).normalize(),
      n[1].setComponents(l + s, f + c, p + d, S + m).normalize(),
      n[2].setComponents(l + a, f + u, p + g, S + y).normalize(),
      n[3].setComponents(l - a, f - u, p - g, S - y).normalize(),
      n[4].setComponents(l - o, f - h, p - _, S - v).normalize(),
      t === ii)
    )
      n[5].setComponents(l + o, f + h, p + _, S + v).normalize();
    else if (t === fo) n[5].setComponents(o, h, _, v).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(qi);
  }
  intersectsSprite(e) {
    return (
      qi.center.set(0, 0, 0),
      (qi.radius = 0.7071067811865476),
      qi.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(qi)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((Na.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (Na.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (Na.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(Na) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Qf() {
  let r = null,
    e = !1,
    t = null,
    n = null;
  function i(s, a) {
    t(s, a), (n = r.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = r.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      r.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      r = s;
    },
  };
}
function d_(r) {
  const e = new WeakMap();
  function t(o, l) {
    const c = o.array,
      u = o.usage,
      h = c.byteLength,
      f = r.createBuffer();
    r.bindBuffer(l, f), r.bufferData(l, c, u), o.onUploadCallback();
    let d;
    if (c instanceof Float32Array) d = r.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (d = r.HALF_FLOAT) : (d = r.UNSIGNED_SHORT);
    else if (c instanceof Int16Array) d = r.SHORT;
    else if (c instanceof Uint32Array) d = r.UNSIGNED_INT;
    else if (c instanceof Int32Array) d = r.INT;
    else if (c instanceof Int8Array) d = r.BYTE;
    else if (c instanceof Uint8Array) d = r.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) d = r.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + c
      );
    return {
      buffer: f,
      type: d,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: h,
    };
  }
  function n(o, l, c) {
    const u = l.array,
      h = l._updateRange,
      f = l.updateRanges;
    if (
      (r.bindBuffer(c, o),
      h.count === -1 && f.length === 0 && r.bufferSubData(c, 0, u),
      f.length !== 0)
    ) {
      for (let d = 0, g = f.length; d < g; d++) {
        const _ = f[d];
        r.bufferSubData(c, _.start * u.BYTES_PER_ELEMENT, u, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    h.count !== -1 &&
      (r.bufferSubData(c, h.offset * u.BYTES_PER_ELEMENT, u, h.offset, h.count),
      (h.count = -1)),
      l.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (r.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (
      (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)
    ) {
      const u = e.get(o);
      (!u || u.version < o.version) &&
        e.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    const c = e.get(o);
    if (c === void 0) e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
        );
      n(c.buffer, o, l), (c.version = o.version);
    }
  }
  return { get: i, remove: s, update: a };
}
class wo extends Pn {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const s = e / 2,
      a = t / 2,
      o = Math.floor(n),
      l = Math.floor(i),
      c = o + 1,
      u = l + 1,
      h = e / o,
      f = t / l,
      d = [],
      g = [],
      _ = [],
      p = [];
    for (let m = 0; m < u; m++) {
      const y = m * f - a;
      for (let v = 0; v < c; v++) {
        const S = v * h - s;
        g.push(S, -y, 0), _.push(0, 0, 1), p.push(v / o), p.push(1 - m / l);
      }
    }
    for (let m = 0; m < l; m++)
      for (let y = 0; y < o; y++) {
        const v = y + c * m,
          S = y + c * (m + 1),
          R = y + 1 + c * (m + 1),
          w = y + 1 + c * m;
        d.push(v, S, w), d.push(S, R, w);
      }
    this.setIndex(d),
      this.setAttribute("position", new vn(g, 3)),
      this.setAttribute("normal", new vn(_, 3)),
      this.setAttribute("uv", new vn(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new wo(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var p_ = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  m_ = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  __ = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  g_ = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  x_ = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  v_ = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  y_ = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  M_ = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  S_ = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  T_ = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  E_ = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  A_ = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  b_ = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  w_ = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  R_ = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  C_ = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  P_ = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  L_ = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  I_ = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  D_ = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  N_ = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  U_ = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  O_ = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  F_ = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  B_ = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  k_ = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  z_ = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  H_ = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  V_ = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  G_ = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  W_ = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  X_ = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  q_ = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Y_ = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  j_ = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  K_ = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Z_ = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  $_ = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  J_ = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Q_ = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  eg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  tg = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  ng = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  ig = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  sg = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  rg = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  ag = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  og = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  lg = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  cg = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  ug = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  hg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  fg = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  dg = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  pg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  mg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  _g = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  gg = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  xg = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  vg = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  yg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Mg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Sg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Tg = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Eg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Ag = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  bg = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  wg = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Rg = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Cg = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  Pg = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Lg = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Ig = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Dg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Ng = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Ug = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Og = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Fg = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  Bg = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  kg = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  zg = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Hg = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Vg = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  Gg = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Wg = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Xg = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  qg = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Yg = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  jg = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Kg = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  Zg = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  $g = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  Jg = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Qg = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  e0 = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  t0 = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  n0 = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  i0 = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  s0 = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  r0 = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  a0 = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  o0 = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  l0 = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  c0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  u0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  h0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  f0 = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const d0 = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  p0 = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  m0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  _0 = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  g0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  x0 = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  v0 = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  y0 = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  M0 = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  S0 = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  T0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  E0 = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  A0 = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  b0 = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  w0 = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  R0 = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  C0 = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  P0 = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  L0 = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  I0 = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  D0 = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  N0 = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  U0 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  O0 = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  F0 = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  B0 = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  k0 = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  z0 = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  H0 = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  V0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  G0 = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  W0 = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  X0 = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  q0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Oe = {
    alphahash_fragment: p_,
    alphahash_pars_fragment: m_,
    alphamap_fragment: __,
    alphamap_pars_fragment: g_,
    alphatest_fragment: x_,
    alphatest_pars_fragment: v_,
    aomap_fragment: y_,
    aomap_pars_fragment: M_,
    batching_pars_vertex: S_,
    batching_vertex: T_,
    begin_vertex: E_,
    beginnormal_vertex: A_,
    bsdfs: b_,
    iridescence_fragment: w_,
    bumpmap_pars_fragment: R_,
    clipping_planes_fragment: C_,
    clipping_planes_pars_fragment: P_,
    clipping_planes_pars_vertex: L_,
    clipping_planes_vertex: I_,
    color_fragment: D_,
    color_pars_fragment: N_,
    color_pars_vertex: U_,
    color_vertex: O_,
    common: F_,
    cube_uv_reflection_fragment: B_,
    defaultnormal_vertex: k_,
    displacementmap_pars_vertex: z_,
    displacementmap_vertex: H_,
    emissivemap_fragment: V_,
    emissivemap_pars_fragment: G_,
    colorspace_fragment: W_,
    colorspace_pars_fragment: X_,
    envmap_fragment: q_,
    envmap_common_pars_fragment: Y_,
    envmap_pars_fragment: j_,
    envmap_pars_vertex: K_,
    envmap_physical_pars_fragment: ag,
    envmap_vertex: Z_,
    fog_vertex: $_,
    fog_pars_vertex: J_,
    fog_fragment: Q_,
    fog_pars_fragment: eg,
    gradientmap_pars_fragment: tg,
    lightmap_pars_fragment: ng,
    lights_lambert_fragment: ig,
    lights_lambert_pars_fragment: sg,
    lights_pars_begin: rg,
    lights_toon_fragment: og,
    lights_toon_pars_fragment: lg,
    lights_phong_fragment: cg,
    lights_phong_pars_fragment: ug,
    lights_physical_fragment: hg,
    lights_physical_pars_fragment: fg,
    lights_fragment_begin: dg,
    lights_fragment_maps: pg,
    lights_fragment_end: mg,
    logdepthbuf_fragment: _g,
    logdepthbuf_pars_fragment: gg,
    logdepthbuf_pars_vertex: xg,
    logdepthbuf_vertex: vg,
    map_fragment: yg,
    map_pars_fragment: Mg,
    map_particle_fragment: Sg,
    map_particle_pars_fragment: Tg,
    metalnessmap_fragment: Eg,
    metalnessmap_pars_fragment: Ag,
    morphinstance_vertex: bg,
    morphcolor_vertex: wg,
    morphnormal_vertex: Rg,
    morphtarget_pars_vertex: Cg,
    morphtarget_vertex: Pg,
    normal_fragment_begin: Lg,
    normal_fragment_maps: Ig,
    normal_pars_fragment: Dg,
    normal_pars_vertex: Ng,
    normal_vertex: Ug,
    normalmap_pars_fragment: Og,
    clearcoat_normal_fragment_begin: Fg,
    clearcoat_normal_fragment_maps: Bg,
    clearcoat_pars_fragment: kg,
    iridescence_pars_fragment: zg,
    opaque_fragment: Hg,
    packing: Vg,
    premultiplied_alpha_fragment: Gg,
    project_vertex: Wg,
    dithering_fragment: Xg,
    dithering_pars_fragment: qg,
    roughnessmap_fragment: Yg,
    roughnessmap_pars_fragment: jg,
    shadowmap_pars_fragment: Kg,
    shadowmap_pars_vertex: Zg,
    shadowmap_vertex: $g,
    shadowmask_pars_fragment: Jg,
    skinbase_vertex: Qg,
    skinning_pars_vertex: e0,
    skinning_vertex: t0,
    skinnormal_vertex: n0,
    specularmap_fragment: i0,
    specularmap_pars_fragment: s0,
    tonemapping_fragment: r0,
    tonemapping_pars_fragment: a0,
    transmission_fragment: o0,
    transmission_pars_fragment: l0,
    uv_pars_fragment: c0,
    uv_pars_vertex: u0,
    uv_vertex: h0,
    worldpos_vertex: f0,
    background_vert: d0,
    background_frag: p0,
    backgroundCube_vert: m0,
    backgroundCube_frag: _0,
    cube_vert: g0,
    cube_frag: x0,
    depth_vert: v0,
    depth_frag: y0,
    distanceRGBA_vert: M0,
    distanceRGBA_frag: S0,
    equirect_vert: T0,
    equirect_frag: E0,
    linedashed_vert: A0,
    linedashed_frag: b0,
    meshbasic_vert: w0,
    meshbasic_frag: R0,
    meshlambert_vert: C0,
    meshlambert_frag: P0,
    meshmatcap_vert: L0,
    meshmatcap_frag: I0,
    meshnormal_vert: D0,
    meshnormal_frag: N0,
    meshphong_vert: U0,
    meshphong_frag: O0,
    meshphysical_vert: F0,
    meshphysical_frag: B0,
    meshtoon_vert: k0,
    meshtoon_frag: z0,
    points_vert: H0,
    points_frag: V0,
    shadow_vert: G0,
    shadow_frag: W0,
    sprite_vert: X0,
    sprite_frag: q0,
  },
  re = {
    common: {
      diffuse: { value: new De(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Fe() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Fe() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Fe() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Fe() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Fe() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Fe() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Fe() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Fe() },
      normalScale: { value: new Me(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Fe() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Fe() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Fe() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Fe() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new De(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new De(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Fe() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Fe() },
    },
    sprite: {
      diffuse: { value: new De(16777215) },
      opacity: { value: 1 },
      center: { value: new Me(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Fe() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Fe() },
      alphaTest: { value: 0 },
    },
  },
  In = {
    basic: {
      uniforms: kt([
        re.common,
        re.specularmap,
        re.envmap,
        re.aomap,
        re.lightmap,
        re.fog,
      ]),
      vertexShader: Oe.meshbasic_vert,
      fragmentShader: Oe.meshbasic_frag,
    },
    lambert: {
      uniforms: kt([
        re.common,
        re.specularmap,
        re.envmap,
        re.aomap,
        re.lightmap,
        re.emissivemap,
        re.bumpmap,
        re.normalmap,
        re.displacementmap,
        re.fog,
        re.lights,
        { emissive: { value: new De(0) } },
      ]),
      vertexShader: Oe.meshlambert_vert,
      fragmentShader: Oe.meshlambert_frag,
    },
    phong: {
      uniforms: kt([
        re.common,
        re.specularmap,
        re.envmap,
        re.aomap,
        re.lightmap,
        re.emissivemap,
        re.bumpmap,
        re.normalmap,
        re.displacementmap,
        re.fog,
        re.lights,
        {
          emissive: { value: new De(0) },
          specular: { value: new De(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Oe.meshphong_vert,
      fragmentShader: Oe.meshphong_frag,
    },
    standard: {
      uniforms: kt([
        re.common,
        re.envmap,
        re.aomap,
        re.lightmap,
        re.emissivemap,
        re.bumpmap,
        re.normalmap,
        re.displacementmap,
        re.roughnessmap,
        re.metalnessmap,
        re.fog,
        re.lights,
        {
          emissive: { value: new De(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Oe.meshphysical_vert,
      fragmentShader: Oe.meshphysical_frag,
    },
    toon: {
      uniforms: kt([
        re.common,
        re.aomap,
        re.lightmap,
        re.emissivemap,
        re.bumpmap,
        re.normalmap,
        re.displacementmap,
        re.gradientmap,
        re.fog,
        re.lights,
        { emissive: { value: new De(0) } },
      ]),
      vertexShader: Oe.meshtoon_vert,
      fragmentShader: Oe.meshtoon_frag,
    },
    matcap: {
      uniforms: kt([
        re.common,
        re.bumpmap,
        re.normalmap,
        re.displacementmap,
        re.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Oe.meshmatcap_vert,
      fragmentShader: Oe.meshmatcap_frag,
    },
    points: {
      uniforms: kt([re.points, re.fog]),
      vertexShader: Oe.points_vert,
      fragmentShader: Oe.points_frag,
    },
    dashed: {
      uniforms: kt([
        re.common,
        re.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Oe.linedashed_vert,
      fragmentShader: Oe.linedashed_frag,
    },
    depth: {
      uniforms: kt([re.common, re.displacementmap]),
      vertexShader: Oe.depth_vert,
      fragmentShader: Oe.depth_frag,
    },
    normal: {
      uniforms: kt([
        re.common,
        re.bumpmap,
        re.normalmap,
        re.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Oe.meshnormal_vert,
      fragmentShader: Oe.meshnormal_frag,
    },
    sprite: {
      uniforms: kt([re.sprite, re.fog]),
      vertexShader: Oe.sprite_vert,
      fragmentShader: Oe.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Fe() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Oe.background_vert,
      fragmentShader: Oe.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Fe() },
      },
      vertexShader: Oe.backgroundCube_vert,
      fragmentShader: Oe.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Oe.cube_vert,
      fragmentShader: Oe.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Oe.equirect_vert,
      fragmentShader: Oe.equirect_frag,
    },
    distanceRGBA: {
      uniforms: kt([
        re.common,
        re.displacementmap,
        {
          referencePosition: { value: new D() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Oe.distanceRGBA_vert,
      fragmentShader: Oe.distanceRGBA_frag,
    },
    shadow: {
      uniforms: kt([
        re.lights,
        re.fog,
        { color: { value: new De(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Oe.shadow_vert,
      fragmentShader: Oe.shadow_frag,
    },
  };
In.physical = {
  uniforms: kt([
    In.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Fe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Fe() },
      clearcoatNormalScale: { value: new Me(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Fe() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Fe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Fe() },
      sheen: { value: 0 },
      sheenColor: { value: new De(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Fe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Fe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Fe() },
      transmissionSamplerSize: { value: new Me() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Fe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new De(0) },
      specularColor: { value: new De(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Fe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Fe() },
      anisotropyVector: { value: new Me() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Fe() },
    },
  ]),
  vertexShader: Oe.meshphysical_vert,
  fragmentShader: Oe.meshphysical_frag,
};
const Ua = { r: 0, b: 0, g: 0 },
  Yi = new zn(),
  Y0 = new Ue();
function j0(r, e, t, n, i, s, a) {
  const o = new De(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    h = null,
    f = 0,
    d = null;
  function g(y) {
    let v = y.isScene === !0 ? y.background : null;
    return (
      v && v.isTexture && (v = (y.backgroundBlurriness > 0 ? t : e).get(v)), v
    );
  }
  function _(y) {
    let v = !1;
    const S = g(y);
    S === null ? m(o, l) : S && S.isColor && (m(S, 1), (v = !0));
    const R = r.xr.getEnvironmentBlendMode();
    R === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (r.autoClear || v) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil));
  }
  function p(y, v) {
    const S = g(v);
    S && (S.isCubeTexture || S.mapping === Ao)
      ? (u === void 0 &&
          ((u = new qt(
            new la(1, 1, 1),
            new Ni({
              name: "BackgroundCubeMaterial",
              uniforms: ur(In.backgroundCube.uniforms),
              vertexShader: In.backgroundCube.vertexShader,
              fragmentShader: In.backgroundCube.fragmentShader,
              side: Yt,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            })
          )),
          u.geometry.deleteAttribute("normal"),
          u.geometry.deleteAttribute("uv"),
          (u.onBeforeRender = function (R, w, b) {
            this.matrixWorld.copyPosition(b.matrixWorld);
          }),
          Object.defineProperty(u.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          i.update(u)),
        Yi.copy(v.backgroundRotation),
        (Yi.x *= -1),
        (Yi.y *= -1),
        (Yi.z *= -1),
        S.isCubeTexture &&
          S.isRenderTargetTexture === !1 &&
          ((Yi.y *= -1), (Yi.z *= -1)),
        (u.material.uniforms.envMap.value = S),
        (u.material.uniforms.flipEnvMap.value =
          S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1),
        (u.material.uniforms.backgroundBlurriness.value =
          v.backgroundBlurriness),
        (u.material.uniforms.backgroundIntensity.value = v.backgroundIntensity),
        u.material.uniforms.backgroundRotation.value.setFromMatrix4(
          Y0.makeRotationFromEuler(Yi)
        ),
        (u.material.toneMapped = Xe.getTransfer(S.colorSpace) !== st),
        (h !== S || f !== S.version || d !== r.toneMapping) &&
          ((u.material.needsUpdate = !0),
          (h = S),
          (f = S.version),
          (d = r.toneMapping)),
        u.layers.enableAll(),
        y.unshift(u, u.geometry, u.material, 0, 0, null))
      : S &&
        S.isTexture &&
        (c === void 0 &&
          ((c = new qt(
            new wo(2, 2),
            new Ni({
              name: "BackgroundMaterial",
              uniforms: ur(In.background.uniforms),
              vertexShader: In.background.vertexShader,
              fragmentShader: In.background.fragmentShader,
              side: si,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            })
          )),
          c.geometry.deleteAttribute("normal"),
          Object.defineProperty(c.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          i.update(c)),
        (c.material.uniforms.t2D.value = S),
        (c.material.uniforms.backgroundIntensity.value = v.backgroundIntensity),
        (c.material.toneMapped = Xe.getTransfer(S.colorSpace) !== st),
        S.matrixAutoUpdate === !0 && S.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(S.matrix),
        (h !== S || f !== S.version || d !== r.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (h = S),
          (f = S.version),
          (d = r.toneMapping)),
        c.layers.enableAll(),
        y.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(y, v) {
    y.getRGB(Ua, Zf(r)), n.buffers.color.setClear(Ua.r, Ua.g, Ua.b, v, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (y, v = 1) {
      o.set(y), (l = v), m(o, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (y) {
      (l = y), m(o, l);
    },
    render: _,
    addToRenderList: p,
  };
}
function K0(r, e) {
  const t = r.getParameter(r.MAX_VERTEX_ATTRIBS),
    n = {},
    i = f(null);
  let s = i,
    a = !1;
  function o(E, L, k, O, K) {
    let q = !1;
    const G = h(O, k, L);
    s !== G && ((s = G), c(s.object)),
      (q = d(E, O, k, K)),
      q && g(E, O, k, K),
      K !== null && e.update(K, r.ELEMENT_ARRAY_BUFFER),
      (q || a) &&
        ((a = !1),
        S(E, L, k, O),
        K !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(K).buffer));
  }
  function l() {
    return r.createVertexArray();
  }
  function c(E) {
    return r.bindVertexArray(E);
  }
  function u(E) {
    return r.deleteVertexArray(E);
  }
  function h(E, L, k) {
    const O = k.wireframe === !0;
    let K = n[E.id];
    K === void 0 && ((K = {}), (n[E.id] = K));
    let q = K[L.id];
    q === void 0 && ((q = {}), (K[L.id] = q));
    let G = q[O];
    return G === void 0 && ((G = f(l())), (q[O] = G)), G;
  }
  function f(E) {
    const L = [],
      k = [],
      O = [];
    for (let K = 0; K < t; K++) (L[K] = 0), (k[K] = 0), (O[K] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: L,
      enabledAttributes: k,
      attributeDivisors: O,
      object: E,
      attributes: {},
      index: null,
    };
  }
  function d(E, L, k, O) {
    const K = s.attributes,
      q = L.attributes;
    let G = 0;
    const j = k.getAttributes();
    for (const W in j)
      if (j[W].location >= 0) {
        const ae = K[W];
        let ue = q[W];
        if (
          (ue === void 0 &&
            (W === "instanceMatrix" &&
              E.instanceMatrix &&
              (ue = E.instanceMatrix),
            W === "instanceColor" && E.instanceColor && (ue = E.instanceColor)),
          ae === void 0 || ae.attribute !== ue || (ue && ae.data !== ue.data))
        )
          return !0;
        G++;
      }
    return s.attributesNum !== G || s.index !== O;
  }
  function g(E, L, k, O) {
    const K = {},
      q = L.attributes;
    let G = 0;
    const j = k.getAttributes();
    for (const W in j)
      if (j[W].location >= 0) {
        let ae = q[W];
        ae === void 0 &&
          (W === "instanceMatrix" &&
            E.instanceMatrix &&
            (ae = E.instanceMatrix),
          W === "instanceColor" && E.instanceColor && (ae = E.instanceColor));
        const ue = {};
        (ue.attribute = ae),
          ae && ae.data && (ue.data = ae.data),
          (K[W] = ue),
          G++;
      }
    (s.attributes = K), (s.attributesNum = G), (s.index = O);
  }
  function _() {
    const E = s.newAttributes;
    for (let L = 0, k = E.length; L < k; L++) E[L] = 0;
  }
  function p(E) {
    m(E, 0);
  }
  function m(E, L) {
    const k = s.newAttributes,
      O = s.enabledAttributes,
      K = s.attributeDivisors;
    (k[E] = 1),
      O[E] === 0 && (r.enableVertexAttribArray(E), (O[E] = 1)),
      K[E] !== L && (r.vertexAttribDivisor(E, L), (K[E] = L));
  }
  function y() {
    const E = s.newAttributes,
      L = s.enabledAttributes;
    for (let k = 0, O = L.length; k < O; k++)
      L[k] !== E[k] && (r.disableVertexAttribArray(k), (L[k] = 0));
  }
  function v(E, L, k, O, K, q, G) {
    G === !0
      ? r.vertexAttribIPointer(E, L, k, K, q)
      : r.vertexAttribPointer(E, L, k, O, K, q);
  }
  function S(E, L, k, O) {
    _();
    const K = O.attributes,
      q = k.getAttributes(),
      G = L.defaultAttributeValues;
    for (const j in q) {
      const W = q[j];
      if (W.location >= 0) {
        let ie = K[j];
        if (
          (ie === void 0 &&
            (j === "instanceMatrix" &&
              E.instanceMatrix &&
              (ie = E.instanceMatrix),
            j === "instanceColor" && E.instanceColor && (ie = E.instanceColor)),
          ie !== void 0)
        ) {
          const ae = ie.normalized,
            ue = ie.itemSize,
            Ce = e.get(ie);
          if (Ce === void 0) continue;
          const Ve = Ce.buffer,
            Y = Ce.type,
            J = Ce.bytesPerElement,
            de = Y === r.INT || Y === r.UNSIGNED_INT || ie.gpuType === Dc;
          if (ie.isInterleavedBufferAttribute) {
            const he = ie.data,
              Le = he.stride,
              Ne = ie.offset;
            if (he.isInstancedInterleavedBuffer) {
              for (let Be = 0; Be < W.locationSize; Be++)
                m(W.location + Be, he.meshPerAttribute);
              E.isInstancedMesh !== !0 &&
                O._maxInstanceCount === void 0 &&
                (O._maxInstanceCount = he.meshPerAttribute * he.count);
            } else
              for (let Be = 0; Be < W.locationSize; Be++) p(W.location + Be);
            r.bindBuffer(r.ARRAY_BUFFER, Ve);
            for (let Be = 0; Be < W.locationSize; Be++)
              v(
                W.location + Be,
                ue / W.locationSize,
                Y,
                ae,
                Le * J,
                (Ne + (ue / W.locationSize) * Be) * J,
                de
              );
          } else {
            if (ie.isInstancedBufferAttribute) {
              for (let he = 0; he < W.locationSize; he++)
                m(W.location + he, ie.meshPerAttribute);
              E.isInstancedMesh !== !0 &&
                O._maxInstanceCount === void 0 &&
                (O._maxInstanceCount = ie.meshPerAttribute * ie.count);
            } else
              for (let he = 0; he < W.locationSize; he++) p(W.location + he);
            r.bindBuffer(r.ARRAY_BUFFER, Ve);
            for (let he = 0; he < W.locationSize; he++)
              v(
                W.location + he,
                ue / W.locationSize,
                Y,
                ae,
                ue * J,
                (ue / W.locationSize) * he * J,
                de
              );
          }
        } else if (G !== void 0) {
          const ae = G[j];
          if (ae !== void 0)
            switch (ae.length) {
              case 2:
                r.vertexAttrib2fv(W.location, ae);
                break;
              case 3:
                r.vertexAttrib3fv(W.location, ae);
                break;
              case 4:
                r.vertexAttrib4fv(W.location, ae);
                break;
              default:
                r.vertexAttrib1fv(W.location, ae);
            }
        }
      }
    }
    y();
  }
  function R() {
    P();
    for (const E in n) {
      const L = n[E];
      for (const k in L) {
        const O = L[k];
        for (const K in O) u(O[K].object), delete O[K];
        delete L[k];
      }
      delete n[E];
    }
  }
  function w(E) {
    if (n[E.id] === void 0) return;
    const L = n[E.id];
    for (const k in L) {
      const O = L[k];
      for (const K in O) u(O[K].object), delete O[K];
      delete L[k];
    }
    delete n[E.id];
  }
  function b(E) {
    for (const L in n) {
      const k = n[L];
      if (k[E.id] === void 0) continue;
      const O = k[E.id];
      for (const K in O) u(O[K].object), delete O[K];
      delete k[E.id];
    }
  }
  function P() {
    M(), (a = !0), s !== i && ((s = i), c(s.object));
  }
  function M() {
    (i.geometry = null), (i.program = null), (i.wireframe = !1);
  }
  return {
    setup: o,
    reset: P,
    resetDefaultState: M,
    dispose: R,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: b,
    initAttributes: _,
    enableAttribute: p,
    disableUnusedAttributes: y,
  };
}
function Z0(r, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function s(c, u) {
    r.drawArrays(n, c, u), t.update(u, n, 1);
  }
  function a(c, u, h) {
    h !== 0 && (r.drawArraysInstanced(n, c, u, h), t.update(u, n, h));
  }
  function o(c, u, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, h);
    let d = 0;
    for (let g = 0; g < h; g++) d += u[g];
    t.update(d, n, 1);
  }
  function l(c, u, h, f) {
    if (h === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null) for (let g = 0; g < c.length; g++) a(c[g], u[g], f[g]);
    else {
      d.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, f, 0, h);
      let g = 0;
      for (let _ = 0; _ < h; _++) g += u[_];
      for (let _ = 0; _ < f.length; _++) t.update(g, n, f[_]);
    }
  }
  (this.setMode = i),
    (this.render = s),
    (this.renderInstances = a),
    (this.renderMultiDraw = o),
    (this.renderMultiDrawInstances = l);
}
function $0(r, e, t, n) {
  let i;
  function s() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      i = r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function a(w) {
    return !(
      w !== _n &&
      n.convert(w) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(w) {
    const b =
      w === oa &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      w !== ri &&
      n.convert(w) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) &&
      w !== wn &&
      !b
    );
  }
  function l(w) {
    if (w === "highp") {
      if (
        r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision >
          0 &&
        r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      w = "mediump";
    }
    return w === "mediump" &&
      r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision >
        0 &&
      r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const u = l(c);
  u !== c &&
    (console.warn(
      "THREE.WebGLRenderer:",
      c,
      "not supported, using",
      u,
      "instead."
    ),
    (c = u));
  const h = t.logarithmicDepthBuffer === !0,
    f = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),
    d = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    g = r.getParameter(r.MAX_TEXTURE_SIZE),
    _ = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),
    p = r.getParameter(r.MAX_VERTEX_ATTRIBS),
    m = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),
    y = r.getParameter(r.MAX_VARYING_VECTORS),
    v = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),
    S = d > 0,
    R = r.getParameter(r.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: h,
    maxTextures: f,
    maxVertexTextures: d,
    maxTextureSize: g,
    maxCubemapSize: _,
    maxAttributes: p,
    maxVertexUniforms: m,
    maxVaryings: y,
    maxFragmentUniforms: v,
    vertexTextures: S,
    maxSamples: R,
  };
}
function J0(r) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    s = !1;
  const a = new vi(),
    o = new Fe(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (h, f) {
      const d = h.length !== 0 || f || n !== 0 || i;
      return (i = f), (n = h.length), d;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (h, f) {
      t = u(h, f, 0);
    }),
    (this.setState = function (h, f, d) {
      const g = h.clippingPlanes,
        _ = h.clipIntersection,
        p = h.clipShadows,
        m = r.get(h);
      if (!i || g === null || g.length === 0 || (s && !p)) s ? u(null) : c();
      else {
        const y = s ? 0 : n,
          v = y * 4;
        let S = m.clippingState || null;
        (l.value = S), (S = u(g, f, v, d));
        for (let R = 0; R !== v; ++R) S[R] = t[R];
        (m.clippingState = S),
          (this.numIntersection = _ ? this.numPlanes : 0),
          (this.numPlanes += y);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(h, f, d, g) {
    const _ = h !== null ? h.length : 0;
    let p = null;
    if (_ !== 0) {
      if (((p = l.value), g !== !0 || p === null)) {
        const m = d + _ * 4,
          y = f.matrixWorldInverse;
        o.getNormalMatrix(y),
          (p === null || p.length < m) && (p = new Float32Array(m));
        for (let v = 0, S = d; v !== _; ++v, S += 4)
          a.copy(h[v]).applyMatrix4(y, o),
            a.normal.toArray(p, S),
            (p[S + 3] = a.constant);
      }
      (l.value = p), (l.needsUpdate = !0);
    }
    return (e.numPlanes = _), (e.numIntersection = 0), p;
  }
}
function Q0(r) {
  let e = new WeakMap();
  function t(a, o) {
    return o === Il ? (a.mapping = sr) : o === Dl && (a.mapping = rr), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Il || o === Dl)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new u_(l.height);
            return (
              c.fromEquirectangularTexture(r, a),
              e.set(a, c),
              a.addEventListener("dispose", i),
              t(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class Xc extends $f {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = s),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let s = n - e,
      a = n + e,
      o = i + t,
      l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (a = s + c * this.view.width),
        (o -= u * this.view.offsetY),
        (l = o - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      s,
      a,
      o,
      l,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const qs = 4,
  eh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  rs = 20,
  nl = new Xc(),
  th = new De();
let il = null,
  sl = 0,
  rl = 0,
  al = !1;
const ns = (1 + Math.sqrt(5)) / 2,
  zs = 1 / ns,
  nh = [
    new D(-ns, zs, 0),
    new D(ns, zs, 0),
    new D(-zs, 0, ns),
    new D(zs, 0, ns),
    new D(0, ns, -zs),
    new D(0, ns, zs),
    new D(-1, 1, -1),
    new D(1, 1, -1),
    new D(-1, 1, 1),
    new D(1, 1, 1),
  ];
class ih {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (il = this._renderer.getRenderTarget()),
      (sl = this._renderer.getActiveCubeFace()),
      (rl = this._renderer.getActiveMipmapLevel()),
      (al = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = ah()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = rh()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(il, sl, rl),
      (this._renderer.xr.enabled = al),
      (e.scissorTest = !1),
      Oa(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === sr || e.mapping === rr
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (il = this._renderer.getRenderTarget()),
      (sl = this._renderer.getActiveCubeFace()),
      (rl = this._renderer.getActiveMipmapLevel()),
      (al = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: rn,
        minFilter: rn,
        generateMipmaps: !1,
        type: oa,
        format: _n,
        colorSpace: It,
        depthBuffer: !1,
      },
      i = sh(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = sh(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = ex(s)),
        (this._blurMaterial = tx(s, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new qt(this._lodPlanes[0], e);
    this._renderer.compile(t, nl);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Ht(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      h = u.autoClear,
      f = u.toneMapping;
    u.getClearColor(th), (u.toneMapping = Ci), (u.autoClear = !1);
    const d = new Si({
        name: "PMREM.Background",
        side: Yt,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new qt(new la(), d);
    let _ = !1;
    const p = e.background;
    p
      ? p.isColor && (d.color.copy(p), (e.background = null), (_ = !0))
      : (d.color.copy(th), (_ = !0));
    for (let m = 0; m < 6; m++) {
      const y = m % 3;
      y === 0
        ? (o.up.set(0, l[m], 0), o.lookAt(c[m], 0, 0))
        : y === 1
        ? (o.up.set(0, 0, l[m]), o.lookAt(0, c[m], 0))
        : (o.up.set(0, l[m], 0), o.lookAt(0, 0, c[m]));
      const v = this._cubeSize;
      Oa(i, y * v, m > 2 ? v : 0, v, v),
        u.setRenderTarget(i),
        _ && u.render(g, o),
        u.render(e, o);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (u.toneMapping = f),
      (u.autoClear = h),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === sr || e.mapping === rr;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = ah()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = rh());
    const s = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new qt(this._lodPlanes[0], s),
      o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Oa(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, nl);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let s = 1; s < i; s++) {
      const a = Math.sqrt(
          this._sigmas[s] * this._sigmas[s] -
            this._sigmas[s - 1] * this._sigmas[s - 1]
        ),
        o = nh[(i - s - 1) % nh.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", s),
      this._halfBlur(a, e, n, n, i, "longitudinal", s);
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const u = 3,
      h = new qt(this._lodPlanes[i], c),
      f = c.uniforms,
      d = this._sizeLods[n] - 1,
      g = isFinite(s) ? Math.PI / (2 * d) : (2 * Math.PI) / (2 * rs - 1),
      _ = s / g,
      p = isFinite(s) ? 1 + Math.floor(u * _) : rs;
    p > rs &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rs}`
      );
    const m = [];
    let y = 0;
    for (let b = 0; b < rs; ++b) {
      const P = b / _,
        M = Math.exp((-P * P) / 2);
      m.push(M), b === 0 ? (y += M) : b < p && (y += 2 * M);
    }
    for (let b = 0; b < m.length; b++) m[b] = m[b] / y;
    (f.envMap.value = e.texture),
      (f.samples.value = p),
      (f.weights.value = m),
      (f.latitudinal.value = a === "latitudinal"),
      o && (f.poleAxis.value = o);
    const { _lodMax: v } = this;
    (f.dTheta.value = g), (f.mipInt.value = v - n);
    const S = this._sizeLods[i],
      R = 3 * S * (i > v - qs ? i - v + qs : 0),
      w = 4 * (this._cubeSize - S);
    Oa(t, R, w, 3 * S, 2 * S), l.setRenderTarget(t), l.render(h, nl);
  }
}
function ex(r) {
  const e = [],
    t = [],
    n = [];
  let i = r;
  const s = r - qs + 1 + eh.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > r - qs ? (l = eh[a - r + qs - 1]) : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2),
      u = -c,
      h = 1 + c,
      f = [u, u, h, u, h, h, u, u, h, h, u, h],
      d = 6,
      g = 6,
      _ = 3,
      p = 2,
      m = 1,
      y = new Float32Array(_ * g * d),
      v = new Float32Array(p * g * d),
      S = new Float32Array(m * g * d);
    for (let w = 0; w < d; w++) {
      const b = ((w % 3) * 2) / 3 - 1,
        P = w > 2 ? 0 : -1,
        M = [
          b,
          P,
          0,
          b + 2 / 3,
          P,
          0,
          b + 2 / 3,
          P + 1,
          0,
          b,
          P,
          0,
          b + 2 / 3,
          P + 1,
          0,
          b,
          P + 1,
          0,
        ];
      y.set(M, _ * g * w), v.set(f, p * g * w);
      const E = [w, w, w, w, w, w];
      S.set(E, m * g * w);
    }
    const R = new Pn();
    R.setAttribute("position", new Xt(y, _)),
      R.setAttribute("uv", new Xt(v, p)),
      R.setAttribute("faceIndex", new Xt(S, m)),
      e.push(R),
      i > qs && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function sh(r, e, t) {
  const n = new _s(r, e, t);
  return (
    (n.texture.mapping = Ao),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function Oa(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function tx(r, e, t) {
  const n = new Float32Array(rs),
    i = new D(0, 1, 0);
  return new Ni({
    name: "SphericalGaussianBlur",
    defines: {
      n: rs,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: qc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Ri,
    depthTest: !1,
    depthWrite: !1,
  });
}
function rh() {
  return new Ni({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: qc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Ri,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ah() {
  return new Ni({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: qc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Ri,
    depthTest: !1,
    depthWrite: !1,
  });
}
function qc() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function nx(r) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping,
        c = l === Il || l === Dl,
        u = l === sr || l === rr;
      if (c || u) {
        let h = e.get(o);
        const f = h !== void 0 ? h.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return (
            t === null && (t = new ih(r)),
            (h = c ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h)),
            (h.texture.pmremVersion = o.pmremVersion),
            e.set(o, h),
            h.texture
          );
        if (h !== void 0) return h.texture;
        {
          const d = o.image;
          return (c && d && d.height > 0) || (u && d && i(d))
            ? (t === null && (t = new ih(r)),
              (h = c ? t.fromEquirectangular(o) : t.fromCubemap(o)),
              (h.texture.pmremVersion = o.pmremVersion),
              e.set(o, h),
              o.addEventListener("dispose", s),
              h.texture)
            : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function ix(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          r.getExtension("WEBGL_depth_texture") ||
          r.getExtension("MOZ_WEBGL_depth_texture") ||
          r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          r.getExtension("EXT_texture_filter_anisotropic") ||
          r.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          r.getExtension("WEBGL_compressed_texture_s3tc") ||
          r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          r.getExtension("WEBGL_compressed_texture_pvrtc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          Zs("THREE.WebGLRenderer: " + n + " extension not supported."),
        i
      );
    },
  };
}
function sx(r, e, t, n) {
  const i = {},
    s = new WeakMap();
  function a(h) {
    const f = h.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    for (const g in f.morphAttributes) {
      const _ = f.morphAttributes[g];
      for (let p = 0, m = _.length; p < m; p++) e.remove(_[p]);
    }
    f.removeEventListener("dispose", a), delete i[f.id];
    const d = s.get(f);
    d && (e.remove(d), s.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(h, f) {
    return (
      i[f.id] === !0 ||
        (f.addEventListener("dispose", a),
        (i[f.id] = !0),
        t.memory.geometries++),
      f
    );
  }
  function l(h) {
    const f = h.attributes;
    for (const g in f) e.update(f[g], r.ARRAY_BUFFER);
    const d = h.morphAttributes;
    for (const g in d) {
      const _ = d[g];
      for (let p = 0, m = _.length; p < m; p++) e.update(_[p], r.ARRAY_BUFFER);
    }
  }
  function c(h) {
    const f = [],
      d = h.index,
      g = h.attributes.position;
    let _ = 0;
    if (d !== null) {
      const y = d.array;
      _ = d.version;
      for (let v = 0, S = y.length; v < S; v += 3) {
        const R = y[v + 0],
          w = y[v + 1],
          b = y[v + 2];
        f.push(R, w, w, b, b, R);
      }
    } else if (g !== void 0) {
      const y = g.array;
      _ = g.version;
      for (let v = 0, S = y.length / 3 - 1; v < S; v += 3) {
        const R = v + 0,
          w = v + 1,
          b = v + 2;
        f.push(R, w, w, b, b, R);
      }
    } else return;
    const p = new (Wf(f) ? Kf : jf)(f, 1);
    p.version = _;
    const m = s.get(h);
    m && e.remove(m), s.set(h, p);
  }
  function u(h) {
    const f = s.get(h);
    if (f) {
      const d = h.index;
      d !== null && f.version < d.version && c(h);
    } else c(h);
    return s.get(h);
  }
  return { get: o, update: l, getWireframeAttribute: u };
}
function rx(r, e, t) {
  let n;
  function i(f) {
    n = f;
  }
  let s, a;
  function o(f) {
    (s = f.type), (a = f.bytesPerElement);
  }
  function l(f, d) {
    r.drawElements(n, d, s, f * a), t.update(d, n, 1);
  }
  function c(f, d, g) {
    g !== 0 && (r.drawElementsInstanced(n, d, s, f * a, g), t.update(d, n, g));
  }
  function u(f, d, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, d, 0, s, f, 0, g);
    let p = 0;
    for (let m = 0; m < g; m++) p += d[m];
    t.update(p, n, 1);
  }
  function h(f, d, g, _) {
    if (g === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let m = 0; m < f.length; m++) c(f[m] / a, d[m], _[m]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, d, 0, s, f, 0, _, 0, g);
      let m = 0;
      for (let y = 0; y < g; y++) m += d[y];
      for (let y = 0; y < _.length; y++) t.update(m, n, _[y]);
    }
  }
  (this.setMode = i),
    (this.setIndex = o),
    (this.render = l),
    (this.renderInstances = c),
    (this.renderMultiDraw = u),
    (this.renderMultiDrawInstances = h);
}
function ax(r) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch ((t.calls++, a)) {
      case r.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case r.LINES:
        t.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += o * s;
        break;
      case r.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function ox(r, e, t) {
  const n = new WeakMap(),
    i = new Je();
  function s(a, o, l) {
    const c = a.morphTargetInfluences,
      u =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      h = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== h) {
      let E = function () {
        P.dispose(), n.delete(o), o.removeEventListener("dispose", E);
      };
      var d = E;
      f !== void 0 && f.texture.dispose();
      const g = o.morphAttributes.position !== void 0,
        _ = o.morphAttributes.normal !== void 0,
        p = o.morphAttributes.color !== void 0,
        m = o.morphAttributes.position || [],
        y = o.morphAttributes.normal || [],
        v = o.morphAttributes.color || [];
      let S = 0;
      g === !0 && (S = 1), _ === !0 && (S = 2), p === !0 && (S = 3);
      let R = o.attributes.position.count * S,
        w = 1;
      R > e.maxTextureSize &&
        ((w = Math.ceil(R / e.maxTextureSize)), (R = e.maxTextureSize));
      const b = new Float32Array(R * w * 4 * h),
        P = new qf(b, R, w, h);
      (P.type = wn), (P.needsUpdate = !0);
      const M = S * 4;
      for (let L = 0; L < h; L++) {
        const k = m[L],
          O = y[L],
          K = v[L],
          q = R * w * 4 * L;
        for (let G = 0; G < k.count; G++) {
          const j = G * M;
          g === !0 &&
            (i.fromBufferAttribute(k, G),
            (b[q + j + 0] = i.x),
            (b[q + j + 1] = i.y),
            (b[q + j + 2] = i.z),
            (b[q + j + 3] = 0)),
            _ === !0 &&
              (i.fromBufferAttribute(O, G),
              (b[q + j + 4] = i.x),
              (b[q + j + 5] = i.y),
              (b[q + j + 6] = i.z),
              (b[q + j + 7] = 0)),
            p === !0 &&
              (i.fromBufferAttribute(K, G),
              (b[q + j + 8] = i.x),
              (b[q + j + 9] = i.y),
              (b[q + j + 10] = i.z),
              (b[q + j + 11] = K.itemSize === 4 ? i.w : 1));
        }
      }
      (f = { count: h, texture: P, size: new Me(R, w) }),
        n.set(o, f),
        o.addEventListener("dispose", E);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(r, "morphTexture", a.morphTexture, t);
    else {
      let g = 0;
      for (let p = 0; p < c.length; p++) g += c[p];
      const _ = o.morphTargetsRelative ? 1 : 1 - g;
      l.getUniforms().setValue(r, "morphTargetBaseInfluence", _),
        l.getUniforms().setValue(r, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(r, "morphTargetsTexture", f.texture, t),
      l.getUniforms().setValue(r, "morphTargetsTextureSize", f.size);
  }
  return { update: s };
}
function lx(r, e, t, n) {
  let i = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      u = l.geometry,
      h = e.get(l, u);
    if (
      (i.get(h) !== c && (e.update(h), i.set(h, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", o) === !1 &&
          l.addEventListener("dispose", o),
        i.get(l) !== c &&
          (t.update(l.instanceMatrix, r.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER),
          i.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const f = l.skeleton;
      i.get(f) !== c && (f.update(), i.set(f, c));
    }
    return h;
  }
  function a() {
    i = new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: a };
}
class ed extends bt {
  constructor(e, t, n, i, s, a, o, l, c, u = Ks) {
    if (u !== Ks && u !== lr)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && u === Ks && (n = ms),
      n === void 0 && u === lr && (n = or),
      super(null, i, s, a, o, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : Gt),
      (this.minFilter = l !== void 0 ? l : Gt),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
const td = new bt(),
  oh = new ed(1, 1),
  nd = new qf(),
  id = new jm(),
  sd = new Jf(),
  lh = [],
  ch = [],
  uh = new Float32Array(16),
  hh = new Float32Array(9),
  fh = new Float32Array(4);
function Mr(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = lh[i];
  if ((s === void 0 && ((s = new Float32Array(i)), (lh[i] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), r[a].toArray(s, o);
  }
  return s;
}
function St(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
function Tt(r, e) {
  for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}
function Ro(r, e) {
  let t = ch[e];
  t === void 0 && ((t = new Int32Array(e)), (ch[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
  return t;
}
function cx(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), (t[0] = e));
}
function ux(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (St(t, e)) return;
    r.uniform2fv(this.addr, e), Tt(t, e);
  }
}
function hx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (r.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (St(t, e)) return;
    r.uniform3fv(this.addr, e), Tt(t, e);
  }
}
function fx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (St(t, e)) return;
    r.uniform4fv(this.addr, e), Tt(t, e);
  }
}
function dx(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (St(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (St(t, n)) return;
    fh.set(n), r.uniformMatrix2fv(this.addr, !1, fh), Tt(t, n);
  }
}
function px(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (St(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (St(t, n)) return;
    hh.set(n), r.uniformMatrix3fv(this.addr, !1, hh), Tt(t, n);
  }
}
function mx(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (St(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), Tt(t, e);
  } else {
    if (St(t, n)) return;
    uh.set(n), r.uniformMatrix4fv(this.addr, !1, uh), Tt(t, n);
  }
}
function _x(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), (t[0] = e));
}
function gx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (St(t, e)) return;
    r.uniform2iv(this.addr, e), Tt(t, e);
  }
}
function xx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (St(t, e)) return;
    r.uniform3iv(this.addr, e), Tt(t, e);
  }
}
function vx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (St(t, e)) return;
    r.uniform4iv(this.addr, e), Tt(t, e);
  }
}
function yx(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), (t[0] = e));
}
function Mx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (St(t, e)) return;
    r.uniform2uiv(this.addr, e), Tt(t, e);
  }
}
function Sx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (St(t, e)) return;
    r.uniform3uiv(this.addr, e), Tt(t, e);
  }
}
function Tx(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (St(t, e)) return;
    r.uniform4uiv(this.addr, e), Tt(t, e);
  }
}
function Ex(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i));
  let s;
  this.type === r.SAMPLER_2D_SHADOW
    ? ((oh.compareFunction = Vf), (s = oh))
    : (s = td),
    t.setTexture2D(e || s, i);
}
function Ax(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || id, i);
}
function bx(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || sd, i);
}
function wx(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || nd, i);
}
function Rx(r) {
  switch (r) {
    case 5126:
      return cx;
    case 35664:
      return ux;
    case 35665:
      return hx;
    case 35666:
      return fx;
    case 35674:
      return dx;
    case 35675:
      return px;
    case 35676:
      return mx;
    case 5124:
    case 35670:
      return _x;
    case 35667:
    case 35671:
      return gx;
    case 35668:
    case 35672:
      return xx;
    case 35669:
    case 35673:
      return vx;
    case 5125:
      return yx;
    case 36294:
      return Mx;
    case 36295:
      return Sx;
    case 36296:
      return Tx;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Ex;
    case 35679:
    case 36299:
    case 36307:
      return Ax;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return bx;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return wx;
  }
}
function Cx(r, e) {
  r.uniform1fv(this.addr, e);
}
function Px(r, e) {
  const t = Mr(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function Lx(r, e) {
  const t = Mr(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function Ix(r, e) {
  const t = Mr(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function Dx(r, e) {
  const t = Mr(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function Nx(r, e) {
  const t = Mr(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function Ux(r, e) {
  const t = Mr(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function Ox(r, e) {
  r.uniform1iv(this.addr, e);
}
function Fx(r, e) {
  r.uniform2iv(this.addr, e);
}
function Bx(r, e) {
  r.uniform3iv(this.addr, e);
}
function kx(r, e) {
  r.uniform4iv(this.addr, e);
}
function zx(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Hx(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Vx(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Gx(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Wx(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Ro(t, i);
  St(n, s) || (r.uniform1iv(this.addr, s), Tt(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || td, s[a]);
}
function Xx(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Ro(t, i);
  St(n, s) || (r.uniform1iv(this.addr, s), Tt(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || id, s[a]);
}
function qx(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Ro(t, i);
  St(n, s) || (r.uniform1iv(this.addr, s), Tt(n, s));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || sd, s[a]);
}
function Yx(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Ro(t, i);
  St(n, s) || (r.uniform1iv(this.addr, s), Tt(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || nd, s[a]);
}
function jx(r) {
  switch (r) {
    case 5126:
      return Cx;
    case 35664:
      return Px;
    case 35665:
      return Lx;
    case 35666:
      return Ix;
    case 35674:
      return Dx;
    case 35675:
      return Nx;
    case 35676:
      return Ux;
    case 5124:
    case 35670:
      return Ox;
    case 35667:
    case 35671:
      return Fx;
    case 35668:
    case 35672:
      return Bx;
    case 35669:
    case 35673:
      return kx;
    case 5125:
      return zx;
    case 36294:
      return Hx;
    case 36295:
      return Vx;
    case 36296:
      return Gx;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Wx;
    case 35679:
    case 36299:
    case 36307:
      return Xx;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return qx;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Yx;
  }
}
class Kx {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = Rx(t.type));
  }
}
class Zx {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = jx(t.type));
  }
}
class $x {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ol = /(\w+)(\])?(\[|\.)?/g;
function dh(r, e) {
  r.seq.push(e), (r.map[e.id] = e);
}
function Jx(r, e, t) {
  const n = r.name,
    i = n.length;
  for (ol.lastIndex = 0; ; ) {
    const s = ol.exec(n),
      a = ol.lastIndex;
    let o = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (o = o | 0), c === void 0 || (c === "[" && a + 2 === i))) {
      dh(t, c === void 0 ? new Kx(o, r, e) : new Zx(o, r, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && ((h = new $x(o)), dh(t, h)), (t = h);
    }
  }
}
class no {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i),
        a = e.getUniformLocation(t, s.name);
      Jx(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s],
        l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function ph(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
const Qx = 37297;
let ev = 0;
function tv(r, e) {
  const t = r.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function nv(r) {
  const e = Xe.getPrimaries(Xe.workingColorSpace),
    t = Xe.getPrimaries(r);
  let n;
  switch (
    (e === t
      ? (n = "")
      : e === ho && t === uo
      ? (n = "LinearDisplayP3ToLinearSRGB")
      : e === uo && t === ho && (n = "LinearSRGBToLinearDisplayP3"),
    r)
  ) {
    case It:
    case bo:
      return [n, "LinearTransferOETF"];
    case zt:
    case Hc:
      return [n, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", r),
        [n, "LinearTransferOETF"]
      );
  }
}
function mh(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS),
    i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      tv(r.getShaderSource(e), a)
    );
  } else return i;
}
function iv(r, e) {
  const t = nv(e);
  return `vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function sv(r, e) {
  let t;
  switch (e) {
    case sm:
      t = "Linear";
      break;
    case rm:
      t = "Reinhard";
      break;
    case am:
      t = "OptimizedCineon";
      break;
    case om:
      t = "ACESFilmic";
      break;
    case cm:
      t = "AgX";
      break;
    case um:
      t = "Neutral";
      break;
    case lm:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
const Fa = new D();
function rv() {
  Xe.getLuminanceCoefficients(Fa);
  const r = Fa.x.toFixed(4),
    e = Fa.y.toFixed(4),
    t = Fa.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function av(r) {
  return [
    r.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(Br).join(`
`);
}
function ov(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function lv(r, e) {
  const t = {},
    n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i),
      a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2),
      s.type === r.FLOAT_MAT3 && (o = 3),
      s.type === r.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: s.type,
        location: r.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function Br(r) {
  return r !== "";
}
function _h(r, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function gh(r, e) {
  return r
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const cv = /^[ \t]*#include +<([\w\d./]+)>/gm;
function lc(r) {
  return r.replace(cv, hv);
}
const uv = new Map();
function hv(r, e) {
  let t = Oe[e];
  if (t === void 0) {
    const n = uv.get(e);
    if (n !== void 0)
      (t = Oe[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n
        );
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return lc(t);
}
const fv =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function xh(r) {
  return r.replace(fv, dv);
}
function dv(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function vh(r) {
  let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;
  return (
    r.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : r.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : r.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function pv(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    r.shadowMapType === bf
      ? (e = "SHADOWMAP_TYPE_PCF")
      : r.shadowMapType === Pp
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : r.shadowMapType === Jn && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function mv(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case sr:
      case rr:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ao:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function _v(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case rr:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function gv(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case wf:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case nm:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case im:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function xv(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function vv(r, e, t, n) {
  const i = r.getContext(),
    s = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const l = pv(t),
    c = mv(t),
    u = _v(t),
    h = gv(t),
    f = xv(t),
    d = av(t),
    g = ov(s),
    _ = i.createProgram();
  let p,
    m,
    y = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((p = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
      ].filter(Br).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (m = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
      ].filter(Br).join(`
`)),
      m.length > 0 &&
        (m += `
`))
    : ((p = [
        vh(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Br).join(`
`)),
      (m = [
        vh(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + h : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor || t.batchingColor
          ? "#define USE_COLOR"
          : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Ci ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Ci ? Oe.tonemapping_pars_fragment : "",
        t.toneMapping !== Ci ? sv("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Oe.colorspace_pars_fragment,
        iv("linearToOutputTexel", t.outputColorSpace),
        rv(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Br).join(`
`))),
    (a = lc(a)),
    (a = _h(a, t)),
    (a = gh(a, t)),
    (o = lc(o)),
    (o = _h(o, t)),
    (o = gh(o, t)),
    (a = xh(a)),
    (o = xh(o)),
    t.isRawShaderMaterial !== !0 &&
      ((y = `#version 300 es
`),
      (p =
        [
          d,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        p),
      (m =
        [
          "#define varying in",
          t.glslVersion === Du
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Du ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        m));
  const v = y + p + a,
    S = y + m + o,
    R = ph(i, i.VERTEX_SHADER, v),
    w = ph(i, i.FRAGMENT_SHADER, S);
  i.attachShader(_, R),
    i.attachShader(_, w),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(_, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"),
    i.linkProgram(_);
  function b(L) {
    if (r.debug.checkShaderErrors) {
      const k = i.getProgramInfoLog(_).trim(),
        O = i.getShaderInfoLog(R).trim(),
        K = i.getShaderInfoLog(w).trim();
      let q = !0,
        G = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if (((q = !1), typeof r.debug.onShaderError == "function"))
          r.debug.onShaderError(i, _, R, w);
        else {
          const j = mh(i, R, "vertex"),
            W = mh(i, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              i.getError() +
              " - VALIDATE_STATUS " +
              i.getProgramParameter(_, i.VALIDATE_STATUS) +
              `

Material Name: ` +
              L.name +
              `
Material Type: ` +
              L.type +
              `

Program Info Log: ` +
              k +
              `
` +
              j +
              `
` +
              W
          );
        }
      else
        k !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", k)
          : (O === "" || K === "") && (G = !1);
      G &&
        (L.diagnostics = {
          runnable: q,
          programLog: k,
          vertexShader: { log: O, prefix: p },
          fragmentShader: { log: K, prefix: m },
        });
    }
    i.deleteShader(R), i.deleteShader(w), (P = new no(i, _)), (M = lv(i, _));
  }
  let P;
  this.getUniforms = function () {
    return P === void 0 && b(this), P;
  };
  let M;
  this.getAttributes = function () {
    return M === void 0 && b(this), M;
  };
  let E = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return E === !1 && (E = i.getProgramParameter(_, Qx)), E;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(_),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = ev++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = _),
    (this.vertexShader = R),
    (this.fragmentShader = w),
    this
  );
}
let yv = 0;
class Mv {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      s = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(i) === !1 && (a.add(i), i.usedTimes++),
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Sv(e)), t.set(e, n)), n;
  }
}
class Sv {
  constructor(e) {
    (this.id = yv++), (this.code = e), (this.usedTimes = 0);
  }
}
function Tv(r, e, t, n, i, s, a) {
  const o = new Gc(),
    l = new Mv(),
    c = new Set(),
    u = [],
    h = i.logarithmicDepthBuffer,
    f = i.vertexTextures;
  let d = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function _(M) {
    return c.add(M), M === 0 ? "uv" : `uv${M}`;
  }
  function p(M, E, L, k, O) {
    const K = k.fog,
      q = O.geometry,
      G = M.isMeshStandardMaterial ? k.environment : null,
      j = (M.isMeshStandardMaterial ? t : e).get(M.envMap || G),
      W = j && j.mapping === Ao ? j.image.height : null,
      ie = g[M.type];
    M.precision !== null &&
      ((d = i.getMaxPrecision(M.precision)),
      d !== M.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          M.precision,
          "not supported, using",
          d,
          "instead."
        ));
    const ae =
        q.morphAttributes.position ||
        q.morphAttributes.normal ||
        q.morphAttributes.color,
      ue = ae !== void 0 ? ae.length : 0;
    let Ce = 0;
    q.morphAttributes.position !== void 0 && (Ce = 1),
      q.morphAttributes.normal !== void 0 && (Ce = 2),
      q.morphAttributes.color !== void 0 && (Ce = 3);
    let Ve, Y, J, de;
    if (ie) {
      const Ge = In[ie];
      (Ve = Ge.vertexShader), (Y = Ge.fragmentShader);
    } else
      (Ve = M.vertexShader),
        (Y = M.fragmentShader),
        l.update(M),
        (J = l.getVertexShaderID(M)),
        (de = l.getFragmentShaderID(M));
    const he = r.getRenderTarget(),
      Le = O.isInstancedMesh === !0,
      Ne = O.isBatchedMesh === !0,
      Be = !!M.map,
      it = !!M.matcap,
      I = !!j,
      ct = !!M.aoMap,
      We = !!M.lightMap,
      qe = !!M.bumpMap,
      _e = !!M.normalMap,
      ut = !!M.displacementMap,
      we = !!M.emissiveMap,
      Pe = !!M.metalnessMap,
      C = !!M.roughnessMap,
      T = M.anisotropy > 0,
      V = M.clearcoat > 0,
      $ = M.dispersion > 0,
      ee = M.iridescence > 0,
      Z = M.sheen > 0,
      ve = M.transmission > 0,
      se = T && !!M.anisotropyMap,
      le = V && !!M.clearcoatMap,
      Ie = V && !!M.clearcoatNormalMap,
      te = V && !!M.clearcoatRoughnessMap,
      ce = ee && !!M.iridescenceMap,
      ze = ee && !!M.iridescenceThicknessMap,
      Se = Z && !!M.sheenColorMap,
      fe = Z && !!M.sheenRoughnessMap,
      Ee = !!M.specularMap,
      Re = !!M.specularColorMap,
      rt = !!M.specularIntensityMap,
      x = ve && !!M.transmissionMap,
      F = ve && !!M.thicknessMap,
      B = !!M.gradientMap,
      X = !!M.alphaMap,
      Q = M.alphaTest > 0,
      ge = !!M.alphaHash,
      Ae = !!M.extensions;
    let pt = Ci;
    M.toneMapped &&
      (he === null || he.isXRRenderTarget === !0) &&
      (pt = r.toneMapping);
    const yt = {
      shaderID: ie,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: Ve,
      fragmentShader: Y,
      defines: M.defines,
      customVertexShaderID: J,
      customFragmentShaderID: de,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: d,
      batching: Ne,
      batchingColor: Ne && O._colorsTexture !== null,
      instancing: Le,
      instancingColor: Le && O.instanceColor !== null,
      instancingMorph: Le && O.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace:
        he === null
          ? r.outputColorSpace
          : he.isXRRenderTarget === !0
          ? he.texture.colorSpace
          : It,
      alphaToCoverage: !!M.alphaToCoverage,
      map: Be,
      matcap: it,
      envMap: I,
      envMapMode: I && j.mapping,
      envMapCubeUVHeight: W,
      aoMap: ct,
      lightMap: We,
      bumpMap: qe,
      normalMap: _e,
      displacementMap: f && ut,
      emissiveMap: we,
      normalMapObjectSpace: _e && M.normalMapType === gm,
      normalMapTangentSpace: _e && M.normalMapType === Hf,
      metalnessMap: Pe,
      roughnessMap: C,
      anisotropy: T,
      anisotropyMap: se,
      clearcoat: V,
      clearcoatMap: le,
      clearcoatNormalMap: Ie,
      clearcoatRoughnessMap: te,
      dispersion: $,
      iridescence: ee,
      iridescenceMap: ce,
      iridescenceThicknessMap: ze,
      sheen: Z,
      sheenColorMap: Se,
      sheenRoughnessMap: fe,
      specularMap: Ee,
      specularColorMap: Re,
      specularIntensityMap: rt,
      transmission: ve,
      transmissionMap: x,
      thicknessMap: F,
      gradientMap: B,
      opaque:
        M.transparent === !1 && M.blending === ls && M.alphaToCoverage === !1,
      alphaMap: X,
      alphaTest: Q,
      alphaHash: ge,
      combine: M.combine,
      mapUv: Be && _(M.map.channel),
      aoMapUv: ct && _(M.aoMap.channel),
      lightMapUv: We && _(M.lightMap.channel),
      bumpMapUv: qe && _(M.bumpMap.channel),
      normalMapUv: _e && _(M.normalMap.channel),
      displacementMapUv: ut && _(M.displacementMap.channel),
      emissiveMapUv: we && _(M.emissiveMap.channel),
      metalnessMapUv: Pe && _(M.metalnessMap.channel),
      roughnessMapUv: C && _(M.roughnessMap.channel),
      anisotropyMapUv: se && _(M.anisotropyMap.channel),
      clearcoatMapUv: le && _(M.clearcoatMap.channel),
      clearcoatNormalMapUv: Ie && _(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: te && _(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ce && _(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: ze && _(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: Se && _(M.sheenColorMap.channel),
      sheenRoughnessMapUv: fe && _(M.sheenRoughnessMap.channel),
      specularMapUv: Ee && _(M.specularMap.channel),
      specularColorMapUv: Re && _(M.specularColorMap.channel),
      specularIntensityMapUv: rt && _(M.specularIntensityMap.channel),
      transmissionMapUv: x && _(M.transmissionMap.channel),
      thicknessMapUv: F && _(M.thicknessMap.channel),
      alphaMapUv: X && _(M.alphaMap.channel),
      vertexTangents: !!q.attributes.tangent && (_e || T),
      vertexColors: M.vertexColors,
      vertexAlphas:
        M.vertexColors === !0 &&
        !!q.attributes.color &&
        q.attributes.color.itemSize === 4,
      pointsUvs: O.isPoints === !0 && !!q.attributes.uv && (Be || X),
      fog: !!K,
      useFog: M.fog === !0,
      fogExp2: !!K && K.isFogExp2,
      flatShading: M.flatShading === !0,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      skinning: O.isSkinnedMesh === !0,
      morphTargets: q.morphAttributes.position !== void 0,
      morphNormals: q.morphAttributes.normal !== void 0,
      morphColors: q.morphAttributes.color !== void 0,
      morphTargetsCount: ue,
      morphTextureStride: Ce,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numSpotLightMaps: E.spotLightMap.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numSpotLightShadowsWithMaps: E.numSpotLightShadowsWithMaps,
      numLightProbes: E.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: r.shadowMap.enabled && L.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: pt,
      decodeVideoTexture:
        Be &&
        M.map.isVideoTexture === !0 &&
        Xe.getTransfer(M.map.colorSpace) === st,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === Dn,
      flipSided: M.side === Yt,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionClipCullDistance:
        Ae &&
        M.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((Ae && M.extensions.multiDraw === !0) || Ne) &&
        n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile"
      ),
      customProgramCacheKey: M.customProgramCacheKey(),
    };
    return (
      (yt.vertexUv1s = c.has(1)),
      (yt.vertexUv2s = c.has(2)),
      (yt.vertexUv3s = c.has(3)),
      c.clear(),
      yt
    );
  }
  function m(M) {
    const E = [];
    if (
      (M.shaderID
        ? E.push(M.shaderID)
        : (E.push(M.customVertexShaderID), E.push(M.customFragmentShaderID)),
      M.defines !== void 0)
    )
      for (const L in M.defines) E.push(L), E.push(M.defines[L]);
    return (
      M.isRawShaderMaterial === !1 &&
        (y(E, M), v(E, M), E.push(r.outputColorSpace)),
      E.push(M.customProgramCacheKey),
      E.join()
    );
  }
  function y(M, E) {
    M.push(E.precision),
      M.push(E.outputColorSpace),
      M.push(E.envMapMode),
      M.push(E.envMapCubeUVHeight),
      M.push(E.mapUv),
      M.push(E.alphaMapUv),
      M.push(E.lightMapUv),
      M.push(E.aoMapUv),
      M.push(E.bumpMapUv),
      M.push(E.normalMapUv),
      M.push(E.displacementMapUv),
      M.push(E.emissiveMapUv),
      M.push(E.metalnessMapUv),
      M.push(E.roughnessMapUv),
      M.push(E.anisotropyMapUv),
      M.push(E.clearcoatMapUv),
      M.push(E.clearcoatNormalMapUv),
      M.push(E.clearcoatRoughnessMapUv),
      M.push(E.iridescenceMapUv),
      M.push(E.iridescenceThicknessMapUv),
      M.push(E.sheenColorMapUv),
      M.push(E.sheenRoughnessMapUv),
      M.push(E.specularMapUv),
      M.push(E.specularColorMapUv),
      M.push(E.specularIntensityMapUv),
      M.push(E.transmissionMapUv),
      M.push(E.thicknessMapUv),
      M.push(E.combine),
      M.push(E.fogExp2),
      M.push(E.sizeAttenuation),
      M.push(E.morphTargetsCount),
      M.push(E.morphAttributeCount),
      M.push(E.numDirLights),
      M.push(E.numPointLights),
      M.push(E.numSpotLights),
      M.push(E.numSpotLightMaps),
      M.push(E.numHemiLights),
      M.push(E.numRectAreaLights),
      M.push(E.numDirLightShadows),
      M.push(E.numPointLightShadows),
      M.push(E.numSpotLightShadows),
      M.push(E.numSpotLightShadowsWithMaps),
      M.push(E.numLightProbes),
      M.push(E.shadowMapType),
      M.push(E.toneMapping),
      M.push(E.numClippingPlanes),
      M.push(E.numClipIntersection),
      M.push(E.depthPacking);
  }
  function v(M, E) {
    o.disableAll(),
      E.supportsVertexTextures && o.enable(0),
      E.instancing && o.enable(1),
      E.instancingColor && o.enable(2),
      E.instancingMorph && o.enable(3),
      E.matcap && o.enable(4),
      E.envMap && o.enable(5),
      E.normalMapObjectSpace && o.enable(6),
      E.normalMapTangentSpace && o.enable(7),
      E.clearcoat && o.enable(8),
      E.iridescence && o.enable(9),
      E.alphaTest && o.enable(10),
      E.vertexColors && o.enable(11),
      E.vertexAlphas && o.enable(12),
      E.vertexUv1s && o.enable(13),
      E.vertexUv2s && o.enable(14),
      E.vertexUv3s && o.enable(15),
      E.vertexTangents && o.enable(16),
      E.anisotropy && o.enable(17),
      E.alphaHash && o.enable(18),
      E.batching && o.enable(19),
      E.dispersion && o.enable(20),
      E.batchingColor && o.enable(21),
      M.push(o.mask),
      o.disableAll(),
      E.fog && o.enable(0),
      E.useFog && o.enable(1),
      E.flatShading && o.enable(2),
      E.logarithmicDepthBuffer && o.enable(3),
      E.skinning && o.enable(4),
      E.morphTargets && o.enable(5),
      E.morphNormals && o.enable(6),
      E.morphColors && o.enable(7),
      E.premultipliedAlpha && o.enable(8),
      E.shadowMapEnabled && o.enable(9),
      E.doubleSided && o.enable(10),
      E.flipSided && o.enable(11),
      E.useDepthPacking && o.enable(12),
      E.dithering && o.enable(13),
      E.transmission && o.enable(14),
      E.sheen && o.enable(15),
      E.opaque && o.enable(16),
      E.pointsUvs && o.enable(17),
      E.decodeVideoTexture && o.enable(18),
      E.alphaToCoverage && o.enable(19),
      M.push(o.mask);
  }
  function S(M) {
    const E = g[M.type];
    let L;
    if (E) {
      const k = In[E];
      L = a_.clone(k.uniforms);
    } else L = M.uniforms;
    return L;
  }
  function R(M, E) {
    let L;
    for (let k = 0, O = u.length; k < O; k++) {
      const K = u[k];
      if (K.cacheKey === E) {
        (L = K), ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && ((L = new vv(r, E, M, s)), u.push(L)), L;
  }
  function w(M) {
    if (--M.usedTimes === 0) {
      const E = u.indexOf(M);
      (u[E] = u[u.length - 1]), u.pop(), M.destroy();
    }
  }
  function b(M) {
    l.remove(M);
  }
  function P() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: m,
    getUniforms: S,
    acquireProgram: R,
    releaseProgram: w,
    releaseShaderCache: b,
    programs: u,
    dispose: P,
  };
}
function Ev() {
  let r = new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && ((a = {}), r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
  }
  function i() {
    r = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function Av(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.material.id !== e.material.id
    ? r.material.id - e.material.id
    : r.z !== e.z
    ? r.z - e.z
    : r.id - e.id;
}
function yh(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.z !== e.z
    ? e.z - r.z
    : r.id - e.id;
}
function Mh() {
  const r = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function a(h, f, d, g, _, p) {
    let m = r[e];
    return (
      m === void 0
        ? ((m = {
            id: h.id,
            object: h,
            geometry: f,
            material: d,
            groupOrder: g,
            renderOrder: h.renderOrder,
            z: _,
            group: p,
          }),
          (r[e] = m))
        : ((m.id = h.id),
          (m.object = h),
          (m.geometry = f),
          (m.material = d),
          (m.groupOrder = g),
          (m.renderOrder = h.renderOrder),
          (m.z = _),
          (m.group = p)),
      e++,
      m
    );
  }
  function o(h, f, d, g, _, p) {
    const m = a(h, f, d, g, _, p);
    d.transmission > 0
      ? n.push(m)
      : d.transparent === !0
      ? i.push(m)
      : t.push(m);
  }
  function l(h, f, d, g, _, p) {
    const m = a(h, f, d, g, _, p);
    d.transmission > 0
      ? n.unshift(m)
      : d.transparent === !0
      ? i.unshift(m)
      : t.unshift(m);
  }
  function c(h, f) {
    t.length > 1 && t.sort(h || Av),
      n.length > 1 && n.sort(f || yh),
      i.length > 1 && i.sort(f || yh);
  }
  function u() {
    for (let h = e, f = r.length; h < f; h++) {
      const d = r[h];
      if (d.id === null) break;
      (d.id = null),
        (d.object = null),
        (d.geometry = null),
        (d.material = null),
        (d.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function bv() {
  let r = new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return (
      s === void 0
        ? ((a = new Mh()), r.set(n, [a]))
        : i >= s.length
        ? ((a = new Mh()), s.push(a))
        : (a = s[i]),
      a
    );
  }
  function t() {
    r = new WeakMap();
  }
  return { get: e, dispose: t };
}
function wv() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new D(), color: new De() };
          break;
        case "SpotLight":
          t = {
            position: new D(),
            direction: new D(),
            color: new De(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new D(), color: new De(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new D(), skyColor: new De(), groundColor: new De() };
          break;
        case "RectAreaLight":
          t = {
            color: new De(),
            position: new D(),
            halfWidth: new D(),
            halfHeight: new D(),
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
function Rv() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Me(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Me(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Me(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
let Cv = 0;
function Pv(r, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (r.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (r.map ? 1 : 0)
  );
}
function Lv(r) {
  const e = new wv(),
    t = Rv(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let c = 0; c < 9; c++) n.probe.push(new D());
  const i = new D(),
    s = new Ue(),
    a = new Ue();
  function o(c) {
    let u = 0,
      h = 0,
      f = 0;
    for (let M = 0; M < 9; M++) n.probe[M].set(0, 0, 0);
    let d = 0,
      g = 0,
      _ = 0,
      p = 0,
      m = 0,
      y = 0,
      v = 0,
      S = 0,
      R = 0,
      w = 0,
      b = 0;
    c.sort(Pv);
    for (let M = 0, E = c.length; M < E; M++) {
      const L = c[M],
        k = L.color,
        O = L.intensity,
        K = L.distance,
        q = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight) (u += k.r * O), (h += k.g * O), (f += k.b * O);
      else if (L.isLightProbe) {
        for (let G = 0; G < 9; G++)
          n.probe[G].addScaledVector(L.sh.coefficients[G], O);
        b++;
      } else if (L.isDirectionalLight) {
        const G = e.get(L);
        if ((G.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow)) {
          const j = L.shadow,
            W = t.get(L);
          (W.shadowIntensity = j.intensity),
            (W.shadowBias = j.bias),
            (W.shadowNormalBias = j.normalBias),
            (W.shadowRadius = j.radius),
            (W.shadowMapSize = j.mapSize),
            (n.directionalShadow[d] = W),
            (n.directionalShadowMap[d] = q),
            (n.directionalShadowMatrix[d] = L.shadow.matrix),
            y++;
        }
        (n.directional[d] = G), d++;
      } else if (L.isSpotLight) {
        const G = e.get(L);
        G.position.setFromMatrixPosition(L.matrixWorld),
          G.color.copy(k).multiplyScalar(O),
          (G.distance = K),
          (G.coneCos = Math.cos(L.angle)),
          (G.penumbraCos = Math.cos(L.angle * (1 - L.penumbra))),
          (G.decay = L.decay),
          (n.spot[_] = G);
        const j = L.shadow;
        if (
          (L.map &&
            ((n.spotLightMap[R] = L.map),
            R++,
            j.updateMatrices(L),
            L.castShadow && w++),
          (n.spotLightMatrix[_] = j.matrix),
          L.castShadow)
        ) {
          const W = t.get(L);
          (W.shadowIntensity = j.intensity),
            (W.shadowBias = j.bias),
            (W.shadowNormalBias = j.normalBias),
            (W.shadowRadius = j.radius),
            (W.shadowMapSize = j.mapSize),
            (n.spotShadow[_] = W),
            (n.spotShadowMap[_] = q),
            S++;
        }
        _++;
      } else if (L.isRectAreaLight) {
        const G = e.get(L);
        G.color.copy(k).multiplyScalar(O),
          G.halfWidth.set(L.width * 0.5, 0, 0),
          G.halfHeight.set(0, L.height * 0.5, 0),
          (n.rectArea[p] = G),
          p++;
      } else if (L.isPointLight) {
        const G = e.get(L);
        if (
          (G.color.copy(L.color).multiplyScalar(L.intensity),
          (G.distance = L.distance),
          (G.decay = L.decay),
          L.castShadow)
        ) {
          const j = L.shadow,
            W = t.get(L);
          (W.shadowIntensity = j.intensity),
            (W.shadowBias = j.bias),
            (W.shadowNormalBias = j.normalBias),
            (W.shadowRadius = j.radius),
            (W.shadowMapSize = j.mapSize),
            (W.shadowCameraNear = j.camera.near),
            (W.shadowCameraFar = j.camera.far),
            (n.pointShadow[g] = W),
            (n.pointShadowMap[g] = q),
            (n.pointShadowMatrix[g] = L.shadow.matrix),
            v++;
        }
        (n.point[g] = G), g++;
      } else if (L.isHemisphereLight) {
        const G = e.get(L);
        G.skyColor.copy(L.color).multiplyScalar(O),
          G.groundColor.copy(L.groundColor).multiplyScalar(O),
          (n.hemi[m] = G),
          m++;
      }
    }
    p > 0 &&
      (r.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = re.LTC_FLOAT_1), (n.rectAreaLTC2 = re.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = re.LTC_HALF_1), (n.rectAreaLTC2 = re.LTC_HALF_2))),
      (n.ambient[0] = u),
      (n.ambient[1] = h),
      (n.ambient[2] = f);
    const P = n.hash;
    (P.directionalLength !== d ||
      P.pointLength !== g ||
      P.spotLength !== _ ||
      P.rectAreaLength !== p ||
      P.hemiLength !== m ||
      P.numDirectionalShadows !== y ||
      P.numPointShadows !== v ||
      P.numSpotShadows !== S ||
      P.numSpotMaps !== R ||
      P.numLightProbes !== b) &&
      ((n.directional.length = d),
      (n.spot.length = _),
      (n.rectArea.length = p),
      (n.point.length = g),
      (n.hemi.length = m),
      (n.directionalShadow.length = y),
      (n.directionalShadowMap.length = y),
      (n.pointShadow.length = v),
      (n.pointShadowMap.length = v),
      (n.spotShadow.length = S),
      (n.spotShadowMap.length = S),
      (n.directionalShadowMatrix.length = y),
      (n.pointShadowMatrix.length = v),
      (n.spotLightMatrix.length = S + R - w),
      (n.spotLightMap.length = R),
      (n.numSpotLightShadowsWithMaps = w),
      (n.numLightProbes = b),
      (P.directionalLength = d),
      (P.pointLength = g),
      (P.spotLength = _),
      (P.rectAreaLength = p),
      (P.hemiLength = m),
      (P.numDirectionalShadows = y),
      (P.numPointShadows = v),
      (P.numSpotShadows = S),
      (P.numSpotMaps = R),
      (P.numLightProbes = b),
      (n.version = Cv++));
  }
  function l(c, u) {
    let h = 0,
      f = 0,
      d = 0,
      g = 0,
      _ = 0;
    const p = u.matrixWorldInverse;
    for (let m = 0, y = c.length; m < y; m++) {
      const v = c[m];
      if (v.isDirectionalLight) {
        const S = n.directional[h];
        S.direction.setFromMatrixPosition(v.matrixWorld),
          i.setFromMatrixPosition(v.target.matrixWorld),
          S.direction.sub(i),
          S.direction.transformDirection(p),
          h++;
      } else if (v.isSpotLight) {
        const S = n.spot[d];
        S.position.setFromMatrixPosition(v.matrixWorld),
          S.position.applyMatrix4(p),
          S.direction.setFromMatrixPosition(v.matrixWorld),
          i.setFromMatrixPosition(v.target.matrixWorld),
          S.direction.sub(i),
          S.direction.transformDirection(p),
          d++;
      } else if (v.isRectAreaLight) {
        const S = n.rectArea[g];
        S.position.setFromMatrixPosition(v.matrixWorld),
          S.position.applyMatrix4(p),
          a.identity(),
          s.copy(v.matrixWorld),
          s.premultiply(p),
          a.extractRotation(s),
          S.halfWidth.set(v.width * 0.5, 0, 0),
          S.halfHeight.set(0, v.height * 0.5, 0),
          S.halfWidth.applyMatrix4(a),
          S.halfHeight.applyMatrix4(a),
          g++;
      } else if (v.isPointLight) {
        const S = n.point[f];
        S.position.setFromMatrixPosition(v.matrixWorld),
          S.position.applyMatrix4(p),
          f++;
      } else if (v.isHemisphereLight) {
        const S = n.hemi[_];
        S.direction.setFromMatrixPosition(v.matrixWorld),
          S.direction.transformDirection(p),
          _++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function Sh(r) {
  const e = new Lv(r),
    t = [],
    n = [];
  function i(u) {
    (c.camera = u), (t.length = 0), (n.length = 0);
  }
  function s(u) {
    t.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: i,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a,
  };
}
function Iv(r) {
  let e = new WeakMap();
  function t(i, s = 0) {
    const a = e.get(i);
    let o;
    return (
      a === void 0
        ? ((o = new Sh(r)), e.set(i, [o]))
        : s >= a.length
        ? ((o = new Sh(r)), a.push(o))
        : (o = a[s]),
      o
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
class Dv extends Fn {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = mm),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Nv extends Fn {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const Uv = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Ov = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Fv(r, e, t) {
  let n = new Wc();
  const i = new Me(),
    s = new Me(),
    a = new Je(),
    o = new Dv({ depthPacking: _m }),
    l = new Nv(),
    c = {},
    u = t.maxTextureSize,
    h = { [si]: Yt, [Yt]: si, [Dn]: Dn },
    f = new Ni({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Me() },
        radius: { value: 4 },
      },
      vertexShader: Uv,
      fragmentShader: Ov,
    }),
    d = f.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new Pn();
  g.setAttribute(
    "position",
    new Xt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const _ = new qt(g, f),
    p = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = bf);
  let m = this.type;
  this.render = function (w, b, P) {
    if (
      p.enabled === !1 ||
      (p.autoUpdate === !1 && p.needsUpdate === !1) ||
      w.length === 0
    )
      return;
    const M = r.getRenderTarget(),
      E = r.getActiveCubeFace(),
      L = r.getActiveMipmapLevel(),
      k = r.state;
    k.setBlending(Ri),
      k.buffers.color.setClear(1, 1, 1, 1),
      k.buffers.depth.setTest(!0),
      k.setScissorTest(!1);
    const O = m !== Jn && this.type === Jn,
      K = m === Jn && this.type !== Jn;
    for (let q = 0, G = w.length; q < G; q++) {
      const j = w[q],
        W = j.shadow;
      if (W === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (W.autoUpdate === !1 && W.needsUpdate === !1) continue;
      i.copy(W.mapSize);
      const ie = W.getFrameExtents();
      if (
        (i.multiply(ie),
        s.copy(W.mapSize),
        (i.x > u || i.y > u) &&
          (i.x > u &&
            ((s.x = Math.floor(u / ie.x)),
            (i.x = s.x * ie.x),
            (W.mapSize.x = s.x)),
          i.y > u &&
            ((s.y = Math.floor(u / ie.y)),
            (i.y = s.y * ie.y),
            (W.mapSize.y = s.y))),
        W.map === null || O === !0 || K === !0)
      ) {
        const ue = this.type !== Jn ? { minFilter: Gt, magFilter: Gt } : {};
        W.map !== null && W.map.dispose(),
          (W.map = new _s(i.x, i.y, ue)),
          (W.map.texture.name = j.name + ".shadowMap"),
          W.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(W.map), r.clear();
      const ae = W.getViewportCount();
      for (let ue = 0; ue < ae; ue++) {
        const Ce = W.getViewport(ue);
        a.set(s.x * Ce.x, s.y * Ce.y, s.x * Ce.z, s.y * Ce.w),
          k.viewport(a),
          W.updateMatrices(j, ue),
          (n = W.getFrustum()),
          S(b, P, W.camera, j, this.type);
      }
      W.isPointLightShadow !== !0 && this.type === Jn && y(W, P),
        (W.needsUpdate = !1);
    }
    (m = this.type), (p.needsUpdate = !1), r.setRenderTarget(M, E, L);
  };
  function y(w, b) {
    const P = e.update(_);
    f.defines.VSM_SAMPLES !== w.blurSamples &&
      ((f.defines.VSM_SAMPLES = w.blurSamples),
      (d.defines.VSM_SAMPLES = w.blurSamples),
      (f.needsUpdate = !0),
      (d.needsUpdate = !0)),
      w.mapPass === null && (w.mapPass = new _s(i.x, i.y)),
      (f.uniforms.shadow_pass.value = w.map.texture),
      (f.uniforms.resolution.value = w.mapSize),
      (f.uniforms.radius.value = w.radius),
      r.setRenderTarget(w.mapPass),
      r.clear(),
      r.renderBufferDirect(b, null, P, f, _, null),
      (d.uniforms.shadow_pass.value = w.mapPass.texture),
      (d.uniforms.resolution.value = w.mapSize),
      (d.uniforms.radius.value = w.radius),
      r.setRenderTarget(w.map),
      r.clear(),
      r.renderBufferDirect(b, null, P, d, _, null);
  }
  function v(w, b, P, M) {
    let E = null;
    const L =
      P.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (L !== void 0) E = L;
    else if (
      ((E = P.isPointLight === !0 ? l : o),
      (r.localClippingEnabled &&
        b.clipShadows === !0 &&
        Array.isArray(b.clippingPlanes) &&
        b.clippingPlanes.length !== 0) ||
        (b.displacementMap && b.displacementScale !== 0) ||
        (b.alphaMap && b.alphaTest > 0) ||
        (b.map && b.alphaTest > 0))
    ) {
      const k = E.uuid,
        O = b.uuid;
      let K = c[k];
      K === void 0 && ((K = {}), (c[k] = K));
      let q = K[O];
      q === void 0 &&
        ((q = E.clone()), (K[O] = q), b.addEventListener("dispose", R)),
        (E = q);
    }
    if (
      ((E.visible = b.visible),
      (E.wireframe = b.wireframe),
      M === Jn
        ? (E.side = b.shadowSide !== null ? b.shadowSide : b.side)
        : (E.side = b.shadowSide !== null ? b.shadowSide : h[b.side]),
      (E.alphaMap = b.alphaMap),
      (E.alphaTest = b.alphaTest),
      (E.map = b.map),
      (E.clipShadows = b.clipShadows),
      (E.clippingPlanes = b.clippingPlanes),
      (E.clipIntersection = b.clipIntersection),
      (E.displacementMap = b.displacementMap),
      (E.displacementScale = b.displacementScale),
      (E.displacementBias = b.displacementBias),
      (E.wireframeLinewidth = b.wireframeLinewidth),
      (E.linewidth = b.linewidth),
      P.isPointLight === !0 && E.isMeshDistanceMaterial === !0)
    ) {
      const k = r.properties.get(E);
      k.light = P;
    }
    return E;
  }
  function S(w, b, P, M, E) {
    if (w.visible === !1) return;
    if (
      w.layers.test(b.layers) &&
      (w.isMesh || w.isLine || w.isPoints) &&
      (w.castShadow || (w.receiveShadow && E === Jn)) &&
      (!w.frustumCulled || n.intersectsObject(w))
    ) {
      w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, w.matrixWorld);
      const O = e.update(w),
        K = w.material;
      if (Array.isArray(K)) {
        const q = O.groups;
        for (let G = 0, j = q.length; G < j; G++) {
          const W = q[G],
            ie = K[W.materialIndex];
          if (ie && ie.visible) {
            const ae = v(w, ie, M, E);
            w.onBeforeShadow(r, w, b, P, O, ae, W),
              r.renderBufferDirect(P, null, O, ae, w, W),
              w.onAfterShadow(r, w, b, P, O, ae, W);
          }
        }
      } else if (K.visible) {
        const q = v(w, K, M, E);
        w.onBeforeShadow(r, w, b, P, O, q, null),
          r.renderBufferDirect(P, null, O, q, w, null),
          w.onAfterShadow(r, w, b, P, O, q, null);
      }
    }
    const k = w.children;
    for (let O = 0, K = k.length; O < K; O++) S(k[O], b, P, M, E);
  }
  function R(w) {
    w.target.removeEventListener("dispose", R);
    for (const P in c) {
      const M = c[P],
        E = w.target.uuid;
      E in M && (M[E].dispose(), delete M[E]);
    }
  }
}
function Bv(r) {
  function e() {
    let x = !1;
    const F = new Je();
    let B = null;
    const X = new Je(0, 0, 0, 0);
    return {
      setMask: function (Q) {
        B !== Q && !x && (r.colorMask(Q, Q, Q, Q), (B = Q));
      },
      setLocked: function (Q) {
        x = Q;
      },
      setClear: function (Q, ge, Ae, pt, yt) {
        yt === !0 && ((Q *= pt), (ge *= pt), (Ae *= pt)),
          F.set(Q, ge, Ae, pt),
          X.equals(F) === !1 && (r.clearColor(Q, ge, Ae, pt), X.copy(F));
      },
      reset: function () {
        (x = !1), (B = null), X.set(-1, 0, 0, 0);
      },
    };
  }
  function t() {
    let x = !1,
      F = null,
      B = null,
      X = null;
    return {
      setTest: function (Q) {
        Q ? de(r.DEPTH_TEST) : he(r.DEPTH_TEST);
      },
      setMask: function (Q) {
        F !== Q && !x && (r.depthMask(Q), (F = Q));
      },
      setFunc: function (Q) {
        if (B !== Q) {
          switch (Q) {
            case Kp:
              r.depthFunc(r.NEVER);
              break;
            case Zp:
              r.depthFunc(r.ALWAYS);
              break;
            case $p:
              r.depthFunc(r.LESS);
              break;
            case ao:
              r.depthFunc(r.LEQUAL);
              break;
            case Jp:
              r.depthFunc(r.EQUAL);
              break;
            case Qp:
              r.depthFunc(r.GEQUAL);
              break;
            case em:
              r.depthFunc(r.GREATER);
              break;
            case tm:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          B = Q;
        }
      },
      setLocked: function (Q) {
        x = Q;
      },
      setClear: function (Q) {
        X !== Q && (r.clearDepth(Q), (X = Q));
      },
      reset: function () {
        (x = !1), (F = null), (B = null), (X = null);
      },
    };
  }
  function n() {
    let x = !1,
      F = null,
      B = null,
      X = null,
      Q = null,
      ge = null,
      Ae = null,
      pt = null,
      yt = null;
    return {
      setTest: function (Ge) {
        x || (Ge ? de(r.STENCIL_TEST) : he(r.STENCIL_TEST));
      },
      setMask: function (Ge) {
        F !== Ge && !x && (r.stencilMask(Ge), (F = Ge));
      },
      setFunc: function (Ge, Mt, _t) {
        (B !== Ge || X !== Mt || Q !== _t) &&
          (r.stencilFunc(Ge, Mt, _t), (B = Ge), (X = Mt), (Q = _t));
      },
      setOp: function (Ge, Mt, _t) {
        (ge !== Ge || Ae !== Mt || pt !== _t) &&
          (r.stencilOp(Ge, Mt, _t), (ge = Ge), (Ae = Mt), (pt = _t));
      },
      setLocked: function (Ge) {
        x = Ge;
      },
      setClear: function (Ge) {
        yt !== Ge && (r.clearStencil(Ge), (yt = Ge));
      },
      reset: function () {
        (x = !1),
          (F = null),
          (B = null),
          (X = null),
          (Q = null),
          (ge = null),
          (Ae = null),
          (pt = null),
          (yt = null);
      },
    };
  }
  const i = new e(),
    s = new t(),
    a = new n(),
    o = new WeakMap(),
    l = new WeakMap();
  let c = {},
    u = {},
    h = new WeakMap(),
    f = [],
    d = null,
    g = !1,
    _ = null,
    p = null,
    m = null,
    y = null,
    v = null,
    S = null,
    R = null,
    w = new De(0, 0, 0),
    b = 0,
    P = !1,
    M = null,
    E = null,
    L = null,
    k = null,
    O = null;
  const K = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = !1,
    G = 0;
  const j = r.getParameter(r.VERSION);
  j.indexOf("WebGL") !== -1
    ? ((G = parseFloat(/^WebGL (\d)/.exec(j)[1])), (q = G >= 1))
    : j.indexOf("OpenGL ES") !== -1 &&
      ((G = parseFloat(/^OpenGL ES (\d)/.exec(j)[1])), (q = G >= 2));
  let W = null,
    ie = {};
  const ae = r.getParameter(r.SCISSOR_BOX),
    ue = r.getParameter(r.VIEWPORT),
    Ce = new Je().fromArray(ae),
    Ve = new Je().fromArray(ue);
  function Y(x, F, B, X) {
    const Q = new Uint8Array(4),
      ge = r.createTexture();
    r.bindTexture(x, ge),
      r.texParameteri(x, r.TEXTURE_MIN_FILTER, r.NEAREST),
      r.texParameteri(x, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let Ae = 0; Ae < B; Ae++)
      x === r.TEXTURE_3D || x === r.TEXTURE_2D_ARRAY
        ? r.texImage3D(F, 0, r.RGBA, 1, 1, X, 0, r.RGBA, r.UNSIGNED_BYTE, Q)
        : r.texImage2D(F + Ae, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, Q);
    return ge;
  }
  const J = {};
  (J[r.TEXTURE_2D] = Y(r.TEXTURE_2D, r.TEXTURE_2D, 1)),
    (J[r.TEXTURE_CUBE_MAP] = Y(
      r.TEXTURE_CUBE_MAP,
      r.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (J[r.TEXTURE_2D_ARRAY] = Y(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1)),
    (J[r.TEXTURE_3D] = Y(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)),
    i.setClear(0, 0, 0, 1),
    s.setClear(1),
    a.setClear(0),
    de(r.DEPTH_TEST),
    s.setFunc(ao),
    qe(!1),
    _e(wu),
    de(r.CULL_FACE),
    ct(Ri);
  function de(x) {
    c[x] !== !0 && (r.enable(x), (c[x] = !0));
  }
  function he(x) {
    c[x] !== !1 && (r.disable(x), (c[x] = !1));
  }
  function Le(x, F) {
    return u[x] !== F
      ? (r.bindFramebuffer(x, F),
        (u[x] = F),
        x === r.DRAW_FRAMEBUFFER && (u[r.FRAMEBUFFER] = F),
        x === r.FRAMEBUFFER && (u[r.DRAW_FRAMEBUFFER] = F),
        !0)
      : !1;
  }
  function Ne(x, F) {
    let B = f,
      X = !1;
    if (x) {
      (B = h.get(F)), B === void 0 && ((B = []), h.set(F, B));
      const Q = x.textures;
      if (B.length !== Q.length || B[0] !== r.COLOR_ATTACHMENT0) {
        for (let ge = 0, Ae = Q.length; ge < Ae; ge++)
          B[ge] = r.COLOR_ATTACHMENT0 + ge;
        (B.length = Q.length), (X = !0);
      }
    } else B[0] !== r.BACK && ((B[0] = r.BACK), (X = !0));
    X && r.drawBuffers(B);
  }
  function Be(x) {
    return d !== x ? (r.useProgram(x), (d = x), !0) : !1;
  }
  const it = {
    [ss]: r.FUNC_ADD,
    [Ip]: r.FUNC_SUBTRACT,
    [Dp]: r.FUNC_REVERSE_SUBTRACT,
  };
  (it[Np] = r.MIN), (it[Up] = r.MAX);
  const I = {
    [Op]: r.ZERO,
    [Fp]: r.ONE,
    [Bp]: r.SRC_COLOR,
    [Pl]: r.SRC_ALPHA,
    [Wp]: r.SRC_ALPHA_SATURATE,
    [Vp]: r.DST_COLOR,
    [zp]: r.DST_ALPHA,
    [kp]: r.ONE_MINUS_SRC_COLOR,
    [Ll]: r.ONE_MINUS_SRC_ALPHA,
    [Gp]: r.ONE_MINUS_DST_COLOR,
    [Hp]: r.ONE_MINUS_DST_ALPHA,
    [Xp]: r.CONSTANT_COLOR,
    [qp]: r.ONE_MINUS_CONSTANT_COLOR,
    [Yp]: r.CONSTANT_ALPHA,
    [jp]: r.ONE_MINUS_CONSTANT_ALPHA,
  };
  function ct(x, F, B, X, Q, ge, Ae, pt, yt, Ge) {
    if (x === Ri) {
      g === !0 && (he(r.BLEND), (g = !1));
      return;
    }
    if ((g === !1 && (de(r.BLEND), (g = !0)), x !== Lp)) {
      if (x !== _ || Ge !== P) {
        if (
          ((p !== ss || v !== ss) &&
            (r.blendEquation(r.FUNC_ADD), (p = ss), (v = ss)),
          Ge)
        )
          switch (x) {
            case ls:
              r.blendFuncSeparate(
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA,
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Ru:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case Cu:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Pu:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", x);
              break;
          }
        else
          switch (x) {
            case ls:
              r.blendFuncSeparate(
                r.SRC_ALPHA,
                r.ONE_MINUS_SRC_ALPHA,
                r.ONE,
                r.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Ru:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case Cu:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Pu:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", x);
              break;
          }
        (m = null),
          (y = null),
          (S = null),
          (R = null),
          w.set(0, 0, 0),
          (b = 0),
          (_ = x),
          (P = Ge);
      }
      return;
    }
    (Q = Q || F),
      (ge = ge || B),
      (Ae = Ae || X),
      (F !== p || Q !== v) &&
        (r.blendEquationSeparate(it[F], it[Q]), (p = F), (v = Q)),
      (B !== m || X !== y || ge !== S || Ae !== R) &&
        (r.blendFuncSeparate(I[B], I[X], I[ge], I[Ae]),
        (m = B),
        (y = X),
        (S = ge),
        (R = Ae)),
      (pt.equals(w) === !1 || yt !== b) &&
        (r.blendColor(pt.r, pt.g, pt.b, yt), w.copy(pt), (b = yt)),
      (_ = x),
      (P = !1);
  }
  function We(x, F) {
    x.side === Dn ? he(r.CULL_FACE) : de(r.CULL_FACE);
    let B = x.side === Yt;
    F && (B = !B),
      qe(B),
      x.blending === ls && x.transparent === !1
        ? ct(Ri)
        : ct(
            x.blending,
            x.blendEquation,
            x.blendSrc,
            x.blendDst,
            x.blendEquationAlpha,
            x.blendSrcAlpha,
            x.blendDstAlpha,
            x.blendColor,
            x.blendAlpha,
            x.premultipliedAlpha
          ),
      s.setFunc(x.depthFunc),
      s.setTest(x.depthTest),
      s.setMask(x.depthWrite),
      i.setMask(x.colorWrite);
    const X = x.stencilWrite;
    a.setTest(X),
      X &&
        (a.setMask(x.stencilWriteMask),
        a.setFunc(x.stencilFunc, x.stencilRef, x.stencilFuncMask),
        a.setOp(x.stencilFail, x.stencilZFail, x.stencilZPass)),
      we(x.polygonOffset, x.polygonOffsetFactor, x.polygonOffsetUnits),
      x.alphaToCoverage === !0
        ? de(r.SAMPLE_ALPHA_TO_COVERAGE)
        : he(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function qe(x) {
    M !== x && (x ? r.frontFace(r.CW) : r.frontFace(r.CCW), (M = x));
  }
  function _e(x) {
    x !== wp
      ? (de(r.CULL_FACE),
        x !== E &&
          (x === wu
            ? r.cullFace(r.BACK)
            : x === Rp
            ? r.cullFace(r.FRONT)
            : r.cullFace(r.FRONT_AND_BACK)))
      : he(r.CULL_FACE),
      (E = x);
  }
  function ut(x) {
    x !== L && (q && r.lineWidth(x), (L = x));
  }
  function we(x, F, B) {
    x
      ? (de(r.POLYGON_OFFSET_FILL),
        (k !== F || O !== B) && (r.polygonOffset(F, B), (k = F), (O = B)))
      : he(r.POLYGON_OFFSET_FILL);
  }
  function Pe(x) {
    x ? de(r.SCISSOR_TEST) : he(r.SCISSOR_TEST);
  }
  function C(x) {
    x === void 0 && (x = r.TEXTURE0 + K - 1),
      W !== x && (r.activeTexture(x), (W = x));
  }
  function T(x, F, B) {
    B === void 0 && (W === null ? (B = r.TEXTURE0 + K - 1) : (B = W));
    let X = ie[B];
    X === void 0 && ((X = { type: void 0, texture: void 0 }), (ie[B] = X)),
      (X.type !== x || X.texture !== F) &&
        (W !== B && (r.activeTexture(B), (W = B)),
        r.bindTexture(x, F || J[x]),
        (X.type = x),
        (X.texture = F));
  }
  function V() {
    const x = ie[W];
    x !== void 0 &&
      x.type !== void 0 &&
      (r.bindTexture(x.type, null), (x.type = void 0), (x.texture = void 0));
  }
  function $() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (x) {
      console.error("THREE.WebGLState:", x);
    }
  }
  function ee() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (x) {
      console.error("THREE.WebGLState:", x);
    }
  }
  function Z() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (x) {
      console.error("THREE.WebGLState:", x);
    }
  }
  function ve() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (x) {
      console.error("THREE.WebGLState:", x);
    }
  }
  function se() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (x) {
      console.error("THREE.WebGLState:", x);
    }
  }
  function le() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (x) {
      console.error("THREE.WebGLState:", x);
    }
  }
  function Ie() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (x) {
      console.error("THREE.WebGLState:", x);
    }
  }
  function te() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (x) {
      console.error("THREE.WebGLState:", x);
    }
  }
  function ce() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (x) {
      console.error("THREE.WebGLState:", x);
    }
  }
  function ze() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (x) {
      console.error("THREE.WebGLState:", x);
    }
  }
  function Se(x) {
    Ce.equals(x) === !1 && (r.scissor(x.x, x.y, x.z, x.w), Ce.copy(x));
  }
  function fe(x) {
    Ve.equals(x) === !1 && (r.viewport(x.x, x.y, x.z, x.w), Ve.copy(x));
  }
  function Ee(x, F) {
    let B = l.get(F);
    B === void 0 && ((B = new WeakMap()), l.set(F, B));
    let X = B.get(x);
    X === void 0 && ((X = r.getUniformBlockIndex(F, x.name)), B.set(x, X));
  }
  function Re(x, F) {
    const X = l.get(F).get(x);
    o.get(F) !== X &&
      (r.uniformBlockBinding(F, X, x.__bindingPointIndex), o.set(F, X));
  }
  function rt() {
    r.disable(r.BLEND),
      r.disable(r.CULL_FACE),
      r.disable(r.DEPTH_TEST),
      r.disable(r.POLYGON_OFFSET_FILL),
      r.disable(r.SCISSOR_TEST),
      r.disable(r.STENCIL_TEST),
      r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),
      r.blendEquation(r.FUNC_ADD),
      r.blendFunc(r.ONE, r.ZERO),
      r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO),
      r.blendColor(0, 0, 0, 0),
      r.colorMask(!0, !0, !0, !0),
      r.clearColor(0, 0, 0, 0),
      r.depthMask(!0),
      r.depthFunc(r.LESS),
      r.clearDepth(1),
      r.stencilMask(4294967295),
      r.stencilFunc(r.ALWAYS, 0, 4294967295),
      r.stencilOp(r.KEEP, r.KEEP, r.KEEP),
      r.clearStencil(0),
      r.cullFace(r.BACK),
      r.frontFace(r.CCW),
      r.polygonOffset(0, 0),
      r.activeTexture(r.TEXTURE0),
      r.bindFramebuffer(r.FRAMEBUFFER, null),
      r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null),
      r.bindFramebuffer(r.READ_FRAMEBUFFER, null),
      r.useProgram(null),
      r.lineWidth(1),
      r.scissor(0, 0, r.canvas.width, r.canvas.height),
      r.viewport(0, 0, r.canvas.width, r.canvas.height),
      (c = {}),
      (W = null),
      (ie = {}),
      (u = {}),
      (h = new WeakMap()),
      (f = []),
      (d = null),
      (g = !1),
      (_ = null),
      (p = null),
      (m = null),
      (y = null),
      (v = null),
      (S = null),
      (R = null),
      (w = new De(0, 0, 0)),
      (b = 0),
      (P = !1),
      (M = null),
      (E = null),
      (L = null),
      (k = null),
      (O = null),
      Ce.set(0, 0, r.canvas.width, r.canvas.height),
      Ve.set(0, 0, r.canvas.width, r.canvas.height),
      i.reset(),
      s.reset(),
      a.reset();
  }
  return {
    buffers: { color: i, depth: s, stencil: a },
    enable: de,
    disable: he,
    bindFramebuffer: Le,
    drawBuffers: Ne,
    useProgram: Be,
    setBlending: ct,
    setMaterial: We,
    setFlipSided: qe,
    setCullFace: _e,
    setLineWidth: ut,
    setPolygonOffset: we,
    setScissorTest: Pe,
    activeTexture: C,
    bindTexture: T,
    unbindTexture: V,
    compressedTexImage2D: $,
    compressedTexImage3D: ee,
    texImage2D: ce,
    texImage3D: ze,
    updateUBOMapping: Ee,
    uniformBlockBinding: Re,
    texStorage2D: Ie,
    texStorage3D: te,
    texSubImage2D: Z,
    texSubImage3D: ve,
    compressedTexSubImage2D: se,
    compressedTexSubImage3D: le,
    scissor: Se,
    viewport: fe,
    reset: rt,
  };
}
function Th(r, e, t, n) {
  const i = kv(n);
  switch (t) {
    case Df:
      return r * e;
    case Uf:
      return r * e;
    case Of:
      return r * e * 2;
    case Oc:
      return ((r * e) / i.components) * i.byteLength;
    case Fc:
      return ((r * e) / i.components) * i.byteLength;
    case Ff:
      return ((r * e * 2) / i.components) * i.byteLength;
    case Bc:
      return ((r * e * 2) / i.components) * i.byteLength;
    case Nf:
      return ((r * e * 3) / i.components) * i.byteLength;
    case _n:
      return ((r * e * 4) / i.components) * i.byteLength;
    case kc:
      return ((r * e * 4) / i.components) * i.byteLength;
    case $a:
    case Ja:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Qa:
    case eo:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ul:
    case Fl:
      return (Math.max(r, 16) * Math.max(e, 8)) / 4;
    case Nl:
    case Ol:
      return (Math.max(r, 8) * Math.max(e, 8)) / 2;
    case Bl:
    case kl:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case zl:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Hl:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Vl:
      return Math.floor((r + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Gl:
      return Math.floor((r + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Wl:
      return Math.floor((r + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Xl:
      return Math.floor((r + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case ql:
      return Math.floor((r + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Yl:
      return Math.floor((r + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case jl:
      return Math.floor((r + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Kl:
      return Math.floor((r + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Zl:
      return Math.floor((r + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case $l:
      return Math.floor((r + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Jl:
      return Math.floor((r + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Ql:
      return Math.floor((r + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case ec:
      return Math.floor((r + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case to:
    case tc:
    case nc:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
    case Bf:
    case ic:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 8;
    case sc:
    case rc:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function kv(r) {
  switch (r) {
    case ri:
    case Pf:
      return { byteLength: 1, components: 1 };
    case jr:
    case Lf:
    case oa:
      return { byteLength: 2, components: 1 };
    case Nc:
    case Uc:
      return { byteLength: 2, components: 4 };
    case ms:
    case Dc:
    case wn:
      return { byteLength: 4, components: 1 };
    case If:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${r}.`);
}
function zv(r, e, t, n, i, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    l =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    c = new Me(),
    u = new WeakMap();
  let h;
  const f = new WeakMap();
  let d = !1;
  try {
    d =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function g(C, T) {
    return d ? new OffscreenCanvas(C, T) : $r("canvas");
  }
  function _(C, T, V) {
    let $ = 1;
    const ee = Pe(C);
    if (
      ((ee.width > V || ee.height > V) &&
        ($ = V / Math.max(ee.width, ee.height)),
      $ < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && C instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && C instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && C instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && C instanceof VideoFrame)
      ) {
        const Z = Math.floor($ * ee.width),
          ve = Math.floor($ * ee.height);
        h === void 0 && (h = g(Z, ve));
        const se = T ? g(Z, ve) : h;
        return (
          (se.width = Z),
          (se.height = ve),
          se.getContext("2d").drawImage(C, 0, 0, Z, ve),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              ee.width +
              "x" +
              ee.height +
              ") to (" +
              Z +
              "x" +
              ve +
              ")."
          ),
          se
        );
      } else
        return (
          "data" in C &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                ee.width +
                "x" +
                ee.height +
                ")."
            ),
          C
        );
    return C;
  }
  function p(C) {
    return C.generateMipmaps && C.minFilter !== Gt && C.minFilter !== rn;
  }
  function m(C) {
    r.generateMipmap(C);
  }
  function y(C, T, V, $, ee = !1) {
    if (C !== null) {
      if (r[C] !== void 0) return r[C];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          C +
          "'"
      );
    }
    let Z = T;
    if (
      (T === r.RED &&
        (V === r.FLOAT && (Z = r.R32F),
        V === r.HALF_FLOAT && (Z = r.R16F),
        V === r.UNSIGNED_BYTE && (Z = r.R8)),
      T === r.RED_INTEGER &&
        (V === r.UNSIGNED_BYTE && (Z = r.R8UI),
        V === r.UNSIGNED_SHORT && (Z = r.R16UI),
        V === r.UNSIGNED_INT && (Z = r.R32UI),
        V === r.BYTE && (Z = r.R8I),
        V === r.SHORT && (Z = r.R16I),
        V === r.INT && (Z = r.R32I)),
      T === r.RG &&
        (V === r.FLOAT && (Z = r.RG32F),
        V === r.HALF_FLOAT && (Z = r.RG16F),
        V === r.UNSIGNED_BYTE && (Z = r.RG8)),
      T === r.RG_INTEGER &&
        (V === r.UNSIGNED_BYTE && (Z = r.RG8UI),
        V === r.UNSIGNED_SHORT && (Z = r.RG16UI),
        V === r.UNSIGNED_INT && (Z = r.RG32UI),
        V === r.BYTE && (Z = r.RG8I),
        V === r.SHORT && (Z = r.RG16I),
        V === r.INT && (Z = r.RG32I)),
      T === r.RGB && V === r.UNSIGNED_INT_5_9_9_9_REV && (Z = r.RGB9_E5),
      T === r.RGBA)
    ) {
      const ve = ee ? co : Xe.getTransfer($);
      V === r.FLOAT && (Z = r.RGBA32F),
        V === r.HALF_FLOAT && (Z = r.RGBA16F),
        V === r.UNSIGNED_BYTE && (Z = ve === st ? r.SRGB8_ALPHA8 : r.RGBA8),
        V === r.UNSIGNED_SHORT_4_4_4_4 && (Z = r.RGBA4),
        V === r.UNSIGNED_SHORT_5_5_5_1 && (Z = r.RGB5_A1);
    }
    return (
      (Z === r.R16F ||
        Z === r.R32F ||
        Z === r.RG16F ||
        Z === r.RG32F ||
        Z === r.RGBA16F ||
        Z === r.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      Z
    );
  }
  function v(C, T) {
    let V;
    return (
      C
        ? T === null || T === ms || T === or
          ? (V = r.DEPTH24_STENCIL8)
          : T === wn
          ? (V = r.DEPTH32F_STENCIL8)
          : T === jr &&
            ((V = r.DEPTH24_STENCIL8),
            console.warn(
              "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."
            ))
        : T === null || T === ms || T === or
        ? (V = r.DEPTH_COMPONENT24)
        : T === wn
        ? (V = r.DEPTH_COMPONENT32F)
        : T === jr && (V = r.DEPTH_COMPONENT16),
      V
    );
  }
  function S(C, T) {
    return p(C) === !0 ||
      (C.isFramebufferTexture && C.minFilter !== Gt && C.minFilter !== rn)
      ? Math.log2(Math.max(T.width, T.height)) + 1
      : C.mipmaps !== void 0 && C.mipmaps.length > 0
      ? C.mipmaps.length
      : C.isCompressedTexture && Array.isArray(C.image)
      ? T.mipmaps.length
      : 1;
  }
  function R(C) {
    const T = C.target;
    T.removeEventListener("dispose", R), b(T), T.isVideoTexture && u.delete(T);
  }
  function w(C) {
    const T = C.target;
    T.removeEventListener("dispose", w), M(T);
  }
  function b(C) {
    const T = n.get(C);
    if (T.__webglInit === void 0) return;
    const V = C.source,
      $ = f.get(V);
    if ($) {
      const ee = $[T.__cacheKey];
      ee.usedTimes--,
        ee.usedTimes === 0 && P(C),
        Object.keys($).length === 0 && f.delete(V);
    }
    n.remove(C);
  }
  function P(C) {
    const T = n.get(C);
    r.deleteTexture(T.__webglTexture);
    const V = C.source,
      $ = f.get(V);
    delete $[T.__cacheKey], a.memory.textures--;
  }
  function M(C) {
    const T = n.get(C);
    if ((C.depthTexture && C.depthTexture.dispose(), C.isWebGLCubeRenderTarget))
      for (let $ = 0; $ < 6; $++) {
        if (Array.isArray(T.__webglFramebuffer[$]))
          for (let ee = 0; ee < T.__webglFramebuffer[$].length; ee++)
            r.deleteFramebuffer(T.__webglFramebuffer[$][ee]);
        else r.deleteFramebuffer(T.__webglFramebuffer[$]);
        T.__webglDepthbuffer && r.deleteRenderbuffer(T.__webglDepthbuffer[$]);
      }
    else {
      if (Array.isArray(T.__webglFramebuffer))
        for (let $ = 0; $ < T.__webglFramebuffer.length; $++)
          r.deleteFramebuffer(T.__webglFramebuffer[$]);
      else r.deleteFramebuffer(T.__webglFramebuffer);
      if (
        (T.__webglDepthbuffer && r.deleteRenderbuffer(T.__webglDepthbuffer),
        T.__webglMultisampledFramebuffer &&
          r.deleteFramebuffer(T.__webglMultisampledFramebuffer),
        T.__webglColorRenderbuffer)
      )
        for (let $ = 0; $ < T.__webglColorRenderbuffer.length; $++)
          T.__webglColorRenderbuffer[$] &&
            r.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);
      T.__webglDepthRenderbuffer &&
        r.deleteRenderbuffer(T.__webglDepthRenderbuffer);
    }
    const V = C.textures;
    for (let $ = 0, ee = V.length; $ < ee; $++) {
      const Z = n.get(V[$]);
      Z.__webglTexture &&
        (r.deleteTexture(Z.__webglTexture), a.memory.textures--),
        n.remove(V[$]);
    }
    n.remove(C);
  }
  let E = 0;
  function L() {
    E = 0;
  }
  function k() {
    const C = E;
    return (
      C >= i.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            C +
            " texture units while this GPU supports only " +
            i.maxTextures
        ),
      (E += 1),
      C
    );
  }
  function O(C) {
    const T = [];
    return (
      T.push(C.wrapS),
      T.push(C.wrapT),
      T.push(C.wrapR || 0),
      T.push(C.magFilter),
      T.push(C.minFilter),
      T.push(C.anisotropy),
      T.push(C.internalFormat),
      T.push(C.format),
      T.push(C.type),
      T.push(C.generateMipmaps),
      T.push(C.premultiplyAlpha),
      T.push(C.flipY),
      T.push(C.unpackAlignment),
      T.push(C.colorSpace),
      T.join()
    );
  }
  function K(C, T) {
    const V = n.get(C);
    if (
      (C.isVideoTexture && ut(C),
      C.isRenderTargetTexture === !1 &&
        C.version > 0 &&
        V.__version !== C.version)
    ) {
      const $ = C.image;
      if ($ === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if ($.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        Ve(V, C, T);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, V.__webglTexture, r.TEXTURE0 + T);
  }
  function q(C, T) {
    const V = n.get(C);
    if (C.version > 0 && V.__version !== C.version) {
      Ve(V, C, T);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, V.__webglTexture, r.TEXTURE0 + T);
  }
  function G(C, T) {
    const V = n.get(C);
    if (C.version > 0 && V.__version !== C.version) {
      Ve(V, C, T);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, V.__webglTexture, r.TEXTURE0 + T);
  }
  function j(C, T) {
    const V = n.get(C);
    if (C.version > 0 && V.__version !== C.version) {
      Y(V, C, T);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, V.__webglTexture, r.TEXTURE0 + T);
  }
  const W = { [ar]: r.REPEAT, [Mi]: r.CLAMP_TO_EDGE, [oo]: r.MIRRORED_REPEAT },
    ie = {
      [Gt]: r.NEAREST,
      [Cf]: r.NEAREST_MIPMAP_NEAREST,
      [Fr]: r.NEAREST_MIPMAP_LINEAR,
      [rn]: r.LINEAR,
      [Za]: r.LINEAR_MIPMAP_NEAREST,
      [ni]: r.LINEAR_MIPMAP_LINEAR,
    },
    ae = {
      [xm]: r.NEVER,
      [Em]: r.ALWAYS,
      [vm]: r.LESS,
      [Vf]: r.LEQUAL,
      [ym]: r.EQUAL,
      [Tm]: r.GEQUAL,
      [Mm]: r.GREATER,
      [Sm]: r.NOTEQUAL,
    };
  function ue(C, T) {
    if (
      (T.type === wn &&
        e.has("OES_texture_float_linear") === !1 &&
        (T.magFilter === rn ||
          T.magFilter === Za ||
          T.magFilter === Fr ||
          T.magFilter === ni ||
          T.minFilter === rn ||
          T.minFilter === Za ||
          T.minFilter === Fr ||
          T.minFilter === ni) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      r.texParameteri(C, r.TEXTURE_WRAP_S, W[T.wrapS]),
      r.texParameteri(C, r.TEXTURE_WRAP_T, W[T.wrapT]),
      (C === r.TEXTURE_3D || C === r.TEXTURE_2D_ARRAY) &&
        r.texParameteri(C, r.TEXTURE_WRAP_R, W[T.wrapR]),
      r.texParameteri(C, r.TEXTURE_MAG_FILTER, ie[T.magFilter]),
      r.texParameteri(C, r.TEXTURE_MIN_FILTER, ie[T.minFilter]),
      T.compareFunction &&
        (r.texParameteri(C, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE),
        r.texParameteri(C, r.TEXTURE_COMPARE_FUNC, ae[T.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        T.magFilter === Gt ||
        (T.minFilter !== Fr && T.minFilter !== ni) ||
        (T.type === wn && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (T.anisotropy > 1 || n.get(T).__currentAnisotropy) {
        const V = e.get("EXT_texture_filter_anisotropic");
        r.texParameterf(
          C,
          V.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(T.anisotropy, i.getMaxAnisotropy())
        ),
          (n.get(T).__currentAnisotropy = T.anisotropy);
      }
    }
  }
  function Ce(C, T) {
    let V = !1;
    C.__webglInit === void 0 &&
      ((C.__webglInit = !0), T.addEventListener("dispose", R));
    const $ = T.source;
    let ee = f.get($);
    ee === void 0 && ((ee = {}), f.set($, ee));
    const Z = O(T);
    if (Z !== C.__cacheKey) {
      ee[Z] === void 0 &&
        ((ee[Z] = { texture: r.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (V = !0)),
        ee[Z].usedTimes++;
      const ve = ee[C.__cacheKey];
      ve !== void 0 &&
        (ee[C.__cacheKey].usedTimes--, ve.usedTimes === 0 && P(T)),
        (C.__cacheKey = Z),
        (C.__webglTexture = ee[Z].texture);
    }
    return V;
  }
  function Ve(C, T, V) {
    let $ = r.TEXTURE_2D;
    (T.isDataArrayTexture || T.isCompressedArrayTexture) &&
      ($ = r.TEXTURE_2D_ARRAY),
      T.isData3DTexture && ($ = r.TEXTURE_3D);
    const ee = Ce(C, T),
      Z = T.source;
    t.bindTexture($, C.__webglTexture, r.TEXTURE0 + V);
    const ve = n.get(Z);
    if (Z.version !== ve.__version || ee === !0) {
      t.activeTexture(r.TEXTURE0 + V);
      const se = Xe.getPrimaries(Xe.workingColorSpace),
        le = T.colorSpace === yi ? null : Xe.getPrimaries(T.colorSpace),
        Ie =
          T.colorSpace === yi || se === le ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, T.flipY),
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, T.premultiplyAlpha),
        r.pixelStorei(r.UNPACK_ALIGNMENT, T.unpackAlignment),
        r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ie);
      let te = _(T.image, !1, i.maxTextureSize);
      te = we(T, te);
      const ce = s.convert(T.format, T.colorSpace),
        ze = s.convert(T.type);
      let Se = y(T.internalFormat, ce, ze, T.colorSpace, T.isVideoTexture);
      ue($, T);
      let fe;
      const Ee = T.mipmaps,
        Re = T.isVideoTexture !== !0,
        rt = ve.__version === void 0 || ee === !0,
        x = Z.dataReady,
        F = S(T, te);
      if (T.isDepthTexture)
        (Se = v(T.format === lr, T.type)),
          rt &&
            (Re
              ? t.texStorage2D(r.TEXTURE_2D, 1, Se, te.width, te.height)
              : t.texImage2D(
                  r.TEXTURE_2D,
                  0,
                  Se,
                  te.width,
                  te.height,
                  0,
                  ce,
                  ze,
                  null
                ));
      else if (T.isDataTexture)
        if (Ee.length > 0) {
          Re &&
            rt &&
            t.texStorage2D(r.TEXTURE_2D, F, Se, Ee[0].width, Ee[0].height);
          for (let B = 0, X = Ee.length; B < X; B++)
            (fe = Ee[B]),
              Re
                ? x &&
                  t.texSubImage2D(
                    r.TEXTURE_2D,
                    B,
                    0,
                    0,
                    fe.width,
                    fe.height,
                    ce,
                    ze,
                    fe.data
                  )
                : t.texImage2D(
                    r.TEXTURE_2D,
                    B,
                    Se,
                    fe.width,
                    fe.height,
                    0,
                    ce,
                    ze,
                    fe.data
                  );
          T.generateMipmaps = !1;
        } else
          Re
            ? (rt && t.texStorage2D(r.TEXTURE_2D, F, Se, te.width, te.height),
              x &&
                t.texSubImage2D(
                  r.TEXTURE_2D,
                  0,
                  0,
                  0,
                  te.width,
                  te.height,
                  ce,
                  ze,
                  te.data
                ))
            : t.texImage2D(
                r.TEXTURE_2D,
                0,
                Se,
                te.width,
                te.height,
                0,
                ce,
                ze,
                te.data
              );
      else if (T.isCompressedTexture)
        if (T.isCompressedArrayTexture) {
          Re &&
            rt &&
            t.texStorage3D(
              r.TEXTURE_2D_ARRAY,
              F,
              Se,
              Ee[0].width,
              Ee[0].height,
              te.depth
            );
          for (let B = 0, X = Ee.length; B < X; B++)
            if (((fe = Ee[B]), T.format !== _n))
              if (ce !== null)
                if (Re) {
                  if (x)
                    if (T.layerUpdates.size > 0) {
                      const Q = Th(fe.width, fe.height, T.format, T.type);
                      for (const ge of T.layerUpdates) {
                        const Ae = fe.data.subarray(
                          (ge * Q) / fe.data.BYTES_PER_ELEMENT,
                          ((ge + 1) * Q) / fe.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(
                          r.TEXTURE_2D_ARRAY,
                          B,
                          0,
                          0,
                          ge,
                          fe.width,
                          fe.height,
                          1,
                          ce,
                          Ae,
                          0,
                          0
                        );
                      }
                      T.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        r.TEXTURE_2D_ARRAY,
                        B,
                        0,
                        0,
                        0,
                        fe.width,
                        fe.height,
                        te.depth,
                        ce,
                        fe.data,
                        0,
                        0
                      );
                } else
                  t.compressedTexImage3D(
                    r.TEXTURE_2D_ARRAY,
                    B,
                    Se,
                    fe.width,
                    fe.height,
                    te.depth,
                    0,
                    fe.data,
                    0,
                    0
                  );
              else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                );
            else
              Re
                ? x &&
                  t.texSubImage3D(
                    r.TEXTURE_2D_ARRAY,
                    B,
                    0,
                    0,
                    0,
                    fe.width,
                    fe.height,
                    te.depth,
                    ce,
                    ze,
                    fe.data
                  )
                : t.texImage3D(
                    r.TEXTURE_2D_ARRAY,
                    B,
                    Se,
                    fe.width,
                    fe.height,
                    te.depth,
                    0,
                    ce,
                    ze,
                    fe.data
                  );
        } else {
          Re &&
            rt &&
            t.texStorage2D(r.TEXTURE_2D, F, Se, Ee[0].width, Ee[0].height);
          for (let B = 0, X = Ee.length; B < X; B++)
            (fe = Ee[B]),
              T.format !== _n
                ? ce !== null
                  ? Re
                    ? x &&
                      t.compressedTexSubImage2D(
                        r.TEXTURE_2D,
                        B,
                        0,
                        0,
                        fe.width,
                        fe.height,
                        ce,
                        fe.data
                      )
                    : t.compressedTexImage2D(
                        r.TEXTURE_2D,
                        B,
                        Se,
                        fe.width,
                        fe.height,
                        0,
                        fe.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Re
                ? x &&
                  t.texSubImage2D(
                    r.TEXTURE_2D,
                    B,
                    0,
                    0,
                    fe.width,
                    fe.height,
                    ce,
                    ze,
                    fe.data
                  )
                : t.texImage2D(
                    r.TEXTURE_2D,
                    B,
                    Se,
                    fe.width,
                    fe.height,
                    0,
                    ce,
                    ze,
                    fe.data
                  );
        }
      else if (T.isDataArrayTexture)
        if (Re) {
          if (
            (rt &&
              t.texStorage3D(
                r.TEXTURE_2D_ARRAY,
                F,
                Se,
                te.width,
                te.height,
                te.depth
              ),
            x)
          )
            if (T.layerUpdates.size > 0) {
              const B = Th(te.width, te.height, T.format, T.type);
              for (const X of T.layerUpdates) {
                const Q = te.data.subarray(
                  (X * B) / te.data.BYTES_PER_ELEMENT,
                  ((X + 1) * B) / te.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(
                  r.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  X,
                  te.width,
                  te.height,
                  1,
                  ce,
                  ze,
                  Q
                );
              }
              T.clearLayerUpdates();
            } else
              t.texSubImage3D(
                r.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                te.width,
                te.height,
                te.depth,
                ce,
                ze,
                te.data
              );
        } else
          t.texImage3D(
            r.TEXTURE_2D_ARRAY,
            0,
            Se,
            te.width,
            te.height,
            te.depth,
            0,
            ce,
            ze,
            te.data
          );
      else if (T.isData3DTexture)
        Re
          ? (rt &&
              t.texStorage3D(
                r.TEXTURE_3D,
                F,
                Se,
                te.width,
                te.height,
                te.depth
              ),
            x &&
              t.texSubImage3D(
                r.TEXTURE_3D,
                0,
                0,
                0,
                0,
                te.width,
                te.height,
                te.depth,
                ce,
                ze,
                te.data
              ))
          : t.texImage3D(
              r.TEXTURE_3D,
              0,
              Se,
              te.width,
              te.height,
              te.depth,
              0,
              ce,
              ze,
              te.data
            );
      else if (T.isFramebufferTexture) {
        if (rt)
          if (Re) t.texStorage2D(r.TEXTURE_2D, F, Se, te.width, te.height);
          else {
            let B = te.width,
              X = te.height;
            for (let Q = 0; Q < F; Q++)
              t.texImage2D(r.TEXTURE_2D, Q, Se, B, X, 0, ce, ze, null),
                (B >>= 1),
                (X >>= 1);
          }
      } else if (Ee.length > 0) {
        if (Re && rt) {
          const B = Pe(Ee[0]);
          t.texStorage2D(r.TEXTURE_2D, F, Se, B.width, B.height);
        }
        for (let B = 0, X = Ee.length; B < X; B++)
          (fe = Ee[B]),
            Re
              ? x && t.texSubImage2D(r.TEXTURE_2D, B, 0, 0, ce, ze, fe)
              : t.texImage2D(r.TEXTURE_2D, B, Se, ce, ze, fe);
        T.generateMipmaps = !1;
      } else if (Re) {
        if (rt) {
          const B = Pe(te);
          t.texStorage2D(r.TEXTURE_2D, F, Se, B.width, B.height);
        }
        x && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, ce, ze, te);
      } else t.texImage2D(r.TEXTURE_2D, 0, Se, ce, ze, te);
      p(T) && m($), (ve.__version = Z.version), T.onUpdate && T.onUpdate(T);
    }
    C.__version = T.version;
  }
  function Y(C, T, V) {
    if (T.image.length !== 6) return;
    const $ = Ce(C, T),
      ee = T.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, C.__webglTexture, r.TEXTURE0 + V);
    const Z = n.get(ee);
    if (ee.version !== Z.__version || $ === !0) {
      t.activeTexture(r.TEXTURE0 + V);
      const ve = Xe.getPrimaries(Xe.workingColorSpace),
        se = T.colorSpace === yi ? null : Xe.getPrimaries(T.colorSpace),
        le =
          T.colorSpace === yi || ve === se ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, T.flipY),
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, T.premultiplyAlpha),
        r.pixelStorei(r.UNPACK_ALIGNMENT, T.unpackAlignment),
        r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, le);
      const Ie = T.isCompressedTexture || T.image[0].isCompressedTexture,
        te = T.image[0] && T.image[0].isDataTexture,
        ce = [];
      for (let X = 0; X < 6; X++)
        !Ie && !te
          ? (ce[X] = _(T.image[X], !0, i.maxCubemapSize))
          : (ce[X] = te ? T.image[X].image : T.image[X]),
          (ce[X] = we(T, ce[X]));
      const ze = ce[0],
        Se = s.convert(T.format, T.colorSpace),
        fe = s.convert(T.type),
        Ee = y(T.internalFormat, Se, fe, T.colorSpace),
        Re = T.isVideoTexture !== !0,
        rt = Z.__version === void 0 || $ === !0,
        x = ee.dataReady;
      let F = S(T, ze);
      ue(r.TEXTURE_CUBE_MAP, T);
      let B;
      if (Ie) {
        Re &&
          rt &&
          t.texStorage2D(r.TEXTURE_CUBE_MAP, F, Ee, ze.width, ze.height);
        for (let X = 0; X < 6; X++) {
          B = ce[X].mipmaps;
          for (let Q = 0; Q < B.length; Q++) {
            const ge = B[Q];
            T.format !== _n
              ? Se !== null
                ? Re
                  ? x &&
                    t.compressedTexSubImage2D(
                      r.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                      Q,
                      0,
                      0,
                      ge.width,
                      ge.height,
                      Se,
                      ge.data
                    )
                  : t.compressedTexImage2D(
                      r.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                      Q,
                      Ee,
                      ge.width,
                      ge.height,
                      0,
                      ge.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : Re
              ? x &&
                t.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  Q,
                  0,
                  0,
                  ge.width,
                  ge.height,
                  Se,
                  fe,
                  ge.data
                )
              : t.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  Q,
                  Ee,
                  ge.width,
                  ge.height,
                  0,
                  Se,
                  fe,
                  ge.data
                );
          }
        }
      } else {
        if (((B = T.mipmaps), Re && rt)) {
          B.length > 0 && F++;
          const X = Pe(ce[0]);
          t.texStorage2D(r.TEXTURE_CUBE_MAP, F, Ee, X.width, X.height);
        }
        for (let X = 0; X < 6; X++)
          if (te) {
            Re
              ? x &&
                t.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  0,
                  0,
                  0,
                  ce[X].width,
                  ce[X].height,
                  Se,
                  fe,
                  ce[X].data
                )
              : t.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  0,
                  Ee,
                  ce[X].width,
                  ce[X].height,
                  0,
                  Se,
                  fe,
                  ce[X].data
                );
            for (let Q = 0; Q < B.length; Q++) {
              const Ae = B[Q].image[X].image;
              Re
                ? x &&
                  t.texSubImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                    Q + 1,
                    0,
                    0,
                    Ae.width,
                    Ae.height,
                    Se,
                    fe,
                    Ae.data
                  )
                : t.texImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                    Q + 1,
                    Ee,
                    Ae.width,
                    Ae.height,
                    0,
                    Se,
                    fe,
                    Ae.data
                  );
            }
          } else {
            Re
              ? x &&
                t.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  0,
                  0,
                  0,
                  Se,
                  fe,
                  ce[X]
                )
              : t.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  0,
                  Ee,
                  Se,
                  fe,
                  ce[X]
                );
            for (let Q = 0; Q < B.length; Q++) {
              const ge = B[Q];
              Re
                ? x &&
                  t.texSubImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                    Q + 1,
                    0,
                    0,
                    Se,
                    fe,
                    ge.image[X]
                  )
                : t.texImage2D(
                    r.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                    Q + 1,
                    Ee,
                    Se,
                    fe,
                    ge.image[X]
                  );
            }
          }
      }
      p(T) && m(r.TEXTURE_CUBE_MAP),
        (Z.__version = ee.version),
        T.onUpdate && T.onUpdate(T);
    }
    C.__version = T.version;
  }
  function J(C, T, V, $, ee, Z) {
    const ve = s.convert(V.format, V.colorSpace),
      se = s.convert(V.type),
      le = y(V.internalFormat, ve, se, V.colorSpace);
    if (!n.get(T).__hasExternalTextures) {
      const te = Math.max(1, T.width >> Z),
        ce = Math.max(1, T.height >> Z);
      ee === r.TEXTURE_3D || ee === r.TEXTURE_2D_ARRAY
        ? t.texImage3D(ee, Z, le, te, ce, T.depth, 0, ve, se, null)
        : t.texImage2D(ee, Z, le, te, ce, 0, ve, se, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, C),
      _e(T)
        ? o.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            $,
            ee,
            n.get(V).__webglTexture,
            0,
            qe(T)
          )
        : (ee === r.TEXTURE_2D ||
            (ee >= r.TEXTURE_CUBE_MAP_POSITIVE_X &&
              ee <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          r.framebufferTexture2D(
            r.FRAMEBUFFER,
            $,
            ee,
            n.get(V).__webglTexture,
            Z
          ),
      t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function de(C, T, V) {
    if ((r.bindRenderbuffer(r.RENDERBUFFER, C), T.depthBuffer)) {
      const $ = T.depthTexture,
        ee = $ && $.isDepthTexture ? $.type : null,
        Z = v(T.stencilBuffer, ee),
        ve = T.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT,
        se = qe(T);
      _e(T)
        ? o.renderbufferStorageMultisampleEXT(
            r.RENDERBUFFER,
            se,
            Z,
            T.width,
            T.height
          )
        : V
        ? r.renderbufferStorageMultisample(
            r.RENDERBUFFER,
            se,
            Z,
            T.width,
            T.height
          )
        : r.renderbufferStorage(r.RENDERBUFFER, Z, T.width, T.height),
        r.framebufferRenderbuffer(r.FRAMEBUFFER, ve, r.RENDERBUFFER, C);
    } else {
      const $ = T.textures;
      for (let ee = 0; ee < $.length; ee++) {
        const Z = $[ee],
          ve = s.convert(Z.format, Z.colorSpace),
          se = s.convert(Z.type),
          le = y(Z.internalFormat, ve, se, Z.colorSpace),
          Ie = qe(T);
        V && _e(T) === !1
          ? r.renderbufferStorageMultisample(
              r.RENDERBUFFER,
              Ie,
              le,
              T.width,
              T.height
            )
          : _e(T)
          ? o.renderbufferStorageMultisampleEXT(
              r.RENDERBUFFER,
              Ie,
              le,
              T.width,
              T.height
            )
          : r.renderbufferStorage(r.RENDERBUFFER, le, T.width, T.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function he(C, T) {
    if (T && T.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(r.FRAMEBUFFER, C),
      !(T.depthTexture && T.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(T.depthTexture).__webglTexture ||
      T.depthTexture.image.width !== T.width ||
      T.depthTexture.image.height !== T.height) &&
      ((T.depthTexture.image.width = T.width),
      (T.depthTexture.image.height = T.height),
      (T.depthTexture.needsUpdate = !0)),
      K(T.depthTexture, 0);
    const $ = n.get(T.depthTexture).__webglTexture,
      ee = qe(T);
    if (T.depthTexture.format === Ks)
      _e(T)
        ? o.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            r.DEPTH_ATTACHMENT,
            r.TEXTURE_2D,
            $,
            0,
            ee
          )
        : r.framebufferTexture2D(
            r.FRAMEBUFFER,
            r.DEPTH_ATTACHMENT,
            r.TEXTURE_2D,
            $,
            0
          );
    else if (T.depthTexture.format === lr)
      _e(T)
        ? o.framebufferTexture2DMultisampleEXT(
            r.FRAMEBUFFER,
            r.DEPTH_STENCIL_ATTACHMENT,
            r.TEXTURE_2D,
            $,
            0,
            ee
          )
        : r.framebufferTexture2D(
            r.FRAMEBUFFER,
            r.DEPTH_STENCIL_ATTACHMENT,
            r.TEXTURE_2D,
            $,
            0
          );
    else throw new Error("Unknown depthTexture format");
  }
  function Le(C) {
    const T = n.get(C),
      V = C.isWebGLCubeRenderTarget === !0;
    if (C.depthTexture && !T.__autoAllocateDepthBuffer) {
      if (V)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      he(T.__webglFramebuffer, C);
    } else if (V) {
      T.__webglDepthbuffer = [];
      for (let $ = 0; $ < 6; $++)
        t.bindFramebuffer(r.FRAMEBUFFER, T.__webglFramebuffer[$]),
          (T.__webglDepthbuffer[$] = r.createRenderbuffer()),
          de(T.__webglDepthbuffer[$], C, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, T.__webglFramebuffer),
        (T.__webglDepthbuffer = r.createRenderbuffer()),
        de(T.__webglDepthbuffer, C, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Ne(C, T, V) {
    const $ = n.get(C);
    T !== void 0 &&
      J(
        $.__webglFramebuffer,
        C,
        C.texture,
        r.COLOR_ATTACHMENT0,
        r.TEXTURE_2D,
        0
      ),
      V !== void 0 && Le(C);
  }
  function Be(C) {
    const T = C.texture,
      V = n.get(C),
      $ = n.get(T);
    C.addEventListener("dispose", w);
    const ee = C.textures,
      Z = C.isWebGLCubeRenderTarget === !0,
      ve = ee.length > 1;
    if (
      (ve ||
        ($.__webglTexture === void 0 && ($.__webglTexture = r.createTexture()),
        ($.__version = T.version),
        a.memory.textures++),
      Z)
    ) {
      V.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        if (T.mipmaps && T.mipmaps.length > 0) {
          V.__webglFramebuffer[se] = [];
          for (let le = 0; le < T.mipmaps.length; le++)
            V.__webglFramebuffer[se][le] = r.createFramebuffer();
        } else V.__webglFramebuffer[se] = r.createFramebuffer();
    } else {
      if (T.mipmaps && T.mipmaps.length > 0) {
        V.__webglFramebuffer = [];
        for (let se = 0; se < T.mipmaps.length; se++)
          V.__webglFramebuffer[se] = r.createFramebuffer();
      } else V.__webglFramebuffer = r.createFramebuffer();
      if (ve)
        for (let se = 0, le = ee.length; se < le; se++) {
          const Ie = n.get(ee[se]);
          Ie.__webglTexture === void 0 &&
            ((Ie.__webglTexture = r.createTexture()), a.memory.textures++);
        }
      if (C.samples > 0 && _e(C) === !1) {
        (V.__webglMultisampledFramebuffer = r.createFramebuffer()),
          (V.__webglColorRenderbuffer = []),
          t.bindFramebuffer(r.FRAMEBUFFER, V.__webglMultisampledFramebuffer);
        for (let se = 0; se < ee.length; se++) {
          const le = ee[se];
          (V.__webglColorRenderbuffer[se] = r.createRenderbuffer()),
            r.bindRenderbuffer(r.RENDERBUFFER, V.__webglColorRenderbuffer[se]);
          const Ie = s.convert(le.format, le.colorSpace),
            te = s.convert(le.type),
            ce = y(
              le.internalFormat,
              Ie,
              te,
              le.colorSpace,
              C.isXRRenderTarget === !0
            ),
            ze = qe(C);
          r.renderbufferStorageMultisample(
            r.RENDERBUFFER,
            ze,
            ce,
            C.width,
            C.height
          ),
            r.framebufferRenderbuffer(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + se,
              r.RENDERBUFFER,
              V.__webglColorRenderbuffer[se]
            );
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null),
          C.depthBuffer &&
            ((V.__webglDepthRenderbuffer = r.createRenderbuffer()),
            de(V.__webglDepthRenderbuffer, C, !0)),
          t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (Z) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, $.__webglTexture),
        ue(r.TEXTURE_CUBE_MAP, T);
      for (let se = 0; se < 6; se++)
        if (T.mipmaps && T.mipmaps.length > 0)
          for (let le = 0; le < T.mipmaps.length; le++)
            J(
              V.__webglFramebuffer[se][le],
              C,
              T,
              r.COLOR_ATTACHMENT0,
              r.TEXTURE_CUBE_MAP_POSITIVE_X + se,
              le
            );
        else
          J(
            V.__webglFramebuffer[se],
            C,
            T,
            r.COLOR_ATTACHMENT0,
            r.TEXTURE_CUBE_MAP_POSITIVE_X + se,
            0
          );
      p(T) && m(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ve) {
      for (let se = 0, le = ee.length; se < le; se++) {
        const Ie = ee[se],
          te = n.get(Ie);
        t.bindTexture(r.TEXTURE_2D, te.__webglTexture),
          ue(r.TEXTURE_2D, Ie),
          J(
            V.__webglFramebuffer,
            C,
            Ie,
            r.COLOR_ATTACHMENT0 + se,
            r.TEXTURE_2D,
            0
          ),
          p(Ie) && m(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let se = r.TEXTURE_2D;
      if (
        ((C.isWebGL3DRenderTarget || C.isWebGLArrayRenderTarget) &&
          (se = C.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY),
        t.bindTexture(se, $.__webglTexture),
        ue(se, T),
        T.mipmaps && T.mipmaps.length > 0)
      )
        for (let le = 0; le < T.mipmaps.length; le++)
          J(V.__webglFramebuffer[le], C, T, r.COLOR_ATTACHMENT0, se, le);
      else J(V.__webglFramebuffer, C, T, r.COLOR_ATTACHMENT0, se, 0);
      p(T) && m(se), t.unbindTexture();
    }
    C.depthBuffer && Le(C);
  }
  function it(C) {
    const T = C.textures;
    for (let V = 0, $ = T.length; V < $; V++) {
      const ee = T[V];
      if (p(ee)) {
        const Z = C.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D,
          ve = n.get(ee).__webglTexture;
        t.bindTexture(Z, ve), m(Z), t.unbindTexture();
      }
    }
  }
  const I = [],
    ct = [];
  function We(C) {
    if (C.samples > 0) {
      if (_e(C) === !1) {
        const T = C.textures,
          V = C.width,
          $ = C.height;
        let ee = r.COLOR_BUFFER_BIT;
        const Z = C.stencilBuffer
            ? r.DEPTH_STENCIL_ATTACHMENT
            : r.DEPTH_ATTACHMENT,
          ve = n.get(C),
          se = T.length > 1;
        if (se)
          for (let le = 0; le < T.length; le++)
            t.bindFramebuffer(r.FRAMEBUFFER, ve.__webglMultisampledFramebuffer),
              r.framebufferRenderbuffer(
                r.FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + le,
                r.RENDERBUFFER,
                null
              ),
              t.bindFramebuffer(r.FRAMEBUFFER, ve.__webglFramebuffer),
              r.framebufferTexture2D(
                r.DRAW_FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + le,
                r.TEXTURE_2D,
                null,
                0
              );
        t.bindFramebuffer(
          r.READ_FRAMEBUFFER,
          ve.__webglMultisampledFramebuffer
        ),
          t.bindFramebuffer(r.DRAW_FRAMEBUFFER, ve.__webglFramebuffer);
        for (let le = 0; le < T.length; le++) {
          if (
            (C.resolveDepthBuffer &&
              (C.depthBuffer && (ee |= r.DEPTH_BUFFER_BIT),
              C.stencilBuffer &&
                C.resolveStencilBuffer &&
                (ee |= r.STENCIL_BUFFER_BIT)),
            se)
          ) {
            r.framebufferRenderbuffer(
              r.READ_FRAMEBUFFER,
              r.COLOR_ATTACHMENT0,
              r.RENDERBUFFER,
              ve.__webglColorRenderbuffer[le]
            );
            const Ie = n.get(T[le]).__webglTexture;
            r.framebufferTexture2D(
              r.DRAW_FRAMEBUFFER,
              r.COLOR_ATTACHMENT0,
              r.TEXTURE_2D,
              Ie,
              0
            );
          }
          r.blitFramebuffer(0, 0, V, $, 0, 0, V, $, ee, r.NEAREST),
            l === !0 &&
              ((I.length = 0),
              (ct.length = 0),
              I.push(r.COLOR_ATTACHMENT0 + le),
              C.depthBuffer &&
                C.resolveDepthBuffer === !1 &&
                (I.push(Z),
                ct.push(Z),
                r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, ct)),
              r.invalidateFramebuffer(r.READ_FRAMEBUFFER, I));
        }
        if (
          (t.bindFramebuffer(r.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null),
          se)
        )
          for (let le = 0; le < T.length; le++) {
            t.bindFramebuffer(r.FRAMEBUFFER, ve.__webglMultisampledFramebuffer),
              r.framebufferRenderbuffer(
                r.FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + le,
                r.RENDERBUFFER,
                ve.__webglColorRenderbuffer[le]
              );
            const Ie = n.get(T[le]).__webglTexture;
            t.bindFramebuffer(r.FRAMEBUFFER, ve.__webglFramebuffer),
              r.framebufferTexture2D(
                r.DRAW_FRAMEBUFFER,
                r.COLOR_ATTACHMENT0 + le,
                r.TEXTURE_2D,
                Ie,
                0
              );
          }
        t.bindFramebuffer(
          r.DRAW_FRAMEBUFFER,
          ve.__webglMultisampledFramebuffer
        );
      } else if (C.depthBuffer && C.resolveDepthBuffer === !1 && l) {
        const T = C.stencilBuffer
          ? r.DEPTH_STENCIL_ATTACHMENT
          : r.DEPTH_ATTACHMENT;
        r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [T]);
      }
    }
  }
  function qe(C) {
    return Math.min(i.maxSamples, C.samples);
  }
  function _e(C) {
    const T = n.get(C);
    return (
      C.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      T.__useRenderToTexture !== !1
    );
  }
  function ut(C) {
    const T = a.render.frame;
    u.get(C) !== T && (u.set(C, T), C.update());
  }
  function we(C, T) {
    const V = C.colorSpace,
      $ = C.format,
      ee = C.type;
    return (
      C.isCompressedTexture === !0 ||
        C.isVideoTexture === !0 ||
        (V !== It &&
          V !== yi &&
          (Xe.getTransfer(V) === st
            ? ($ !== _n || ee !== ri) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                V
              ))),
      T
    );
  }
  function Pe(C) {
    return (
      typeof HTMLImageElement < "u" && C instanceof HTMLImageElement
        ? ((c.width = C.naturalWidth || C.width),
          (c.height = C.naturalHeight || C.height))
        : typeof VideoFrame < "u" && C instanceof VideoFrame
        ? ((c.width = C.displayWidth), (c.height = C.displayHeight))
        : ((c.width = C.width), (c.height = C.height)),
      c
    );
  }
  (this.allocateTextureUnit = k),
    (this.resetTextureUnits = L),
    (this.setTexture2D = K),
    (this.setTexture2DArray = q),
    (this.setTexture3D = G),
    (this.setTextureCube = j),
    (this.rebindTextures = Ne),
    (this.setupRenderTarget = Be),
    (this.updateRenderTargetMipmap = it),
    (this.updateMultisampleRenderTarget = We),
    (this.setupDepthRenderbuffer = Le),
    (this.setupFrameBufferTexture = J),
    (this.useMultisampledRTT = _e);
}
function Hv(r, e) {
  function t(n, i = yi) {
    let s;
    const a = Xe.getTransfer(i);
    if (n === ri) return r.UNSIGNED_BYTE;
    if (n === Nc) return r.UNSIGNED_SHORT_4_4_4_4;
    if (n === Uc) return r.UNSIGNED_SHORT_5_5_5_1;
    if (n === If) return r.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Pf) return r.BYTE;
    if (n === Lf) return r.SHORT;
    if (n === jr) return r.UNSIGNED_SHORT;
    if (n === Dc) return r.INT;
    if (n === ms) return r.UNSIGNED_INT;
    if (n === wn) return r.FLOAT;
    if (n === oa) return r.HALF_FLOAT;
    if (n === Df) return r.ALPHA;
    if (n === Nf) return r.RGB;
    if (n === _n) return r.RGBA;
    if (n === Uf) return r.LUMINANCE;
    if (n === Of) return r.LUMINANCE_ALPHA;
    if (n === Ks) return r.DEPTH_COMPONENT;
    if (n === lr) return r.DEPTH_STENCIL;
    if (n === Oc) return r.RED;
    if (n === Fc) return r.RED_INTEGER;
    if (n === Ff) return r.RG;
    if (n === Bc) return r.RG_INTEGER;
    if (n === kc) return r.RGBA_INTEGER;
    if (n === $a || n === Ja || n === Qa || n === eo)
      if (a === st)
        if (((s = e.get("WEBGL_compressed_texture_s3tc_srgb")), s !== null)) {
          if (n === $a) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Ja) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Qa) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === eo) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((s = e.get("WEBGL_compressed_texture_s3tc")), s !== null)) {
        if (n === $a) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Ja) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Qa) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === eo) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === Nl || n === Ul || n === Ol || n === Fl)
      if (((s = e.get("WEBGL_compressed_texture_pvrtc")), s !== null)) {
        if (n === Nl) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Ul) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Ol) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Fl) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (n === Bl || n === kl || n === zl)
      if (((s = e.get("WEBGL_compressed_texture_etc")), s !== null)) {
        if (n === Bl || n === kl)
          return a === st ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === zl)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      n === Hl ||
      n === Vl ||
      n === Gl ||
      n === Wl ||
      n === Xl ||
      n === ql ||
      n === Yl ||
      n === jl ||
      n === Kl ||
      n === Zl ||
      n === $l ||
      n === Jl ||
      n === Ql ||
      n === ec
    )
      if (((s = e.get("WEBGL_compressed_texture_astc")), s !== null)) {
        if (n === Hl)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Vl)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Gl)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Wl)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Xl)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === ql)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Yl)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === jl)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Kl)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Zl)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === $l)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Jl)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Ql)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === ec)
          return a === st
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === to || n === tc || n === nc)
      if (((s = e.get("EXT_texture_compression_bptc")), s !== null)) {
        if (n === to)
          return a === st
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === tc) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === nc) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === Bf || n === ic || n === sc || n === rc)
      if (((s = e.get("EXT_texture_compression_rgtc")), s !== null)) {
        if (n === to) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === ic) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === sc) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === rc) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === or ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null;
  }
  return { convert: t };
}
class Vv extends Ht {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Ti extends nt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Gv = { type: "move" };
class ll {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Ti()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Ti()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new D()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new D())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Ti()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new D()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new D())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      s = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const _ of e.hand.values()) {
          const p = t.getJointPose(_, n),
            m = this._getHandJoint(c, _);
          p !== null &&
            (m.matrix.fromArray(p.transform.matrix),
            m.matrix.decompose(m.position, m.rotation, m.scale),
            (m.matrixWorldNeedsUpdate = !0),
            (m.jointRadius = p.radius)),
            (m.visible = p !== null);
        }
        const u = c.joints["index-finger-tip"],
          h = c.joints["thumb-tip"],
          f = u.position.distanceTo(h.position),
          d = 0.02,
          g = 0.005;
        c.inputState.pinching && f > d + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            f <= d - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      o !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && s !== null && (i = s),
        i !== null &&
          (o.matrix.fromArray(i.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(i.linearVelocity))
            : (o.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(i.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(Gv)));
    }
    return (
      o !== null && (o.visible = i !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Ti();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Wv = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  Xv = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class qv {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new bt(),
        s = e.properties.get(i);
      (s.__webglTexture = t.texture),
        (t.depthNear != n.depthNear || t.depthFar != n.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = i);
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new Ni({
          vertexShader: Wv,
          fragmentShader: Xv,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new qt(new wo(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Yv extends ki {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      s = 1,
      a = null,
      o = "local-floor",
      l = 1,
      c = null,
      u = null,
      h = null,
      f = null,
      d = null,
      g = null;
    const _ = new qv(),
      p = t.getContextAttributes();
    let m = null,
      y = null;
    const v = [],
      S = [],
      R = new Me();
    let w = null;
    const b = new Ht();
    b.layers.enable(1), (b.viewport = new Je());
    const P = new Ht();
    P.layers.enable(2), (P.viewport = new Je());
    const M = [b, P],
      E = new Vv();
    E.layers.enable(1), E.layers.enable(2);
    let L = null,
      k = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (Y) {
        let J = v[Y];
        return (
          J === void 0 && ((J = new ll()), (v[Y] = J)), J.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (Y) {
        let J = v[Y];
        return J === void 0 && ((J = new ll()), (v[Y] = J)), J.getGripSpace();
      }),
      (this.getHand = function (Y) {
        let J = v[Y];
        return J === void 0 && ((J = new ll()), (v[Y] = J)), J.getHandSpace();
      });
    function O(Y) {
      const J = S.indexOf(Y.inputSource);
      if (J === -1) return;
      const de = v[J];
      de !== void 0 &&
        (de.update(Y.inputSource, Y.frame, c || a),
        de.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function K() {
      i.removeEventListener("select", O),
        i.removeEventListener("selectstart", O),
        i.removeEventListener("selectend", O),
        i.removeEventListener("squeeze", O),
        i.removeEventListener("squeezestart", O),
        i.removeEventListener("squeezeend", O),
        i.removeEventListener("end", K),
        i.removeEventListener("inputsourceschange", q);
      for (let Y = 0; Y < v.length; Y++) {
        const J = S[Y];
        J !== null && ((S[Y] = null), v[Y].disconnect(J));
      }
      (L = null),
        (k = null),
        _.reset(),
        e.setRenderTarget(m),
        (d = null),
        (f = null),
        (h = null),
        (i = null),
        (y = null),
        Ve.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(w),
        e.setSize(R.width, R.height, !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (Y) {
      (s = Y),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (Y) {
        (o = Y),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return c || a;
      }),
      (this.setReferenceSpace = function (Y) {
        c = Y;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : d;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (Y) {
        if (((i = Y), i !== null)) {
          if (
            ((m = e.getRenderTarget()),
            i.addEventListener("select", O),
            i.addEventListener("selectstart", O),
            i.addEventListener("selectend", O),
            i.addEventListener("squeeze", O),
            i.addEventListener("squeezestart", O),
            i.addEventListener("squeezeend", O),
            i.addEventListener("end", K),
            i.addEventListener("inputsourceschange", q),
            p.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (w = e.getPixelRatio()),
            e.getSize(R),
            i.renderState.layers === void 0)
          ) {
            const J = {
              antialias: p.antialias,
              alpha: !0,
              depth: p.depth,
              stencil: p.stencil,
              framebufferScaleFactor: s,
            };
            (d = new XRWebGLLayer(i, t, J)),
              i.updateRenderState({ baseLayer: d }),
              e.setPixelRatio(1),
              e.setSize(d.framebufferWidth, d.framebufferHeight, !1),
              (y = new _s(d.framebufferWidth, d.framebufferHeight, {
                format: _n,
                type: ri,
                colorSpace: e.outputColorSpace,
                stencilBuffer: p.stencil,
              }));
          } else {
            let J = null,
              de = null,
              he = null;
            p.depth &&
              ((he = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (J = p.stencil ? lr : Ks),
              (de = p.stencil ? or : ms));
            const Le = {
              colorFormat: t.RGBA8,
              depthFormat: he,
              scaleFactor: s,
            };
            (h = new XRWebGLBinding(i, t)),
              (f = h.createProjectionLayer(Le)),
              i.updateRenderState({ layers: [f] }),
              e.setPixelRatio(1),
              e.setSize(f.textureWidth, f.textureHeight, !1),
              (y = new _s(f.textureWidth, f.textureHeight, {
                format: _n,
                type: ri,
                depthTexture: new ed(
                  f.textureWidth,
                  f.textureHeight,
                  de,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  J
                ),
                stencilBuffer: p.stencil,
                colorSpace: e.outputColorSpace,
                samples: p.antialias ? 4 : 0,
                resolveDepthBuffer: f.ignoreDepthValues === !1,
              }));
          }
          (y.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (a = await i.requestReferenceSpace(o)),
            Ve.setContext(i),
            Ve.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (i !== null) return i.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return _.getDepthTexture();
      });
    function q(Y) {
      for (let J = 0; J < Y.removed.length; J++) {
        const de = Y.removed[J],
          he = S.indexOf(de);
        he >= 0 && ((S[he] = null), v[he].disconnect(de));
      }
      for (let J = 0; J < Y.added.length; J++) {
        const de = Y.added[J];
        let he = S.indexOf(de);
        if (he === -1) {
          for (let Ne = 0; Ne < v.length; Ne++)
            if (Ne >= S.length) {
              S.push(de), (he = Ne);
              break;
            } else if (S[Ne] === null) {
              (S[Ne] = de), (he = Ne);
              break;
            }
          if (he === -1) break;
        }
        const Le = v[he];
        Le && Le.connect(de);
      }
    }
    const G = new D(),
      j = new D();
    function W(Y, J, de) {
      G.setFromMatrixPosition(J.matrixWorld),
        j.setFromMatrixPosition(de.matrixWorld);
      const he = G.distanceTo(j),
        Le = J.projectionMatrix.elements,
        Ne = de.projectionMatrix.elements,
        Be = Le[14] / (Le[10] - 1),
        it = Le[14] / (Le[10] + 1),
        I = (Le[9] + 1) / Le[5],
        ct = (Le[9] - 1) / Le[5],
        We = (Le[8] - 1) / Le[0],
        qe = (Ne[8] + 1) / Ne[0],
        _e = Be * We,
        ut = Be * qe,
        we = he / (-We + qe),
        Pe = we * -We;
      J.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale),
        Y.translateX(Pe),
        Y.translateZ(we),
        Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale),
        Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
      const C = Be + we,
        T = it + we,
        V = _e - Pe,
        $ = ut + (he - Pe),
        ee = ((I * it) / T) * C,
        Z = ((ct * it) / T) * C;
      Y.projectionMatrix.makePerspective(V, $, ee, Z, C, T),
        Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
    }
    function ie(Y, J) {
      J === null
        ? Y.matrixWorld.copy(Y.matrix)
        : Y.matrixWorld.multiplyMatrices(J.matrixWorld, Y.matrix),
        Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function (Y) {
      if (i === null) return;
      _.texture !== null && ((Y.near = _.depthNear), (Y.far = _.depthFar)),
        (E.near = P.near = b.near = Y.near),
        (E.far = P.far = b.far = Y.far),
        (L !== E.near || k !== E.far) &&
          (i.updateRenderState({ depthNear: E.near, depthFar: E.far }),
          (L = E.near),
          (k = E.far),
          (b.near = L),
          (b.far = k),
          (P.near = L),
          (P.far = k),
          b.updateProjectionMatrix(),
          P.updateProjectionMatrix(),
          Y.updateProjectionMatrix());
      const J = Y.parent,
        de = E.cameras;
      ie(E, J);
      for (let he = 0; he < de.length; he++) ie(de[he], J);
      de.length === 2
        ? W(E, b, P)
        : E.projectionMatrix.copy(b.projectionMatrix),
        ae(Y, E, J);
    };
    function ae(Y, J, de) {
      de === null
        ? Y.matrix.copy(J.matrixWorld)
        : (Y.matrix.copy(de.matrixWorld),
          Y.matrix.invert(),
          Y.matrix.multiply(J.matrixWorld)),
        Y.matrix.decompose(Y.position, Y.quaternion, Y.scale),
        Y.updateMatrixWorld(!0),
        Y.projectionMatrix.copy(J.projectionMatrix),
        Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),
        Y.isPerspectiveCamera &&
          ((Y.fov = cr * 2 * Math.atan(1 / Y.projectionMatrix.elements[5])),
          (Y.zoom = 1));
    }
    (this.getCamera = function () {
      return E;
    }),
      (this.getFoveation = function () {
        if (!(f === null && d === null)) return l;
      }),
      (this.setFoveation = function (Y) {
        (l = Y),
          f !== null && (f.fixedFoveation = Y),
          d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = Y);
      }),
      (this.hasDepthSensing = function () {
        return _.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return _.getMesh(E);
      });
    let ue = null;
    function Ce(Y, J) {
      if (((u = J.getViewerPose(c || a)), (g = J), u !== null)) {
        const de = u.views;
        d !== null &&
          (e.setRenderTargetFramebuffer(y, d.framebuffer),
          e.setRenderTarget(y));
        let he = !1;
        de.length !== E.cameras.length && ((E.cameras.length = 0), (he = !0));
        for (let Ne = 0; Ne < de.length; Ne++) {
          const Be = de[Ne];
          let it = null;
          if (d !== null) it = d.getViewport(Be);
          else {
            const ct = h.getViewSubImage(f, Be);
            (it = ct.viewport),
              Ne === 0 &&
                (e.setRenderTargetTextures(
                  y,
                  ct.colorTexture,
                  f.ignoreDepthValues ? void 0 : ct.depthStencilTexture
                ),
                e.setRenderTarget(y));
          }
          let I = M[Ne];
          I === void 0 &&
            ((I = new Ht()),
            I.layers.enable(Ne),
            (I.viewport = new Je()),
            (M[Ne] = I)),
            I.matrix.fromArray(Be.transform.matrix),
            I.matrix.decompose(I.position, I.quaternion, I.scale),
            I.projectionMatrix.fromArray(Be.projectionMatrix),
            I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),
            I.viewport.set(it.x, it.y, it.width, it.height),
            Ne === 0 &&
              (E.matrix.copy(I.matrix),
              E.matrix.decompose(E.position, E.quaternion, E.scale)),
            he === !0 && E.cameras.push(I);
        }
        const Le = i.enabledFeatures;
        if (Le && Le.includes("depth-sensing")) {
          const Ne = h.getDepthInformation(de[0]);
          Ne && Ne.isValid && Ne.texture && _.init(e, Ne, i.renderState);
        }
      }
      for (let de = 0; de < v.length; de++) {
        const he = S[de],
          Le = v[de];
        he !== null && Le !== void 0 && Le.update(he, J, c || a);
      }
      ue && ue(Y, J),
        J.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: J }),
        (g = null);
    }
    const Ve = new Qf();
    Ve.setAnimationLoop(Ce),
      (this.setAnimationLoop = function (Y) {
        ue = Y;
      }),
      (this.dispose = function () {});
  }
}
const ji = new zn(),
  jv = new Ue();
function Kv(r, e) {
  function t(p, m) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), m.value.copy(p.matrix);
  }
  function n(p, m) {
    m.color.getRGB(p.fogColor.value, Zf(r)),
      m.isFog
        ? ((p.fogNear.value = m.near), (p.fogFar.value = m.far))
        : m.isFogExp2 && (p.fogDensity.value = m.density);
  }
  function i(p, m, y, v, S) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial
      ? s(p, m)
      : m.isMeshToonMaterial
      ? (s(p, m), h(p, m))
      : m.isMeshPhongMaterial
      ? (s(p, m), u(p, m))
      : m.isMeshStandardMaterial
      ? (s(p, m), f(p, m), m.isMeshPhysicalMaterial && d(p, m, S))
      : m.isMeshMatcapMaterial
      ? (s(p, m), g(p, m))
      : m.isMeshDepthMaterial
      ? s(p, m)
      : m.isMeshDistanceMaterial
      ? (s(p, m), _(p, m))
      : m.isMeshNormalMaterial
      ? s(p, m)
      : m.isLineBasicMaterial
      ? (a(p, m), m.isLineDashedMaterial && o(p, m))
      : m.isPointsMaterial
      ? l(p, m, y, v)
      : m.isSpriteMaterial
      ? c(p, m)
      : m.isShadowMaterial
      ? (p.color.value.copy(m.color), (p.opacity.value = m.opacity))
      : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function s(p, m) {
    (p.opacity.value = m.opacity),
      m.color && p.diffuse.value.copy(m.color),
      m.emissive &&
        p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),
      m.map && ((p.map.value = m.map), t(m.map, p.mapTransform)),
      m.alphaMap &&
        ((p.alphaMap.value = m.alphaMap), t(m.alphaMap, p.alphaMapTransform)),
      m.bumpMap &&
        ((p.bumpMap.value = m.bumpMap),
        t(m.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = m.bumpScale),
        m.side === Yt && (p.bumpScale.value *= -1)),
      m.normalMap &&
        ((p.normalMap.value = m.normalMap),
        t(m.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(m.normalScale),
        m.side === Yt && p.normalScale.value.negate()),
      m.displacementMap &&
        ((p.displacementMap.value = m.displacementMap),
        t(m.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = m.displacementScale),
        (p.displacementBias.value = m.displacementBias)),
      m.emissiveMap &&
        ((p.emissiveMap.value = m.emissiveMap),
        t(m.emissiveMap, p.emissiveMapTransform)),
      m.specularMap &&
        ((p.specularMap.value = m.specularMap),
        t(m.specularMap, p.specularMapTransform)),
      m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    const y = e.get(m),
      v = y.envMap,
      S = y.envMapRotation;
    v &&
      ((p.envMap.value = v),
      ji.copy(S),
      (ji.x *= -1),
      (ji.y *= -1),
      (ji.z *= -1),
      v.isCubeTexture &&
        v.isRenderTargetTexture === !1 &&
        ((ji.y *= -1), (ji.z *= -1)),
      p.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(ji)),
      (p.flipEnvMap.value =
        v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1),
      (p.reflectivity.value = m.reflectivity),
      (p.ior.value = m.ior),
      (p.refractionRatio.value = m.refractionRatio)),
      m.lightMap &&
        ((p.lightMap.value = m.lightMap),
        (p.lightMapIntensity.value = m.lightMapIntensity),
        t(m.lightMap, p.lightMapTransform)),
      m.aoMap &&
        ((p.aoMap.value = m.aoMap),
        (p.aoMapIntensity.value = m.aoMapIntensity),
        t(m.aoMap, p.aoMapTransform));
  }
  function a(p, m) {
    p.diffuse.value.copy(m.color),
      (p.opacity.value = m.opacity),
      m.map && ((p.map.value = m.map), t(m.map, p.mapTransform));
  }
  function o(p, m) {
    (p.dashSize.value = m.dashSize),
      (p.totalSize.value = m.dashSize + m.gapSize),
      (p.scale.value = m.scale);
  }
  function l(p, m, y, v) {
    p.diffuse.value.copy(m.color),
      (p.opacity.value = m.opacity),
      (p.size.value = m.size * y),
      (p.scale.value = v * 0.5),
      m.map && ((p.map.value = m.map), t(m.map, p.uvTransform)),
      m.alphaMap &&
        ((p.alphaMap.value = m.alphaMap), t(m.alphaMap, p.alphaMapTransform)),
      m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function c(p, m) {
    p.diffuse.value.copy(m.color),
      (p.opacity.value = m.opacity),
      (p.rotation.value = m.rotation),
      m.map && ((p.map.value = m.map), t(m.map, p.mapTransform)),
      m.alphaMap &&
        ((p.alphaMap.value = m.alphaMap), t(m.alphaMap, p.alphaMapTransform)),
      m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function u(p, m) {
    p.specular.value.copy(m.specular),
      (p.shininess.value = Math.max(m.shininess, 1e-4));
  }
  function h(p, m) {
    m.gradientMap && (p.gradientMap.value = m.gradientMap);
  }
  function f(p, m) {
    (p.metalness.value = m.metalness),
      m.metalnessMap &&
        ((p.metalnessMap.value = m.metalnessMap),
        t(m.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = m.roughness),
      m.roughnessMap &&
        ((p.roughnessMap.value = m.roughnessMap),
        t(m.roughnessMap, p.roughnessMapTransform)),
      m.envMap && (p.envMapIntensity.value = m.envMapIntensity);
  }
  function d(p, m, y) {
    (p.ior.value = m.ior),
      m.sheen > 0 &&
        (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),
        (p.sheenRoughness.value = m.sheenRoughness),
        m.sheenColorMap &&
          ((p.sheenColorMap.value = m.sheenColorMap),
          t(m.sheenColorMap, p.sheenColorMapTransform)),
        m.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = m.sheenRoughnessMap),
          t(m.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      m.clearcoat > 0 &&
        ((p.clearcoat.value = m.clearcoat),
        (p.clearcoatRoughness.value = m.clearcoatRoughness),
        m.clearcoatMap &&
          ((p.clearcoatMap.value = m.clearcoatMap),
          t(m.clearcoatMap, p.clearcoatMapTransform)),
        m.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap),
          t(m.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        m.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = m.clearcoatNormalMap),
          t(m.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),
          m.side === Yt && p.clearcoatNormalScale.value.negate())),
      m.dispersion > 0 && (p.dispersion.value = m.dispersion),
      m.iridescence > 0 &&
        ((p.iridescence.value = m.iridescence),
        (p.iridescenceIOR.value = m.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1]),
        m.iridescenceMap &&
          ((p.iridescenceMap.value = m.iridescenceMap),
          t(m.iridescenceMap, p.iridescenceMapTransform)),
        m.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = m.iridescenceThicknessMap),
          t(m.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      m.transmission > 0 &&
        ((p.transmission.value = m.transmission),
        (p.transmissionSamplerMap.value = y.texture),
        p.transmissionSamplerSize.value.set(y.width, y.height),
        m.transmissionMap &&
          ((p.transmissionMap.value = m.transmissionMap),
          t(m.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = m.thickness),
        m.thicknessMap &&
          ((p.thicknessMap.value = m.thicknessMap),
          t(m.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = m.attenuationDistance),
        p.attenuationColor.value.copy(m.attenuationColor)),
      m.anisotropy > 0 &&
        (p.anisotropyVector.value.set(
          m.anisotropy * Math.cos(m.anisotropyRotation),
          m.anisotropy * Math.sin(m.anisotropyRotation)
        ),
        m.anisotropyMap &&
          ((p.anisotropyMap.value = m.anisotropyMap),
          t(m.anisotropyMap, p.anisotropyMapTransform))),
      (p.specularIntensity.value = m.specularIntensity),
      p.specularColor.value.copy(m.specularColor),
      m.specularColorMap &&
        ((p.specularColorMap.value = m.specularColorMap),
        t(m.specularColorMap, p.specularColorMapTransform)),
      m.specularIntensityMap &&
        ((p.specularIntensityMap.value = m.specularIntensityMap),
        t(m.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, m) {
    m.matcap && (p.matcap.value = m.matcap);
  }
  function _(p, m) {
    const y = e.get(m).light;
    p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),
      (p.nearDistance.value = y.shadow.camera.near),
      (p.farDistance.value = y.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function Zv(r, e, t, n) {
  let i = {},
    s = {},
    a = [];
  const o = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(y, v) {
    const S = v.program;
    n.uniformBlockBinding(y, S);
  }
  function c(y, v) {
    let S = i[y.id];
    S === void 0 &&
      (g(y), (S = u(y)), (i[y.id] = S), y.addEventListener("dispose", p));
    const R = v.program;
    n.updateUBOMapping(y, R);
    const w = e.render.frame;
    s[y.id] !== w && (f(y), (s[y.id] = w));
  }
  function u(y) {
    const v = h();
    y.__bindingPointIndex = v;
    const S = r.createBuffer(),
      R = y.__size,
      w = y.usage;
    return (
      r.bindBuffer(r.UNIFORM_BUFFER, S),
      r.bufferData(r.UNIFORM_BUFFER, R, w),
      r.bindBuffer(r.UNIFORM_BUFFER, null),
      r.bindBufferBase(r.UNIFORM_BUFFER, v, S),
      S
    );
  }
  function h() {
    for (let y = 0; y < o; y++) if (a.indexOf(y) === -1) return a.push(y), y;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function f(y) {
    const v = i[y.id],
      S = y.uniforms,
      R = y.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, v);
    for (let w = 0, b = S.length; w < b; w++) {
      const P = Array.isArray(S[w]) ? S[w] : [S[w]];
      for (let M = 0, E = P.length; M < E; M++) {
        const L = P[M];
        if (d(L, w, M, R) === !0) {
          const k = L.__offset,
            O = Array.isArray(L.value) ? L.value : [L.value];
          let K = 0;
          for (let q = 0; q < O.length; q++) {
            const G = O[q],
              j = _(G);
            typeof G == "number" || typeof G == "boolean"
              ? ((L.__data[0] = G),
                r.bufferSubData(r.UNIFORM_BUFFER, k + K, L.__data))
              : G.isMatrix3
              ? ((L.__data[0] = G.elements[0]),
                (L.__data[1] = G.elements[1]),
                (L.__data[2] = G.elements[2]),
                (L.__data[3] = 0),
                (L.__data[4] = G.elements[3]),
                (L.__data[5] = G.elements[4]),
                (L.__data[6] = G.elements[5]),
                (L.__data[7] = 0),
                (L.__data[8] = G.elements[6]),
                (L.__data[9] = G.elements[7]),
                (L.__data[10] = G.elements[8]),
                (L.__data[11] = 0))
              : (G.toArray(L.__data, K),
                (K += j.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          r.bufferSubData(r.UNIFORM_BUFFER, k, L.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function d(y, v, S, R) {
    const w = y.value,
      b = v + "_" + S;
    if (R[b] === void 0)
      return (
        typeof w == "number" || typeof w == "boolean"
          ? (R[b] = w)
          : (R[b] = w.clone()),
        !0
      );
    {
      const P = R[b];
      if (typeof w == "number" || typeof w == "boolean") {
        if (P !== w) return (R[b] = w), !0;
      } else if (P.equals(w) === !1) return P.copy(w), !0;
    }
    return !1;
  }
  function g(y) {
    const v = y.uniforms;
    let S = 0;
    const R = 16;
    for (let b = 0, P = v.length; b < P; b++) {
      const M = Array.isArray(v[b]) ? v[b] : [v[b]];
      for (let E = 0, L = M.length; E < L; E++) {
        const k = M[E],
          O = Array.isArray(k.value) ? k.value : [k.value];
        for (let K = 0, q = O.length; K < q; K++) {
          const G = O[K],
            j = _(G),
            W = S % R,
            ie = W % j.boundary,
            ae = W + ie;
          (S += ie),
            ae !== 0 && R - ae < j.storage && (S += R - ae),
            (k.__data = new Float32Array(
              j.storage / Float32Array.BYTES_PER_ELEMENT
            )),
            (k.__offset = S),
            (S += j.storage);
        }
      }
    }
    const w = S % R;
    return w > 0 && (S += R - w), (y.__size = S), (y.__cache = {}), this;
  }
  function _(y) {
    const v = { boundary: 0, storage: 0 };
    return (
      typeof y == "number" || typeof y == "boolean"
        ? ((v.boundary = 4), (v.storage = 4))
        : y.isVector2
        ? ((v.boundary = 8), (v.storage = 8))
        : y.isVector3 || y.isColor
        ? ((v.boundary = 16), (v.storage = 12))
        : y.isVector4
        ? ((v.boundary = 16), (v.storage = 16))
        : y.isMatrix3
        ? ((v.boundary = 48), (v.storage = 48))
        : y.isMatrix4
        ? ((v.boundary = 64), (v.storage = 64))
        : y.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            y
          ),
      v
    );
  }
  function p(y) {
    const v = y.target;
    v.removeEventListener("dispose", p);
    const S = a.indexOf(v.__bindingPointIndex);
    a.splice(S, 1), r.deleteBuffer(i[v.id]), delete i[v.id], delete s[v.id];
  }
  function m() {
    for (const y in i) r.deleteBuffer(i[y]);
    (a = []), (i = {}), (s = {});
  }
  return { bind: l, update: c, dispose: m };
}
class $v {
  constructor(e = {}) {
    const {
      canvas: t = Hm(),
      context: n = null,
      depth: i = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
        );
      f = n.getContextAttributes().alpha;
    } else f = a;
    const d = new Uint32Array(4),
      g = new Int32Array(4);
    let _ = null,
      p = null;
    const m = [],
      y = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = zt),
      (this.toneMapping = Ci),
      (this.toneMappingExposure = 1);
    const v = this;
    let S = !1,
      R = 0,
      w = 0,
      b = null,
      P = -1,
      M = null;
    const E = new Je(),
      L = new Je();
    let k = null;
    const O = new De(0);
    let K = 0,
      q = t.width,
      G = t.height,
      j = 1,
      W = null,
      ie = null;
    const ae = new Je(0, 0, q, G),
      ue = new Je(0, 0, q, G);
    let Ce = !1;
    const Ve = new Wc();
    let Y = !1,
      J = !1;
    const de = new Ue(),
      he = new D(),
      Le = new Je(),
      Ne = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let Be = !1;
    function it() {
      return b === null ? j : 1;
    }
    let I = n;
    function ct(A, N) {
      return t.getContext(A, N);
    }
    try {
      const A = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${Ic}`),
        t.addEventListener("webglcontextlost", B, !1),
        t.addEventListener("webglcontextrestored", X, !1),
        t.addEventListener("webglcontextcreationerror", Q, !1),
        I === null)
      ) {
        const N = "webgl2";
        if (((I = ct(N, A)), I === null))
          throw ct(N)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (A) {
      throw (console.error("THREE.WebGLRenderer: " + A.message), A);
    }
    let We,
      qe,
      _e,
      ut,
      we,
      Pe,
      C,
      T,
      V,
      $,
      ee,
      Z,
      ve,
      se,
      le,
      Ie,
      te,
      ce,
      ze,
      Se,
      fe,
      Ee,
      Re,
      rt;
    function x() {
      (We = new ix(I)),
        We.init(),
        (Ee = new Hv(I, We)),
        (qe = new $0(I, We, e, Ee)),
        (_e = new Bv(I)),
        (ut = new ax(I)),
        (we = new Ev()),
        (Pe = new zv(I, We, _e, we, qe, Ee, ut)),
        (C = new Q0(v)),
        (T = new nx(v)),
        (V = new d_(I)),
        (Re = new K0(I, V)),
        ($ = new sx(I, V, ut, Re)),
        (ee = new lx(I, $, V, ut)),
        (ze = new ox(I, qe, Pe)),
        (Ie = new J0(we)),
        (Z = new Tv(v, C, T, We, qe, Re, Ie)),
        (ve = new Kv(v, we)),
        (se = new bv()),
        (le = new Iv(We)),
        (ce = new j0(v, C, T, _e, ee, f, l)),
        (te = new Fv(v, ee, qe)),
        (rt = new Zv(I, ut, qe, _e)),
        (Se = new Z0(I, We, ut)),
        (fe = new rx(I, We, ut)),
        (ut.programs = Z.programs),
        (v.capabilities = qe),
        (v.extensions = We),
        (v.properties = we),
        (v.renderLists = se),
        (v.shadowMap = te),
        (v.state = _e),
        (v.info = ut);
    }
    x();
    const F = new Yv(v, I);
    (this.xr = F),
      (this.getContext = function () {
        return I;
      }),
      (this.getContextAttributes = function () {
        return I.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const A = We.get("WEBGL_lose_context");
        A && A.loseContext();
      }),
      (this.forceContextRestore = function () {
        const A = We.get("WEBGL_lose_context");
        A && A.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return j;
      }),
      (this.setPixelRatio = function (A) {
        A !== void 0 && ((j = A), this.setSize(q, G, !1));
      }),
      (this.getSize = function (A) {
        return A.set(q, G);
      }),
      (this.setSize = function (A, N, z = !0) {
        if (F.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          );
          return;
        }
        (q = A),
          (G = N),
          (t.width = Math.floor(A * j)),
          (t.height = Math.floor(N * j)),
          z === !0 && ((t.style.width = A + "px"), (t.style.height = N + "px")),
          this.setViewport(0, 0, A, N);
      }),
      (this.getDrawingBufferSize = function (A) {
        return A.set(q * j, G * j).floor();
      }),
      (this.setDrawingBufferSize = function (A, N, z) {
        (q = A),
          (G = N),
          (j = z),
          (t.width = Math.floor(A * z)),
          (t.height = Math.floor(N * z)),
          this.setViewport(0, 0, A, N);
      }),
      (this.getCurrentViewport = function (A) {
        return A.copy(E);
      }),
      (this.getViewport = function (A) {
        return A.copy(ae);
      }),
      (this.setViewport = function (A, N, z, H) {
        A.isVector4 ? ae.set(A.x, A.y, A.z, A.w) : ae.set(A, N, z, H),
          _e.viewport(E.copy(ae).multiplyScalar(j).round());
      }),
      (this.getScissor = function (A) {
        return A.copy(ue);
      }),
      (this.setScissor = function (A, N, z, H) {
        A.isVector4 ? ue.set(A.x, A.y, A.z, A.w) : ue.set(A, N, z, H),
          _e.scissor(L.copy(ue).multiplyScalar(j).round());
      }),
      (this.getScissorTest = function () {
        return Ce;
      }),
      (this.setScissorTest = function (A) {
        _e.setScissorTest((Ce = A));
      }),
      (this.setOpaqueSort = function (A) {
        W = A;
      }),
      (this.setTransparentSort = function (A) {
        ie = A;
      }),
      (this.getClearColor = function (A) {
        return A.copy(ce.getClearColor());
      }),
      (this.setClearColor = function () {
        ce.setClearColor.apply(ce, arguments);
      }),
      (this.getClearAlpha = function () {
        return ce.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        ce.setClearAlpha.apply(ce, arguments);
      }),
      (this.clear = function (A = !0, N = !0, z = !0) {
        let H = 0;
        if (A) {
          let U = !1;
          if (b !== null) {
            const ne = b.texture.format;
            U = ne === kc || ne === Bc || ne === Fc;
          }
          if (U) {
            const ne = b.texture.type,
              oe =
                ne === ri ||
                ne === ms ||
                ne === jr ||
                ne === or ||
                ne === Nc ||
                ne === Uc,
              pe = ce.getClearColor(),
              me = ce.getClearAlpha(),
              Te = pe.r,
              be = pe.g,
              ye = pe.b;
            oe
              ? ((d[0] = Te),
                (d[1] = be),
                (d[2] = ye),
                (d[3] = me),
                I.clearBufferuiv(I.COLOR, 0, d))
              : ((g[0] = Te),
                (g[1] = be),
                (g[2] = ye),
                (g[3] = me),
                I.clearBufferiv(I.COLOR, 0, g));
          } else H |= I.COLOR_BUFFER_BIT;
        }
        N && (H |= I.DEPTH_BUFFER_BIT),
          z &&
            ((H |= I.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          I.clear(H);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", B, !1),
          t.removeEventListener("webglcontextrestored", X, !1),
          t.removeEventListener("webglcontextcreationerror", Q, !1),
          se.dispose(),
          le.dispose(),
          we.dispose(),
          C.dispose(),
          T.dispose(),
          ee.dispose(),
          Re.dispose(),
          rt.dispose(),
          Z.dispose(),
          F.dispose(),
          F.removeEventListener("sessionstart", _t),
          F.removeEventListener("sessionend", ui),
          Rt.stop();
      });
    function B(A) {
      A.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (S = !0);
    }
    function X() {
      console.log("THREE.WebGLRenderer: Context Restored."), (S = !1);
      const A = ut.autoReset,
        N = te.enabled,
        z = te.autoUpdate,
        H = te.needsUpdate,
        U = te.type;
      x(),
        (ut.autoReset = A),
        (te.enabled = N),
        (te.autoUpdate = z),
        (te.needsUpdate = H),
        (te.type = U);
    }
    function Q(A) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        A.statusMessage
      );
    }
    function ge(A) {
      const N = A.target;
      N.removeEventListener("dispose", ge), Ae(N);
    }
    function Ae(A) {
      pt(A), we.remove(A);
    }
    function pt(A) {
      const N = we.get(A).programs;
      N !== void 0 &&
        (N.forEach(function (z) {
          Z.releaseProgram(z);
        }),
        A.isShaderMaterial && Z.releaseShaderCache(A));
    }
    this.renderBufferDirect = function (A, N, z, H, U, ne) {
      N === null && (N = Ne);
      const oe = U.isMesh && U.matrixWorld.determinant() < 0,
        pe = Tp(A, N, z, H, U);
      _e.setMaterial(H, oe);
      let me = z.index,
        Te = 1;
      if (H.wireframe === !0) {
        if (((me = $.getWireframeAttribute(z)), me === void 0)) return;
        Te = 2;
      }
      const be = z.drawRange,
        ye = z.attributes.position;
      let Ye = be.start * Te,
        ht = (be.start + be.count) * Te;
      ne !== null &&
        ((Ye = Math.max(Ye, ne.start * Te)),
        (ht = Math.min(ht, (ne.start + ne.count) * Te))),
        me !== null
          ? ((Ye = Math.max(Ye, 0)), (ht = Math.min(ht, me.count)))
          : ye != null &&
            ((Ye = Math.max(Ye, 0)), (ht = Math.min(ht, ye.count)));
      const ft = ht - Ye;
      if (ft < 0 || ft === 1 / 0) return;
      Re.setup(U, H, pe, z, me);
      let Qt,
        je = Se;
      if (
        (me !== null && ((Qt = V.get(me)), (je = fe), je.setIndex(Qt)),
        U.isMesh)
      )
        H.wireframe === !0
          ? (_e.setLineWidth(H.wireframeLinewidth * it()), je.setMode(I.LINES))
          : je.setMode(I.TRIANGLES);
      else if (U.isLine) {
        let xe = H.linewidth;
        xe === void 0 && (xe = 1),
          _e.setLineWidth(xe * it()),
          U.isLineSegments
            ? je.setMode(I.LINES)
            : U.isLineLoop
            ? je.setMode(I.LINE_LOOP)
            : je.setMode(I.LINE_STRIP);
      } else
        U.isPoints
          ? je.setMode(I.POINTS)
          : U.isSprite && je.setMode(I.TRIANGLES);
      if (U.isBatchedMesh)
        if (U._multiDrawInstances !== null)
          je.renderMultiDrawInstances(
            U._multiDrawStarts,
            U._multiDrawCounts,
            U._multiDrawCount,
            U._multiDrawInstances
          );
        else if (We.get("WEBGL_multi_draw"))
          je.renderMultiDraw(
            U._multiDrawStarts,
            U._multiDrawCounts,
            U._multiDrawCount
          );
        else {
          const xe = U._multiDrawStarts,
            Ct = U._multiDrawCounts,
            Ke = U._multiDrawCount,
            Sn = me ? V.get(me).bytesPerElement : 1,
            Ms = we.get(H).currentProgram.getUniforms();
          for (let en = 0; en < Ke; en++)
            Ms.setValue(I, "_gl_DrawID", en), je.render(xe[en] / Sn, Ct[en]);
        }
      else if (U.isInstancedMesh) je.renderInstances(Ye, ft, U.count);
      else if (z.isInstancedBufferGeometry) {
        const xe = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0,
          Ct = Math.min(z.instanceCount, xe);
        je.renderInstances(Ye, ft, Ct);
      } else je.render(Ye, ft);
    };
    function yt(A, N, z) {
      A.transparent === !0 && A.side === Dn && A.forceSinglePass === !1
        ? ((A.side = Yt),
          (A.needsUpdate = !0),
          _a(A, N, z),
          (A.side = si),
          (A.needsUpdate = !0),
          _a(A, N, z),
          (A.side = Dn))
        : _a(A, N, z);
    }
    (this.compile = function (A, N, z = null) {
      z === null && (z = A),
        (p = le.get(z)),
        p.init(N),
        y.push(p),
        z.traverseVisible(function (U) {
          U.isLight &&
            U.layers.test(N.layers) &&
            (p.pushLight(U), U.castShadow && p.pushShadow(U));
        }),
        A !== z &&
          A.traverseVisible(function (U) {
            U.isLight &&
              U.layers.test(N.layers) &&
              (p.pushLight(U), U.castShadow && p.pushShadow(U));
          }),
        p.setupLights();
      const H = new Set();
      return (
        A.traverse(function (U) {
          const ne = U.material;
          if (ne)
            if (Array.isArray(ne))
              for (let oe = 0; oe < ne.length; oe++) {
                const pe = ne[oe];
                yt(pe, z, U), H.add(pe);
              }
            else yt(ne, z, U), H.add(ne);
        }),
        y.pop(),
        (p = null),
        H
      );
    }),
      (this.compileAsync = function (A, N, z = null) {
        const H = this.compile(A, N, z);
        return new Promise((U) => {
          function ne() {
            if (
              (H.forEach(function (oe) {
                we.get(oe).currentProgram.isReady() && H.delete(oe);
              }),
              H.size === 0)
            ) {
              U(A);
              return;
            }
            setTimeout(ne, 10);
          }
          We.get("KHR_parallel_shader_compile") !== null
            ? ne()
            : setTimeout(ne, 10);
        });
      });
    let Ge = null;
    function Mt(A) {
      Ge && Ge(A);
    }
    function _t() {
      Rt.stop();
    }
    function ui() {
      Rt.start();
    }
    const Rt = new Qf();
    Rt.setAnimationLoop(Mt),
      typeof self < "u" && Rt.setContext(self),
      (this.setAnimationLoop = function (A) {
        (Ge = A), F.setAnimationLoop(A), A === null ? Rt.stop() : Rt.start();
      }),
      F.addEventListener("sessionstart", _t),
      F.addEventListener("sessionend", ui),
      (this.render = function (A, N) {
        if (N !== void 0 && N.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (S === !0) return;
        if (
          (A.matrixWorldAutoUpdate === !0 && A.updateMatrixWorld(),
          N.parent === null &&
            N.matrixWorldAutoUpdate === !0 &&
            N.updateMatrixWorld(),
          F.enabled === !0 &&
            F.isPresenting === !0 &&
            (F.cameraAutoUpdate === !0 && F.updateCamera(N),
            (N = F.getCamera())),
          A.isScene === !0 && A.onBeforeRender(v, A, N, b),
          (p = le.get(A, y.length)),
          p.init(N),
          y.push(p),
          de.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse),
          Ve.setFromProjectionMatrix(de),
          (J = this.localClippingEnabled),
          (Y = Ie.init(this.clippingPlanes, J)),
          (_ = se.get(A, m.length)),
          _.init(),
          m.push(_),
          F.enabled === !0 && F.isPresenting === !0)
        ) {
          const ne = v.xr.getDepthSensingMesh();
          ne !== null && Xn(ne, N, -1 / 0, v.sortObjects);
        }
        Xn(A, N, 0, v.sortObjects),
          _.finish(),
          v.sortObjects === !0 && _.sort(W, ie),
          (Be =
            F.enabled === !1 ||
            F.isPresenting === !1 ||
            F.hasDepthSensing() === !1),
          Be && ce.addToRenderList(_, A),
          this.info.render.frame++,
          Y === !0 && Ie.beginShadows();
        const z = p.state.shadowsArray;
        te.render(z, A, N),
          Y === !0 && Ie.endShadows(),
          this.info.autoReset === !0 && this.info.reset();
        const H = _.opaque,
          U = _.transmissive;
        if ((p.setupLights(), N.isArrayCamera)) {
          const ne = N.cameras;
          if (U.length > 0)
            for (let oe = 0, pe = ne.length; oe < pe; oe++) {
              const me = ne[oe];
              Ar(H, U, A, me);
            }
          Be && ce.render(A);
          for (let oe = 0, pe = ne.length; oe < pe; oe++) {
            const me = ne[oe];
            Vi(_, A, me, me.viewport);
          }
        } else U.length > 0 && Ar(H, U, A, N), Be && ce.render(A), Vi(_, A, N);
        b !== null &&
          (Pe.updateMultisampleRenderTarget(b), Pe.updateRenderTargetMipmap(b)),
          A.isScene === !0 && A.onAfterRender(v, A, N),
          Re.resetDefaultState(),
          (P = -1),
          (M = null),
          y.pop(),
          y.length > 0
            ? ((p = y[y.length - 1]),
              Y === !0 && Ie.setGlobalState(v.clippingPlanes, p.state.camera))
            : (p = null),
          m.pop(),
          m.length > 0 ? (_ = m[m.length - 1]) : (_ = null);
      });
    function Xn(A, N, z, H) {
      if (A.visible === !1) return;
      if (A.layers.test(N.layers)) {
        if (A.isGroup) z = A.renderOrder;
        else if (A.isLOD) A.autoUpdate === !0 && A.update(N);
        else if (A.isLight) p.pushLight(A), A.castShadow && p.pushShadow(A);
        else if (A.isSprite) {
          if (!A.frustumCulled || Ve.intersectsSprite(A)) {
            H && Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);
            const oe = ee.update(A),
              pe = A.material;
            pe.visible && _.push(A, oe, pe, z, Le.z, null);
          }
        } else if (
          (A.isMesh || A.isLine || A.isPoints) &&
          (!A.frustumCulled || Ve.intersectsObject(A))
        ) {
          const oe = ee.update(A),
            pe = A.material;
          if (
            (H &&
              (A.boundingSphere !== void 0
                ? (A.boundingSphere === null && A.computeBoundingSphere(),
                  Le.copy(A.boundingSphere.center))
                : (oe.boundingSphere === null && oe.computeBoundingSphere(),
                  Le.copy(oe.boundingSphere.center)),
              Le.applyMatrix4(A.matrixWorld).applyMatrix4(de)),
            Array.isArray(pe))
          ) {
            const me = oe.groups;
            for (let Te = 0, be = me.length; Te < be; Te++) {
              const ye = me[Te],
                Ye = pe[ye.materialIndex];
              Ye && Ye.visible && _.push(A, oe, Ye, z, Le.z, ye);
            }
          } else pe.visible && _.push(A, oe, pe, z, Le.z, null);
        }
      }
      const ne = A.children;
      for (let oe = 0, pe = ne.length; oe < pe; oe++) Xn(ne[oe], N, z, H);
    }
    function Vi(A, N, z, H) {
      const U = A.opaque,
        ne = A.transmissive,
        oe = A.transparent;
      p.setupLightsView(z),
        Y === !0 && Ie.setGlobalState(v.clippingPlanes, z),
        H && _e.viewport(E.copy(H)),
        U.length > 0 && ma(U, N, z),
        ne.length > 0 && ma(ne, N, z),
        oe.length > 0 && ma(oe, N, z),
        _e.buffers.depth.setTest(!0),
        _e.buffers.depth.setMask(!0),
        _e.buffers.color.setMask(!0),
        _e.setPolygonOffset(!1);
    }
    function Ar(A, N, z, H) {
      if ((z.isScene === !0 ? z.overrideMaterial : null) !== null) return;
      p.state.transmissionRenderTarget[H.id] === void 0 &&
        (p.state.transmissionRenderTarget[H.id] = new _s(1, 1, {
          generateMipmaps: !0,
          type:
            We.has("EXT_color_buffer_half_float") ||
            We.has("EXT_color_buffer_float")
              ? oa
              : ri,
          minFilter: ni,
          samples: 4,
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: Xe.workingColorSpace,
        }));
      const ne = p.state.transmissionRenderTarget[H.id],
        oe = H.viewport || E;
      ne.setSize(oe.z, oe.w);
      const pe = v.getRenderTarget();
      v.setRenderTarget(ne),
        v.getClearColor(O),
        (K = v.getClearAlpha()),
        K < 1 && v.setClearColor(16777215, 0.5),
        v.clear(),
        Be && ce.render(z);
      const me = v.toneMapping;
      v.toneMapping = Ci;
      const Te = H.viewport;
      if (
        (H.viewport !== void 0 && (H.viewport = void 0),
        p.setupLightsView(H),
        Y === !0 && Ie.setGlobalState(v.clippingPlanes, H),
        ma(A, z, H),
        Pe.updateMultisampleRenderTarget(ne),
        Pe.updateRenderTargetMipmap(ne),
        We.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let be = !1;
        for (let ye = 0, Ye = N.length; ye < Ye; ye++) {
          const ht = N[ye],
            ft = ht.object,
            Qt = ht.geometry,
            je = ht.material,
            xe = ht.group;
          if (je.side === Dn && ft.layers.test(H.layers)) {
            const Ct = je.side;
            (je.side = Yt),
              (je.needsUpdate = !0),
              Tu(ft, z, H, Qt, je, xe),
              (je.side = Ct),
              (je.needsUpdate = !0),
              (be = !0);
          }
        }
        be === !0 &&
          (Pe.updateMultisampleRenderTarget(ne),
          Pe.updateRenderTargetMipmap(ne));
      }
      v.setRenderTarget(pe),
        v.setClearColor(O, K),
        Te !== void 0 && (H.viewport = Te),
        (v.toneMapping = me);
    }
    function ma(A, N, z) {
      const H = N.isScene === !0 ? N.overrideMaterial : null;
      for (let U = 0, ne = A.length; U < ne; U++) {
        const oe = A[U],
          pe = oe.object,
          me = oe.geometry,
          Te = H === null ? oe.material : H,
          be = oe.group;
        pe.layers.test(z.layers) && Tu(pe, N, z, me, Te, be);
      }
    }
    function Tu(A, N, z, H, U, ne) {
      A.onBeforeRender(v, N, z, H, U, ne),
        A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, A.matrixWorld),
        A.normalMatrix.getNormalMatrix(A.modelViewMatrix),
        U.transparent === !0 && U.side === Dn && U.forceSinglePass === !1
          ? ((U.side = Yt),
            (U.needsUpdate = !0),
            v.renderBufferDirect(z, N, H, U, A, ne),
            (U.side = si),
            (U.needsUpdate = !0),
            v.renderBufferDirect(z, N, H, U, A, ne),
            (U.side = Dn))
          : v.renderBufferDirect(z, N, H, U, A, ne),
        A.onAfterRender(v, N, z, H, U, ne);
    }
    function _a(A, N, z) {
      N.isScene !== !0 && (N = Ne);
      const H = we.get(A),
        U = p.state.lights,
        ne = p.state.shadowsArray,
        oe = U.state.version,
        pe = Z.getParameters(A, U.state, ne, N, z),
        me = Z.getProgramCacheKey(pe);
      let Te = H.programs;
      (H.environment = A.isMeshStandardMaterial ? N.environment : null),
        (H.fog = N.fog),
        (H.envMap = (A.isMeshStandardMaterial ? T : C).get(
          A.envMap || H.environment
        )),
        (H.envMapRotation =
          H.environment !== null && A.envMap === null
            ? N.environmentRotation
            : A.envMapRotation),
        Te === void 0 &&
          (A.addEventListener("dispose", ge),
          (Te = new Map()),
          (H.programs = Te));
      let be = Te.get(me);
      if (be !== void 0) {
        if (H.currentProgram === be && H.lightsStateVersion === oe)
          return Au(A, pe), be;
      } else
        (pe.uniforms = Z.getUniforms(A)),
          A.onBeforeCompile(pe, v),
          (be = Z.acquireProgram(pe, me)),
          Te.set(me, be),
          (H.uniforms = pe.uniforms);
      const ye = H.uniforms;
      return (
        ((!A.isShaderMaterial && !A.isRawShaderMaterial) ||
          A.clipping === !0) &&
          (ye.clippingPlanes = Ie.uniform),
        Au(A, pe),
        (H.needsLights = Ap(A)),
        (H.lightsStateVersion = oe),
        H.needsLights &&
          ((ye.ambientLightColor.value = U.state.ambient),
          (ye.lightProbe.value = U.state.probe),
          (ye.directionalLights.value = U.state.directional),
          (ye.directionalLightShadows.value = U.state.directionalShadow),
          (ye.spotLights.value = U.state.spot),
          (ye.spotLightShadows.value = U.state.spotShadow),
          (ye.rectAreaLights.value = U.state.rectArea),
          (ye.ltc_1.value = U.state.rectAreaLTC1),
          (ye.ltc_2.value = U.state.rectAreaLTC2),
          (ye.pointLights.value = U.state.point),
          (ye.pointLightShadows.value = U.state.pointShadow),
          (ye.hemisphereLights.value = U.state.hemi),
          (ye.directionalShadowMap.value = U.state.directionalShadowMap),
          (ye.directionalShadowMatrix.value = U.state.directionalShadowMatrix),
          (ye.spotShadowMap.value = U.state.spotShadowMap),
          (ye.spotLightMatrix.value = U.state.spotLightMatrix),
          (ye.spotLightMap.value = U.state.spotLightMap),
          (ye.pointShadowMap.value = U.state.pointShadowMap),
          (ye.pointShadowMatrix.value = U.state.pointShadowMatrix)),
        (H.currentProgram = be),
        (H.uniformsList = null),
        be
      );
    }
    function Eu(A) {
      if (A.uniformsList === null) {
        const N = A.currentProgram.getUniforms();
        A.uniformsList = no.seqWithValue(N.seq, A.uniforms);
      }
      return A.uniformsList;
    }
    function Au(A, N) {
      const z = we.get(A);
      (z.outputColorSpace = N.outputColorSpace),
        (z.batching = N.batching),
        (z.batchingColor = N.batchingColor),
        (z.instancing = N.instancing),
        (z.instancingColor = N.instancingColor),
        (z.instancingMorph = N.instancingMorph),
        (z.skinning = N.skinning),
        (z.morphTargets = N.morphTargets),
        (z.morphNormals = N.morphNormals),
        (z.morphColors = N.morphColors),
        (z.morphTargetsCount = N.morphTargetsCount),
        (z.numClippingPlanes = N.numClippingPlanes),
        (z.numIntersection = N.numClipIntersection),
        (z.vertexAlphas = N.vertexAlphas),
        (z.vertexTangents = N.vertexTangents),
        (z.toneMapping = N.toneMapping);
    }
    function Tp(A, N, z, H, U) {
      N.isScene !== !0 && (N = Ne), Pe.resetTextureUnits();
      const ne = N.fog,
        oe = H.isMeshStandardMaterial ? N.environment : null,
        pe =
          b === null
            ? v.outputColorSpace
            : b.isXRRenderTarget === !0
            ? b.texture.colorSpace
            : It,
        me = (H.isMeshStandardMaterial ? T : C).get(H.envMap || oe),
        Te =
          H.vertexColors === !0 &&
          !!z.attributes.color &&
          z.attributes.color.itemSize === 4,
        be = !!z.attributes.tangent && (!!H.normalMap || H.anisotropy > 0),
        ye = !!z.morphAttributes.position,
        Ye = !!z.morphAttributes.normal,
        ht = !!z.morphAttributes.color;
      let ft = Ci;
      H.toneMapped &&
        (b === null || b.isXRRenderTarget === !0) &&
        (ft = v.toneMapping);
      const Qt =
          z.morphAttributes.position ||
          z.morphAttributes.normal ||
          z.morphAttributes.color,
        je = Qt !== void 0 ? Qt.length : 0,
        xe = we.get(H),
        Ct = p.state.lights;
      if (Y === !0 && (J === !0 || A !== M)) {
        const hn = A === M && H.id === P;
        Ie.setState(H, A, hn);
      }
      let Ke = !1;
      H.version === xe.__version
        ? ((xe.needsLights && xe.lightsStateVersion !== Ct.state.version) ||
            xe.outputColorSpace !== pe ||
            (U.isBatchedMesh && xe.batching === !1) ||
            (!U.isBatchedMesh && xe.batching === !0) ||
            (U.isBatchedMesh &&
              xe.batchingColor === !0 &&
              U.colorTexture === null) ||
            (U.isBatchedMesh &&
              xe.batchingColor === !1 &&
              U.colorTexture !== null) ||
            (U.isInstancedMesh && xe.instancing === !1) ||
            (!U.isInstancedMesh && xe.instancing === !0) ||
            (U.isSkinnedMesh && xe.skinning === !1) ||
            (!U.isSkinnedMesh && xe.skinning === !0) ||
            (U.isInstancedMesh &&
              xe.instancingColor === !0 &&
              U.instanceColor === null) ||
            (U.isInstancedMesh &&
              xe.instancingColor === !1 &&
              U.instanceColor !== null) ||
            (U.isInstancedMesh &&
              xe.instancingMorph === !0 &&
              U.morphTexture === null) ||
            (U.isInstancedMesh &&
              xe.instancingMorph === !1 &&
              U.morphTexture !== null) ||
            xe.envMap !== me ||
            (H.fog === !0 && xe.fog !== ne) ||
            (xe.numClippingPlanes !== void 0 &&
              (xe.numClippingPlanes !== Ie.numPlanes ||
                xe.numIntersection !== Ie.numIntersection)) ||
            xe.vertexAlphas !== Te ||
            xe.vertexTangents !== be ||
            xe.morphTargets !== ye ||
            xe.morphNormals !== Ye ||
            xe.morphColors !== ht ||
            xe.toneMapping !== ft ||
            xe.morphTargetsCount !== je) &&
          (Ke = !0)
        : ((Ke = !0), (xe.__version = H.version));
      let Sn = xe.currentProgram;
      Ke === !0 && (Sn = _a(H, N, U));
      let Ms = !1,
        en = !1,
        No = !1;
      const gt = Sn.getUniforms(),
        hi = xe.uniforms;
      if (
        (_e.useProgram(Sn.program) && ((Ms = !0), (en = !0), (No = !0)),
        H.id !== P && ((P = H.id), (en = !0)),
        Ms || M !== A)
      ) {
        gt.setValue(I, "projectionMatrix", A.projectionMatrix),
          gt.setValue(I, "viewMatrix", A.matrixWorldInverse);
        const hn = gt.map.cameraPosition;
        hn !== void 0 &&
          hn.setValue(I, he.setFromMatrixPosition(A.matrixWorld)),
          qe.logarithmicDepthBuffer &&
            gt.setValue(
              I,
              "logDepthBufFC",
              2 / (Math.log(A.far + 1) / Math.LN2)
            ),
          (H.isMeshPhongMaterial ||
            H.isMeshToonMaterial ||
            H.isMeshLambertMaterial ||
            H.isMeshBasicMaterial ||
            H.isMeshStandardMaterial ||
            H.isShaderMaterial) &&
            gt.setValue(I, "isOrthographic", A.isOrthographicCamera === !0),
          M !== A && ((M = A), (en = !0), (No = !0));
      }
      if (U.isSkinnedMesh) {
        gt.setOptional(I, U, "bindMatrix"),
          gt.setOptional(I, U, "bindMatrixInverse");
        const hn = U.skeleton;
        hn &&
          (hn.boneTexture === null && hn.computeBoneTexture(),
          gt.setValue(I, "boneTexture", hn.boneTexture, Pe));
      }
      U.isBatchedMesh &&
        (gt.setOptional(I, U, "batchingTexture"),
        gt.setValue(I, "batchingTexture", U._matricesTexture, Pe),
        gt.setOptional(I, U, "batchingIdTexture"),
        gt.setValue(I, "batchingIdTexture", U._indirectTexture, Pe),
        gt.setOptional(I, U, "batchingColorTexture"),
        U._colorsTexture !== null &&
          gt.setValue(I, "batchingColorTexture", U._colorsTexture, Pe));
      const Uo = z.morphAttributes;
      if (
        ((Uo.position !== void 0 ||
          Uo.normal !== void 0 ||
          Uo.color !== void 0) &&
          ze.update(U, z, Sn),
        (en || xe.receiveShadow !== U.receiveShadow) &&
          ((xe.receiveShadow = U.receiveShadow),
          gt.setValue(I, "receiveShadow", U.receiveShadow)),
        H.isMeshGouraudMaterial &&
          H.envMap !== null &&
          ((hi.envMap.value = me),
          (hi.flipEnvMap.value =
            me.isCubeTexture && me.isRenderTargetTexture === !1 ? -1 : 1)),
        H.isMeshStandardMaterial &&
          H.envMap === null &&
          N.environment !== null &&
          (hi.envMapIntensity.value = N.environmentIntensity),
        en &&
          (gt.setValue(I, "toneMappingExposure", v.toneMappingExposure),
          xe.needsLights && Ep(hi, No),
          ne && H.fog === !0 && ve.refreshFogUniforms(hi, ne),
          ve.refreshMaterialUniforms(
            hi,
            H,
            j,
            G,
            p.state.transmissionRenderTarget[A.id]
          ),
          no.upload(I, Eu(xe), hi, Pe)),
        H.isShaderMaterial &&
          H.uniformsNeedUpdate === !0 &&
          (no.upload(I, Eu(xe), hi, Pe), (H.uniformsNeedUpdate = !1)),
        H.isSpriteMaterial && gt.setValue(I, "center", U.center),
        gt.setValue(I, "modelViewMatrix", U.modelViewMatrix),
        gt.setValue(I, "normalMatrix", U.normalMatrix),
        gt.setValue(I, "modelMatrix", U.matrixWorld),
        H.isShaderMaterial || H.isRawShaderMaterial)
      ) {
        const hn = H.uniformsGroups;
        for (let Oo = 0, bp = hn.length; Oo < bp; Oo++) {
          const bu = hn[Oo];
          rt.update(bu, Sn), rt.bind(bu, Sn);
        }
      }
      return Sn;
    }
    function Ep(A, N) {
      (A.ambientLightColor.needsUpdate = N),
        (A.lightProbe.needsUpdate = N),
        (A.directionalLights.needsUpdate = N),
        (A.directionalLightShadows.needsUpdate = N),
        (A.pointLights.needsUpdate = N),
        (A.pointLightShadows.needsUpdate = N),
        (A.spotLights.needsUpdate = N),
        (A.spotLightShadows.needsUpdate = N),
        (A.rectAreaLights.needsUpdate = N),
        (A.hemisphereLights.needsUpdate = N);
    }
    function Ap(A) {
      return (
        A.isMeshLambertMaterial ||
        A.isMeshToonMaterial ||
        A.isMeshPhongMaterial ||
        A.isMeshStandardMaterial ||
        A.isShadowMaterial ||
        (A.isShaderMaterial && A.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return R;
    }),
      (this.getActiveMipmapLevel = function () {
        return w;
      }),
      (this.getRenderTarget = function () {
        return b;
      }),
      (this.setRenderTargetTextures = function (A, N, z) {
        (we.get(A.texture).__webglTexture = N),
          (we.get(A.depthTexture).__webglTexture = z);
        const H = we.get(A);
        (H.__hasExternalTextures = !0),
          (H.__autoAllocateDepthBuffer = z === void 0),
          H.__autoAllocateDepthBuffer ||
            (We.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (H.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (A, N) {
        const z = we.get(A);
        (z.__webglFramebuffer = N), (z.__useDefaultFramebuffer = N === void 0);
      }),
      (this.setRenderTarget = function (A, N = 0, z = 0) {
        (b = A), (R = N), (w = z);
        let H = !0,
          U = null,
          ne = !1,
          oe = !1;
        if (A) {
          const me = we.get(A);
          me.__useDefaultFramebuffer !== void 0
            ? (_e.bindFramebuffer(I.FRAMEBUFFER, null), (H = !1))
            : me.__webglFramebuffer === void 0
            ? Pe.setupRenderTarget(A)
            : me.__hasExternalTextures &&
              Pe.rebindTextures(
                A,
                we.get(A.texture).__webglTexture,
                we.get(A.depthTexture).__webglTexture
              );
          const Te = A.texture;
          (Te.isData3DTexture ||
            Te.isDataArrayTexture ||
            Te.isCompressedArrayTexture) &&
            (oe = !0);
          const be = we.get(A).__webglFramebuffer;
          A.isWebGLCubeRenderTarget
            ? (Array.isArray(be[N]) ? (U = be[N][z]) : (U = be[N]), (ne = !0))
            : A.samples > 0 && Pe.useMultisampledRTT(A) === !1
            ? (U = we.get(A).__webglMultisampledFramebuffer)
            : Array.isArray(be)
            ? (U = be[z])
            : (U = be),
            E.copy(A.viewport),
            L.copy(A.scissor),
            (k = A.scissorTest);
        } else
          E.copy(ae).multiplyScalar(j).floor(),
            L.copy(ue).multiplyScalar(j).floor(),
            (k = Ce);
        if (
          (_e.bindFramebuffer(I.FRAMEBUFFER, U) && H && _e.drawBuffers(A, U),
          _e.viewport(E),
          _e.scissor(L),
          _e.setScissorTest(k),
          ne)
        ) {
          const me = we.get(A.texture);
          I.framebufferTexture2D(
            I.FRAMEBUFFER,
            I.COLOR_ATTACHMENT0,
            I.TEXTURE_CUBE_MAP_POSITIVE_X + N,
            me.__webglTexture,
            z
          );
        } else if (oe) {
          const me = we.get(A.texture),
            Te = N || 0;
          I.framebufferTextureLayer(
            I.FRAMEBUFFER,
            I.COLOR_ATTACHMENT0,
            me.__webglTexture,
            z || 0,
            Te
          );
        }
        P = -1;
      }),
      (this.readRenderTargetPixels = function (A, N, z, H, U, ne, oe) {
        if (!(A && A.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let pe = we.get(A).__webglFramebuffer;
        if ((A.isWebGLCubeRenderTarget && oe !== void 0 && (pe = pe[oe]), pe)) {
          _e.bindFramebuffer(I.FRAMEBUFFER, pe);
          try {
            const me = A.texture,
              Te = me.format,
              be = me.type;
            if (!qe.textureFormatReadable(Te)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            if (!qe.textureTypeReadable(be)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            N >= 0 &&
              N <= A.width - H &&
              z >= 0 &&
              z <= A.height - U &&
              I.readPixels(N, z, H, U, Ee.convert(Te), Ee.convert(be), ne);
          } finally {
            const me = b !== null ? we.get(b).__webglFramebuffer : null;
            _e.bindFramebuffer(I.FRAMEBUFFER, me);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        A,
        N,
        z,
        H,
        U,
        ne,
        oe
      ) {
        if (!(A && A.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let pe = we.get(A).__webglFramebuffer;
        if ((A.isWebGLCubeRenderTarget && oe !== void 0 && (pe = pe[oe]), pe)) {
          _e.bindFramebuffer(I.FRAMEBUFFER, pe);
          try {
            const me = A.texture,
              Te = me.format,
              be = me.type;
            if (!qe.textureFormatReadable(Te))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
              );
            if (!qe.textureTypeReadable(be))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            if (N >= 0 && N <= A.width - H && z >= 0 && z <= A.height - U) {
              const ye = I.createBuffer();
              I.bindBuffer(I.PIXEL_PACK_BUFFER, ye),
                I.bufferData(I.PIXEL_PACK_BUFFER, ne.byteLength, I.STREAM_READ),
                I.readPixels(N, z, H, U, Ee.convert(Te), Ee.convert(be), 0),
                I.flush();
              const Ye = I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE, 0);
              await Vm(I, Ye, 4);
              try {
                I.bindBuffer(I.PIXEL_PACK_BUFFER, ye),
                  I.getBufferSubData(I.PIXEL_PACK_BUFFER, 0, ne);
              } finally {
                I.deleteBuffer(ye), I.deleteSync(Ye);
              }
              return ne;
            }
          } finally {
            const me = b !== null ? we.get(b).__webglFramebuffer : null;
            _e.bindFramebuffer(I.FRAMEBUFFER, me);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (A, N = null, z = 0) {
        A.isTexture !== !0 &&
          (Zs(
            "WebGLRenderer: copyFramebufferToTexture function signature has changed."
          ),
          (N = arguments[0] || null),
          (A = arguments[1]));
        const H = Math.pow(2, -z),
          U = Math.floor(A.image.width * H),
          ne = Math.floor(A.image.height * H),
          oe = N !== null ? N.x : 0,
          pe = N !== null ? N.y : 0;
        Pe.setTexture2D(A, 0),
          I.copyTexSubImage2D(I.TEXTURE_2D, z, 0, 0, oe, pe, U, ne),
          _e.unbindTexture();
      }),
      (this.copyTextureToTexture = function (A, N, z = null, H = null, U = 0) {
        A.isTexture !== !0 &&
          (Zs(
            "WebGLRenderer: copyTextureToTexture function signature has changed."
          ),
          (H = arguments[0] || null),
          (A = arguments[1]),
          (N = arguments[2]),
          (U = arguments[3] || 0),
          (z = null));
        let ne, oe, pe, me, Te, be;
        z !== null
          ? ((ne = z.max.x - z.min.x),
            (oe = z.max.y - z.min.y),
            (pe = z.min.x),
            (me = z.min.y))
          : ((ne = A.image.width), (oe = A.image.height), (pe = 0), (me = 0)),
          H !== null ? ((Te = H.x), (be = H.y)) : ((Te = 0), (be = 0));
        const ye = Ee.convert(N.format),
          Ye = Ee.convert(N.type);
        Pe.setTexture2D(N, 0),
          I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, N.flipY),
          I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha),
          I.pixelStorei(I.UNPACK_ALIGNMENT, N.unpackAlignment);
        const ht = I.getParameter(I.UNPACK_ROW_LENGTH),
          ft = I.getParameter(I.UNPACK_IMAGE_HEIGHT),
          Qt = I.getParameter(I.UNPACK_SKIP_PIXELS),
          je = I.getParameter(I.UNPACK_SKIP_ROWS),
          xe = I.getParameter(I.UNPACK_SKIP_IMAGES),
          Ct = A.isCompressedTexture ? A.mipmaps[U] : A.image;
        I.pixelStorei(I.UNPACK_ROW_LENGTH, Ct.width),
          I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, Ct.height),
          I.pixelStorei(I.UNPACK_SKIP_PIXELS, pe),
          I.pixelStorei(I.UNPACK_SKIP_ROWS, me),
          A.isDataTexture
            ? I.texSubImage2D(I.TEXTURE_2D, U, Te, be, ne, oe, ye, Ye, Ct.data)
            : A.isCompressedTexture
            ? I.compressedTexSubImage2D(
                I.TEXTURE_2D,
                U,
                Te,
                be,
                Ct.width,
                Ct.height,
                ye,
                Ct.data
              )
            : I.texSubImage2D(I.TEXTURE_2D, U, Te, be, ne, oe, ye, Ye, Ct),
          I.pixelStorei(I.UNPACK_ROW_LENGTH, ht),
          I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, ft),
          I.pixelStorei(I.UNPACK_SKIP_PIXELS, Qt),
          I.pixelStorei(I.UNPACK_SKIP_ROWS, je),
          I.pixelStorei(I.UNPACK_SKIP_IMAGES, xe),
          U === 0 && N.generateMipmaps && I.generateMipmap(I.TEXTURE_2D),
          _e.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (
        A,
        N,
        z = null,
        H = null,
        U = 0
      ) {
        A.isTexture !== !0 &&
          (Zs(
            "WebGLRenderer: copyTextureToTexture3D function signature has changed."
          ),
          (z = arguments[0] || null),
          (H = arguments[1] || null),
          (A = arguments[2]),
          (N = arguments[3]),
          (U = arguments[4] || 0));
        let ne, oe, pe, me, Te, be, ye, Ye, ht;
        const ft = A.isCompressedTexture ? A.mipmaps[U] : A.image;
        z !== null
          ? ((ne = z.max.x - z.min.x),
            (oe = z.max.y - z.min.y),
            (pe = z.max.z - z.min.z),
            (me = z.min.x),
            (Te = z.min.y),
            (be = z.min.z))
          : ((ne = ft.width),
            (oe = ft.height),
            (pe = ft.depth),
            (me = 0),
            (Te = 0),
            (be = 0)),
          H !== null
            ? ((ye = H.x), (Ye = H.y), (ht = H.z))
            : ((ye = 0), (Ye = 0), (ht = 0));
        const Qt = Ee.convert(N.format),
          je = Ee.convert(N.type);
        let xe;
        if (N.isData3DTexture) Pe.setTexture3D(N, 0), (xe = I.TEXTURE_3D);
        else if (N.isDataArrayTexture || N.isCompressedArrayTexture)
          Pe.setTexture2DArray(N, 0), (xe = I.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
          return;
        }
        I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, N.flipY),
          I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha),
          I.pixelStorei(I.UNPACK_ALIGNMENT, N.unpackAlignment);
        const Ct = I.getParameter(I.UNPACK_ROW_LENGTH),
          Ke = I.getParameter(I.UNPACK_IMAGE_HEIGHT),
          Sn = I.getParameter(I.UNPACK_SKIP_PIXELS),
          Ms = I.getParameter(I.UNPACK_SKIP_ROWS),
          en = I.getParameter(I.UNPACK_SKIP_IMAGES);
        I.pixelStorei(I.UNPACK_ROW_LENGTH, ft.width),
          I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, ft.height),
          I.pixelStorei(I.UNPACK_SKIP_PIXELS, me),
          I.pixelStorei(I.UNPACK_SKIP_ROWS, Te),
          I.pixelStorei(I.UNPACK_SKIP_IMAGES, be),
          A.isDataTexture || A.isData3DTexture
            ? I.texSubImage3D(xe, U, ye, Ye, ht, ne, oe, pe, Qt, je, ft.data)
            : N.isCompressedArrayTexture
            ? I.compressedTexSubImage3D(
                xe,
                U,
                ye,
                Ye,
                ht,
                ne,
                oe,
                pe,
                Qt,
                ft.data
              )
            : I.texSubImage3D(xe, U, ye, Ye, ht, ne, oe, pe, Qt, je, ft),
          I.pixelStorei(I.UNPACK_ROW_LENGTH, Ct),
          I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, Ke),
          I.pixelStorei(I.UNPACK_SKIP_PIXELS, Sn),
          I.pixelStorei(I.UNPACK_SKIP_ROWS, Ms),
          I.pixelStorei(I.UNPACK_SKIP_IMAGES, en),
          U === 0 && N.generateMipmaps && I.generateMipmap(xe),
          _e.unbindTexture();
      }),
      (this.initRenderTarget = function (A) {
        we.get(A).__webglFramebuffer === void 0 && Pe.setupRenderTarget(A);
      }),
      (this.initTexture = function (A) {
        A.isCubeTexture
          ? Pe.setTextureCube(A, 0)
          : A.isData3DTexture
          ? Pe.setTexture3D(A, 0)
          : A.isDataArrayTexture || A.isCompressedArrayTexture
          ? Pe.setTexture2DArray(A, 0)
          : Pe.setTexture2D(A, 0),
          _e.unbindTexture();
      }),
      (this.resetState = function () {
        (R = 0), (w = 0), (b = null), _e.reset(), Re.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return ii;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorSpace = e === Hc ? "display-p3" : "srgb"),
      (t.unpackColorSpace =
        Xe.workingColorSpace === bo ? "display-p3" : "srgb");
  }
}
class Jv extends nt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new zn()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new zn()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
class Qv {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = oc),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.version = 0),
      (this.uuid = Rn());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return (
      Zs(
        "THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
      ),
      this._updateRange
    );
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.stride), (n *= t.stride);
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Rn()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid]
      ),
      n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Rn()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const Bt = new D();
class Yc {
  constructor(e, t, n, i = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = n),
      (this.normalized = i);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Bt.fromBufferAttribute(this, t),
        Bt.applyMatrix4(e),
        this.setXYZ(t, Bt.x, Bt.y, Bt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Bt.fromBufferAttribute(this, t),
        Bt.applyNormalMatrix(e),
        this.setXYZ(t, Bt.x, Bt.y, Bt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Bt.fromBufferAttribute(this, t),
        Bt.transformDirection(e),
        this.setXYZ(t, Bt.x, Bt.y, Bt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = bn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = $e(n, this.array)),
      (this.data.array[e * this.data.stride + this.offset + t] = n),
      this
    );
  }
  setX(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = bn(t, this.array)), t;
  }
  setXY(e, t, n) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = $e(t, this.array)), (n = $e(n, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = $e(t, this.array)),
        (n = $e(n, this.array)),
        (i = $e(i, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = $e(t, this.array)),
        (n = $e(n, this.array)),
        (i = $e(i, this.array)),
        (s = $e(s, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      (this.data.array[e + 3] = s),
      this
    );
  }
  clone(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return new Xt(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new Yc(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
  }
  toJSON(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
const Eh = new D(),
  Ah = new Je(),
  bh = new Je(),
  ey = new D(),
  wh = new Ue(),
  Ba = new D(),
  cl = new Vn(),
  Rh = new Ue(),
  ul = new yr();
class ty extends qt {
  constructor(e, t) {
    super(e, t),
      (this.isSkinnedMesh = !0),
      (this.type = "SkinnedMesh"),
      (this.bindMode = Lu),
      (this.bindMatrix = new Ue()),
      (this.bindMatrixInverse = new Ue()),
      (this.boundingBox = null),
      (this.boundingSphere = null);
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new ci()),
      this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Ba), this.boundingBox.expandByPoint(Ba);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Vn()),
      this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Ba), this.boundingSphere.expandByPoint(Ba);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  raycast(e, t) {
    const n = this.material,
      i = this.matrixWorld;
    n !== void 0 &&
      (this.boundingSphere === null && this.computeBoundingSphere(),
      cl.copy(this.boundingSphere),
      cl.applyMatrix4(i),
      e.ray.intersectsSphere(cl) !== !1 &&
        (Rh.copy(i).invert(),
        ul.copy(e.ray).applyMatrix4(Rh),
        !(
          this.boundingBox !== null && ul.intersectsBox(this.boundingBox) === !1
        ) && this._computeIntersections(e, t, ul)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    (this.skeleton = e),
      t === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Je(),
      t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0),
        t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.bindMode === Lu
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === hm
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton,
      i = this.geometry;
    Ah.fromBufferAttribute(i.attributes.skinIndex, e),
      bh.fromBufferAttribute(i.attributes.skinWeight, e),
      Eh.copy(t).applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = bh.getComponent(s);
      if (a !== 0) {
        const o = Ah.getComponent(s);
        wh.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
          t.addScaledVector(ey.copy(Eh).applyMatrix4(wh), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class rd extends nt {
  constructor() {
    super(), (this.isBone = !0), (this.type = "Bone");
  }
}
class ad extends bt {
  constructor(e = null, t = 1, n = 1, i, s, a, o, l, c = Gt, u = Gt, h, f) {
    super(null, a, o, l, c, u, i, s, h, f),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const Ch = new Ue(),
  ny = new Ue();
class jc {
  constructor(e = [], t = []) {
    (this.uuid = Rn()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      this.init();
  }
  init() {
    const e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0))
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn(
        "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ue());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ue();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n &&
        (n.parent && n.parent.isBone
          ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld))
          : n.matrix.copy(n.matrixWorld),
        n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones,
      t = this.boneInverses,
      n = this.boneMatrices,
      i = this.boneTexture;
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : ny;
      Ch.multiplyMatrices(o, t[s]), Ch.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new jc(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    (e = Math.ceil(e / 4) * 4), (e = Math.max(e, 4));
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new ad(t, e, e, _n, wn);
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = t),
      (this.boneTexture = n),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let a = t[s];
      a === void 0 &&
        (console.warn("THREE.Skeleton: No bone found with UUID:", s),
        (a = new rd())),
        this.bones.push(a),
        this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    const t = this.bones,
      n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class cc extends Xt {
  constructor(e, t, n, i = 1) {
    super(e, t, n),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = i);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
const Hs = new Ue(),
  Ph = new Ue(),
  ka = [],
  Lh = new ci(),
  iy = new Ue(),
  Lr = new qt(),
  Ir = new Vn();
class sy extends qt {
  constructor(e, t, n) {
    super(e, t),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new cc(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.morphTexture = null),
      (this.count = n),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    for (let i = 0; i < n; i++) this.setMatrixAt(i, iy);
  }
  computeBoundingBox() {
    const e = this.geometry,
      t = this.count;
    this.boundingBox === null && (this.boundingBox = new ci()),
      e.boundingBox === null && e.computeBoundingBox(),
      this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Hs),
        Lh.copy(e.boundingBox).applyMatrix4(Hs),
        this.boundingBox.union(Lh);
  }
  computeBoundingSphere() {
    const e = this.geometry,
      t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Vn()),
      e.boundingSphere === null && e.computeBoundingSphere(),
      this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Hs),
        Ir.copy(e.boundingSphere).applyMatrix4(Hs),
        this.boundingSphere.union(Ir);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.instanceMatrix.copy(e.instanceMatrix),
      e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()),
      e.instanceColor !== null &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      i = this.morphTexture.source.data.data,
      s = n.length + 1,
      a = e * s + 1;
    for (let o = 0; o < n.length; o++) n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld,
      i = this.count;
    if (
      ((Lr.geometry = this.geometry),
      (Lr.material = this.material),
      Lr.material !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        Ir.copy(this.boundingSphere),
        Ir.applyMatrix4(n),
        e.ray.intersectsSphere(Ir) !== !1))
    )
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, Hs),
          Ph.multiplyMatrices(n, Hs),
          (Lr.matrixWorld = Ph),
          Lr.raycast(e, ka);
        for (let a = 0, o = ka.length; a < o; a++) {
          const l = ka[a];
          (l.instanceId = s), (l.object = this), t.push(l);
        }
        ka.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null &&
      (this.instanceColor = new cc(
        new Float32Array(this.instanceMatrix.count * 3).fill(1),
        3
      )),
      t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      i = n.length + 1;
    this.morphTexture === null &&
      (this.morphTexture = new ad(
        new Float32Array(i * this.count),
        i,
        this.count,
        Oc,
        wn
      ));
    const s = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++) a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a,
      l = i * e;
    (s[l] = o), s.set(n, l + 1);
  }
  updateMorphTargets() {}
  dispose() {
    return (
      this.dispatchEvent({ type: "dispose" }),
      this.morphTexture !== null &&
        (this.morphTexture.dispose(), (this.morphTexture = null)),
      this
    );
  }
}
class od extends Fn {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new De(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const po = new D(),
  mo = new D(),
  Ih = new Ue(),
  Dr = new yr(),
  za = new Vn(),
  hl = new D(),
  Dh = new D();
class Kc extends nt {
  constructor(e = new Pn(), t = new od()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        po.fromBufferAttribute(t, i - 1),
          mo.fromBufferAttribute(t, i),
          (n[i] = n[i - 1]),
          (n[i] += po.distanceTo(mo));
      e.setAttribute("lineDistance", new vn(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      s = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      za.copy(n.boundingSphere),
      za.applyMatrix4(i),
      (za.radius += s),
      e.ray.intersectsSphere(za) === !1)
    )
      return;
    Ih.copy(i).invert(), Dr.copy(e.ray).applyMatrix4(Ih);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = this.isLineSegments ? 2 : 1,
      u = n.index,
      f = n.attributes.position;
    if (u !== null) {
      const d = Math.max(0, a.start),
        g = Math.min(u.count, a.start + a.count);
      for (let _ = d, p = g - 1; _ < p; _ += c) {
        const m = u.getX(_),
          y = u.getX(_ + 1),
          v = Ha(this, e, Dr, l, m, y);
        v && t.push(v);
      }
      if (this.isLineLoop) {
        const _ = u.getX(g - 1),
          p = u.getX(d),
          m = Ha(this, e, Dr, l, _, p);
        m && t.push(m);
      }
    } else {
      const d = Math.max(0, a.start),
        g = Math.min(f.count, a.start + a.count);
      for (let _ = d, p = g - 1; _ < p; _ += c) {
        const m = Ha(this, e, Dr, l, _, _ + 1);
        m && t.push(m);
      }
      if (this.isLineLoop) {
        const _ = Ha(this, e, Dr, l, g - 1, d);
        _ && t.push(_);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
}
function Ha(r, e, t, n, i, s) {
  const a = r.geometry.attributes.position;
  if (
    (po.fromBufferAttribute(a, i),
    mo.fromBufferAttribute(a, s),
    t.distanceSqToSegment(po, mo, hl, Dh) > n)
  )
    return;
  hl.applyMatrix4(r.matrixWorld);
  const l = e.ray.origin.distanceTo(hl);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      point: Dh.clone().applyMatrix4(r.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      object: r,
    };
}
const Nh = new D(),
  Uh = new D();
class ry extends Kc {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        Nh.fromBufferAttribute(t, i),
          Uh.fromBufferAttribute(t, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + Nh.distanceTo(Uh));
      e.setAttribute("lineDistance", new vn(n, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class ay extends Kc {
  constructor(e, t) {
    super(e, t), (this.isLineLoop = !0), (this.type = "LineLoop");
  }
}
class ld extends Fn {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new De(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const Oh = new Ue(),
  uc = new yr(),
  Va = new Vn(),
  Ga = new D();
class oy extends nt {
  constructor(e = new Pn(), t = new ld()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      s = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Va.copy(n.boundingSphere),
      Va.applyMatrix4(i),
      (Va.radius += s),
      e.ray.intersectsSphere(Va) === !1)
    )
      return;
    Oh.copy(i).invert(), uc.copy(e.ray).applyMatrix4(Oh);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = n.index,
      h = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, a.start),
        d = Math.min(c.count, a.start + a.count);
      for (let g = f, _ = d; g < _; g++) {
        const p = c.getX(g);
        Ga.fromBufferAttribute(h, p), Fh(Ga, p, l, i, e, t, this);
      }
    } else {
      const f = Math.max(0, a.start),
        d = Math.min(h.count, a.start + a.count);
      for (let g = f, _ = d; g < _; g++)
        Ga.fromBufferAttribute(h, g), Fh(Ga, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
}
function Fh(r, e, t, n, i, s, a) {
  const o = uc.distanceSqToPoint(r);
  if (o < t) {
    const l = new D();
    uc.closestPointToPoint(r, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      object: a,
    });
  }
}
class Zc extends Pn {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    i = 0,
    s = Math.PI * 2,
    a = 0,
    o = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: i,
        phiLength: s,
        thetaStart: a,
        thetaLength: o,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const u = [],
      h = new D(),
      f = new D(),
      d = [],
      g = [],
      _ = [],
      p = [];
    for (let m = 0; m <= n; m++) {
      const y = [],
        v = m / n;
      let S = 0;
      m === 0 && a === 0
        ? (S = 0.5 / t)
        : m === n && l === Math.PI && (S = -0.5 / t);
      for (let R = 0; R <= t; R++) {
        const w = R / t;
        (h.x = -e * Math.cos(i + w * s) * Math.sin(a + v * o)),
          (h.y = e * Math.cos(a + v * o)),
          (h.z = e * Math.sin(i + w * s) * Math.sin(a + v * o)),
          g.push(h.x, h.y, h.z),
          f.copy(h).normalize(),
          _.push(f.x, f.y, f.z),
          p.push(w + S, 1 - v),
          y.push(c++);
      }
      u.push(y);
    }
    for (let m = 0; m < n; m++)
      for (let y = 0; y < t; y++) {
        const v = u[m][y + 1],
          S = u[m][y],
          R = u[m + 1][y],
          w = u[m + 1][y + 1];
        (m !== 0 || a > 0) && d.push(v, S, w),
          (m !== n - 1 || l < Math.PI) && d.push(S, R, w);
      }
    this.setIndex(d),
      this.setAttribute("position", new vn(g, 3)),
      this.setAttribute("normal", new vn(_, 3)),
      this.setAttribute("uv", new vn(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Zc(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class $c extends Fn {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new De(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new De(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Hf),
      (this.normalScale = new Me(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new zn()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class Gn extends $c {
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.anisotropyRotation = 0),
      (this.anisotropyMap = null),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new Me(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return Pt((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new De(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new De(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new De(1, 1, 1)),
      (this.specularColorMap = null),
      (this._anisotropy = 0),
      (this._clearcoat = 0),
      (this._dispersion = 0),
      (this._iridescence = 0),
      (this._sheen = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, (this._anisotropy = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, (this._dispersion = e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.anisotropy = e.anisotropy),
      (this.anisotropyRotation = e.anisotropyRotation),
      (this.anisotropyMap = e.anisotropyMap),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.dispersion = e.dispersion),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
function Wa(r, e, t) {
  return !r || (!t && r.constructor === e)
    ? r
    : typeof e.BYTES_PER_ELEMENT == "number"
    ? new e(r)
    : Array.prototype.slice.call(r);
}
function ly(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function cy(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length,
    n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Bh(r, e, t) {
  const n = r.length,
    i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let l = 0; l !== e; ++l) i[a++] = r[o + l];
  }
  return i;
}
function cd(r, e, t, n) {
  let i = 1,
    s = r[0];
  for (; s !== void 0 && s[n] === void 0; ) s = r[i++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        (a = s[n]),
          a !== void 0 && (e.push(s.time), t.push.apply(t, a)),
          (s = r[i++]);
      while (s !== void 0);
    else if (a.toArray !== void 0)
      do
        (a = s[n]),
          a !== void 0 && (e.push(s.time), a.toArray(t, t.length)),
          (s = r[i++]);
      while (s !== void 0);
    else
      do (a = s[n]), a !== void 0 && (e.push(s.time), t.push(a)), (s = r[i++]);
      while (s !== void 0);
}
class ca {
  constructor(e, t, n, i) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = i !== void 0 ? i : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex,
      i = t[n],
      s = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
              }
              if (n === o) break;
              if (((s = i), (i = t[++n]), e < i)) break t;
            }
            a = t.length;
            break n;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && ((n = 2), (s = o));
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (n === l) break;
              if (((i = s), (s = t[--n - 1]), e >= s)) break t;
            }
            (a = n), (n = 0);
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          const o = (n + a) >>> 1;
          e < t[o] ? (a = o) : (n = o + 1);
        }
        if (((i = t[n]), (s = t[n - 1]), s === void 0))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (i === void 0)
          return (
            (n = t.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      s = e * i;
    for (let a = 0; a !== i; ++a) t[a] = n[s + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
class uy extends ca {
  constructor(e, t, n, i) {
    super(e, t, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: Ws, endingEnd: Ws });
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2,
      a = e + 1,
      o = i[s],
      l = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case Xs:
          (s = e), (o = 2 * t - n);
          break;
        case lo:
          (s = i.length - 2), (o = t + i[s] - i[s + 1]);
          break;
        default:
          (s = e), (o = n);
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case Xs:
          (a = e), (l = 2 * n - t);
          break;
        case lo:
          (a = 1), (l = n + i[1] - i[0]);
          break;
        default:
          (a = e - 1), (l = t);
      }
    const c = (n - t) * 0.5,
      u = this.valueSize;
    (this._weightPrev = c / (t - o)),
      (this._weightNext = c / (l - n)),
      (this._offsetPrev = s * u),
      (this._offsetNext = a * u);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = e * o,
      c = l - o,
      u = this._offsetPrev,
      h = this._offsetNext,
      f = this._weightPrev,
      d = this._weightNext,
      g = (n - t) / (i - t),
      _ = g * g,
      p = _ * g,
      m = -f * p + 2 * f * _ - f * g,
      y = (1 + f) * p + (-1.5 - 2 * f) * _ + (-0.5 + f) * g + 1,
      v = (-1 - d) * p + (1.5 + d) * _ + 0.5 * g,
      S = d * p - d * _;
    for (let R = 0; R !== o; ++R)
      s[R] = m * a[u + R] + y * a[c + R] + v * a[l + R] + S * a[h + R];
    return s;
  }
}
class ud extends ca {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = e * o,
      c = l - o,
      u = (n - t) / (i - t),
      h = 1 - u;
    for (let f = 0; f !== o; ++f) s[f] = a[c + f] * h + a[l + f] * u;
    return s;
  }
}
class hy extends ca {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Wn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = Wa(t, this.TimeBufferType)),
      (this.values = Wa(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Wa(e.times, Array),
        values: Wa(e.values, Array),
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return (n.type = e.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new hy(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new ud(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new uy(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Kr:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Zr:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Fo:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Kr;
      case this.InterpolantFactoryMethodLinear:
        return Zr;
      case this.InterpolantFactoryMethodSmooth:
        return Fo;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times,
      i = n.length;
    let s = 0,
      a = i - 1;
    for (; s !== i && n[s] < e; ) ++s;
    for (; a !== -1 && n[a] > t; ) --a;
    if ((++a, s !== 0 || a !== i)) {
      s >= a && ((a = Math.max(a, 1)), (s = a - 1));
      const o = this.getValueSize();
      (this.times = n.slice(s, a)),
        (this.values = this.values.slice(s * o, a * o));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    const n = this.times,
      i = this.values,
      s = n.length;
    s === 0 &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          o,
          l
        ),
          (e = !1);
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a),
          (e = !1);
        break;
      }
      a = l;
    }
    if (i !== void 0 && ly(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            o,
            c
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      i = this.getInterpolation() === Fo,
      s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let l = !1;
      const c = e[o],
        u = e[o + 1];
      if (c !== u && (o !== 1 || c !== e[0]))
        if (i) l = !0;
        else {
          const h = o * n,
            f = h - n,
            d = h + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[h + g];
            if (_ !== t[f + g] || _ !== t[d + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const h = o * n,
            f = a * n;
          for (let d = 0; d !== n; ++d) t[f + d] = t[h + d];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, l = a * n, c = 0; c !== n; ++c) t[l + c] = t[o + c];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      i = new n(this.name, e, t);
    return (i.createInterpolant = this.createInterpolant), i;
  }
}
Wn.prototype.TimeBufferType = Float32Array;
Wn.prototype.ValueBufferType = Float32Array;
Wn.prototype.DefaultInterpolation = Zr;
class Sr extends Wn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Sr.prototype.ValueTypeName = "bool";
Sr.prototype.ValueBufferType = Array;
Sr.prototype.DefaultInterpolation = Kr;
Sr.prototype.InterpolantFactoryMethodLinear = void 0;
Sr.prototype.InterpolantFactoryMethodSmooth = void 0;
class hd extends Wn {}
hd.prototype.ValueTypeName = "color";
class hr extends Wn {}
hr.prototype.ValueTypeName = "number";
class fy extends ca {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = (n - t) / (i - t);
    let c = e * o;
    for (let u = c + o; c !== u; c += 4) Wt.slerpFlat(s, 0, a, c - o, a, c, l);
    return s;
  }
}
class fr extends Wn {
  InterpolantFactoryMethodLinear(e) {
    return new fy(this.times, this.values, this.getValueSize(), e);
  }
}
fr.prototype.ValueTypeName = "quaternion";
fr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Tr extends Wn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Tr.prototype.ValueTypeName = "string";
Tr.prototype.ValueBufferType = Array;
Tr.prototype.DefaultInterpolation = Kr;
Tr.prototype.InterpolantFactoryMethodLinear = void 0;
Tr.prototype.InterpolantFactoryMethodSmooth = void 0;
class dr extends Wn {}
dr.prototype.ValueTypeName = "vector";
class Cn {
  constructor(e = "", t = -1, n = [], i = zc) {
    (this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = i),
      (this.uuid = Rn()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [],
      n = e.tracks,
      i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(py(n[a]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return (s.uuid = e.uuid), s;
  }
  static toJSON(e) {
    const t = [],
      n = e.tracks,
      i = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let s = 0, a = n.length; s !== a; ++s) t.push(Wn.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length,
      a = [];
    for (let o = 0; o < s; o++) {
      let l = [],
        c = [];
      l.push((o + s - 1) % s, o, (o + 1) % s), c.push(0, 1, 0);
      const u = cy(l);
      (l = Bh(l, 1, u)),
        (c = Bh(c, 1, u)),
        !i && l[0] === 0 && (l.push(s), c.push(c[0])),
        a.push(
          new hr(".morphTargetInfluences[" + t[o].name + "]", l, c).scale(1 / n)
        );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = (i.geometry && i.geometry.animations) || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {},
      s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o],
        u = c.name.match(s);
      if (u && u.length > 1) {
        const h = u[1];
        let f = i[h];
        f || (i[h] = f = []), f.push(c);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    const n = function (h, f, d, g, _) {
        if (d.length !== 0) {
          const p = [],
            m = [];
          cd(d, p, m, g), p.length !== 0 && _.push(new h(f, p, m));
        }
      },
      i = [],
      s = e.name || "default",
      a = e.fps || 30,
      o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let h = 0; h < c.length; h++) {
      const f = c[h].keys;
      if (!(!f || f.length === 0))
        if (f[0].morphTargets) {
          const d = {};
          let g;
          for (g = 0; g < f.length; g++)
            if (f[g].morphTargets)
              for (let _ = 0; _ < f[g].morphTargets.length; _++)
                d[f[g].morphTargets[_]] = -1;
          for (const _ in d) {
            const p = [],
              m = [];
            for (let y = 0; y !== f[g].morphTargets.length; ++y) {
              const v = f[g];
              p.push(v.time), m.push(v.morphTarget === _ ? 1 : 0);
            }
            i.push(new hr(".morphTargetInfluence[" + _ + "]", p, m));
          }
          l = d.length * a;
        } else {
          const d = ".bones[" + t[h].name + "]";
          n(dr, d + ".position", f, "pos", i),
            n(fr, d + ".quaternion", f, "rot", i),
            n(dr, d + ".scale", f, "scl", i);
        }
    }
    return i.length === 0 ? null : new this(s, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function dy(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return hr;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return dr;
    case "color":
      return hd;
    case "quaternion":
      return fr;
    case "bool":
    case "boolean":
      return Sr;
    case "string":
      return Tr;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function py(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = dy(r.type);
  if (r.times === void 0) {
    const t = [],
      n = [];
    cd(r.keys, t, n, "value"), (r.times = t), (r.values = n);
  }
  return e.parse !== void 0
    ? e.parse(r)
    : new e(r.name, r.times, r.values, r.interpolation);
}
const Ei = {
  enabled: !1,
  files: {},
  add: function (r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function (r) {
    if (this.enabled !== !1) return this.files[r];
  },
  remove: function (r) {
    delete this.files[r];
  },
  clear: function () {
    this.files = {};
  },
};
class my {
  constructor(e, t, n) {
    const i = this;
    let s = !1,
      a = 0,
      o = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        o++, s === !1 && i.onStart !== void 0 && i.onStart(u, a, o), (s = !0);
      }),
      (this.itemEnd = function (u) {
        a++,
          i.onProgress !== void 0 && i.onProgress(u, a, o),
          a === o && ((s = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (u) {
        i.onError !== void 0 && i.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (l = u), this;
      }),
      (this.addHandler = function (u, h) {
        return c.push(u, h), this;
      }),
      (this.removeHandler = function (u) {
        const h = c.indexOf(u);
        return h !== -1 && c.splice(h, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let h = 0, f = c.length; h < f; h += 2) {
          const d = c[h],
            g = c[h + 1];
          if ((d.global && (d.lastIndex = 0), d.test(u))) return g;
        }
        return null;
      });
  }
}
const _y = new my();
class vs {
  constructor(e) {
    (this.manager = e !== void 0 ? e : _y),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
vs.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const $n = {};
class gy extends Error {
  constructor(e, t) {
    super(e), (this.response = t);
  }
}
class Jc extends vs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = Ei.get(e);
    if (s !== void 0)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(s), this.manager.itemEnd(e);
        }, 0),
        s
      );
    if ($n[e] !== void 0) {
      $n[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    ($n[e] = []), $n[e].push({ onLoad: t, onProgress: n, onError: i });
    const a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      o = this.mimeType,
      l = this.responseType;
    fetch(a)
      .then((c) => {
        if (c.status === 200 || c.status === 0) {
          if (
            (c.status === 0 &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            typeof ReadableStream > "u" ||
              c.body === void 0 ||
              c.body.getReader === void 0)
          )
            return c;
          const u = $n[e],
            h = c.body.getReader(),
            f = c.headers.get("X-File-Size") || c.headers.get("Content-Length"),
            d = f ? parseInt(f) : 0,
            g = d !== 0;
          let _ = 0;
          const p = new ReadableStream({
            start(m) {
              y();
              function y() {
                h.read().then(
                  ({ done: v, value: S }) => {
                    if (v) m.close();
                    else {
                      _ += S.byteLength;
                      const R = new ProgressEvent("progress", {
                        lengthComputable: g,
                        loaded: _,
                        total: d,
                      });
                      for (let w = 0, b = u.length; w < b; w++) {
                        const P = u[w];
                        P.onProgress && P.onProgress(R);
                      }
                      m.enqueue(S), y();
                    }
                  },
                  (v) => {
                    m.error(v);
                  }
                );
              }
            },
          });
          return new Response(p);
        } else
          throw new gy(
            `fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,
            c
          );
      })
      .then((c) => {
        switch (l) {
          case "arraybuffer":
            return c.arrayBuffer();
          case "blob":
            return c.blob();
          case "document":
            return c.text().then((u) => new DOMParser().parseFromString(u, o));
          case "json":
            return c.json();
          default:
            if (o === void 0) return c.text();
            {
              const h = /charset="?([^;"\s]*)"?/i.exec(o),
                f = h && h[1] ? h[1].toLowerCase() : void 0,
                d = new TextDecoder(f);
              return c.arrayBuffer().then((g) => d.decode(g));
            }
        }
      })
      .then((c) => {
        Ei.add(e, c);
        const u = $n[e];
        delete $n[e];
        for (let h = 0, f = u.length; h < f; h++) {
          const d = u[h];
          d.onLoad && d.onLoad(c);
        }
      })
      .catch((c) => {
        const u = $n[e];
        if (u === void 0) throw (this.manager.itemError(e), c);
        delete $n[e];
        for (let h = 0, f = u.length; h < f; h++) {
          const d = u[h];
          d.onError && d.onError(c);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class xy extends vs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      a = Ei.get(e);
    if (a !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), s.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = $r("img");
    function l() {
      u(), Ei.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(h) {
      u(), i && i(h), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", l, !1),
        o.removeEventListener("error", c, !1);
    }
    return (
      o.addEventListener("load", l, !1),
      o.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class vy extends vs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new bt(),
      a = new xy(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          (s.image = o), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        i
      ),
      s
    );
  }
}
class Co extends nt {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new De(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      this.target !== void 0 && (t.object.target = this.target.uuid),
      t
    );
  }
}
const fl = new Ue(),
  kh = new D(),
  zh = new D();
class Qc {
  constructor(e) {
    (this.camera = e),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Me(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Ue()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Wc()),
      (this._frameExtents = new Me(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Je(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    kh.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(kh),
      zh.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(zh),
      t.updateMatrixWorld(),
      fl.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(fl),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(fl);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.intensity = e.intensity),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.intensity !== 1 && (e.intensity = this.intensity),
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class yy extends Qc {
  constructor() {
    super(new Ht(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      n = cr * 2 * e.angle * this.focus,
      i = this.mapSize.width / this.mapSize.height,
      s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) &&
      ((t.fov = n), (t.aspect = i), (t.far = s), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
class eu extends Co {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) {
    super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(nt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new nt()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = s),
      (this.decay = a),
      (this.map = null),
      (this.shadow = new yy());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
const Hh = new Ue(),
  Nr = new D(),
  dl = new D();
class My extends Qc {
  constructor() {
    super(new Ht(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new Me(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Je(2, 1, 1, 1),
        new Je(0, 1, 1, 1),
        new Je(3, 1, 1, 1),
        new Je(1, 1, 1, 1),
        new Je(3, 0, 1, 1),
        new Je(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new D(1, 0, 0),
        new D(-1, 0, 0),
        new D(0, 0, 1),
        new D(0, 0, -1),
        new D(0, 1, 0),
        new D(0, -1, 0),
      ]),
      (this._cubeUps = [
        new D(0, 1, 0),
        new D(0, 1, 0),
        new D(0, 1, 0),
        new D(0, 1, 0),
        new D(0, 0, 1),
        new D(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      i = this.matrix,
      s = e.distance || n.far;
    s !== n.far && ((n.far = s), n.updateProjectionMatrix()),
      Nr.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(Nr),
      dl.copy(n.position),
      dl.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(dl),
      n.updateMatrixWorld(),
      i.makeTranslation(-Nr.x, -Nr.y, -Nr.z),
      Hh.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Hh);
  }
}
class tu extends Co {
  constructor(e, t, n = 0, i = 2) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new My());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Sy extends Qc {
  constructor() {
    super(new Xc(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class Ty extends Co {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(nt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new nt()),
      (this.shadow = new Sy());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Ey extends Co {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class Gr {
  static decodeText(e) {
    if (
      (console.warn(
        "THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."
      ),
      typeof TextDecoder < "u")
    )
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === ""
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
        /^data:.*,.*$/i.test(e) ||
        /^blob:.*$/i.test(e)
          ? e
          : t + e);
  }
}
class Ay extends vs {
  constructor(e) {
    super(e),
      (this.isImageBitmapLoader = !0),
      typeof createImageBitmap > "u" &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported."
        ),
      typeof fetch > "u" &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" });
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      a = Ei.get(e);
    if (a !== void 0) {
      if ((s.manager.itemStart(e), a.then)) {
        a.then((c) => {
          t && t(c), s.manager.itemEnd(e);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return (
        setTimeout(function () {
          t && t(a), s.manager.itemEnd(e);
        }, 0),
        a
      );
    }
    const o = {};
    (o.credentials =
      this.crossOrigin === "anonymous" ? "same-origin" : "include"),
      (o.headers = this.requestHeader);
    const l = fetch(e, o)
      .then(function (c) {
        return c.blob();
      })
      .then(function (c) {
        return createImageBitmap(
          c,
          Object.assign(s.options, { colorSpaceConversion: "none" })
        );
      })
      .then(function (c) {
        return Ei.add(e, c), t && t(c), s.manager.itemEnd(e), c;
      })
      .catch(function (c) {
        i && i(c), Ei.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
      });
    Ei.add(e, l), s.manager.itemStart(e);
  }
}
let Xa;
class fd {
  static getContext() {
    return (
      Xa === void 0 &&
        (Xa = new (window.AudioContext || window.webkitAudioContext)()),
      Xa
    );
  }
  static setContext(e) {
    Xa = e;
  }
}
class by extends vs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this,
      a = new Jc(this.manager);
    a.setResponseType("arraybuffer"),
      a.setPath(this.path),
      a.setRequestHeader(this.requestHeader),
      a.setWithCredentials(this.withCredentials),
      a.load(
        e,
        function (l) {
          try {
            const c = l.slice(0);
            fd.getContext()
              .decodeAudioData(c, function (h) {
                t(h);
              })
              .catch(o);
          } catch (c) {
            o(c);
          }
        },
        n,
        i
      );
    function o(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e);
    }
  }
}
class dd {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = Vh()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Vh();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function Vh() {
  return (typeof performance > "u" ? Date : performance).now();
}
const Ki = new D(),
  Gh = new Wt(),
  wy = new D(),
  Zi = new D();
class Ry extends nt {
  constructor() {
    super(),
      (this.type = "AudioListener"),
      (this.context = fd.getContext()),
      (this.gain = this.context.createGain()),
      this.gain.connect(this.context.destination),
      (this.filter = null),
      (this.timeDelta = 0),
      (this._clock = new dd());
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return (
      this.filter !== null &&
        (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination),
        this.gain.connect(this.context.destination),
        (this.filter = null)),
      this
    );
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return (
      this.filter !== null
        ? (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination))
        : this.gain.disconnect(this.context.destination),
      (this.filter = e),
      this.gain.connect(this.filter),
      this.filter.connect(this.context.destination),
      this
    );
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener,
      n = this.up;
    if (
      ((this.timeDelta = this._clock.getDelta()),
      this.matrixWorld.decompose(Ki, Gh, wy),
      Zi.set(0, 0, -1).applyQuaternion(Gh),
      t.positionX)
    ) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(Ki.x, i),
        t.positionY.linearRampToValueAtTime(Ki.y, i),
        t.positionZ.linearRampToValueAtTime(Ki.z, i),
        t.forwardX.linearRampToValueAtTime(Zi.x, i),
        t.forwardY.linearRampToValueAtTime(Zi.y, i),
        t.forwardZ.linearRampToValueAtTime(Zi.z, i),
        t.upX.linearRampToValueAtTime(n.x, i),
        t.upY.linearRampToValueAtTime(n.y, i),
        t.upZ.linearRampToValueAtTime(n.z, i);
    } else
      t.setPosition(Ki.x, Ki.y, Ki.z),
        t.setOrientation(Zi.x, Zi.y, Zi.z, n.x, n.y, n.z);
  }
}
class ua extends nt {
  constructor(e) {
    super(),
      (this.type = "Audio"),
      (this.listener = e),
      (this.context = e.context),
      (this.gain = this.context.createGain()),
      this.gain.connect(e.getInput()),
      (this.autoplay = !1),
      (this.buffer = null),
      (this.detune = 0),
      (this.loop = !1),
      (this.loopStart = 0),
      (this.loopEnd = 0),
      (this.offset = 0),
      (this.duration = void 0),
      (this.playbackRate = 1),
      (this.isPlaying = !1),
      (this.hasPlaybackControl = !0),
      (this.source = null),
      (this.sourceType = "empty"),
      (this._startedAt = 0),
      (this._progress = 0),
      (this._connected = !1),
      (this.filters = []);
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "audioNode"),
      (this.source = e),
      this.connect(),
      this
    );
  }
  setMediaElementSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaNode"),
      (this.source = this.context.createMediaElementSource(e)),
      this.connect(),
      this
    );
  }
  setMediaStreamSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaStreamNode"),
      (this.source = this.context.createMediaStreamSource(e)),
      this.connect(),
      this
    );
  }
  setBuffer(e) {
    return (
      (this.buffer = e),
      (this.sourceType = "buffer"),
      this.autoplay && this.play(),
      this
    );
  }
  play(e = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return (
      (t.buffer = this.buffer),
      (t.loop = this.loop),
      (t.loopStart = this.loopStart),
      (t.loopEnd = this.loopEnd),
      (t.onended = this.onEnded.bind(this)),
      t.start(this._startedAt, this._progress + this.offset, this.duration),
      (this.isPlaying = !0),
      (this.source = t),
      this.setDetune(this.detune),
      this.setPlaybackRate(this.playbackRate),
      this.connect()
    );
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      this.isPlaying === !0 &&
        ((this._progress +=
          Math.max(this.context.currentTime - this._startedAt, 0) *
          this.playbackRate),
        this.loop === !0 &&
          (this._progress =
            this._progress % (this.duration || this.buffer.duration)),
        this.source.stop(),
        (this.source.onended = null),
        (this.isPlaying = !1)),
      this
    );
  }
  stop() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this._progress = 0),
      this.source !== null &&
        (this.source.stop(), (this.source.onended = null)),
      (this.isPlaying = !1),
      this
    );
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return (this._connected = !0), this;
  }
  disconnect() {
    if (this._connected !== !1) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let e = 1, t = this.filters.length; e < t; e++)
          this.filters[e - 1].disconnect(this.filters[e]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return (this._connected = !1), this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return (
      e || (e = []),
      this._connected === !0
        ? (this.disconnect(), (this.filters = e.slice()), this.connect())
        : (this.filters = e.slice()),
      this
    );
  }
  setDetune(e) {
    return (
      (this.detune = e),
      this.isPlaying === !0 &&
        this.source.detune !== void 0 &&
        this.source.detune.setTargetAtTime(
          this.detune,
          this.context.currentTime,
          0.01
        ),
      this
    );
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.playbackRate = e),
      this.isPlaying === !0 &&
        this.source.playbackRate.setTargetAtTime(
          this.playbackRate,
          this.context.currentTime,
          0.01
        ),
      this
    );
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1
      ? (console.warn("THREE.Audio: this Audio has no playback control."), !1)
      : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.loop = e),
      this.isPlaying === !0 && (this.source.loop = this.loop),
      this
    );
  }
  setLoopStart(e) {
    return (this.loopStart = e), this;
  }
  setLoopEnd(e) {
    return (this.loopEnd = e), this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
}
const $i = new D(),
  Wh = new Wt(),
  Cy = new D(),
  Ji = new D();
class Py extends ua {
  constructor(e) {
    super(e),
      (this.panner = this.context.createPanner()),
      (this.panner.panningModel = "HRTF"),
      this.panner.connect(this.gain);
  }
  connect() {
    super.connect(), this.panner.connect(this.gain);
  }
  disconnect() {
    super.disconnect(), this.panner.disconnect(this.gain);
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(e) {
    return (this.panner.refDistance = e), this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(e) {
    return (this.panner.rolloffFactor = e), this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(e) {
    return (this.panner.distanceModel = e), this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(e) {
    return (this.panner.maxDistance = e), this;
  }
  setDirectionalCone(e, t, n) {
    return (
      (this.panner.coneInnerAngle = e),
      (this.panner.coneOuterAngle = t),
      (this.panner.coneOuterGain = n),
      this
    );
  }
  updateMatrixWorld(e) {
    if (
      (super.updateMatrixWorld(e),
      this.hasPlaybackControl === !0 && this.isPlaying === !1)
    )
      return;
    this.matrixWorld.decompose($i, Wh, Cy), Ji.set(0, 0, 1).applyQuaternion(Wh);
    const t = this.panner;
    if (t.positionX) {
      const n = this.context.currentTime + this.listener.timeDelta;
      t.positionX.linearRampToValueAtTime($i.x, n),
        t.positionY.linearRampToValueAtTime($i.y, n),
        t.positionZ.linearRampToValueAtTime($i.z, n),
        t.orientationX.linearRampToValueAtTime(Ji.x, n),
        t.orientationY.linearRampToValueAtTime(Ji.y, n),
        t.orientationZ.linearRampToValueAtTime(Ji.z, n);
    } else t.setPosition($i.x, $i.y, $i.z), t.setOrientation(Ji.x, Ji.y, Ji.z);
  }
}
class Ly {
  constructor(e, t, n) {
    (this.binding = e), (this.valueSize = n);
    let i, s, a;
    switch (t) {
      case "quaternion":
        (i = this._slerp),
          (s = this._slerpAdditive),
          (a = this._setAdditiveIdentityQuaternion),
          (this.buffer = new Float64Array(n * 6)),
          (this._workIndex = 5);
        break;
      case "string":
      case "bool":
        (i = this._select),
          (s = this._select),
          (a = this._setAdditiveIdentityOther),
          (this.buffer = new Array(n * 5));
        break;
      default:
        (i = this._lerp),
          (s = this._lerpAdditive),
          (a = this._setAdditiveIdentityNumeric),
          (this.buffer = new Float64Array(n * 5));
    }
    (this._mixBufferRegion = i),
      (this._mixBufferRegionAdditive = s),
      (this._setIdentity = a),
      (this._origIndex = 3),
      (this._addIndex = 4),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0),
      (this.useCount = 0),
      (this.referenceCount = 0);
  }
  accumulate(e, t) {
    const n = this.buffer,
      i = this.valueSize,
      s = e * i + i;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let o = 0; o !== i; ++o) n[s + o] = n[o];
      a = t;
    } else {
      a += t;
      const o = t / a;
      this._mixBufferRegion(n, s, 0, o, i);
    }
    this.cumulativeWeight = a;
  }
  accumulateAdditive(e) {
    const t = this.buffer,
      n = this.valueSize,
      i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(),
      this._mixBufferRegionAdditive(t, i, 0, e, n),
      (this.cumulativeWeightAdditive += e);
  }
  apply(e) {
    const t = this.valueSize,
      n = this.buffer,
      i = e * t + t,
      s = this.cumulativeWeight,
      a = this.cumulativeWeightAdditive,
      o = this.binding;
    if (
      ((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), s < 1)
    ) {
      const l = t * this._origIndex;
      this._mixBufferRegion(n, i, l, 1 - s, t);
    }
    a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l)
      if (n[l] !== n[l + t]) {
        o.setValue(n, i);
        break;
      }
  }
  saveOriginalState() {
    const e = this.binding,
      t = this.buffer,
      n = this.valueSize,
      i = n * this._origIndex;
    e.getValue(t, i);
    for (let s = n, a = i; s !== a; ++s) t[s] = t[i + (s % n)];
    this._setIdentity(),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0);
  }
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize,
      t = e + this.valueSize;
    for (let n = e; n < t; n++) this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(),
      (this.buffer[this._addIndex * this.valueSize + 3] = 1);
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize,
      t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  _select(e, t, n, i, s) {
    if (i >= 0.5) for (let a = 0; a !== s; ++a) e[t + a] = e[n + a];
  }
  _slerp(e, t, n, i) {
    Wt.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, s) {
    const a = this._workIndex * s;
    Wt.multiplyQuaternionsFlat(e, a, e, t, e, n),
      Wt.slerpFlat(e, t, e, t, e, a, i);
  }
  _lerp(e, t, n, i, s) {
    const a = 1 - i;
    for (let o = 0; o !== s; ++o) {
      const l = t + o;
      e[l] = e[l] * a + e[n + o] * i;
    }
  }
  _lerpAdditive(e, t, n, i, s) {
    for (let a = 0; a !== s; ++a) {
      const o = t + a;
      e[o] = e[o] + e[n + a] * i;
    }
  }
}
const nu = "\\[\\]\\.:\\/",
  Iy = new RegExp("[" + nu + "]", "g"),
  iu = "[^" + nu + "]",
  Dy = "[^" + nu.replace("\\.", "") + "]",
  Ny = /((?:WC+[\/:])*)/.source.replace("WC", iu),
  Uy = /(WCOD+)?/.source.replace("WCOD", Dy),
  Oy = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", iu),
  Fy = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", iu),
  By = new RegExp("^" + Ny + Uy + Oy + Fy + "$"),
  ky = ["material", "materials", "bones", "map"];
class zy {
  constructor(e, t, n) {
    const i = n || Ze.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Ze {
  constructor(e, t, n) {
    (this.path = t),
      (this.parsedPath = n || Ze.parseTrackName(t)),
      (this.node = Ze.findNode(e, this.parsedPath.nodeName)),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new Ze.Composite(e, t, n)
      : new Ze(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Iy, "");
  }
  static parseTrackName(e) {
    const t = By.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      ky.indexOf(s) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = s));
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return n;
  }
  static findNode(e, t) {
    if (
      t === void 0 ||
      t === "" ||
      t === "." ||
      t === -1 ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function (s) {
          for (let a = 0; a < s.length; a++) {
            const o = s[a];
            if (o.name === t || o.uuid === t) return o;
            const l = n(o.children);
            if (l) return l;
          }
          return null;
        },
        i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      n = t.objectName,
      i = t.propertyName;
    let s = t.propertyIndex;
    if (
      (e || ((e = Ze.findNode(this.rootNode, t.nodeName)), (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      console.warn(
        "THREE.PropertyBinding: No target node found for track: " +
          this.path +
          "."
      );
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          e = e.skeleton.bones;
          for (let u = 0; u < e.length; u++)
            if (e[u].name === c) {
              c = u;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.map) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this
            );
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
          return;
        }
        e = e[c];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          c +
          "." +
          i +
          " but it wasn't found.",
        e
      );
      return;
    }
    let o = this.Versioning.None;
    (this.targetObject = e),
      e.needsUpdate !== void 0
        ? (o = this.Versioning.NeedsUpdate)
        : e.matrixWorldNeedsUpdate !== void 0 &&
          (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
          return;
        }
        e.morphTargetDictionary[s] !== void 0 &&
          (s = e.morphTargetDictionary[s]);
      }
      (l = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = s);
    } else
      a.fromArray !== void 0 && a.toArray !== void 0
        ? ((l = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((l = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[l]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[l][o]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
Ze.Composite = zy;
Ze.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
Ze.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
Ze.prototype.GetterByBindingType = [
  Ze.prototype._getValue_direct,
  Ze.prototype._getValue_array,
  Ze.prototype._getValue_arrayElement,
  Ze.prototype._getValue_toArray,
];
Ze.prototype.SetterByBindingTypeAndVersioning = [
  [
    Ze.prototype._setValue_direct,
    Ze.prototype._setValue_direct_setNeedsUpdate,
    Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    Ze.prototype._setValue_array,
    Ze.prototype._setValue_array_setNeedsUpdate,
    Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    Ze.prototype._setValue_arrayElement,
    Ze.prototype._setValue_arrayElement_setNeedsUpdate,
    Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    Ze.prototype._setValue_fromArray,
    Ze.prototype._setValue_fromArray_setNeedsUpdate,
    Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
class Hy {
  constructor(e, t, n = null, i = t.blendMode) {
    (this._mixer = e),
      (this._clip = t),
      (this._localRoot = n),
      (this.blendMode = i);
    const s = t.tracks,
      a = s.length,
      o = new Array(a),
      l = { endingStart: Ws, endingEnd: Ws };
    for (let c = 0; c !== a; ++c) {
      const u = s[c].createInterpolant(null);
      (o[c] = u), (u.settings = l);
    }
    (this._interpolantSettings = l),
      (this._interpolants = o),
      (this._propertyBindings = new Array(a)),
      (this._cacheIndex = null),
      (this._byClipCacheIndex = null),
      (this._timeScaleInterpolant = null),
      (this._weightInterpolant = null),
      (this.loop = fm),
      (this._loopCount = -1),
      (this._startTime = null),
      (this.time = 0),
      (this.timeScale = 1),
      (this._effectiveTimeScale = 1),
      (this.weight = 1),
      (this._effectiveWeight = 1),
      (this.repetitions = 1 / 0),
      (this.paused = !1),
      (this.enabled = !0),
      (this.clampWhenFinished = !1),
      (this.zeroSlopeAtStart = !0),
      (this.zeroSlopeAtEnd = !0);
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return (
      (this.paused = !1),
      (this.enabled = !0),
      (this.time = 0),
      (this._loopCount = -1),
      (this._startTime = null),
      this.stopFading().stopWarping()
    );
  }
  isRunning() {
    return (
      this.enabled &&
      !this.paused &&
      this.timeScale !== 0 &&
      this._startTime === null &&
      this._mixer._isActiveAction(this)
    );
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return (this._startTime = e), this;
  }
  setLoop(e, t) {
    return (this.loop = e), (this.repetitions = t), this;
  }
  setEffectiveWeight(e) {
    return (
      (this.weight = e),
      (this._effectiveWeight = this.enabled ? e : 0),
      this.stopFading()
    );
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if ((e.fadeOut(t), this.fadeIn(t), n)) {
      const i = this._clip.duration,
        s = e._clip.duration,
        a = s / i,
        o = i / s;
      e.warp(1, a, t), this.warp(o, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return (
      e !== null &&
        ((this._weightInterpolant = null),
        this._mixer._takeBackControlInterpolant(e)),
      this
    );
  }
  setEffectiveTimeScale(e) {
    return (
      (this.timeScale = e),
      (this._effectiveTimeScale = this.paused ? 0 : e),
      this.stopWarping()
    );
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return (this.timeScale = this._clip.duration / e), this.stopWarping();
  }
  syncWith(e) {
    return (
      (this.time = e.time), (this.timeScale = e.timeScale), this.stopWarping()
    );
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer,
      s = i.time,
      a = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null &&
      ((o = i._lendControlInterpolant()), (this._timeScaleInterpolant = o));
    const l = o.parameterPositions,
      c = o.sampleValues;
    return (l[0] = s), (l[1] = s + n), (c[0] = e / a), (c[1] = t / a), this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return (
      e !== null &&
        ((this._timeScaleInterpolant = null),
        this._mixer._takeBackControlInterpolant(e)),
      this
    );
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const l = (e - s) * n;
      l < 0 || n === 0 ? (t = 0) : ((this._startTime = null), (t = n * l));
    }
    t *= this._updateTimeScale(e);
    const a = this._updateTime(t),
      o = this._updateWeight(e);
    if (o > 0) {
      const l = this._interpolants,
        c = this._propertyBindings;
      switch (this.blendMode) {
        case dm:
          for (let u = 0, h = l.length; u !== h; ++u)
            l[u].evaluate(a), c[u].accumulateAdditive(o);
          break;
        case zc:
        default:
          for (let u = 0, h = l.length; u !== h; ++u)
            l[u].evaluate(a), c[u].accumulate(i, o);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        (t *= i),
          e > n.parameterPositions[1] &&
            (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return (this._effectiveWeight = t), t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        (t *= i),
          e > n.parameterPositions[1] &&
            (this.stopWarping(),
            t === 0 ? (this.paused = !0) : (this.timeScale = t));
      }
    }
    return (this._effectiveTimeScale = t), t;
  }
  _updateTime(e) {
    const t = this._clip.duration,
      n = this.loop;
    let i = this.time + e,
      s = this._loopCount;
    const a = n === kf;
    if (e === 0) return s === -1 ? i : a && (s & 1) === 1 ? t - i : i;
    if (n === Pi) {
      s === -1 && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
      e: {
        if (i >= t) i = t;
        else if (i < 0) i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
          (this.time = i),
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e < 0 ? -1 : 1,
          });
      }
    } else {
      if (
        (s === -1 &&
          (e >= 0
            ? ((s = 0), this._setEndings(!0, this.repetitions === 0, a))
            : this._setEndings(this.repetitions === 0, !0, a)),
        i >= t || i < 0)
      ) {
        const o = Math.floor(i / t);
        (i -= t * o), (s += Math.abs(o));
        const l = this.repetitions - s;
        if (l <= 0)
          this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (i = e > 0 ? t : 0),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: e > 0 ? 1 : -1,
            });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, a);
          } else this._setEndings(!1, !1, a);
          (this._loopCount = s),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: o,
            });
        }
      } else this.time = i;
      if (a && (s & 1) === 1) return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n
      ? ((i.endingStart = Xs), (i.endingEnd = Xs))
      : (e
          ? (i.endingStart = this.zeroSlopeAtStart ? Xs : Ws)
          : (i.endingStart = lo),
        t ? (i.endingEnd = this.zeroSlopeAtEnd ? Xs : Ws) : (i.endingEnd = lo));
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer,
      s = i.time;
    let a = this._weightInterpolant;
    a === null &&
      ((a = i._lendControlInterpolant()), (this._weightInterpolant = a));
    const o = a.parameterPositions,
      l = a.sampleValues;
    return (o[0] = s), (l[0] = t), (o[1] = s + e), (l[1] = n), this;
  }
}
const Vy = new Float32Array(1);
class Gy extends ki {
  constructor(e) {
    super(),
      (this._root = e),
      this._initMemoryManager(),
      (this._accuIndex = 0),
      (this.time = 0),
      (this.timeScale = 1);
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root,
      i = e._clip.tracks,
      s = i.length,
      a = e._propertyBindings,
      o = e._interpolants,
      l = n.uuid,
      c = this._bindingsByRootAndName;
    let u = c[l];
    u === void 0 && ((u = {}), (c[l] = u));
    for (let h = 0; h !== s; ++h) {
      const f = i[h],
        d = f.name;
      let g = u[d];
      if (g !== void 0) ++g.referenceCount, (a[h] = g);
      else {
        if (((g = a[h]), g !== void 0)) {
          g._cacheIndex === null &&
            (++g.referenceCount, this._addInactiveBinding(g, l, d));
          continue;
        }
        const _ = t && t._propertyBindings[h].binding.parsedPath;
        (g = new Ly(Ze.create(n, d, _), f.ValueTypeName, f.getValueSize())),
          ++g.referenceCount,
          this._addInactiveBinding(g, l, d),
          (a[h] = g);
      }
      o[h].resultBuffer = g.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid,
          i = e._clip.uuid,
          s = this._actionsByClip[i];
        this._bindAction(e, s && s.knownActions[0]),
          this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        --s.useCount === 0 &&
          (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    (this._actions = []),
      (this._nActiveActions = 0),
      (this._actionsByClip = {}),
      (this._bindings = []),
      (this._nActiveBindings = 0),
      (this._bindingsByRootAndName = {}),
      (this._controlInterpolants = []),
      (this._nActiveControlInterpolants = 0);
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        },
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        },
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        },
      },
    };
  }
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions,
      s = this._actionsByClip;
    let a = s[t];
    if (a === void 0)
      (a = { knownActions: [e], actionByRoot: {} }),
        (e._byClipCacheIndex = 0),
        (s[t] = a);
    else {
      const o = a.knownActions;
      (e._byClipCacheIndex = o.length), o.push(e);
    }
    (e._cacheIndex = i.length), i.push(e), (a.actionByRoot[n] = e);
  }
  _removeInactiveAction(e) {
    const t = this._actions,
      n = t[t.length - 1],
      i = e._cacheIndex;
    (n._cacheIndex = i), (t[i] = n), t.pop(), (e._cacheIndex = null);
    const s = e._clip.uuid,
      a = this._actionsByClip,
      o = a[s],
      l = o.knownActions,
      c = l[l.length - 1],
      u = e._byClipCacheIndex;
    (c._byClipCacheIndex = u),
      (l[u] = c),
      l.pop(),
      (e._byClipCacheIndex = null);
    const h = o.actionByRoot,
      f = (e._localRoot || this._root).uuid;
    delete h[f],
      l.length === 0 && delete a[s],
      this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = t[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(e) {
    const t = this._actions,
      n = e._cacheIndex,
      i = this._nActiveActions++,
      s = t[i];
    (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
  }
  _takeBackAction(e) {
    const t = this._actions,
      n = e._cacheIndex,
      i = --this._nActiveActions,
      s = t[i];
    (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
  }
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName,
      s = this._bindings;
    let a = i[t];
    a === void 0 && ((a = {}), (i[t] = a)),
      (a[n] = e),
      (e._cacheIndex = s.length),
      s.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings,
      n = e.binding,
      i = n.rootNode.uuid,
      s = n.path,
      a = this._bindingsByRootAndName,
      o = a[i],
      l = t[t.length - 1],
      c = e._cacheIndex;
    (l._cacheIndex = c),
      (t[c] = l),
      t.pop(),
      delete o[s],
      Object.keys(o).length === 0 && delete a[i];
  }
  _lendBinding(e) {
    const t = this._bindings,
      n = e._cacheIndex,
      i = this._nActiveBindings++,
      s = t[i];
    (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
  }
  _takeBackBinding(e) {
    const t = this._bindings,
      n = e._cacheIndex,
      i = --this._nActiveBindings,
      s = t[i];
    (e._cacheIndex = i), (t[i] = e), (s._cacheIndex = n), (t[n] = s);
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants,
      t = this._nActiveControlInterpolants++;
    let n = e[t];
    return (
      n === void 0 &&
        ((n = new ud(new Float32Array(2), new Float32Array(2), 1, Vy)),
        (n.__cacheIndex = t),
        (e[t] = n)),
      n
    );
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants,
      n = e.__cacheIndex,
      i = --this._nActiveControlInterpolants,
      s = t[i];
    (e.__cacheIndex = i), (t[i] = e), (s.__cacheIndex = n), (t[n] = s);
  }
  clipAction(e, t, n) {
    const i = t || this._root,
      s = i.uuid;
    let a = typeof e == "string" ? Cn.findByName(i, e) : e;
    const o = a !== null ? a.uuid : e,
      l = this._actionsByClip[o];
    let c = null;
    if (
      (n === void 0 && (a !== null ? (n = a.blendMode) : (n = zc)),
      l !== void 0)
    ) {
      const h = l.actionByRoot[s];
      if (h !== void 0 && h.blendMode === n) return h;
      (c = l.knownActions[0]), a === null && (a = c._clip);
    }
    if (a === null) return null;
    const u = new Hy(this, a, t, n);
    return this._bindAction(u, c), this._addInactiveAction(u, o, s), u;
  }
  existingAction(e, t) {
    const n = t || this._root,
      i = n.uuid,
      s = typeof e == "string" ? Cn.findByName(n, e) : e,
      a = s ? s.uuid : e,
      o = this._actionsByClip[a];
    return (o !== void 0 && o.actionByRoot[i]) || null;
  }
  stopAllAction() {
    const e = this._actions,
      t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n) e[n].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions,
      n = this._nActiveActions,
      i = (this.time += e),
      s = Math.sign(e),
      a = (this._accuIndex ^= 1);
    for (let c = 0; c !== n; ++c) t[c]._update(i, e, s, a);
    const o = this._bindings,
      l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c) o[c].apply(a);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    const t = this._actions,
      n = e.uuid,
      i = this._actionsByClip,
      s = i[n];
    if (s !== void 0) {
      const a = s.knownActions;
      for (let o = 0, l = a.length; o !== l; ++o) {
        const c = a[o];
        this._deactivateAction(c);
        const u = c._cacheIndex,
          h = t[t.length - 1];
        (c._cacheIndex = null),
          (c._byClipCacheIndex = null),
          (h._cacheIndex = u),
          (t[u] = h),
          t.pop(),
          this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid,
      n = this._actionsByClip;
    for (const a in n) {
      const o = n[a].actionByRoot,
        l = o[t];
      l !== void 0 &&
        (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const i = this._bindingsByRootAndName,
      s = i[t];
    if (s !== void 0)
      for (const a in s) {
        const o = s[a];
        o.restoreOriginalState(), this._removeInactiveBinding(o);
      }
  }
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
const Xh = new Ue();
class Wy {
  constructor(e, t, n = 0, i = 1 / 0) {
    (this.ray = new yr(e, t)),
      (this.near = n),
      (this.far = i),
      (this.camera = null),
      (this.layers = new Gc()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      });
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t.isOrthographicCamera
      ? (this.ray.origin
          .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
          .unproject(t),
        this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
        (this.camera = t))
      : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return (
      Xh.identity().extractRotation(e.matrixWorld),
      this.ray.origin.setFromMatrixPosition(e.matrixWorld),
      this.ray.direction.set(0, 0, -1).applyMatrix4(Xh),
      this
    );
  }
  intersectObject(e, t = !0, n = []) {
    return hc(e, this, n, t), n.sort(qh), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++) hc(e[i], this, n, t);
    return n.sort(qh), n;
  }
}
function qh(r, e) {
  return r.distance - e.distance;
}
function hc(r, e, t, n) {
  let i = !0;
  if (
    (r.layers.test(e.layers) && r.raycast(e, t) === !1 && (i = !1),
    i === !0 && n === !0)
  ) {
    const s = r.children;
    for (let a = 0, o = s.length; a < o; a++) hc(s[a], e, t, !0);
  }
}
class Yh {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(Pt(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Ic } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Ic));
function jh(r, e) {
  if (e === pm)
    return (
      console.warn(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
      ),
      r
    );
  if (e === ac || e === zf) {
    let t = r.getIndex();
    if (t === null) {
      const a = [],
        o = r.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++) a.push(l);
        r.setIndex(a), (t = r.getIndex());
      } else
        return (
          console.error(
            "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
          ),
          r
        );
    }
    const n = t.count - 2,
      i = [];
    if (e === ac)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0
          ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2)))
          : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n &&
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
      );
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return (
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
        e
      ),
      r
    );
}
class Xy extends vs {
  constructor(e) {
    super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (t) {
        return new Zy(t);
      }),
      this.register(function (t) {
        return new $y(t);
      }),
      this.register(function (t) {
        return new aM(t);
      }),
      this.register(function (t) {
        return new oM(t);
      }),
      this.register(function (t) {
        return new lM(t);
      }),
      this.register(function (t) {
        return new Qy(t);
      }),
      this.register(function (t) {
        return new eM(t);
      }),
      this.register(function (t) {
        return new tM(t);
      }),
      this.register(function (t) {
        return new nM(t);
      }),
      this.register(function (t) {
        return new Ky(t);
      }),
      this.register(function (t) {
        return new iM(t);
      }),
      this.register(function (t) {
        return new Jy(t);
      }),
      this.register(function (t) {
        return new rM(t);
      }),
      this.register(function (t) {
        return new sM(t);
      }),
      this.register(function (t) {
        return new Yy(t);
      }),
      this.register(function (t) {
        return new cM(t);
      }),
      this.register(function (t) {
        return new uM(t);
      });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    if (this.resourcePath !== "") a = this.resourcePath;
    else if (this.path !== "") {
      const c = Gr.extractUrlBase(e);
      a = Gr.resolveURL(c, this.path);
    } else a = Gr.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function (c) {
        i ? i(c) : console.error(c),
          s.manager.itemError(e),
          s.manager.itemEnd(e);
      },
      l = new Jc(this.manager);
    l.setPath(this.path),
      l.setResponseType("arraybuffer"),
      l.setRequestHeader(this.requestHeader),
      l.setWithCredentials(this.withCredentials),
      l.load(
        e,
        function (c) {
          try {
            s.parse(
              c,
              a,
              function (u) {
                t(u), s.manager.itemEnd(e);
              },
              o
            );
          } catch (u) {
            o(u);
          }
        },
        n,
        o
      );
  }
  setDRACOLoader(e) {
    return (this.dracoLoader = e), this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return (this.ktx2Loader = e), this;
  }
  setMeshoptDecoder(e) {
    return (this.meshoptDecoder = e), this;
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, i) {
    let s;
    const a = {},
      o = {},
      l = new TextDecoder();
    if (typeof e == "string") s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === pd) {
        try {
          a[ke.KHR_BINARY_GLTF] = new hM(e);
        } catch (h) {
          i && i(h);
          return;
        }
        s = JSON.parse(a[ke.KHR_BINARY_GLTF].content);
      } else s = JSON.parse(l.decode(e));
    else s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i &&
        i(
          new Error(
            "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
          )
        );
      return;
    }
    const c = new EM(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const h = this.pluginCallbacks[u](c);
      h.name ||
        console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
        (o[h.name] = h),
        (a[h.name] = !0);
    }
    if (s.extensionsUsed)
      for (let u = 0; u < s.extensionsUsed.length; ++u) {
        const h = s.extensionsUsed[u],
          f = s.extensionsRequired || [];
        switch (h) {
          case ke.KHR_MATERIALS_UNLIT:
            a[h] = new jy();
            break;
          case ke.KHR_DRACO_MESH_COMPRESSION:
            a[h] = new fM(s, this.dracoLoader);
            break;
          case ke.KHR_TEXTURE_TRANSFORM:
            a[h] = new dM();
            break;
          case ke.KHR_MESH_QUANTIZATION:
            a[h] = new pM();
            break;
          default:
            f.indexOf(h) >= 0 &&
              o[h] === void 0 &&
              console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    c.setExtensions(a), c.setPlugins(o), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function (i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function qy() {
  let r = {};
  return {
    get: function (e) {
      return r[e];
    },
    add: function (e, t) {
      r[e] = t;
    },
    remove: function (e) {
      delete r[e];
    },
    removeAll: function () {
      r = {};
    },
  };
}
const ke = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class Yy {
  constructor(e) {
    (this.parser = e),
      (this.name = ke.KHR_LIGHTS_PUNCTUAL),
      (this.cache = { refs: {}, uses: {} });
  }
  _markDefs() {
    const e = this.parser,
      t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions &&
        s.extensions[this.name] &&
        s.extensions[this.name].light !== void 0 &&
        e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser,
      n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json,
      l = (((s.extensions && s.extensions[this.name]) || {}).lights || [])[e];
    let c;
    const u = new De(16777215);
    l.color !== void 0 && u.setRGB(l.color[0], l.color[1], l.color[2], It);
    const h = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        (c = new Ty(u)), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        (c = new tu(u)), (c.distance = h);
        break;
      case "spot":
        (c = new eu(u)),
          (c.distance = h),
          (l.spot = l.spot || {}),
          (l.spot.innerConeAngle =
            l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0),
          (l.spot.outerConeAngle =
            l.spot.outerConeAngle !== void 0
              ? l.spot.outerConeAngle
              : Math.PI / 4),
          (c.angle = l.spot.outerConeAngle),
          (c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle),
          c.target.position.set(0, 0, -1),
          c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return (
      c.position.set(0, 0, 0),
      (c.decay = 2),
      Qn(c, l),
      l.intensity !== void 0 && (c.intensity = l.intensity),
      (c.name = t.createUniqueName(l.name || "light_" + e)),
      (i = Promise.resolve(c)),
      t.cache.add(n, i),
      i
    );
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this,
      n = this.parser,
      s = n.json.nodes[e],
      o = ((s.extensions && s.extensions[this.name]) || {}).light;
    return o === void 0
      ? null
      : this._loadLight(o).then(function (l) {
          return n._getNodeRef(t.cache, o, l);
        });
  }
}
class jy {
  constructor() {
    this.name = ke.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Si;
  }
  extendParams(e, t, n) {
    const i = [];
    (e.color = new De(1, 1, 1)), (e.opacity = 1);
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const a = s.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], It), (e.opacity = a[3]);
      }
      s.baseColorTexture !== void 0 &&
        i.push(n.assignTexture(e, "map", s.baseColorTexture, zt));
    }
    return Promise.all(i);
  }
}
class Ky {
  constructor(e) {
    (this.parser = e), (this.name = ke.KHR_MATERIALS_EMISSIVE_STRENGTH);
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class Zy {
  constructor(e) {
    (this.parser = e), (this.name = ke.KHR_MATERIALS_CLEARCOAT);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      a = i.extensions[this.name];
    if (
      (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor),
      a.clearcoatTexture !== void 0 &&
        s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)),
      a.clearcoatRoughnessFactor !== void 0 &&
        (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
      a.clearcoatRoughnessTexture !== void 0 &&
        s.push(
          n.assignTexture(
            t,
            "clearcoatRoughnessMap",
            a.clearcoatRoughnessTexture
          )
        ),
      a.clearcoatNormalTexture !== void 0 &&
        (s.push(
          n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)
        ),
        a.clearcoatNormalTexture.scale !== void 0))
    ) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Me(o, o);
    }
    return Promise.all(s);
  }
}
class $y {
  constructor(e) {
    (this.parser = e), (this.name = ke.KHR_MATERIALS_DISPERSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = i.extensions[this.name];
    return (
      (t.dispersion = s.dispersion !== void 0 ? s.dispersion : 0),
      Promise.resolve()
    );
  }
}
class Jy {
  constructor(e) {
    (this.parser = e), (this.name = ke.KHR_MATERIALS_IRIDESCENCE);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      a = i.extensions[this.name];
    return (
      a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor),
      a.iridescenceTexture !== void 0 &&
        s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)),
      a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor),
      t.iridescenceThicknessRange === void 0 &&
        (t.iridescenceThicknessRange = [100, 400]),
      a.iridescenceThicknessMinimum !== void 0 &&
        (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
      a.iridescenceThicknessMaximum !== void 0 &&
        (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
      a.iridescenceThicknessTexture !== void 0 &&
        s.push(
          n.assignTexture(
            t,
            "iridescenceThicknessMap",
            a.iridescenceThicknessTexture
          )
        ),
      Promise.all(s)
    );
  }
}
class Qy {
  constructor(e) {
    (this.parser = e), (this.name = ke.KHR_MATERIALS_SHEEN);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [];
    (t.sheenColor = new De(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], It);
    }
    return (
      a.sheenRoughnessFactor !== void 0 &&
        (t.sheenRoughness = a.sheenRoughnessFactor),
      a.sheenColorTexture !== void 0 &&
        s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, zt)),
      a.sheenRoughnessTexture !== void 0 &&
        s.push(
          n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)
        ),
      Promise.all(s)
    );
  }
}
class eM {
  constructor(e) {
    (this.parser = e), (this.name = ke.KHR_MATERIALS_TRANSMISSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      a = i.extensions[this.name];
    return (
      a.transmissionFactor !== void 0 &&
        (t.transmission = a.transmissionFactor),
      a.transmissionTexture !== void 0 &&
        s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)),
      Promise.all(s)
    );
  }
}
class tM {
  constructor(e) {
    (this.parser = e), (this.name = ke.KHR_MATERIALS_VOLUME);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      a = i.extensions[this.name];
    (t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0),
      a.thicknessTexture !== void 0 &&
        s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)),
      (t.attenuationDistance = a.attenuationDistance || 1 / 0);
    const o = a.attenuationColor || [1, 1, 1];
    return (
      (t.attenuationColor = new De().setRGB(o[0], o[1], o[2], It)),
      Promise.all(s)
    );
  }
}
class nM {
  constructor(e) {
    (this.parser = e), (this.name = ke.KHR_MATERIALS_IOR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = i.extensions[this.name];
    return (t.ior = s.ior !== void 0 ? s.ior : 1.5), Promise.resolve();
  }
}
class iM {
  constructor(e) {
    (this.parser = e), (this.name = ke.KHR_MATERIALS_SPECULAR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      a = i.extensions[this.name];
    (t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1),
      a.specularTexture !== void 0 &&
        s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return (
      (t.specularColor = new De().setRGB(o[0], o[1], o[2], It)),
      a.specularColorTexture !== void 0 &&
        s.push(
          n.assignTexture(t, "specularColorMap", a.specularColorTexture, zt)
        ),
      Promise.all(s)
    );
  }
}
class sM {
  constructor(e) {
    (this.parser = e), (this.name = ke.EXT_MATERIALS_BUMP);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      a = i.extensions[this.name];
    return (
      (t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1),
      a.bumpTexture !== void 0 &&
        s.push(n.assignTexture(t, "bumpMap", a.bumpTexture)),
      Promise.all(s)
    );
  }
}
class rM {
  constructor(e) {
    (this.parser = e), (this.name = ke.KHR_MATERIALS_ANISOTROPY);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [],
      a = i.extensions[this.name];
    return (
      a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength),
      a.anisotropyRotation !== void 0 &&
        (t.anisotropyRotation = a.anisotropyRotation),
      a.anisotropyTexture !== void 0 &&
        s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)),
      Promise.all(s)
    );
  }
}
class aM {
  constructor(e) {
    (this.parser = e), (this.name = ke.KHR_TEXTURE_BASISU);
  }
  loadTexture(e) {
    const t = this.parser,
      n = t.json,
      i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const s = i.extensions[this.name],
      a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error(
          "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
        );
      return null;
    }
    return t.loadTextureImage(e, s.source, a);
  }
}
class oM {
  constructor(e) {
    (this.parser = e),
      (this.name = ke.EXT_TEXTURE_WEBP),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      s = i.textures[e];
    if (!s.extensions || !s.extensions[t]) return null;
    const a = s.extensions[t],
      o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function (c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: WebP required by asset but unsupported."
        );
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
            (t.onload = t.onerror =
              function () {
                e(t.height === 1);
              });
        })),
      this.isSupported
    );
  }
}
class lM {
  constructor(e) {
    (this.parser = e),
      (this.name = ke.EXT_TEXTURE_AVIF),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      s = i.textures[e];
    if (!s.extensions || !s.extensions[t]) return null;
    const a = s.extensions[t],
      o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function (c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: AVIF required by asset but unsupported."
        );
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
            (t.onload = t.onerror =
              function () {
                e(t.height === 1);
              });
        })),
      this.isSupported
    );
  }
}
class cM {
  constructor(e) {
    (this.name = ke.EXT_MESHOPT_COMPRESSION), (this.parser = e);
  }
  loadBufferView(e) {
    const t = this.parser.json,
      n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name],
        s = this.parser.getDependency("buffer", i.buffer),
        a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (
          t.extensionsRequired &&
          t.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
          );
        return null;
      }
      return s.then(function (o) {
        const l = i.byteOffset || 0,
          c = i.byteLength || 0,
          u = i.count,
          h = i.byteStride,
          f = new Uint8Array(o, l, c);
        return a.decodeGltfBufferAsync
          ? a
              .decodeGltfBufferAsync(u, h, f, i.mode, i.filter)
              .then(function (d) {
                return d.buffer;
              })
          : a.ready.then(function () {
              const d = new ArrayBuffer(u * h);
              return (
                a.decodeGltfBuffer(
                  new Uint8Array(d),
                  u,
                  h,
                  f,
                  i.mode,
                  i.filter
                ),
                d
              );
            });
      });
    } else return null;
  }
}
class uM {
  constructor(e) {
    (this.name = ke.EXT_MESH_GPU_INSTANCING), (this.parser = e);
  }
  createNodeMesh(e) {
    const t = this.parser.json,
      n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (
        c.mode !== pn.TRIANGLES &&
        c.mode !== pn.TRIANGLE_STRIP &&
        c.mode !== pn.TRIANGLE_FAN &&
        c.mode !== void 0
      )
        return null;
    const a = n.extensions[this.name].attributes,
      o = [],
      l = {};
    for (const c in a)
      o.push(
        this.parser
          .getDependency("accessor", a[c])
          .then((u) => ((l[c] = u), l[c]))
      );
    return o.length < 1
      ? null
      : (o.push(this.parser.createNodeMesh(e)),
        Promise.all(o).then((c) => {
          const u = c.pop(),
            h = u.isGroup ? u.children : [u],
            f = c[0].count,
            d = [];
          for (const g of h) {
            const _ = new Ue(),
              p = new D(),
              m = new Wt(),
              y = new D(1, 1, 1),
              v = new sy(g.geometry, g.material, f);
            for (let S = 0; S < f; S++)
              l.TRANSLATION && p.fromBufferAttribute(l.TRANSLATION, S),
                l.ROTATION && m.fromBufferAttribute(l.ROTATION, S),
                l.SCALE && y.fromBufferAttribute(l.SCALE, S),
                v.setMatrixAt(S, _.compose(p, m, y));
            for (const S in l)
              if (S === "_COLOR_0") {
                const R = l[S];
                v.instanceColor = new cc(R.array, R.itemSize, R.normalized);
              } else
                S !== "TRANSLATION" &&
                  S !== "ROTATION" &&
                  S !== "SCALE" &&
                  g.geometry.setAttribute(S, l[S]);
            nt.prototype.copy.call(v, g),
              this.parser.assignFinalMaterial(v),
              d.push(v);
          }
          return u.isGroup ? (u.clear(), u.add(...d), u) : d[0];
        }));
  }
}
const pd = "glTF",
  Ur = 12,
  Kh = { JSON: 1313821514, BIN: 5130562 };
class hM {
  constructor(e) {
    (this.name = ke.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    const t = new DataView(e, 0, Ur),
      n = new TextDecoder();
    if (
      ((this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0),
      }),
      this.header.magic !== pd)
    )
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Ur,
      s = new DataView(e, Ur);
    let a = 0;
    for (; a < i; ) {
      const o = s.getUint32(a, !0);
      a += 4;
      const l = s.getUint32(a, !0);
      if (((a += 4), l === Kh.JSON)) {
        const c = new Uint8Array(e, Ur + a, o);
        this.content = n.decode(c);
      } else if (l === Kh.BIN) {
        const c = Ur + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class fM {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = ke.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = t),
      this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json,
      i = this.dracoLoader,
      s = e.extensions[this.name].bufferView,
      a = e.extensions[this.name].attributes,
      o = {},
      l = {},
      c = {};
    for (const u in a) {
      const h = fc[u] || u.toLowerCase();
      o[h] = a[u];
    }
    for (const u in e.attributes) {
      const h = fc[u] || u.toLowerCase();
      if (a[u] !== void 0) {
        const f = n.accessors[e.attributes[u]],
          d = Js[f.componentType];
        (c[h] = d.name), (l[h] = f.normalized === !0);
      }
    }
    return t.getDependency("bufferView", s).then(function (u) {
      return new Promise(function (h, f) {
        i.decodeDracoFile(
          u,
          function (d) {
            for (const g in d.attributes) {
              const _ = d.attributes[g],
                p = l[g];
              p !== void 0 && (_.normalized = p);
            }
            h(d);
          },
          o,
          c,
          It,
          f
        );
      });
    });
  }
}
class dM {
  constructor() {
    this.name = ke.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (
      ((t.texCoord === void 0 || t.texCoord === e.channel) &&
        t.offset === void 0 &&
        t.rotation === void 0 &&
        t.scale === void 0) ||
        ((e = e.clone()),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        (e.needsUpdate = !0)),
      e
    );
  }
}
class pM {
  constructor() {
    this.name = ke.KHR_MESH_QUANTIZATION;
  }
}
class md extends ca {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      s = e * i * 3 + i;
    for (let a = 0; a !== i; a++) t[a] = n[s + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = o * 2,
      c = o * 3,
      u = i - t,
      h = (n - t) / u,
      f = h * h,
      d = f * h,
      g = e * c,
      _ = g - c,
      p = -2 * d + 3 * f,
      m = d - f,
      y = 1 - p,
      v = m - f + h;
    for (let S = 0; S !== o; S++) {
      const R = a[_ + S + o],
        w = a[_ + S + l] * u,
        b = a[g + S + o],
        P = a[g + S] * u;
      s[S] = y * R + v * w + p * b + m * P;
    }
    return s;
  }
}
const mM = new Wt();
class _M extends md {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return mM.fromArray(s).normalize().toArray(s), s;
  }
}
const pn = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  Js = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  Zh = { 9728: Gt, 9729: rn, 9984: Cf, 9985: Za, 9986: Fr, 9987: ni },
  $h = { 33071: Mi, 33648: oo, 10497: ar },
  pl = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  fc = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  xi = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences",
  },
  gM = { CUBICSPLINE: void 0, LINEAR: Zr, STEP: Kr },
  ml = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function xM(r) {
  return (
    r.DefaultMaterial === void 0 &&
      (r.DefaultMaterial = new $c({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: si,
      })),
    r.DefaultMaterial
  );
}
function Qi(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 &&
      ((e.userData.gltfExtensions = e.userData.gltfExtensions || {}),
      (e.userData.gltfExtensions[n] = t.extensions[n]));
}
function Qn(r, e) {
  e.extras !== void 0 &&
    (typeof e.extras == "object"
      ? Object.assign(r.userData, e.extras)
      : console.warn(
          "THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras
        ));
}
function vM(r, e, t) {
  let n = !1,
    i = !1,
    s = !1;
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (
      (h.POSITION !== void 0 && (n = !0),
      h.NORMAL !== void 0 && (i = !0),
      h.COLOR_0 !== void 0 && (s = !0),
      n && i && s)
    )
      break;
  }
  if (!n && !i && !s) return Promise.resolve(r);
  const a = [],
    o = [],
    l = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (n) {
      const f =
        h.POSITION !== void 0
          ? t.getDependency("accessor", h.POSITION)
          : r.attributes.position;
      a.push(f);
    }
    if (i) {
      const f =
        h.NORMAL !== void 0
          ? t.getDependency("accessor", h.NORMAL)
          : r.attributes.normal;
      o.push(f);
    }
    if (s) {
      const f =
        h.COLOR_0 !== void 0
          ? t.getDependency("accessor", h.COLOR_0)
          : r.attributes.color;
      l.push(f);
    }
  }
  return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l)]).then(
    function (c) {
      const u = c[0],
        h = c[1],
        f = c[2];
      return (
        n && (r.morphAttributes.position = u),
        i && (r.morphAttributes.normal = h),
        s && (r.morphAttributes.color = f),
        (r.morphTargetsRelative = !0),
        r
      );
    }
  );
}
function yM(r, e) {
  if ((r.updateMorphTargets(), e.weights !== void 0))
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn(
        "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
      );
  }
}
function MM(r) {
  let e;
  const t = r.extensions && r.extensions[ke.KHR_DRACO_MESH_COMPRESSION];
  if (
    (t
      ? (e = "draco:" + t.bufferView + ":" + t.indices + ":" + _l(t.attributes))
      : (e = r.indices + ":" + _l(r.attributes) + ":" + r.mode),
    r.targets !== void 0)
  )
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + _l(r.targets[n]);
  return e;
}
function _l(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function dc(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type."
      );
  }
}
function SM(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0
    ? "image/jpeg"
    : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0
    ? "image/webp"
    : "image/png";
}
const TM = new Ue();
class EM {
  constructor(e = {}, t = {}) {
    (this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = t),
      (this.cache = new qy()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.nodeCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {});
    let n = !1,
      i = -1,
      s = !1,
      a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const l = o.match(/Version\/(\d+)/);
      (i = n && l ? parseInt(l[1], 10) : -1),
        (s = o.indexOf("Firefox") > -1),
        (a = s ? o.match(/Firefox\/([0-9]+)\./)[1] : -1);
    }
    typeof createImageBitmap > "u" || (n && i < 17) || (s && a < 98)
      ? (this.textureLoader = new vy(this.options.manager))
      : (this.textureLoader = new Ay(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new Jc(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      this.options.crossOrigin === "use-credentials" &&
        this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this,
      i = this.json,
      s = this.extensions;
    this.cache.removeAll(),
      (this.nodeCache = {}),
      this._invokeAll(function (a) {
        return a._markDefs && a._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (a) {
          return a.beforeRoot && a.beforeRoot();
        })
      )
        .then(function () {
          return Promise.all([
            n.getDependencies("scene"),
            n.getDependencies("animation"),
            n.getDependencies("camera"),
          ]);
        })
        .then(function (a) {
          const o = {
            scene: a[0][i.scene || 0],
            scenes: a[0],
            animations: a[1],
            cameras: a[2],
            asset: i.asset,
            parser: n,
            userData: {},
          };
          return (
            Qi(s, o, i),
            Qn(o, i),
            Promise.all(
              n._invokeAll(function (l) {
                return l.afterRoot && l.afterRoot(o);
              })
            ).then(function () {
              for (const l of o.scenes) l.updateMatrixWorld();
              e(o);
            })
          );
        })
        .catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [],
      t = this.json.skins || [],
      n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i].joints;
      for (let o = 0, l = a.length; o < l; o++) e[a[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const a = e[i];
      a.mesh !== void 0 &&
        (this._addNodeRef(this.meshCache, a.mesh),
        a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)),
        a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 &&
      (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(),
      s = (a, o) => {
        const l = this.associations.get(a);
        l != null && this.associations.set(o, l);
        for (const [c, u] of a.children.entries()) s(u, o.children[c]);
      };
    return s(n, i), (i.name += "_instance_" + e.uses[t]++), i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function (s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function (s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function (s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function (s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function (s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function (s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (
            ((i = this._invokeOne(function (s) {
              return s != this && s.getDependency && s.getDependency(e, t);
            })),
            !i)
          )
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this,
        i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      (t = Promise.all(
        i.map(function (s, a) {
          return n.getDependency(e, a);
        })
      )),
        this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e],
      n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error(
        "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
      );
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function (s, a) {
      n.load(Gr.resolveURL(t.uri, i.path), s, void 0, function () {
        a(
          new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')
        );
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (n) {
      const i = t.byteLength || 0,
        s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  loadAccessor(e) {
    const t = this,
      n = this.json,
      i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = pl[i.type],
        o = Js[i.componentType],
        l = i.normalized === !0,
        c = new o(i.count * a);
      return Promise.resolve(new Xt(c, a, l));
    }
    const s = [];
    return (
      i.bufferView !== void 0
        ? s.push(this.getDependency("bufferView", i.bufferView))
        : s.push(null),
      i.sparse !== void 0 &&
        (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)),
        s.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
      Promise.all(s).then(function (a) {
        const o = a[0],
          l = pl[i.type],
          c = Js[i.componentType],
          u = c.BYTES_PER_ELEMENT,
          h = u * l,
          f = i.byteOffset || 0,
          d =
            i.bufferView !== void 0
              ? n.bufferViews[i.bufferView].byteStride
              : void 0,
          g = i.normalized === !0;
        let _, p;
        if (d && d !== h) {
          const m = Math.floor(f / d),
            y =
              "InterleavedBuffer:" +
              i.bufferView +
              ":" +
              i.componentType +
              ":" +
              m +
              ":" +
              i.count;
          let v = t.cache.get(y);
          v ||
            ((_ = new c(o, m * d, (i.count * d) / u)),
            (v = new Qv(_, d / u)),
            t.cache.add(y, v)),
            (p = new Yc(v, l, (f % d) / u, g));
        } else o === null ? (_ = new c(i.count * l)) : (_ = new c(o, f, i.count * l)), (p = new Xt(_, l, g));
        if (i.sparse !== void 0) {
          const m = pl.SCALAR,
            y = Js[i.sparse.indices.componentType],
            v = i.sparse.indices.byteOffset || 0,
            S = i.sparse.values.byteOffset || 0,
            R = new y(a[1], v, i.sparse.count * m),
            w = new c(a[2], S, i.sparse.count * l);
          o !== null && (p = new Xt(p.array.slice(), p.itemSize, p.normalized));
          for (let b = 0, P = R.length; b < P; b++) {
            const M = R[b];
            if (
              (p.setX(M, w[b * l]),
              l >= 2 && p.setY(M, w[b * l + 1]),
              l >= 3 && p.setZ(M, w[b * l + 2]),
              l >= 4 && p.setW(M, w[b * l + 3]),
              l >= 5)
            )
              throw new Error(
                "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
              );
          }
        }
        return p;
      })
    );
  }
  loadTexture(e) {
    const t = this.json,
      n = this.options,
      s = t.textures[e].source,
      a = t.images[s];
    let o = this.textureLoader;
    if (a.uri) {
      const l = n.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this,
      s = this.json,
      a = s.textures[e],
      o = s.images[t],
      l = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[l]) return this.textureCache[l];
    const c = this.loadImageSource(t, n)
      .then(function (u) {
        (u.flipY = !1),
          (u.name = a.name || o.name || ""),
          u.name === "" &&
            typeof o.uri == "string" &&
            o.uri.startsWith("data:image/") === !1 &&
            (u.name = o.uri);
        const f = (s.samplers || {})[a.sampler] || {};
        return (
          (u.magFilter = Zh[f.magFilter] || rn),
          (u.minFilter = Zh[f.minFilter] || ni),
          (u.wrapS = $h[f.wrapS] || ar),
          (u.wrapT = $h[f.wrapT] || ar),
          i.associations.set(u, { textures: e }),
          u
        );
      })
      .catch(function () {
        return null;
      });
    return (this.textureCache[l] = c), c;
  }
  loadImageSource(e, t) {
    const n = this,
      i = this.json,
      s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const a = i.images[e],
      o = self.URL || self.webkitURL;
    let l = a.uri || "",
      c = !1;
    if (a.bufferView !== void 0)
      l = n.getDependency("bufferView", a.bufferView).then(function (h) {
        c = !0;
        const f = new Blob([h], { type: a.mimeType });
        return (l = o.createObjectURL(f)), l;
      });
    else if (a.uri === void 0)
      throw new Error(
        "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
      );
    const u = Promise.resolve(l)
      .then(function (h) {
        return new Promise(function (f, d) {
          let g = f;
          t.isImageBitmapLoader === !0 &&
            (g = function (_) {
              const p = new bt(_);
              (p.needsUpdate = !0), f(p);
            }),
            t.load(Gr.resolveURL(h, s.path), g, void 0, d);
        });
      })
      .then(function (h) {
        return (
          c === !0 && o.revokeObjectURL(l),
          Qn(h, a),
          (h.userData.mimeType = a.mimeType || SM(a.uri)),
          h
        );
      })
      .catch(function (h) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", l), h);
      });
    return (this.sourceCache[e] = u), u;
  }
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function (a) {
      if (!a) return null;
      if (
        (n.texCoord !== void 0 &&
          n.texCoord > 0 &&
          ((a = a.clone()), (a.channel = n.texCoord)),
        s.extensions[ke.KHR_TEXTURE_TRANSFORM])
      ) {
        const o =
          n.extensions !== void 0
            ? n.extensions[ke.KHR_TEXTURE_TRANSFORM]
            : void 0;
        if (o) {
          const l = s.associations.get(a);
          (a = s.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(a, o)),
            s.associations.set(a, l);
        }
      }
      return i !== void 0 && (a.colorSpace = i), (e[t] = a), a;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0,
      s = t.attributes.color !== void 0,
      a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l ||
        ((l = new ld()),
        Fn.prototype.copy.call(l, n),
        l.color.copy(n.color),
        (l.map = n.map),
        (l.sizeAttenuation = !1),
        this.cache.add(o, l)),
        (n = l);
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l ||
        ((l = new od()),
        Fn.prototype.copy.call(l, n),
        l.color.copy(n.color),
        (l.map = n.map),
        this.cache.add(o, l)),
        (n = l);
    }
    if (i || s || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"),
        s && (o += "vertex-colors:"),
        a && (o += "flat-shading:");
      let l = this.cache.get(o);
      l ||
        ((l = n.clone()),
        s && (l.vertexColors = !0),
        a && (l.flatShading = !0),
        i &&
          (l.normalScale && (l.normalScale.y *= -1),
          l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)),
        this.cache.add(o, l),
        this.associations.set(l, this.associations.get(n))),
        (n = l);
    }
    e.material = n;
  }
  getMaterialType() {
    return $c;
  }
  loadMaterial(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      s = n.materials[e];
    let a;
    const o = {},
      l = s.extensions || {},
      c = [];
    if (l[ke.KHR_MATERIALS_UNLIT]) {
      const h = i[ke.KHR_MATERIALS_UNLIT];
      (a = h.getMaterialType()), c.push(h.extendParams(o, s, t));
    } else {
      const h = s.pbrMetallicRoughness || {};
      if (
        ((o.color = new De(1, 1, 1)),
        (o.opacity = 1),
        Array.isArray(h.baseColorFactor))
      ) {
        const f = h.baseColorFactor;
        o.color.setRGB(f[0], f[1], f[2], It), (o.opacity = f[3]);
      }
      h.baseColorTexture !== void 0 &&
        c.push(t.assignTexture(o, "map", h.baseColorTexture, zt)),
        (o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1),
        (o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1),
        h.metallicRoughnessTexture !== void 0 &&
          (c.push(
            t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture)
          ),
          c.push(
            t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture)
          )),
        (a = this._invokeOne(function (f) {
          return f.getMaterialType && f.getMaterialType(e);
        })),
        c.push(
          Promise.all(
            this._invokeAll(function (f) {
              return f.extendMaterialParams && f.extendMaterialParams(e, o);
            })
          )
        );
    }
    s.doubleSided === !0 && (o.side = Dn);
    const u = s.alphaMode || ml.OPAQUE;
    if (
      (u === ml.BLEND
        ? ((o.transparent = !0), (o.depthWrite = !1))
        : ((o.transparent = !1),
          u === ml.MASK &&
            (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)),
      s.normalTexture !== void 0 &&
        a !== Si &&
        (c.push(t.assignTexture(o, "normalMap", s.normalTexture)),
        (o.normalScale = new Me(1, 1)),
        s.normalTexture.scale !== void 0))
    ) {
      const h = s.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    if (
      (s.occlusionTexture !== void 0 &&
        a !== Si &&
        (c.push(t.assignTexture(o, "aoMap", s.occlusionTexture)),
        s.occlusionTexture.strength !== void 0 &&
          (o.aoMapIntensity = s.occlusionTexture.strength)),
      s.emissiveFactor !== void 0 && a !== Si)
    ) {
      const h = s.emissiveFactor;
      o.emissive = new De().setRGB(h[0], h[1], h[2], It);
    }
    return (
      s.emissiveTexture !== void 0 &&
        a !== Si &&
        c.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, zt)),
      Promise.all(c).then(function () {
        const h = new a(o);
        return (
          s.name && (h.name = s.name),
          Qn(h, s),
          t.associations.set(h, { materials: e }),
          s.extensions && Qi(i, h, s),
          h
        );
      })
    );
  }
  createUniqueName(e) {
    const t = Ze.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed
      ? t + "_" + ++this.nodeNamesUsed[t]
      : ((this.nodeNamesUsed[t] = 0), t);
  }
  loadGeometries(e) {
    const t = this,
      n = this.extensions,
      i = this.primitiveCache;
    function s(o) {
      return n[ke.KHR_DRACO_MESH_COMPRESSION]
        .decodePrimitive(o, t)
        .then(function (l) {
          return Jh(l, o, t);
        });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o],
        u = MM(c),
        h = i[u];
      if (h) a.push(h.promise);
      else {
        let f;
        c.extensions && c.extensions[ke.KHR_DRACO_MESH_COMPRESSION]
          ? (f = s(c))
          : (f = Jh(new Pn(), c, t)),
          (i[u] = { primitive: c, promise: f }),
          a.push(f);
      }
    }
    return Promise.all(a);
  }
  loadMesh(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      s = n.meshes[e],
      a = s.primitives,
      o = [];
    for (let l = 0, c = a.length; l < c; l++) {
      const u =
        a[l].material === void 0
          ? xM(this.cache)
          : this.getDependency("material", a[l].material);
      o.push(u);
    }
    return (
      o.push(t.loadGeometries(a)),
      Promise.all(o).then(function (l) {
        const c = l.slice(0, l.length - 1),
          u = l[l.length - 1],
          h = [];
        for (let d = 0, g = u.length; d < g; d++) {
          const _ = u[d],
            p = a[d];
          let m;
          const y = c[d];
          if (
            p.mode === pn.TRIANGLES ||
            p.mode === pn.TRIANGLE_STRIP ||
            p.mode === pn.TRIANGLE_FAN ||
            p.mode === void 0
          )
            (m = s.isSkinnedMesh === !0 ? new ty(_, y) : new qt(_, y)),
              m.isSkinnedMesh === !0 && m.normalizeSkinWeights(),
              p.mode === pn.TRIANGLE_STRIP
                ? (m.geometry = jh(m.geometry, zf))
                : p.mode === pn.TRIANGLE_FAN &&
                  (m.geometry = jh(m.geometry, ac));
          else if (p.mode === pn.LINES) m = new ry(_, y);
          else if (p.mode === pn.LINE_STRIP) m = new Kc(_, y);
          else if (p.mode === pn.LINE_LOOP) m = new ay(_, y);
          else if (p.mode === pn.POINTS) m = new oy(_, y);
          else
            throw new Error(
              "THREE.GLTFLoader: Primitive mode unsupported: " + p.mode
            );
          Object.keys(m.geometry.morphAttributes).length > 0 && yM(m, s),
            (m.name = t.createUniqueName(s.name || "mesh_" + e)),
            Qn(m, s),
            p.extensions && Qi(i, m, p),
            t.assignFinalMaterial(m),
            h.push(m);
        }
        for (let d = 0, g = h.length; d < g; d++)
          t.associations.set(h[d], { meshes: e, primitives: d });
        if (h.length === 1) return s.extensions && Qi(i, h[0], s), h[0];
        const f = new Ti();
        s.extensions && Qi(i, f, s), t.associations.set(f, { meshes: e });
        for (let d = 0, g = h.length; d < g; d++) f.add(h[d]);
        return f;
      })
    );
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e],
      i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      n.type === "perspective"
        ? (t = new Ht(
            Gf.radToDeg(i.yfov),
            i.aspectRatio || 1,
            i.znear || 1,
            i.zfar || 2e6
          ))
        : n.type === "orthographic" &&
          (t = new Xc(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
      n.name && (t.name = this.createUniqueName(n.name)),
      Qn(t, n),
      Promise.resolve(t)
    );
  }
  loadSkin(e) {
    const t = this.json.skins[e],
      n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return (
      t.inverseBindMatrices !== void 0
        ? n.push(this.getDependency("accessor", t.inverseBindMatrices))
        : n.push(null),
      Promise.all(n).then(function (i) {
        const s = i.pop(),
          a = i,
          o = [],
          l = [];
        for (let c = 0, u = a.length; c < u; c++) {
          const h = a[c];
          if (h) {
            o.push(h);
            const f = new Ue();
            s !== null && f.fromArray(s.array, c * 16), l.push(f);
          } else
            console.warn(
              'THREE.GLTFLoader: Joint "%s" could not be found.',
              t.joints[c]
            );
        }
        return new jc(o, l);
      })
    );
  }
  loadAnimation(e) {
    const t = this.json,
      n = this,
      i = t.animations[e],
      s = i.name ? i.name : "animation_" + e,
      a = [],
      o = [],
      l = [],
      c = [],
      u = [];
    for (let h = 0, f = i.channels.length; h < f; h++) {
      const d = i.channels[h],
        g = i.samplers[d.sampler],
        _ = d.target,
        p = _.node,
        m = i.parameters !== void 0 ? i.parameters[g.input] : g.input,
        y = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 &&
        (a.push(this.getDependency("node", p)),
        o.push(this.getDependency("accessor", m)),
        l.push(this.getDependency("accessor", y)),
        c.push(g),
        u.push(_));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c),
      Promise.all(u),
    ]).then(function (h) {
      const f = h[0],
        d = h[1],
        g = h[2],
        _ = h[3],
        p = h[4],
        m = [];
      for (let y = 0, v = f.length; y < v; y++) {
        const S = f[y],
          R = d[y],
          w = g[y],
          b = _[y],
          P = p[y];
        if (S === void 0) continue;
        S.updateMatrix && S.updateMatrix();
        const M = n._createAnimationTracks(S, R, w, b, P);
        if (M) for (let E = 0; E < M.length; E++) m.push(M[E]);
      }
      return new Cn(s, void 0, m);
    });
  }
  createNodeMesh(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e];
    return i.mesh === void 0
      ? null
      : n.getDependency("mesh", i.mesh).then(function (s) {
          const a = n._getNodeRef(n.meshCache, i.mesh, s);
          return (
            i.weights !== void 0 &&
              a.traverse(function (o) {
                if (o.isMesh)
                  for (let l = 0, c = i.weights.length; l < c; l++)
                    o.morphTargetInfluences[l] = i.weights[l];
              }),
            a
          );
        });
  }
  loadNode(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e],
      s = n._loadNodeShallow(e),
      a = [],
      o = i.children || [];
    for (let c = 0, u = o.length; c < u; c++)
      a.push(n.getDependency("node", o[c]));
    const l =
      i.skin === void 0
        ? Promise.resolve(null)
        : n.getDependency("skin", i.skin);
    return Promise.all([s, Promise.all(a), l]).then(function (c) {
      const u = c[0],
        h = c[1],
        f = c[2];
      f !== null &&
        u.traverse(function (d) {
          d.isSkinnedMesh && d.bind(f, TM);
        });
      for (let d = 0, g = h.length; d < g; d++) u.add(h[d]);
      return u;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json,
      n = this.extensions,
      i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const s = t.nodes[e],
      a = s.name ? i.createUniqueName(s.name) : "",
      o = [],
      l = i._invokeOne(function (c) {
        return c.createNodeMesh && c.createNodeMesh(e);
      });
    return (
      l && o.push(l),
      s.camera !== void 0 &&
        o.push(
          i.getDependency("camera", s.camera).then(function (c) {
            return i._getNodeRef(i.cameraCache, s.camera, c);
          })
        ),
      i
        ._invokeAll(function (c) {
          return c.createNodeAttachment && c.createNodeAttachment(e);
        })
        .forEach(function (c) {
          o.push(c);
        }),
      (this.nodeCache[e] = Promise.all(o).then(function (c) {
        let u;
        if (
          (s.isBone === !0
            ? (u = new rd())
            : c.length > 1
            ? (u = new Ti())
            : c.length === 1
            ? (u = c[0])
            : (u = new nt()),
          u !== c[0])
        )
          for (let h = 0, f = c.length; h < f; h++) u.add(c[h]);
        if (
          (s.name && ((u.userData.name = s.name), (u.name = a)),
          Qn(u, s),
          s.extensions && Qi(n, u, s),
          s.matrix !== void 0)
        ) {
          const h = new Ue();
          h.fromArray(s.matrix), u.applyMatrix4(h);
        } else s.translation !== void 0 && u.position.fromArray(s.translation), s.rotation !== void 0 && u.quaternion.fromArray(s.rotation), s.scale !== void 0 && u.scale.fromArray(s.scale);
        return (
          i.associations.has(u) || i.associations.set(u, {}),
          (i.associations.get(u).nodes = e),
          u
        );
      })),
      this.nodeCache[e]
    );
  }
  loadScene(e) {
    const t = this.extensions,
      n = this.json.scenes[e],
      i = this,
      s = new Ti();
    n.name && (s.name = i.createUniqueName(n.name)),
      Qn(s, n),
      n.extensions && Qi(t, s, n);
    const a = n.nodes || [],
      o = [];
    for (let l = 0, c = a.length; l < c; l++)
      o.push(i.getDependency("node", a[l]));
    return Promise.all(o).then(function (l) {
      for (let u = 0, h = l.length; u < h; u++) s.add(l[u]);
      const c = (u) => {
        const h = new Map();
        for (const [f, d] of i.associations)
          (f instanceof Fn || f instanceof bt) && h.set(f, d);
        return (
          u.traverse((f) => {
            const d = i.associations.get(f);
            d != null && h.set(f, d);
          }),
          h
        );
      };
      return (i.associations = c(s)), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const a = [],
      o = e.name ? e.name : e.uuid,
      l = [];
    xi[s.path] === xi.weights
      ? e.traverse(function (f) {
          f.morphTargetInfluences && l.push(f.name ? f.name : f.uuid);
        })
      : l.push(o);
    let c;
    switch (xi[s.path]) {
      case xi.weights:
        c = hr;
        break;
      case xi.rotation:
        c = fr;
        break;
      case xi.position:
      case xi.scale:
        c = dr;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = hr;
            break;
          case 2:
          case 3:
          default:
            c = dr;
            break;
        }
        break;
    }
    const u = i.interpolation !== void 0 ? gM[i.interpolation] : Zr,
      h = this._getArrayFromAccessor(n);
    for (let f = 0, d = l.length; f < d; f++) {
      const g = new c(l[f] + "." + xi[s.path], t.array, h, u);
      i.interpolation === "CUBICSPLINE" &&
        this._createCubicSplineTrackInterpolant(g),
        a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = dc(t.constructor),
        i = new Float32Array(t.length);
      for (let s = 0, a = t.length; s < a; s++) i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    (e.createInterpolant = function (n) {
      const i = this instanceof fr ? _M : md;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }),
      (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0);
  }
}
function AM(r, e, t) {
  const n = e.attributes,
    i = new ci();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION],
      l = o.min,
      c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (
        (i.set(new D(l[0], l[1], l[2]), new D(c[0], c[1], c[2])), o.normalized)
      ) {
        const u = dc(Js[o.componentType]);
        i.min.multiplyScalar(u), i.max.multiplyScalar(u);
      }
    } else {
      console.warn(
        "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
      );
      return;
    }
  } else return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new D(),
      l = new D();
    for (let c = 0, u = s.length; c < u; c++) {
      const h = s[c];
      if (h.POSITION !== void 0) {
        const f = t.json.accessors[h.POSITION],
          d = f.min,
          g = f.max;
        if (d !== void 0 && g !== void 0) {
          if (
            (l.setX(Math.max(Math.abs(d[0]), Math.abs(g[0]))),
            l.setY(Math.max(Math.abs(d[1]), Math.abs(g[1]))),
            l.setZ(Math.max(Math.abs(d[2]), Math.abs(g[2]))),
            f.normalized)
          ) {
            const _ = dc(Js[f.componentType]);
            l.multiplyScalar(_);
          }
          o.max(l);
        } else
          console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
          );
      }
    }
    i.expandByVector(o);
  }
  r.boundingBox = i;
  const a = new Vn();
  i.getCenter(a.center),
    (a.radius = i.min.distanceTo(i.max) / 2),
    (r.boundingSphere = a);
}
function Jh(r, e, t) {
  const n = e.attributes,
    i = [];
  function s(a, o) {
    return t.getDependency("accessor", a).then(function (l) {
      r.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = fc[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function (o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return (
    Xe.workingColorSpace !== It &&
      "COLOR_0" in n &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`
      ),
    Qn(r, e),
    AM(r, e, t),
    Promise.all(i).then(function () {
      return e.targets !== void 0 ? vM(r, e.targets, t) : r;
    })
  );
}
const Qh = { type: "change" },
  gl = { type: "start" },
  ef = { type: "end" },
  qa = new yr(),
  tf = new vi(),
  bM = Math.cos(70 * Gf.DEG2RAD);
class wM extends ki {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new D()),
      (this.cursor = new D()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minTargetRadius = 0),
      (this.maxTargetRadius = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: Ss.ROTATE,
        MIDDLE: Ss.DOLLY,
        RIGHT: Ss.PAN,
      }),
      (this.touches = { ONE: Ts.ROTATE, TWO: Ts.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return o.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return o.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (x) {
        x.addEventListener("keydown", le), (this._domElementKeyEvents = x);
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener("keydown", le),
          (this._domElementKeyEvents = null);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(Qh),
          n.update(),
          (s = i.NONE);
      }),
      (this.update = (function () {
        const x = new D(),
          F = new Wt().setFromUnitVectors(e.up, new D(0, 1, 0)),
          B = F.clone().invert(),
          X = new D(),
          Q = new Wt(),
          ge = new D(),
          Ae = 2 * Math.PI;
        return function (yt = null) {
          const Ge = n.object.position;
          x.copy(Ge).sub(n.target),
            x.applyQuaternion(F),
            o.setFromVector3(x),
            n.autoRotate && s === i.NONE && k(E(yt)),
            n.enableDamping
              ? ((o.theta += l.theta * n.dampingFactor),
                (o.phi += l.phi * n.dampingFactor))
              : ((o.theta += l.theta), (o.phi += l.phi));
          let Mt = n.minAzimuthAngle,
            _t = n.maxAzimuthAngle;
          isFinite(Mt) &&
            isFinite(_t) &&
            (Mt < -Math.PI ? (Mt += Ae) : Mt > Math.PI && (Mt -= Ae),
            _t < -Math.PI ? (_t += Ae) : _t > Math.PI && (_t -= Ae),
            Mt <= _t
              ? (o.theta = Math.max(Mt, Math.min(_t, o.theta)))
              : (o.theta =
                  o.theta > (Mt + _t) / 2
                    ? Math.max(Mt, o.theta)
                    : Math.min(_t, o.theta))),
            (o.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, o.phi)
            )),
            o.makeSafe(),
            n.enableDamping === !0
              ? n.target.addScaledVector(u, n.dampingFactor)
              : n.target.add(u),
            n.target.sub(n.cursor),
            n.target.clampLength(n.minTargetRadius, n.maxTargetRadius),
            n.target.add(n.cursor);
          let ui = !1;
          if ((n.zoomToCursor && w) || n.object.isOrthographicCamera)
            o.radius = ae(o.radius);
          else {
            const Rt = o.radius;
            (o.radius = ae(o.radius * c)), (ui = Rt != o.radius);
          }
          if (
            (x.setFromSpherical(o),
            x.applyQuaternion(B),
            Ge.copy(n.target).add(x),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((l.theta *= 1 - n.dampingFactor),
                (l.phi *= 1 - n.dampingFactor),
                u.multiplyScalar(1 - n.dampingFactor))
              : (l.set(0, 0, 0), u.set(0, 0, 0)),
            n.zoomToCursor && w)
          ) {
            let Rt = null;
            if (n.object.isPerspectiveCamera) {
              const Xn = x.length();
              Rt = ae(Xn * c);
              const Vi = Xn - Rt;
              n.object.position.addScaledVector(S, Vi),
                n.object.updateMatrixWorld(),
                (ui = !!Vi);
            } else if (n.object.isOrthographicCamera) {
              const Xn = new D(R.x, R.y, 0);
              Xn.unproject(n.object);
              const Vi = n.object.zoom;
              (n.object.zoom = Math.max(
                n.minZoom,
                Math.min(n.maxZoom, n.object.zoom / c)
              )),
                n.object.updateProjectionMatrix(),
                (ui = Vi !== n.object.zoom);
              const Ar = new D(R.x, R.y, 0);
              Ar.unproject(n.object),
                n.object.position.sub(Ar).add(Xn),
                n.object.updateMatrixWorld(),
                (Rt = x.length());
            } else
              console.warn(
                "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."
              ),
                (n.zoomToCursor = !1);
            Rt !== null &&
              (this.screenSpacePanning
                ? n.target
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix)
                    .multiplyScalar(Rt)
                    .add(n.object.position)
                : (qa.origin.copy(n.object.position),
                  qa.direction
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix),
                  Math.abs(n.object.up.dot(qa.direction)) < bM
                    ? e.lookAt(n.target)
                    : (tf.setFromNormalAndCoplanarPoint(n.object.up, n.target),
                      qa.intersectPlane(tf, n.target))));
          } else if (n.object.isOrthographicCamera) {
            const Rt = n.object.zoom;
            (n.object.zoom = Math.max(
              n.minZoom,
              Math.min(n.maxZoom, n.object.zoom / c)
            )),
              Rt !== n.object.zoom &&
                (n.object.updateProjectionMatrix(), (ui = !0));
          }
          return (
            (c = 1),
            (w = !1),
            ui ||
            X.distanceToSquared(n.object.position) > a ||
            8 * (1 - Q.dot(n.object.quaternion)) > a ||
            ge.distanceToSquared(n.target) > a
              ? (n.dispatchEvent(Qh),
                X.copy(n.object.position),
                Q.copy(n.object.quaternion),
                ge.copy(n.target),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", ce),
          n.domElement.removeEventListener("pointerdown", Pe),
          n.domElement.removeEventListener("pointercancel", T),
          n.domElement.removeEventListener("wheel", ee),
          n.domElement.removeEventListener("pointermove", C),
          n.domElement.removeEventListener("pointerup", T),
          n.domElement
            .getRootNode()
            .removeEventListener("keydown", ve, { capture: !0 }),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener("keydown", le),
            (n._domElementKeyEvents = null));
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let s = i.NONE;
    const a = 1e-6,
      o = new Yh(),
      l = new Yh();
    let c = 1;
    const u = new D(),
      h = new Me(),
      f = new Me(),
      d = new Me(),
      g = new Me(),
      _ = new Me(),
      p = new Me(),
      m = new Me(),
      y = new Me(),
      v = new Me(),
      S = new D(),
      R = new Me();
    let w = !1;
    const b = [],
      P = {};
    let M = !1;
    function E(x) {
      return x !== null
        ? ((2 * Math.PI) / 60) * n.autoRotateSpeed * x
        : ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function L(x) {
      const F = Math.abs(x * 0.01);
      return Math.pow(0.95, n.zoomSpeed * F);
    }
    function k(x) {
      l.theta -= x;
    }
    function O(x) {
      l.phi -= x;
    }
    const K = (function () {
        const x = new D();
        return function (B, X) {
          x.setFromMatrixColumn(X, 0), x.multiplyScalar(-B), u.add(x);
        };
      })(),
      q = (function () {
        const x = new D();
        return function (B, X) {
          n.screenSpacePanning === !0
            ? x.setFromMatrixColumn(X, 1)
            : (x.setFromMatrixColumn(X, 0), x.crossVectors(n.object.up, x)),
            x.multiplyScalar(B),
            u.add(x);
        };
      })(),
      G = (function () {
        const x = new D();
        return function (B, X) {
          const Q = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const ge = n.object.position;
            x.copy(ge).sub(n.target);
            let Ae = x.length();
            (Ae *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              K((2 * B * Ae) / Q.clientHeight, n.object.matrix),
              q((2 * X * Ae) / Q.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (K(
                  (B * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    Q.clientWidth,
                  n.object.matrix
                ),
                q(
                  (X * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    Q.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function j(x) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (c /= x)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function W(x) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (c *= x)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function ie(x, F) {
      if (!n.zoomToCursor) return;
      w = !0;
      const B = n.domElement.getBoundingClientRect(),
        X = x - B.left,
        Q = F - B.top,
        ge = B.width,
        Ae = B.height;
      (R.x = (X / ge) * 2 - 1),
        (R.y = -(Q / Ae) * 2 + 1),
        S.set(R.x, R.y, 1)
          .unproject(n.object)
          .sub(n.object.position)
          .normalize();
    }
    function ae(x) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, x));
    }
    function ue(x) {
      h.set(x.clientX, x.clientY);
    }
    function Ce(x) {
      ie(x.clientX, x.clientX), m.set(x.clientX, x.clientY);
    }
    function Ve(x) {
      g.set(x.clientX, x.clientY);
    }
    function Y(x) {
      f.set(x.clientX, x.clientY),
        d.subVectors(f, h).multiplyScalar(n.rotateSpeed);
      const F = n.domElement;
      k((2 * Math.PI * d.x) / F.clientHeight),
        O((2 * Math.PI * d.y) / F.clientHeight),
        h.copy(f),
        n.update();
    }
    function J(x) {
      y.set(x.clientX, x.clientY),
        v.subVectors(y, m),
        v.y > 0 ? j(L(v.y)) : v.y < 0 && W(L(v.y)),
        m.copy(y),
        n.update();
    }
    function de(x) {
      _.set(x.clientX, x.clientY),
        p.subVectors(_, g).multiplyScalar(n.panSpeed),
        G(p.x, p.y),
        g.copy(_),
        n.update();
    }
    function he(x) {
      ie(x.clientX, x.clientY),
        x.deltaY < 0 ? W(L(x.deltaY)) : x.deltaY > 0 && j(L(x.deltaY)),
        n.update();
    }
    function Le(x) {
      let F = !1;
      switch (x.code) {
        case n.keys.UP:
          x.ctrlKey || x.metaKey || x.shiftKey
            ? O((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : G(0, n.keyPanSpeed),
            (F = !0);
          break;
        case n.keys.BOTTOM:
          x.ctrlKey || x.metaKey || x.shiftKey
            ? O((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : G(0, -n.keyPanSpeed),
            (F = !0);
          break;
        case n.keys.LEFT:
          x.ctrlKey || x.metaKey || x.shiftKey
            ? k((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : G(n.keyPanSpeed, 0),
            (F = !0);
          break;
        case n.keys.RIGHT:
          x.ctrlKey || x.metaKey || x.shiftKey
            ? k((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : G(-n.keyPanSpeed, 0),
            (F = !0);
          break;
      }
      F && (x.preventDefault(), n.update());
    }
    function Ne(x) {
      if (b.length === 1) h.set(x.pageX, x.pageY);
      else {
        const F = Re(x),
          B = 0.5 * (x.pageX + F.x),
          X = 0.5 * (x.pageY + F.y);
        h.set(B, X);
      }
    }
    function Be(x) {
      if (b.length === 1) g.set(x.pageX, x.pageY);
      else {
        const F = Re(x),
          B = 0.5 * (x.pageX + F.x),
          X = 0.5 * (x.pageY + F.y);
        g.set(B, X);
      }
    }
    function it(x) {
      const F = Re(x),
        B = x.pageX - F.x,
        X = x.pageY - F.y,
        Q = Math.sqrt(B * B + X * X);
      m.set(0, Q);
    }
    function I(x) {
      n.enableZoom && it(x), n.enablePan && Be(x);
    }
    function ct(x) {
      n.enableZoom && it(x), n.enableRotate && Ne(x);
    }
    function We(x) {
      if (b.length == 1) f.set(x.pageX, x.pageY);
      else {
        const B = Re(x),
          X = 0.5 * (x.pageX + B.x),
          Q = 0.5 * (x.pageY + B.y);
        f.set(X, Q);
      }
      d.subVectors(f, h).multiplyScalar(n.rotateSpeed);
      const F = n.domElement;
      k((2 * Math.PI * d.x) / F.clientHeight),
        O((2 * Math.PI * d.y) / F.clientHeight),
        h.copy(f);
    }
    function qe(x) {
      if (b.length === 1) _.set(x.pageX, x.pageY);
      else {
        const F = Re(x),
          B = 0.5 * (x.pageX + F.x),
          X = 0.5 * (x.pageY + F.y);
        _.set(B, X);
      }
      p.subVectors(_, g).multiplyScalar(n.panSpeed), G(p.x, p.y), g.copy(_);
    }
    function _e(x) {
      const F = Re(x),
        B = x.pageX - F.x,
        X = x.pageY - F.y,
        Q = Math.sqrt(B * B + X * X);
      y.set(0, Q),
        v.set(0, Math.pow(y.y / m.y, n.zoomSpeed)),
        j(v.y),
        m.copy(y);
      const ge = (x.pageX + F.x) * 0.5,
        Ae = (x.pageY + F.y) * 0.5;
      ie(ge, Ae);
    }
    function ut(x) {
      n.enableZoom && _e(x), n.enablePan && qe(x);
    }
    function we(x) {
      n.enableZoom && _e(x), n.enableRotate && We(x);
    }
    function Pe(x) {
      n.enabled !== !1 &&
        (b.length === 0 &&
          (n.domElement.setPointerCapture(x.pointerId),
          n.domElement.addEventListener("pointermove", C),
          n.domElement.addEventListener("pointerup", T)),
        !fe(x) && (ze(x), x.pointerType === "touch" ? Ie(x) : V(x)));
    }
    function C(x) {
      n.enabled !== !1 && (x.pointerType === "touch" ? te(x) : $(x));
    }
    function T(x) {
      switch ((Se(x), b.length)) {
        case 0:
          n.domElement.releasePointerCapture(x.pointerId),
            n.domElement.removeEventListener("pointermove", C),
            n.domElement.removeEventListener("pointerup", T),
            n.dispatchEvent(ef),
            (s = i.NONE);
          break;
        case 1:
          const F = b[0],
            B = P[F];
          Ie({ pointerId: F, pageX: B.x, pageY: B.y });
          break;
      }
    }
    function V(x) {
      let F;
      switch (x.button) {
        case 0:
          F = n.mouseButtons.LEFT;
          break;
        case 1:
          F = n.mouseButtons.MIDDLE;
          break;
        case 2:
          F = n.mouseButtons.RIGHT;
          break;
        default:
          F = -1;
      }
      switch (F) {
        case Ss.DOLLY:
          if (n.enableZoom === !1) return;
          Ce(x), (s = i.DOLLY);
          break;
        case Ss.ROTATE:
          if (x.ctrlKey || x.metaKey || x.shiftKey) {
            if (n.enablePan === !1) return;
            Ve(x), (s = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            ue(x), (s = i.ROTATE);
          }
          break;
        case Ss.PAN:
          if (x.ctrlKey || x.metaKey || x.shiftKey) {
            if (n.enableRotate === !1) return;
            ue(x), (s = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            Ve(x), (s = i.PAN);
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(gl);
    }
    function $(x) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          Y(x);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          J(x);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          de(x);
          break;
      }
    }
    function ee(x) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        s !== i.NONE ||
        (x.preventDefault(),
        n.dispatchEvent(gl),
        he(Z(x)),
        n.dispatchEvent(ef));
    }
    function Z(x) {
      const F = x.deltaMode,
        B = { clientX: x.clientX, clientY: x.clientY, deltaY: x.deltaY };
      switch (F) {
        case 1:
          B.deltaY *= 16;
          break;
        case 2:
          B.deltaY *= 100;
          break;
      }
      return x.ctrlKey && !M && (B.deltaY *= 10), B;
    }
    function ve(x) {
      x.key === "Control" &&
        ((M = !0),
        n.domElement
          .getRootNode()
          .addEventListener("keyup", se, { passive: !0, capture: !0 }));
    }
    function se(x) {
      x.key === "Control" &&
        ((M = !1),
        n.domElement
          .getRootNode()
          .removeEventListener("keyup", se, { passive: !0, capture: !0 }));
    }
    function le(x) {
      n.enabled === !1 || n.enablePan === !1 || Le(x);
    }
    function Ie(x) {
      switch ((Ee(x), b.length)) {
        case 1:
          switch (n.touches.ONE) {
            case Ts.ROTATE:
              if (n.enableRotate === !1) return;
              Ne(x), (s = i.TOUCH_ROTATE);
              break;
            case Ts.PAN:
              if (n.enablePan === !1) return;
              Be(x), (s = i.TOUCH_PAN);
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Ts.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              I(x), (s = i.TOUCH_DOLLY_PAN);
              break;
            case Ts.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              ct(x), (s = i.TOUCH_DOLLY_ROTATE);
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(gl);
    }
    function te(x) {
      switch ((Ee(x), s)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          We(x), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          qe(x), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          ut(x), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          we(x), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function ce(x) {
      n.enabled !== !1 && x.preventDefault();
    }
    function ze(x) {
      b.push(x.pointerId);
    }
    function Se(x) {
      delete P[x.pointerId];
      for (let F = 0; F < b.length; F++)
        if (b[F] == x.pointerId) {
          b.splice(F, 1);
          return;
        }
    }
    function fe(x) {
      for (let F = 0; F < b.length; F++) if (b[F] == x.pointerId) return !0;
      return !1;
    }
    function Ee(x) {
      let F = P[x.pointerId];
      F === void 0 && ((F = new Me()), (P[x.pointerId] = F)),
        F.set(x.pageX, x.pageY);
    }
    function Re(x) {
      const F = x.pointerId === b[0] ? b[1] : b[0];
      return P[F];
    }
    n.domElement.addEventListener("contextmenu", ce),
      n.domElement.addEventListener("pointerdown", Pe),
      n.domElement.addEventListener("pointercancel", T),
      n.domElement.addEventListener("wheel", ee, { passive: !1 }),
      n.domElement
        .getRootNode()
        .addEventListener("keydown", ve, { passive: !0, capture: !0 }),
      this.update();
  }
}
function ei(r) {
  if (r === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return r;
}
function _d(r, e) {
  (r.prototype = Object.create(e.prototype)),
    (r.prototype.constructor = r),
    (r.__proto__ = e);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var cn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  pr = { duration: 0.5, overwrite: !1, delay: 0 },
  su,
  Ot,
  at,
  gn = 1e8,
  et = 1 / gn,
  pc = Math.PI * 2,
  RM = pc / 4,
  CM = 0,
  gd = Math.sqrt,
  PM = Math.cos,
  LM = Math.sin,
  wt = function (e) {
    return typeof e == "string";
  },
  dt = function (e) {
    return typeof e == "function";
  },
  ai = function (e) {
    return typeof e == "number";
  },
  ru = function (e) {
    return typeof e > "u";
  },
  Hn = function (e) {
    return typeof e == "object";
  },
  jt = function (e) {
    return e !== !1;
  },
  au = function () {
    return typeof window < "u";
  },
  Ya = function (e) {
    return dt(e) || wt(e);
  },
  xd =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Ft = Array.isArray,
  mc = /(?:-?\.?\d|\.)+/gi,
  vd = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Ys = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  xl = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  yd = /[+-]=-?[.\d]+/,
  Md = /[^,'"\[\]\s]+/gi,
  IM = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ot,
  Ln,
  _c,
  ou,
  un = {},
  _o = {},
  Sd,
  Td = function (e) {
    return (_o = gs(e, un)) && Jt;
  },
  lu = function (e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  Jr = function (e, t) {
    return !t && console.warn(e);
  },
  Ed = function (e, t) {
    return (e && (un[e] = t) && _o && (_o[e] = t)) || un;
  },
  Qr = function () {
    return 0;
  },
  DM = { suppressEvents: !0, isStart: !0, kill: !1 },
  io = { suppressEvents: !0, kill: !1 },
  NM = { suppressEvents: !0 },
  cu = {},
  Li = [],
  gc = {},
  Ad,
  sn = {},
  vl = {},
  nf = 30,
  so = [],
  uu = "",
  hu = function (e) {
    var t = e[0],
      n,
      i;
    if ((Hn(t) || dt(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (i = so.length; i-- && !so[i].targetTest(t); );
      n = so[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new Kd(e[i], n)))) ||
        e.splice(i, 1);
    return e;
  },
  cs = function (e) {
    return e._gsap || hu(xn(e))[0]._gsap;
  },
  bd = function (e, t, n) {
    return (n = e[t]) && dt(n)
      ? e[t]()
      : (ru(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  Kt = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  mt = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  At = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Qs = function (e, t) {
    var n = t.charAt(0),
      i = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i
    );
  },
  UM = function (e, t) {
    for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; );
    return i < n;
  },
  go = function () {
    var e = Li.length,
      t = Li.slice(0),
      n,
      i;
    for (gc = {}, Li.length = 0, n = 0; n < e; n++)
      (i = t[n]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  wd = function (e, t, n, i) {
    Li.length && !Ot && go(),
      e.render(t, n, Ot && t < 0 && (e._initted || e._startAt)),
      Li.length && !Ot && go();
  },
  Rd = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Md).length < 2
      ? t
      : wt(e)
      ? e.trim()
      : e;
  },
  Cd = function (e) {
    return e;
  },
  yn = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  OM = function (e) {
    return function (t, n) {
      for (var i in n)
        i in t || (i === "duration" && e) || i === "ease" || (t[i] = n[i]);
    };
  },
  gs = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  sf = function r(e, t) {
    for (var n in t)
      n !== "__proto__" &&
        n !== "constructor" &&
        n !== "prototype" &&
        (e[n] = Hn(t[n]) ? r(e[n] || (e[n] = {}), t[n]) : t[n]);
    return e;
  },
  xo = function (e, t) {
    var n = {},
      i;
    for (i in e) i in t || (n[i] = e[i]);
    return n;
  },
  Wr = function (e) {
    var t = e.parent || ot,
      n = e.keyframes ? OM(Ft(e.keyframes)) : yn;
    if (jt(e.inherit))
      for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  FM = function (e, t) {
    for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; );
    return n < 0;
  },
  Pd = function (e, t, n, i, s) {
    var a = e[i],
      o;
    if (s) for (o = t[s]; a && a[s] > o; ) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[i] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  Po = function (e, t, n, i) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var s = t._prev,
      a = t._next;
    s ? (s._next = a) : e[n] === t && (e[n] = a),
      a ? (a._prev = s) : e[i] === t && (e[i] = s),
      (t._next = t._prev = t.parent = null);
  },
  Ui = function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  us = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
    return e;
  },
  BM = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  xc = function (e, t, n, i) {
    return (
      e._startAt &&
      (Ot
        ? e._startAt.revert(io)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, i))
    );
  },
  kM = function r(e) {
    return !e || (e._ts && r(e.parent));
  },
  rf = function (e) {
    return e._repeat ? mr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  mr = function (e, t) {
    var n = Math.floor((e /= t));
    return e && n === e ? n - 1 : n;
  },
  vo = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  Lo = function (e) {
    return (e._end = At(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || et) || 0)
    ));
  },
  Io = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = At(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        Lo(e),
        n._dirty || us(n, e)),
      e
    );
  },
  Ld = function (e, t) {
    var n;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((n = vo(e.rawTime(), t)),
        (!t._dur || ha(0, t.totalDuration(), n) - t._tTime > et) &&
          t.render(n, !0)),
      us(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp; )
          n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
      e._zTime = -et;
    }
  },
  Un = function (e, t, n, i) {
    return (
      t.parent && Ui(t),
      (t._start = At(
        (ai(n) ? n : n || e !== ot ? dn(e, n, t) : e._time) + t._delay
      )),
      (t._end = At(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      Pd(e, t, "_first", "_last", e._sort ? "_start" : 0),
      vc(t) || (e._recent = t),
      i || Ld(e, t),
      e._ts < 0 && Io(e, e._tTime),
      e
    );
  },
  Id = function (e, t) {
    return (
      (un.ScrollTrigger || lu("scrollTrigger", t)) &&
      un.ScrollTrigger.create(t, e)
    );
  },
  Dd = function (e, t, n, i, s) {
    if ((du(e, t, s), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !Ot &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Ad !== an.frame
    )
      return Li.push(e), (e._lazy = [s, i]), 1;
  },
  zM = function r(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
  },
  vc = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  HM = function (e, t, n, i) {
    var s = e.ratio,
      a =
        t < 0 ||
        (!t &&
          ((!e._start && zM(e) && !(!e._initted && vc(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !vc(e))))
          ? 0
          : 1,
      o = e._rDelay,
      l = 0,
      c,
      u,
      h;
    if (
      (o &&
        e._repeat &&
        ((l = ha(0, e._tDur, t)),
        (u = mr(l, o)),
        e._yoyo && u & 1 && (a = 1 - a),
        u !== mr(e._tTime, o) &&
          ((s = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== s || Ot || i || e._zTime === et || (!t && e._zTime))
    ) {
      if (!e._initted && Dd(e, t, i, n, l)) return;
      for (
        h = e._zTime,
          e._zTime = t || (n ? et : 0),
          n || (n = t && !h),
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = l,
          c = e._pt;
        c;

      )
        c.r(a, c.d), (c = c._next);
      t < 0 && xc(e, t, n, !0),
        e._onUpdate && !n && ln(e, "onUpdate"),
        l && e._repeat && !n && e.parent && ln(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === a &&
          (a && Ui(e, 1),
          !n &&
            !Ot &&
            (ln(e, a ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  VM = function (e, t, n) {
    var i;
    if (n > t)
      for (i = e._first; i && i._start <= n; ) {
        if (i.data === "isPause" && i._start > t) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= n; ) {
        if (i.data === "isPause" && i._start < t) return i;
        i = i._prev;
      }
  },
  _r = function (e, t, n, i) {
    var s = e._repeat,
      a = At(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !i && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = s ? (s < 0 ? 1e10 : At(a * (s + 1) + e._rDelay * s)) : a),
      o > 0 && !i && Io(e, (e._tTime = e._tDur * o)),
      e.parent && Lo(e),
      n || us(e.parent, e),
      e
    );
  },
  af = function (e) {
    return e instanceof Vt ? us(e) : _r(e, e._dur);
  },
  GM = { _start: 0, endTime: Qr, totalDuration: Qr },
  dn = function r(e, t, n) {
    var i = e.labels,
      s = e._recent || GM,
      a = e.duration() >= gn ? s.endTime(!1) : e._dur,
      o,
      l,
      c;
    return wt(t) && (isNaN(t) || t in i)
      ? ((l = t.charAt(0)),
        (c = t.substr(-1) === "%"),
        (o = t.indexOf("=")),
        l === "<" || l === ">"
          ? (o >= 0 && (t = t.replace(/=/, "")),
            (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (c ? (o < 0 ? s : n).totalDuration() / 100 : 1))
          : o < 0
          ? (t in i || (i[t] = a), i[t])
          : ((l = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
            c && n && (l = (l / 100) * (Ft(n) ? n[0] : n).totalDuration()),
            o > 1 ? r(e, t.substr(0, o - 1), n) + l : a + l))
      : t == null
      ? a
      : +t;
  },
  Xr = function (e, t, n) {
    var i = ai(t[1]),
      s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[s],
      o,
      l;
    if ((i && (a.duration = t[1]), (a.parent = n), e)) {
      for (o = a, l = n; l && !("immediateRender" in o); )
        (o = l.vars.defaults || {}), (l = jt(l.vars.inherit) && l.parent);
      (a.immediateRender = jt(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
    }
    return new vt(t[0], a, t[s + 1]);
  },
  zi = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  ha = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  Ut = function (e, t) {
    return !wt(e) || !(t = IM.exec(e)) ? "" : t[1];
  },
  WM = function (e, t, n) {
    return zi(n, function (i) {
      return ha(e, t, i);
    });
  },
  yc = [].slice,
  Nd = function (e, t) {
    return (
      e &&
      Hn(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && Hn(e[0]))) &&
      !e.nodeType &&
      e !== Ln
    );
  },
  XM = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (i) {
        var s;
        return (wt(i) && !t) || Nd(i, 1)
          ? (s = n).push.apply(s, xn(i))
          : n.push(i);
      }) || n
    );
  },
  xn = function (e, t, n) {
    return at && !t && at.selector
      ? at.selector(e)
      : wt(e) && !n && (_c || !gr())
      ? yc.call((t || ou).querySelectorAll(e), 0)
      : Ft(e)
      ? XM(e, n)
      : Nd(e)
      ? yc.call(e, 0)
      : e
      ? [e]
      : [];
  },
  Mc = function (e) {
    return (
      (e = xn(e)[0] || Jr("Invalid scope") || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return xn(
          t,
          n.querySelectorAll
            ? n
            : n === e
            ? Jr("Invalid scope") || ou.createElement("div")
            : e
        );
      }
    );
  },
  Ud = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Od = function (e) {
    if (dt(e)) return e;
    var t = Hn(e) ? e : { each: e },
      n = hs(t.ease),
      i = t.from || 0,
      s = parseFloat(t.base) || 0,
      a = {},
      o = i > 0 && i < 1,
      l = isNaN(i) || o,
      c = t.axis,
      u = i,
      h = i;
    return (
      wt(i)
        ? (u = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !o && l && ((u = i[0]), (h = i[1])),
      function (f, d, g) {
        var _ = (g || t).length,
          p = a[_],
          m,
          y,
          v,
          S,
          R,
          w,
          b,
          P,
          M;
        if (!p) {
          if (((M = t.grid === "auto" ? 0 : (t.grid || [1, gn])[1]), !M)) {
            for (
              b = -gn;
              b < (b = g[M++].getBoundingClientRect().left) && M < _;

            );
            M < _ && M--;
          }
          for (
            p = a[_] = [],
              m = l ? Math.min(M, _) * u - 0.5 : i % M,
              y = M === gn ? 0 : l ? (_ * h) / M - 0.5 : (i / M) | 0,
              b = 0,
              P = gn,
              w = 0;
            w < _;
            w++
          )
            (v = (w % M) - m),
              (S = y - ((w / M) | 0)),
              (p[w] = R = c ? Math.abs(c === "y" ? S : v) : gd(v * v + S * S)),
              R > b && (b = R),
              R < P && (P = R);
          i === "random" && Ud(p),
            (p.max = b - P),
            (p.min = P),
            (p.v = _ =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (M > _
                    ? _ - 1
                    : c
                    ? c === "y"
                      ? _ / M
                      : M
                    : Math.max(M, _ / M)) ||
                0) * (i === "edges" ? -1 : 1)),
            (p.b = _ < 0 ? s - _ : s),
            (p.u = Ut(t.amount || t.each) || 0),
            (n = n && _ < 0 ? qd(n) : n);
        }
        return (
          (_ = (p[f] - p.min) / p.max || 0),
          At(p.b + (n ? n(_) : _) * p.v) + p.u
        );
      }
    );
  },
  Sc = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (n) {
      var i = At(Math.round(parseFloat(n) / e) * e * t);
      return (i - (i % 1)) / t + (ai(n) ? 0 : Ut(n));
    };
  },
  Fd = function (e, t) {
    var n = Ft(e),
      i,
      s;
    return (
      !n &&
        Hn(e) &&
        ((i = n = e.radius || gn),
        e.values
          ? ((e = xn(e.values)), (s = !ai(e[0])) && (i *= i))
          : (e = Sc(e.increment))),
      zi(
        t,
        n
          ? dt(e)
            ? function (a) {
                return (s = e(a)), Math.abs(s - a) <= i ? s : a;
              }
            : function (a) {
                for (
                  var o = parseFloat(s ? a.x : a),
                    l = parseFloat(s ? a.y : 0),
                    c = gn,
                    u = 0,
                    h = e.length,
                    f,
                    d;
                  h--;

                )
                  s
                    ? ((f = e[h].x - o), (d = e[h].y - l), (f = f * f + d * d))
                    : (f = Math.abs(e[h] - o)),
                    f < c && ((c = f), (u = h));
                return (
                  (u = !i || c <= i ? e[u] : a),
                  s || u === a || ai(a) ? u : u + Ut(a)
                );
              }
          : Sc(e)
      )
    );
  },
  Bd = function (e, t, n, i) {
    return zi(Ft(e) ? !t : n === !0 ? !!(n = 0) : !i, function () {
      return Ft(e)
        ? e[~~(Math.random() * e.length)]
        : (n = n || 1e-5) &&
            (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) *
                n *
                i
            ) / i;
    });
  },
  qM = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return function (i) {
      return t.reduce(function (s, a) {
        return a(s);
      }, i);
    };
  },
  YM = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || Ut(n));
    };
  },
  jM = function (e, t, n) {
    return zd(e, t, 0, 1, n);
  },
  kd = function (e, t, n) {
    return zi(n, function (i) {
      return e[~~t(i)];
    });
  },
  KM = function r(e, t, n) {
    var i = t - e;
    return Ft(e)
      ? kd(e, r(0, e.length), t)
      : zi(n, function (s) {
          return ((i + ((s - e) % i)) % i) + e;
        });
  },
  ZM = function r(e, t, n) {
    var i = t - e,
      s = i * 2;
    return Ft(e)
      ? kd(e, r(0, e.length - 1), t)
      : zi(n, function (a) {
          return (a = (s + ((a - e) % s)) % s || 0), e + (a > i ? s - a : a);
        });
  },
  ea = function (e) {
    for (var t = 0, n = "", i, s, a, o; ~(i = e.indexOf("random(", t)); )
      (a = e.indexOf(")", i)),
        (o = e.charAt(i + 7) === "["),
        (s = e.substr(i + 7, a - i - 7).match(o ? Md : mc)),
        (n +=
          e.substr(t, i - t) + Bd(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
        (t = a + 1);
    return n + e.substr(t, e.length - t);
  },
  zd = function (e, t, n, i, s) {
    var a = t - e,
      o = i - n;
    return zi(s, function (l) {
      return n + (((l - e) / a) * o || 0);
    });
  },
  $M = function r(e, t, n, i) {
    var s = isNaN(e + t)
      ? 0
      : function (d) {
          return (1 - d) * e + d * t;
        };
    if (!s) {
      var a = wt(e),
        o = {},
        l,
        c,
        u,
        h,
        f;
      if ((n === !0 && (i = 1) && (n = null), a))
        (e = { p: e }), (t = { p: t });
      else if (Ft(e) && !Ft(t)) {
        for (u = [], h = e.length, f = h - 2, c = 1; c < h; c++)
          u.push(r(e[c - 1], e[c]));
        h--,
          (s = function (g) {
            g *= h;
            var _ = Math.min(f, ~~g);
            return u[_](g - _);
          }),
          (n = t);
      } else i || (e = gs(Ft(e) ? [] : {}, e));
      if (!u) {
        for (l in t) fu.call(o, e, l, "get", t[l]);
        s = function (g) {
          return _u(g, o) || (a ? e.p : e);
        };
      }
    }
    return zi(n, s);
  },
  of = function (e, t, n) {
    var i = e.labels,
      s = gn,
      a,
      o,
      l;
    for (a in i)
      (o = i[a] - t),
        o < 0 == !!n && o && s > (o = Math.abs(o)) && ((l = a), (s = o));
    return l;
  },
  ln = function (e, t, n) {
    var i = e.vars,
      s = i[t],
      a = at,
      o = e._ctx,
      l,
      c,
      u;
    if (s)
      return (
        (l = i[t + "Params"]),
        (c = i.callbackScope || e),
        n && Li.length && go(),
        o && (at = o),
        (u = l ? s.apply(c, l) : s.call(c)),
        (at = a),
        u
      );
  },
  kr = function (e) {
    return (
      Ui(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Ot),
      e.progress() < 1 && ln(e, "onInterrupt"),
      e
    );
  },
  js,
  Hd = [],
  Vd = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), au() || e.headless)) {
        var t = e.name,
          n = dt(e),
          i =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          s = {
            init: Qr,
            render: _u,
            add: fu,
            kill: dS,
            modifier: fS,
            rawVars: 0,
          },
          a = {
            targetTest: 0,
            get: 0,
            getSetter: mu,
            aliases: {},
            register: 0,
          };
        if ((gr(), e !== i)) {
          if (sn[t]) return;
          yn(i, yn(xo(e, s), a)),
            gs(i.prototype, gs(s, xo(e, a))),
            (sn[(i.prop = t)] = i),
            e.targetTest && (so.push(i), (cu[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        Ed(t, i), e.register && e.register(Jt, i, Zt);
      } else Hd.push(e);
  },
  Qe = 255,
  zr = {
    aqua: [0, Qe, Qe],
    lime: [0, Qe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Qe],
    navy: [0, 0, 128],
    white: [Qe, Qe, Qe],
    olive: [128, 128, 0],
    yellow: [Qe, Qe, 0],
    orange: [Qe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Qe, 0, 0],
    pink: [Qe, 192, 203],
    cyan: [0, Qe, Qe],
    transparent: [Qe, Qe, Qe, 0],
  },
  yl = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
        ? n
        : e * 3 < 2
        ? t + (n - t) * (2 / 3 - e) * 6
        : t) *
        Qe +
        0.5) |
        0
    );
  },
  Gd = function (e, t, n) {
    var i = e ? (ai(e) ? [e >> 16, (e >> 8) & Qe, e & Qe] : 0) : zr.black,
      s,
      a,
      o,
      l,
      c,
      u,
      h,
      f,
      d,
      g;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), zr[e]))
        i = zr[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (a = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              "#" +
              s +
              s +
              a +
              a +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & Qe, i & Qe, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & Qe, e & Qe]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = g = e.match(mc)), !t))
          (l = (+i[0] % 360) / 360),
            (c = +i[1] / 100),
            (u = +i[2] / 100),
            (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
            (s = u * 2 - a),
            i.length > 3 && (i[3] *= 1),
            (i[0] = yl(l + 1 / 3, s, a)),
            (i[1] = yl(l, s, a)),
            (i[2] = yl(l - 1 / 3, s, a));
        else if (~e.indexOf("="))
          return (i = e.match(vd)), n && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(mc) || zr.transparent;
      i = i.map(Number);
    }
    return (
      t &&
        !g &&
        ((s = i[0] / Qe),
        (a = i[1] / Qe),
        (o = i[2] / Qe),
        (h = Math.max(s, a, o)),
        (f = Math.min(s, a, o)),
        (u = (h + f) / 2),
        h === f
          ? (l = c = 0)
          : ((d = h - f),
            (c = u > 0.5 ? d / (2 - h - f) : d / (h + f)),
            (l =
              h === s
                ? (a - o) / d + (a < o ? 6 : 0)
                : h === a
                ? (o - s) / d + 2
                : (s - a) / d + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(c * 100 + 0.5)),
        (i[2] = ~~(u * 100 + 0.5))),
      n && i.length < 4 && (i[3] = 1),
      i
    );
  },
  Wd = function (e) {
    var t = [],
      n = [],
      i = -1;
    return (
      e.split(Ii).forEach(function (s) {
        var a = s.match(Ys) || [];
        t.push.apply(t, a), n.push((i += a.length + 1));
      }),
      (t.c = n),
      t
    );
  },
  lf = function (e, t, n) {
    var i = "",
      s = (e + i).match(Ii),
      a = t ? "hsla(" : "rgba(",
      o = 0,
      l,
      c,
      u,
      h;
    if (!s) return e;
    if (
      ((s = s.map(function (f) {
        return (
          (f = Gd(f, t, 1)) &&
          a +
            (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) +
            ")"
        );
      })),
      n && ((u = Wd(e)), (l = n.c), l.join(i) !== u.c.join(i)))
    )
      for (c = e.replace(Ii, "1").split(Ys), h = c.length - 1; o < h; o++)
        i +=
          c[o] +
          (~l.indexOf(o)
            ? s.shift() || a + "0,0,0,0)"
            : (u.length ? u : s.length ? s : n).shift());
    if (!c)
      for (c = e.split(Ii), h = c.length - 1; o < h; o++) i += c[o] + s[o];
    return i + c[h];
  },
  Ii = (function () {
    var r =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in zr) r += "|" + e + "\\b";
    return new RegExp(r + ")", "gi");
  })(),
  JM = /hsl[a]?\(/,
  Xd = function (e) {
    var t = e.join(" "),
      n;
    if (((Ii.lastIndex = 0), Ii.test(t)))
      return (
        (n = JM.test(t)),
        (e[1] = lf(e[1], n)),
        (e[0] = lf(e[0], n, Wd(e[1]))),
        !0
      );
  },
  ta,
  an = (function () {
    var r = Date.now,
      e = 500,
      t = 33,
      n = r(),
      i = n,
      s = 1e3 / 240,
      a = s,
      o = [],
      l,
      c,
      u,
      h,
      f,
      d,
      g = function _(p) {
        var m = r() - i,
          y = p === !0,
          v,
          S,
          R,
          w;
        if (
          ((m > e || m < 0) && (n += m - t),
          (i += m),
          (R = i - n),
          (v = R - a),
          (v > 0 || y) &&
            ((w = ++h.frame),
            (f = R - h.time * 1e3),
            (h.time = R = R / 1e3),
            (a += v + (v >= s ? 4 : s - v)),
            (S = 1)),
          y || (l = c(_)),
          S)
        )
          for (d = 0; d < o.length; d++) o[d](R, f, w, p);
      };
    return (
      (h = {
        time: 0,
        frame: 0,
        tick: function () {
          g(!0);
        },
        deltaRatio: function (p) {
          return f / (1e3 / (p || 60));
        },
        wake: function () {
          Sd &&
            (!_c &&
              au() &&
              ((Ln = _c = window),
              (ou = Ln.document || {}),
              (un.gsap = Jt),
              (Ln.gsapVersions || (Ln.gsapVersions = [])).push(Jt.version),
              Td(_o || Ln.GreenSockGlobals || (!Ln.gsap && Ln) || {}),
              Hd.forEach(Vd)),
            (u = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && h.sleep(),
            (c =
              u ||
              function (p) {
                return setTimeout(p, (a - h.time * 1e3 + 1) | 0);
              }),
            (ta = 1),
            g(2));
        },
        sleep: function () {
          (u ? cancelAnimationFrame : clearTimeout)(l), (ta = 0), (c = Qr);
        },
        lagSmoothing: function (p, m) {
          (e = p || 1 / 0), (t = Math.min(m || 33, e));
        },
        fps: function (p) {
          (s = 1e3 / (p || 240)), (a = h.time * 1e3 + s);
        },
        add: function (p, m, y) {
          var v = m
            ? function (S, R, w, b) {
                p(S, R, w, b), h.remove(v);
              }
            : p;
          return h.remove(p), o[y ? "unshift" : "push"](v), gr(), v;
        },
        remove: function (p, m) {
          ~(m = o.indexOf(p)) && o.splice(m, 1) && d >= m && d--;
        },
        _listeners: o,
      }),
      h
    );
  })(),
  gr = function () {
    return !ta && an.wake();
  },
  He = {},
  QM = /^[\d.\-M][\d.\-,\s]/,
  eS = /["']/g,
  tS = function (e) {
    for (
      var t = {},
        n = e.substr(1, e.length - 3).split(":"),
        i = n[0],
        s = 1,
        a = n.length,
        o,
        l,
        c;
      s < a;
      s++
    )
      (l = n[s]),
        (o = s !== a - 1 ? l.lastIndexOf(",") : l.length),
        (c = l.substr(0, o)),
        (t[i] = isNaN(c) ? c.replace(eS, "").trim() : +c),
        (i = l.substr(o + 1).trim());
    return t;
  },
  nS = function (e) {
    var t = e.indexOf("(") + 1,
      n = e.indexOf(")"),
      i = e.indexOf("(", t);
    return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
  },
  iS = function (e) {
    var t = (e + "").split("("),
      n = He[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
          null,
          ~e.indexOf("{") ? [tS(t[1])] : nS(e).split(",").map(Rd)
        )
      : He._CE && QM.test(e)
      ? He._CE("", e)
      : n;
  },
  qd = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Yd = function r(e, t) {
    for (var n = e._first, i; n; )
      n instanceof Vt
        ? r(n, t)
        : n.vars.yoyoEase &&
          (!n._yoyo || !n._repeat) &&
          n._yoyo !== t &&
          (n.timeline
            ? r(n.timeline, t)
            : ((i = n._ease),
              (n._ease = n._yEase),
              (n._yEase = i),
              (n._yoyo = t))),
        (n = n._next);
  },
  hs = function (e, t) {
    return (e && (dt(e) ? e : He[e] || iS(e))) || t;
  },
  ys = function (e, t, n, i) {
    n === void 0 &&
      (n = function (l) {
        return 1 - t(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        });
    var s = { easeIn: t, easeOut: n, easeInOut: i },
      a;
    return (
      Kt(e, function (o) {
        (He[o] = un[o] = s), (He[(a = o.toLowerCase())] = n);
        for (var l in s)
          He[
            a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = He[o + "." + l] = s[l];
      }),
      s
    );
  },
  jd = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  Ml = function r(e, t, n) {
    var i = t >= 1 ? t : 1,
      s = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (s / pc) * (Math.asin(1 / i) || 0),
      o = function (u) {
        return u === 1 ? 1 : i * Math.pow(2, -10 * u) * LM((u - a) * s) + 1;
      },
      l =
        e === "out"
          ? o
          : e === "in"
          ? function (c) {
              return 1 - o(1 - c);
            }
          : jd(o);
    return (
      (s = pc / s),
      (l.config = function (c, u) {
        return r(e, c, u);
      }),
      l
    );
  },
  Sl = function r(e, t) {
    t === void 0 && (t = 1.70158);
    var n = function (a) {
        return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
      },
      i =
        e === "out"
          ? n
          : e === "in"
          ? function (s) {
              return 1 - n(1 - s);
            }
          : jd(n);
    return (
      (i.config = function (s) {
        return r(e, s);
      }),
      i
    );
  };
Kt("Linear,Quad,Cubic,Quart,Quint,Strong", function (r, e) {
  var t = e < 5 ? e + 1 : e;
  ys(
    r + ",Power" + (t - 1),
    e
      ? function (n) {
          return Math.pow(n, t);
        }
      : function (n) {
          return n;
        },
    function (n) {
      return 1 - Math.pow(1 - n, t);
    },
    function (n) {
      return n < 0.5
        ? Math.pow(n * 2, t) / 2
        : 1 - Math.pow((1 - n) * 2, t) / 2;
    }
  );
});
He.Linear.easeNone = He.none = He.Linear.easeIn;
ys("Elastic", Ml("in"), Ml("out"), Ml());
(function (r, e) {
  var t = 1 / e,
    n = 2 * t,
    i = 2.5 * t,
    s = function (o) {
      return o < t
        ? r * o * o
        : o < n
        ? r * Math.pow(o - 1.5 / e, 2) + 0.75
        : o < i
        ? r * (o -= 2.25 / e) * o + 0.9375
        : r * Math.pow(o - 2.625 / e, 2) + 0.984375;
    };
  ys(
    "Bounce",
    function (a) {
      return 1 - s(1 - a);
    },
    s
  );
})(7.5625, 2.75);
ys("Expo", function (r) {
  return r ? Math.pow(2, 10 * (r - 1)) : 0;
});
ys("Circ", function (r) {
  return -(gd(1 - r * r) - 1);
});
ys("Sine", function (r) {
  return r === 1 ? 1 : -PM(r * RM) + 1;
});
ys("Back", Sl("in"), Sl("out"), Sl());
He.SteppedEase =
  He.steps =
  un.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e,
          i = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          a = 1 - et;
        return function (o) {
          return (((i * ha(0, a, o)) | 0) + s) * n;
        };
      },
    };
pr.ease = He["quad.out"];
Kt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (r) {
    return (uu += r + "," + r + "Params,");
  }
);
var Kd = function (e, t) {
    (this.id = CM++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : bd),
      (this.set = t ? t.getSetter : mu);
  },
  na = (function () {
    function r(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        _r(this, +t.duration, 1, 1),
        (this.data = t.data),
        at && ((this._ctx = at), at.data.push(this)),
        ta || an.wake();
    }
    var e = r.prototype;
    return (
      (e.delay = function (n) {
        return n || n === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + n - this._delay),
            (this._delay = n),
            this)
          : this._delay;
      }),
      (e.duration = function (n) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (n) {
        return arguments.length
          ? ((this._dirty = 0),
            _r(
              this,
              this._repeat < 0
                ? n
                : (n - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (n, i) {
        if ((gr(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (Io(this, n), !s._dp || s.parent || Ld(s, this); s && s.parent; )
            s.parent._time !==
              s._start +
                (s._ts >= 0
                  ? s._tTime / s._ts
                  : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && n < this._tDur) ||
              (this._ts < 0 && n > 0) ||
              (!this._tDur && !n)) &&
            Un(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== n ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === et) ||
            (!n && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = n), wd(this, n, i)),
          this
        );
      }),
      (e.time = function (n, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), n + rf(this)) %
                (this._dur + this._rDelay) || (n ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (n, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * n, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.progress = function (n, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) +
                rf(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.iteration = function (n, i) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (n - 1) * s, i)
          : this._repeat
          ? mr(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (n, i) {
        if (!arguments.length) return this._rts === -et ? 0 : this._rts;
        if (this._rts === n) return this;
        var s =
          this.parent && this._ts ? vo(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +n || 0),
          (this._ts = this._ps || n === -et ? 0 : this._rts),
          this.totalTime(ha(-Math.abs(this._delay), this._tDur, s), i !== !1),
          Lo(this),
          BM(this)
        );
      }),
      (e.paused = function (n) {
        return arguments.length
          ? (this._ps !== n &&
              ((this._ps = n),
              n
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (gr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== et &&
                      (this._tTime -= et)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (n) {
        if (arguments.length) {
          this._start = n;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && Un(i, this, n - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (n) {
        return (
          this._start +
          (jt(n) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (n) {
        var i = this.parent || this._dp;
        return i
          ? n &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? vo(i.rawTime(n), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (n) {
        n === void 0 && (n = NM);
        var i = Ot;
        return (
          (Ot = n),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(n),
            this.totalTime(-0.01, n.suppressEvents)),
          this.data !== "nested" && n.kill !== !1 && this.kill(),
          (Ot = i),
          this
        );
      }),
      (e.globalTime = function (n) {
        for (var i = this, s = arguments.length ? n : i.rawTime(); i; )
          (s = i._start + s / (Math.abs(i._ts) || 1)), (i = i._dp);
        return !this.parent && this._sat ? this._sat.globalTime(n) : s;
      }),
      (e.repeat = function (n) {
        return arguments.length
          ? ((this._repeat = n === 1 / 0 ? -2 : n), af(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (n) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = n), af(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (n) {
        return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
      }),
      (e.seek = function (n, i) {
        return this.totalTime(dn(this, n), jt(i));
      }),
      (e.restart = function (n, i) {
        return this.play().totalTime(n ? -this._delay : 0, jt(i));
      }),
      (e.play = function (n, i) {
        return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (n, i) {
        return (
          n != null && this.seek(n || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (n, i) {
        return n != null && this.seek(n, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (n) {
        return arguments.length
          ? (!!n !== this.reversed() &&
              this.timeScale(-this._rts || (n ? -et : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -et), this;
      }),
      (e.isActive = function () {
        var n = this.parent || this._dp,
          i = this._start,
          s;
        return !!(
          !n ||
          (this._ts &&
            this._initted &&
            n.isActive() &&
            (s = n.rawTime(!0)) >= i &&
            s < this.endTime(!0) - et)
        );
      }),
      (e.eventCallback = function (n, i, s) {
        var a = this.vars;
        return arguments.length > 1
          ? (i
              ? ((a[n] = i),
                s && (a[n + "Params"] = s),
                n === "onUpdate" && (this._onUpdate = i))
              : delete a[n],
            this)
          : a[n];
      }),
      (e.then = function (n) {
        var i = this;
        return new Promise(function (s) {
          var a = dt(n) ? n : Cd,
            o = function () {
              var c = i.then;
              (i.then = null),
                dt(a) && (a = a(i)) && (a.then || a === i) && (i.then = c),
                s(a),
                (i.then = c);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? o()
            : (i._prom = o);
        });
      }),
      (e.kill = function () {
        kr(this);
      }),
      r
    );
  })();
yn(na.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -et,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Vt = (function (r) {
  _d(e, r);
  function e(n, i) {
    var s;
    return (
      n === void 0 && (n = {}),
      (s = r.call(this, n) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!n.smoothChildTiming),
      (s.autoRemoveChildren = !!n.autoRemoveChildren),
      (s._sort = jt(n.sortChildren)),
      ot && Un(n.parent || ot, ei(s), i),
      n.reversed && s.reverse(),
      n.paused && s.paused(!0),
      n.scrollTrigger && Id(ei(s), n.scrollTrigger),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (i, s, a) {
      return Xr(0, arguments, this), this;
    }),
    (t.from = function (i, s, a) {
      return Xr(1, arguments, this), this;
    }),
    (t.fromTo = function (i, s, a, o) {
      return Xr(2, arguments, this), this;
    }),
    (t.set = function (i, s, a) {
      return (
        (s.duration = 0),
        (s.parent = this),
        Wr(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new vt(i, s, dn(this, a), 1),
        this
      );
    }),
    (t.call = function (i, s, a) {
      return Un(this, vt.delayedCall(0, i, s), a);
    }),
    (t.staggerTo = function (i, s, a, o, l, c, u) {
      return (
        (a.duration = s),
        (a.stagger = a.stagger || o),
        (a.onComplete = c),
        (a.onCompleteParams = u),
        (a.parent = this),
        new vt(i, a, dn(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (i, s, a, o, l, c, u) {
      return (
        (a.runBackwards = 1),
        (Wr(a).immediateRender = jt(a.immediateRender)),
        this.staggerTo(i, s, a, o, l, c, u)
      );
    }),
    (t.staggerFromTo = function (i, s, a, o, l, c, u, h) {
      return (
        (o.startAt = a),
        (Wr(o).immediateRender = jt(o.immediateRender)),
        this.staggerTo(i, s, o, l, c, u, h)
      );
    }),
    (t.render = function (i, s, a) {
      var o = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        u = i <= 0 ? 0 : At(i),
        h = this._zTime < 0 != i < 0 && (this._initted || !c),
        f,
        d,
        g,
        _,
        p,
        m,
        y,
        v,
        S,
        R,
        w,
        b;
      if (
        (this !== ot && u > l && i >= 0 && (u = l), u !== this._tTime || a || h)
      ) {
        if (
          (o !== this._time &&
            c &&
            ((u += this._time - o), (i += this._time - o)),
          (f = u),
          (S = this._start),
          (v = this._ts),
          (m = !v),
          h && (c || (o = this._zTime), (i || !s) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((w = this._yoyo),
            (p = c + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(p * 100 + i, s, a);
          if (
            ((f = At(u % p)),
            u === l
              ? ((_ = this._repeat), (f = c))
              : ((_ = ~~(u / p)),
                _ && _ === u / p && ((f = c), _--),
                f > c && (f = c)),
            (R = mr(this._tTime, p)),
            !o &&
              this._tTime &&
              R !== _ &&
              this._tTime - R * p - this._dur <= 0 &&
              (R = _),
            w && _ & 1 && ((f = c - f), (b = 1)),
            _ !== R && !this._lock)
          ) {
            var P = w && R & 1,
              M = P === (w && _ & 1);
            if (
              (_ < R && (P = !P),
              (o = P ? 0 : u % c ? c : u),
              (this._lock = 1),
              (this.render(o || (b ? 0 : At(_ * p)), s, !c)._lock = 0),
              (this._tTime = u),
              !s && this.parent && ln(this, "onRepeat"),
              this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1),
              (o && o !== this._time) ||
                m !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((c = this._dur),
              (l = this._tDur),
              M &&
                ((this._lock = 2),
                (o = P ? c : -1e-4),
                this.render(o, !0),
                this.vars.repeatRefresh && !b && this.invalidate()),
              (this._lock = 0),
              !this._ts && !m)
            )
              return this;
            Yd(this, b);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((y = VM(this, At(o), At(f))), y && (u -= f - (f = y._start))),
          (this._tTime = u),
          (this._time = f),
          (this._act = !v),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (o = 0)),
          !o && f && !s && !_ && (ln(this, "onStart"), this._tTime !== u))
        )
          return this;
        if (f >= o && i >= 0)
          for (d = this._first; d; ) {
            if (
              ((g = d._next), (d._act || f >= d._start) && d._ts && y !== d)
            ) {
              if (d.parent !== this) return this.render(i, s, a);
              if (
                (d.render(
                  d._ts > 0
                    ? (f - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (f - d._start) * d._ts,
                  s,
                  a
                ),
                f !== this._time || (!this._ts && !m))
              ) {
                (y = 0), g && (u += this._zTime = -et);
                break;
              }
            }
            d = g;
          }
        else {
          d = this._last;
          for (var E = i < 0 ? i : f; d; ) {
            if (((g = d._prev), (d._act || E <= d._end) && d._ts && y !== d)) {
              if (d.parent !== this) return this.render(i, s, a);
              if (
                (d.render(
                  d._ts > 0
                    ? (E - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (E - d._start) * d._ts,
                  s,
                  a || (Ot && (d._initted || d._startAt))
                ),
                f !== this._time || (!this._ts && !m))
              ) {
                (y = 0), g && (u += this._zTime = E ? -et : et);
                break;
              }
            }
            d = g;
          }
        }
        if (
          y &&
          !s &&
          (this.pause(),
          (y.render(f >= o ? 0 : -et)._zTime = f >= o ? 1 : -1),
          this._ts)
        )
          return (this._start = S), Lo(this), this.render(i, s, a);
        this._onUpdate && !s && ln(this, "onUpdate", !0),
          ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
            (S === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !c) &&
                ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                Ui(this, 1),
              !s &&
                !(i < 0 && !o) &&
                (u || o || !l) &&
                (ln(
                  this,
                  u === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(u < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (i, s) {
      var a = this;
      if ((ai(s) || (s = dn(this, s, i)), !(i instanceof na))) {
        if (Ft(i))
          return (
            i.forEach(function (o) {
              return a.add(o, s);
            }),
            this
          );
        if (wt(i)) return this.addLabel(i, s);
        if (dt(i)) i = vt.delayedCall(0, i);
        else return this;
      }
      return this !== i ? Un(this, i, s) : this;
    }),
    (t.getChildren = function (i, s, a, o) {
      i === void 0 && (i = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = !0),
        o === void 0 && (o = -gn);
      for (var l = [], c = this._first; c; )
        c._start >= o &&
          (c instanceof vt
            ? s && l.push(c)
            : (a && l.push(c), i && l.push.apply(l, c.getChildren(!0, s, a)))),
          (c = c._next);
      return l;
    }),
    (t.getById = function (i) {
      for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
        if (s[a].vars.id === i) return s[a];
    }),
    (t.remove = function (i) {
      return wt(i)
        ? this.removeLabel(i)
        : dt(i)
        ? this.killTweensOf(i)
        : (Po(this, i),
          i === this._recent && (this._recent = this._last),
          us(this));
    }),
    (t.totalTime = function (i, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = At(
              an.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          r.prototype.totalTime.call(this, i, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (i, s) {
      return (this.labels[i] = dn(this, s)), this;
    }),
    (t.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (t.addPause = function (i, s, a) {
      var o = vt.delayedCall(0, s || Qr, a);
      return (
        (o.data = "isPause"), (this._hasPause = 1), Un(this, o, dn(this, i))
      );
    }),
    (t.removePause = function (i) {
      var s = this._first;
      for (i = dn(this, i); s; )
        s._start === i && s.data === "isPause" && Ui(s), (s = s._next);
    }),
    (t.killTweensOf = function (i, s, a) {
      for (var o = this.getTweensOf(i, a), l = o.length; l--; )
        Ai !== o[l] && o[l].kill(i, s);
      return this;
    }),
    (t.getTweensOf = function (i, s) {
      for (var a = [], o = xn(i), l = this._first, c = ai(s), u; l; )
        l instanceof vt
          ? UM(l._targets, o) &&
            (c
              ? (!Ai || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            a.push(l)
          : (u = l.getTweensOf(o, s)).length && a.push.apply(a, u),
          (l = l._next);
      return a;
    }),
    (t.tweenTo = function (i, s) {
      s = s || {};
      var a = this,
        o = dn(a, i),
        l = s,
        c = l.startAt,
        u = l.onStart,
        h = l.onStartParams,
        f = l.immediateRender,
        d,
        g = vt.to(
          a,
          yn(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (o - (c && "time" in c ? c.time : a._time)) / a.timeScale()
                ) ||
                et,
              onStart: function () {
                if ((a.pause(), !d)) {
                  var p =
                    s.duration ||
                    Math.abs(
                      (o - (c && "time" in c ? c.time : a._time)) /
                        a.timeScale()
                    );
                  g._dur !== p && _r(g, p, 0, 1).render(g._time, !0, !0),
                    (d = 1);
                }
                u && u.apply(g, h || []);
              },
            },
            s
          )
        );
      return f ? g.render(0) : g;
    }),
    (t.tweenFromTo = function (i, s, a) {
      return this.tweenTo(s, yn({ startAt: { time: dn(this, i) } }, a));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (i) {
      return i === void 0 && (i = this._time), of(this, dn(this, i));
    }),
    (t.previousLabel = function (i) {
      return i === void 0 && (i = this._time), of(this, dn(this, i), 1);
    }),
    (t.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + et);
    }),
    (t.shiftChildren = function (i, s, a) {
      a === void 0 && (a = 0);
      for (var o = this._first, l = this.labels, c; o; )
        o._start >= a && ((o._start += i), (o._end += i)), (o = o._next);
      if (s) for (c in l) l[c] >= a && (l[c] += i);
      return us(this);
    }),
    (t.invalidate = function (i) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(i), (s = s._next);
      return r.prototype.invalidate.call(this, i);
    }),
    (t.clear = function (i) {
      i === void 0 && (i = !0);
      for (var s = this._first, a; s; ) (a = s._next), this.remove(s), (s = a);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        us(this)
      );
    }),
    (t.totalDuration = function (i) {
      var s = 0,
        a = this,
        o = a._last,
        l = gn,
        c,
        u,
        h;
      if (arguments.length)
        return a.timeScale(
          (a._repeat < 0 ? a.duration() : a.totalDuration()) /
            (a.reversed() ? -i : i)
        );
      if (a._dirty) {
        for (h = a.parent; o; )
          (c = o._prev),
            o._dirty && o.totalDuration(),
            (u = o._start),
            u > l && a._sort && o._ts && !a._lock
              ? ((a._lock = 1), (Un(a, o, u - o._delay, 1)._lock = 0))
              : (l = u),
            u < 0 &&
              o._ts &&
              ((s -= u),
              ((!h && !a._dp) || (h && h.smoothChildTiming)) &&
                ((a._start += u / a._ts), (a._time -= u), (a._tTime -= u)),
              a.shiftChildren(-u, !1, -1 / 0),
              (l = 0)),
            o._end > s && o._ts && (s = o._end),
            (o = c);
        _r(a, a === ot && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
      }
      return a._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((ot._ts && (wd(ot, vo(i, ot)), (Ad = an.frame)), an.frame >= nf)) {
        nf += cn.autoSleep || 120;
        var s = ot._first;
        if ((!s || !s._ts) && cn.autoSleep && an._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || an.sleep();
        }
      }
    }),
    e
  );
})(na);
yn(Vt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var sS = function (e, t, n, i, s, a, o) {
    var l = new Zt(this._pt, e, t, 0, 1, tp, null, s),
      c = 0,
      u = 0,
      h,
      f,
      d,
      g,
      _,
      p,
      m,
      y;
    for (
      l.b = n,
        l.e = i,
        n += "",
        i += "",
        (m = ~i.indexOf("random(")) && (i = ea(i)),
        a && ((y = [n, i]), a(y, e, t), (n = y[0]), (i = y[1])),
        f = n.match(xl) || [];
      (h = xl.exec(i));

    )
      (g = h[0]),
        (_ = i.substring(c, h.index)),
        d ? (d = (d + 1) % 5) : _.substr(-5) === "rgba(" && (d = 1),
        g !== f[u++] &&
          ((p = parseFloat(f[u - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: _ || u === 1 ? _ : ",",
            s: p,
            c: g.charAt(1) === "=" ? Qs(p, g) - p : parseFloat(g) - p,
            m: d && d < 4 ? Math.round : 0,
          }),
          (c = xl.lastIndex));
    return (
      (l.c = c < i.length ? i.substring(c, i.length) : ""),
      (l.fp = o),
      (yd.test(i) || m) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  fu = function (e, t, n, i, s, a, o, l, c, u) {
    dt(i) && (i = i(s || 0, e, a));
    var h = e[t],
      f =
        n !== "get"
          ? n
          : dt(h)
          ? c
            ? e[
                t.indexOf("set") || !dt(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](c)
            : e[t]()
          : h,
      d = dt(h) ? (c ? cS : Qd) : pu,
      g;
    if (
      (wt(i) &&
        (~i.indexOf("random(") && (i = ea(i)),
        i.charAt(1) === "=" &&
          ((g = Qs(f, i) + (Ut(f) || 0)), (g || g === 0) && (i = g))),
      !u || f !== i || Tc)
    )
      return !isNaN(f * i) && i !== ""
        ? ((g = new Zt(
            this._pt,
            e,
            t,
            +f || 0,
            i - (f || 0),
            typeof h == "boolean" ? hS : ep,
            0,
            d
          )),
          c && (g.fp = c),
          o && g.modifier(o, this, e),
          (this._pt = g))
        : (!h && !(t in e) && lu(t, i),
          sS.call(this, e, t, f, i, d, l || cn.stringFilter, c));
  },
  rS = function (e, t, n, i, s) {
    if (
      (dt(e) && (e = qr(e, s, t, n, i)),
      !Hn(e) || (e.style && e.nodeType) || Ft(e) || xd(e))
    )
      return wt(e) ? qr(e, s, t, n, i) : e;
    var a = {},
      o;
    for (o in e) a[o] = qr(e[o], s, t, n, i);
    return a;
  },
  Zd = function (e, t, n, i, s, a) {
    var o, l, c, u;
    if (
      sn[e] &&
      (o = new sn[e]()).init(
        s,
        o.rawVars ? t[e] : rS(t[e], i, s, a, n),
        n,
        i,
        a
      ) !== !1 &&
      ((n._pt = l = new Zt(n._pt, s, e, 0, 1, o.render, o, 0, o.priority)),
      n !== js)
    )
      for (c = n._ptLookup[n._targets.indexOf(s)], u = o._props.length; u--; )
        c[o._props[u]] = l;
    return o;
  },
  Ai,
  Tc,
  du = function r(e, t, n) {
    var i = e.vars,
      s = i.ease,
      a = i.startAt,
      o = i.immediateRender,
      l = i.lazy,
      c = i.onUpdate,
      u = i.runBackwards,
      h = i.yoyoEase,
      f = i.keyframes,
      d = i.autoRevert,
      g = e._dur,
      _ = e._startAt,
      p = e._targets,
      m = e.parent,
      y = m && m.data === "nested" ? m.vars.targets : p,
      v = e._overwrite === "auto" && !su,
      S = e.timeline,
      R,
      w,
      b,
      P,
      M,
      E,
      L,
      k,
      O,
      K,
      q,
      G,
      j;
    if (
      (S && (!f || !s) && (s = "none"),
      (e._ease = hs(s, pr.ease)),
      (e._yEase = h ? qd(hs(h === !0 ? s : h, pr.ease)) : 0),
      h &&
        e._yoyo &&
        !e._repeat &&
        ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
      (e._from = !S && !!i.runBackwards),
      !S || (f && !i.stagger))
    ) {
      if (
        ((k = p[0] ? cs(p[0]).harness : 0),
        (G = k && i[k.prop]),
        (R = xo(i, cu)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          t < 0 && u && o && !d ? _.render(-1, !0) : _.revert(u && g ? io : DM),
          (_._lazy = 0)),
        a)
      ) {
        if (
          (Ui(
            (e._startAt = vt.set(
              p,
              yn(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: m,
                  immediateRender: !0,
                  lazy: !_ && jt(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    c &&
                    function () {
                      return ln(e, "onUpdate");
                    },
                  stagger: 0,
                },
                a
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Ot || (!o && !d)) && e._startAt.revert(io),
          o && g && t <= 0 && n <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (u && g && !_) {
        if (
          (t && (o = !1),
          (b = yn(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && !_ && jt(l),
              immediateRender: o,
              stagger: 0,
              parent: m,
            },
            R
          )),
          G && (b[k.prop] = G),
          Ui((e._startAt = vt.set(p, b))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Ot ? e._startAt.revert(io) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !o)
        )
          r(e._startAt, et, et);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (g && jt(l)) || (l && !g), w = 0;
        w < p.length;
        w++
      ) {
        if (
          ((M = p[w]),
          (L = M._gsap || hu(p)[w]._gsap),
          (e._ptLookup[w] = K = {}),
          gc[L.id] && Li.length && go(),
          (q = y === p ? w : y.indexOf(M)),
          k &&
            (O = new k()).init(M, G || R, e, q, y) !== !1 &&
            ((e._pt = P =
              new Zt(e._pt, M, O.name, 0, 1, O.render, O, 0, O.priority)),
            O._props.forEach(function (W) {
              K[W] = P;
            }),
            O.priority && (E = 1)),
          !k || G)
        )
          for (b in R)
            sn[b] && (O = Zd(b, R, e, q, M, y))
              ? O.priority && (E = 1)
              : (K[b] = P =
                  fu.call(e, M, b, "get", R[b], q, y, 0, i.stringFilter));
        e._op && e._op[w] && e.kill(M, e._op[w]),
          v &&
            e._pt &&
            ((Ai = e),
            ot.killTweensOf(M, K, e.globalTime(t)),
            (j = !e.parent),
            (Ai = 0)),
          e._pt && l && (gc[L.id] = 1);
      }
      E && np(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !j),
      f && t <= 0 && S.render(gn, !0, !0);
  },
  aS = function (e, t, n, i, s, a, o, l) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      u,
      h,
      f,
      d;
    if (!c)
      for (
        c = e._ptCache[t] = [], f = e._ptLookup, d = e._targets.length;
        d--;

      ) {
        if (((u = f[d][t]), u && u.d && u.d._pt))
          for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
        if (!u)
          return (
            (Tc = 1),
            (e.vars[t] = "+=0"),
            du(e, o),
            (Tc = 0),
            l ? Jr(t + " not eligible for reset") : 1
          );
        c.push(u);
      }
    for (d = c.length; d--; )
      (h = c[d]),
        (u = h._pt || h),
        (u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + a * u.c),
        (u.c = n - u.s),
        h.e && (h.e = mt(n) + Ut(h.e)),
        h.b && (h.b = u.s + Ut(h.b));
  },
  oS = function (e, t) {
    var n = e[0] ? cs(e[0]).harness : 0,
      i = n && n.aliases,
      s,
      a,
      o,
      l;
    if (!i) return t;
    s = gs({}, t);
    for (a in i)
      if (a in s) for (l = i[a].split(","), o = l.length; o--; ) s[l[o]] = s[a];
    return s;
  },
  lS = function (e, t, n, i) {
    var s = t.ease || i || "power1.inOut",
      a,
      o;
    if (Ft(t))
      (o = n[e] || (n[e] = [])),
        t.forEach(function (l, c) {
          return o.push({ t: (c / (t.length - 1)) * 100, v: l, e: s });
        });
    else
      for (a in t)
        (o = n[a] || (n[a] = [])),
          a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: s });
  },
  qr = function (e, t, n, i, s) {
    return dt(e)
      ? e.call(t, n, i, s)
      : wt(e) && ~e.indexOf("random(")
      ? ea(e)
      : e;
  },
  $d = uu + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Jd = {};
Kt($d + ",id,stagger,delay,duration,paused,scrollTrigger", function (r) {
  return (Jd[r] = 1);
});
var vt = (function (r) {
  _d(e, r);
  function e(n, i, s, a) {
    var o;
    typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
      (o = r.call(this, a ? i : Wr(i)) || this);
    var l = o.vars,
      c = l.duration,
      u = l.delay,
      h = l.immediateRender,
      f = l.stagger,
      d = l.overwrite,
      g = l.keyframes,
      _ = l.defaults,
      p = l.scrollTrigger,
      m = l.yoyoEase,
      y = i.parent || ot,
      v = (Ft(n) || xd(n) ? ai(n[0]) : "length" in i) ? [n] : xn(n),
      S,
      R,
      w,
      b,
      P,
      M,
      E,
      L;
    if (
      ((o._targets = v.length
        ? hu(v)
        : Jr(
            "GSAP target " + n + " not found. https://gsap.com",
            !cn.nullTargetWarn
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = d),
      g || f || Ya(c) || Ya(u))
    ) {
      if (
        ((i = o.vars),
        (S = o.timeline =
          new Vt({
            data: "nested",
            defaults: _ || {},
            targets: y && y.data === "nested" ? y.vars.targets : v,
          })),
        S.kill(),
        (S.parent = S._dp = ei(o)),
        (S._start = 0),
        f || Ya(c) || Ya(u))
      ) {
        if (((b = v.length), (E = f && Od(f)), Hn(f)))
          for (P in f) ~$d.indexOf(P) && (L || (L = {}), (L[P] = f[P]));
        for (R = 0; R < b; R++)
          (w = xo(i, Jd)),
            (w.stagger = 0),
            m && (w.yoyoEase = m),
            L && gs(w, L),
            (M = v[R]),
            (w.duration = +qr(c, ei(o), R, M, v)),
            (w.delay = (+qr(u, ei(o), R, M, v) || 0) - o._delay),
            !f &&
              b === 1 &&
              w.delay &&
              ((o._delay = u = w.delay), (o._start += u), (w.delay = 0)),
            S.to(M, w, E ? E(R, M, v) : 0),
            (S._ease = He.none);
        S.duration() ? (c = u = 0) : (o.timeline = 0);
      } else if (g) {
        Wr(yn(S.vars.defaults, { ease: "none" })),
          (S._ease = hs(g.ease || i.ease || "none"));
        var k = 0,
          O,
          K,
          q;
        if (Ft(g))
          g.forEach(function (G) {
            return S.to(v, G, ">");
          }),
            S.duration();
        else {
          w = {};
          for (P in g)
            P === "ease" || P === "easeEach" || lS(P, g[P], w, g.easeEach);
          for (P in w)
            for (
              O = w[P].sort(function (G, j) {
                return G.t - j.t;
              }),
                k = 0,
                R = 0;
              R < O.length;
              R++
            )
              (K = O[R]),
                (q = {
                  ease: K.e,
                  duration: ((K.t - (R ? O[R - 1].t : 0)) / 100) * c,
                }),
                (q[P] = K.v),
                S.to(v, q, k),
                (k += q.duration);
          S.duration() < c && S.to({}, { duration: c - S.duration() });
        }
      }
      c || o.duration((c = S.duration()));
    } else o.timeline = 0;
    return (
      d === !0 && !su && ((Ai = ei(o)), ot.killTweensOf(v), (Ai = 0)),
      Un(y, ei(o), s),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      (h ||
        (!c &&
          !g &&
          o._start === At(y._time) &&
          jt(h) &&
          kM(ei(o)) &&
          y.data !== "nested")) &&
        ((o._tTime = -et), o.render(Math.max(0, -u) || 0)),
      p && Id(ei(o), p),
      o
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (i, s, a) {
      var o = this._time,
        l = this._tDur,
        c = this._dur,
        u = i < 0,
        h = i > l - et && !u ? l : i < et ? 0 : i,
        f,
        d,
        g,
        _,
        p,
        m,
        y,
        v,
        S;
      if (!c) HM(this, i, s, a);
      else if (
        h !== this._tTime ||
        !i ||
        a ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== u)
      ) {
        if (((f = h), (v = this.timeline), this._repeat)) {
          if (((_ = c + this._rDelay), this._repeat < -1 && u))
            return this.totalTime(_ * 100 + i, s, a);
          if (
            ((f = At(h % _)),
            h === l
              ? ((g = this._repeat), (f = c))
              : ((g = ~~(h / _)),
                g && g === At(h / _) && ((f = c), g--),
                f > c && (f = c)),
            (m = this._yoyo && g & 1),
            m && ((S = this._yEase), (f = c - f)),
            (p = mr(this._tTime, _)),
            f === o && !a && this._initted && g === p)
          )
            return (this._tTime = h), this;
          g !== p &&
            (v && this._yEase && Yd(v, m),
            this.vars.repeatRefresh &&
              !m &&
              !this._lock &&
              this._time !== _ &&
              this._initted &&
              ((this._lock = a = 1),
              (this.render(At(_ * g), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Dd(this, u ? i : f, a, s, h)) return (this._tTime = 0), this;
          if (o !== this._time && !(a && this.vars.repeatRefresh && g !== p))
            return this;
          if (c !== this._dur) return this.render(i, s, a);
        }
        if (
          ((this._tTime = h),
          (this._time = f),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = y = (S || this._ease)(f / c)),
          this._from && (this.ratio = y = 1 - y),
          f && !o && !s && !g && (ln(this, "onStart"), this._tTime !== h))
        )
          return this;
        for (d = this._pt; d; ) d.r(y, d.d), (d = d._next);
        (v && v.render(i < 0 ? i : v._dur * v._ease(f / this._dur), s, a)) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !s &&
            (u && xc(this, i, s, a), ln(this, "onUpdate")),
          this._repeat &&
            g !== p &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            ln(this, "onRepeat"),
          (h === this._tDur || !h) &&
            this._tTime === h &&
            (u && !this._onUpdate && xc(this, i, !0, !0),
            (i || !c) &&
              ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
              Ui(this, 1),
            !s &&
              !(u && !o) &&
              (h || o || m) &&
              (ln(this, h === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        r.prototype.invalidate.call(this, i)
      );
    }),
    (t.resetTo = function (i, s, a, o, l) {
      ta || an.wake(), this._ts || this.play();
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u;
      return (
        this._initted || du(this, c),
        (u = this._ease(c / this._dur)),
        aS(this, i, s, a, o, u, c, l)
          ? this.resetTo(i, s, a, o, 1)
          : (Io(this, 0),
            this.parent ||
              Pd(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (t.kill = function (i, s) {
      if ((s === void 0 && (s = "all"), !i && (!s || s === "all")))
        return (this._lazy = this._pt = 0), this.parent ? kr(this) : this;
      if (this.timeline) {
        var a = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, s, Ai && Ai.vars.overwrite !== !0)
            ._first || kr(this),
          this.parent &&
            a !== this.timeline.totalDuration() &&
            _r(this, (this._dur * this.timeline._tDur) / a, 0, 1),
          this
        );
      }
      var o = this._targets,
        l = i ? xn(i) : o,
        c = this._ptLookup,
        u = this._pt,
        h,
        f,
        d,
        g,
        _,
        p,
        m;
      if ((!s || s === "all") && FM(o, l))
        return s === "all" && (this._pt = 0), kr(this);
      for (
        h = this._op = this._op || [],
          s !== "all" &&
            (wt(s) &&
              ((_ = {}),
              Kt(s, function (y) {
                return (_[y] = 1);
              }),
              (s = _)),
            (s = oS(o, s))),
          m = o.length;
        m--;

      )
        if (~l.indexOf(o[m])) {
          (f = c[m]),
            s === "all"
              ? ((h[m] = s), (g = f), (d = {}))
              : ((d = h[m] = h[m] || {}), (g = s));
          for (_ in g)
            (p = f && f[_]),
              p &&
                ((!("kill" in p.d) || p.d.kill(_) === !0) && Po(this, p, "_pt"),
                delete f[_]),
              d !== "all" && (d[_] = 1);
        }
      return this._initted && !this._pt && u && kr(this), this;
    }),
    (e.to = function (i, s) {
      return new e(i, s, arguments[2]);
    }),
    (e.from = function (i, s) {
      return Xr(1, arguments);
    }),
    (e.delayedCall = function (i, s, a, o) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: a,
        onReverseCompleteParams: a,
        callbackScope: o,
      });
    }),
    (e.fromTo = function (i, s, a) {
      return Xr(2, arguments);
    }),
    (e.set = function (i, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s);
    }),
    (e.killTweensOf = function (i, s, a) {
      return ot.killTweensOf(i, s, a);
    }),
    e
  );
})(na);
yn(vt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Kt("staggerTo,staggerFrom,staggerFromTo", function (r) {
  vt[r] = function () {
    var e = new Vt(),
      t = yc.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var pu = function (e, t, n) {
    return (e[t] = n);
  },
  Qd = function (e, t, n) {
    return e[t](n);
  },
  cS = function (e, t, n, i) {
    return e[t](i.fp, n);
  },
  uS = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  mu = function (e, t) {
    return dt(e[t]) ? Qd : ru(e[t]) && e.setAttribute ? uS : pu;
  },
  ep = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  hS = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  tp = function (e, t) {
    var n = t._pt,
      i = "";
    if (!e && t.b) i = t.b;
    else if (e === 1 && t.e) i = t.e;
    else {
      for (; n; )
        (i =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
          i),
          (n = n._next);
      i += t.c;
    }
    t.set(t.t, t.p, i, t);
  },
  _u = function (e, t) {
    for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
  },
  fS = function (e, t, n, i) {
    for (var s = this._pt, a; s; )
      (a = s._next), s.p === i && s.modifier(e, t, n), (s = a);
  },
  dS = function (e) {
    for (var t = this._pt, n, i; t; )
      (i = t._next),
        (t.p === e && !t.op) || t.op === e
          ? Po(this, t, "_pt")
          : t.dep || (n = 1),
        (t = i);
    return !n;
  },
  pS = function (e, t, n, i) {
    i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
  },
  np = function (e) {
    for (var t = e._pt, n, i, s, a; t; ) {
      for (n = t._next, i = s; i && i.pr > t.pr; ) i = i._next;
      (t._prev = i ? i._prev : a) ? (t._prev._next = t) : (s = t),
        (t._next = i) ? (i._prev = t) : (a = t),
        (t = n);
    }
    e._pt = s;
  },
  Zt = (function () {
    function r(t, n, i, s, a, o, l, c, u) {
      (this.t = n),
        (this.s = s),
        (this.c = a),
        (this.p = i),
        (this.r = o || ep),
        (this.d = l || this),
        (this.set = c || pu),
        (this.pr = u || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = r.prototype;
    return (
      (e.modifier = function (n, i, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = pS),
          (this.m = n),
          (this.mt = s),
          (this.tween = i);
      }),
      r
    );
  })();
Kt(
  uu +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (r) {
    return (cu[r] = 1);
  }
);
un.TweenMax = un.TweenLite = vt;
un.TimelineLite = un.TimelineMax = Vt;
ot = new Vt({
  sortChildren: !1,
  defaults: pr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
cn.stringFilter = Xd;
var fs = [],
  ro = {},
  mS = [],
  cf = 0,
  _S = 0,
  Tl = function (e) {
    return (ro[e] || mS).map(function (t) {
      return t();
    });
  },
  Ec = function () {
    var e = Date.now(),
      t = [];
    e - cf > 2 &&
      (Tl("matchMediaInit"),
      fs.forEach(function (n) {
        var i = n.queries,
          s = n.conditions,
          a,
          o,
          l,
          c;
        for (o in i)
          (a = Ln.matchMedia(i[o]).matches),
            a && (l = 1),
            a !== s[o] && ((s[o] = a), (c = 1));
        c && (n.revert(), l && t.push(n));
      }),
      Tl("matchMediaRevert"),
      t.forEach(function (n) {
        return n.onMatch(n, function (i) {
          return n.add(null, i);
        });
      }),
      (cf = e),
      Tl("matchMedia"));
  },
  ip = (function () {
    function r(t, n) {
      (this.selector = n && Mc(n)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = _S++),
        t && this.add(t);
    }
    var e = r.prototype;
    return (
      (e.add = function (n, i, s) {
        dt(n) && ((s = i), (i = n), (n = dt));
        var a = this,
          o = function () {
            var c = at,
              u = a.selector,
              h;
            return (
              c && c !== a && c.data.push(a),
              s && (a.selector = Mc(s)),
              (at = a),
              (h = i.apply(a, arguments)),
              dt(h) && a._r.push(h),
              (at = c),
              (a.selector = u),
              (a.isReverted = !1),
              h
            );
          };
        return (
          (a.last = o),
          n === dt
            ? o(a, function (l) {
                return a.add(null, l);
              })
            : n
            ? (a[n] = o)
            : o
        );
      }),
      (e.ignore = function (n) {
        var i = at;
        (at = null), n(this), (at = i);
      }),
      (e.getTweens = function () {
        var n = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof r
              ? n.push.apply(n, i.getTweens())
              : i instanceof vt &&
                  !(i.parent && i.parent.data === "nested") &&
                  n.push(i);
          }),
          n
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (n, i) {
        var s = this;
        if (
          (n
            ? (function () {
                for (var o = s.getTweens(), l = s.data.length, c; l--; )
                  (c = s.data[l]),
                    c.data === "isFlip" &&
                      (c.revert(),
                      c.getChildren(!0, !0, !1).forEach(function (u) {
                        return o.splice(o.indexOf(u), 1);
                      }));
                for (
                  o
                    .map(function (u) {
                      return {
                        g:
                          u._dur ||
                          u._delay ||
                          (u._sat && !u._sat.vars.immediateRender)
                            ? u.globalTime(0)
                            : -1 / 0,
                        t: u,
                      };
                    })
                    .sort(function (u, h) {
                      return h.g - u.g || -1 / 0;
                    })
                    .forEach(function (u) {
                      return u.t.revert(n);
                    }),
                    l = s.data.length;
                  l--;

                )
                  (c = s.data[l]),
                    c instanceof Vt
                      ? c.data !== "nested" &&
                        (c.scrollTrigger && c.scrollTrigger.revert(), c.kill())
                      : !(c instanceof vt) && c.revert && c.revert(n);
                s._r.forEach(function (u) {
                  return u(n, s);
                }),
                  (s.isReverted = !0);
              })()
            : this.data.forEach(function (o) {
                return o.kill && o.kill();
              }),
          this.clear(),
          i)
        )
          for (var a = fs.length; a--; )
            fs[a].id === this.id && fs.splice(a, 1);
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      r
    );
  })(),
  gS = (function () {
    function r(t) {
      (this.contexts = []), (this.scope = t), at && at.data.push(this);
    }
    var e = r.prototype;
    return (
      (e.add = function (n, i, s) {
        Hn(n) || (n = { matches: n });
        var a = new ip(0, s || this.scope),
          o = (a.conditions = {}),
          l,
          c,
          u;
        at && !a.selector && (a.selector = at.selector),
          this.contexts.push(a),
          (i = a.add("onMatch", i)),
          (a.queries = n);
        for (c in n)
          c === "all"
            ? (u = 1)
            : ((l = Ln.matchMedia(n[c])),
              l &&
                (fs.indexOf(a) < 0 && fs.push(a),
                (o[c] = l.matches) && (u = 1),
                l.addListener
                  ? l.addListener(Ec)
                  : l.addEventListener("change", Ec)));
        return (
          u &&
            i(a, function (h) {
              return a.add(null, h);
            }),
          this
        );
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      (e.kill = function (n) {
        this.contexts.forEach(function (i) {
          return i.kill(n, !0);
        });
      }),
      r
    );
  })(),
  yo = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      t.forEach(function (i) {
        return Vd(i);
      });
    },
    timeline: function (e) {
      return new Vt(e);
    },
    getTweensOf: function (e, t) {
      return ot.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, i) {
      wt(e) && (e = xn(e)[0]);
      var s = cs(e || {}).get,
        a = n ? Cd : Rd;
      return (
        n === "native" && (n = ""),
        e &&
          (t
            ? a(((sn[t] && sn[t].get) || s)(e, t, n, i))
            : function (o, l, c) {
                return a(((sn[o] && sn[o].get) || s)(e, o, l, c));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = xn(e)), e.length > 1)) {
        var i = e.map(function (u) {
            return Jt.quickSetter(u, t, n);
          }),
          s = i.length;
        return function (u) {
          for (var h = s; h--; ) i[h](u);
        };
      }
      e = e[0] || {};
      var a = sn[t],
        o = cs(e),
        l = (o.harness && (o.harness.aliases || {})[t]) || t,
        c = a
          ? function (u) {
              var h = new a();
              (js._pt = 0),
                h.init(e, n ? u + n : u, js, 0, [e]),
                h.render(1, h),
                js._pt && _u(1, js);
            }
          : o.set(e, l);
      return a
        ? c
        : function (u) {
            return c(e, l, n ? u + n : u, o, 1);
          };
    },
    quickTo: function (e, t, n) {
      var i,
        s = Jt.to(
          e,
          gs(((i = {}), (i[t] = "+=0.1"), (i.paused = !0), i), n || {})
        ),
        a = function (l, c, u) {
          return s.resetTo(t, l, c, u);
        };
      return (a.tween = s), a;
    },
    isTweening: function (e) {
      return ot.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = hs(e.ease, pr.ease)), sf(pr, e || {});
    },
    config: function (e) {
      return sf(cn, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        i = e.plugins,
        s = e.defaults,
        a = e.extendTimeline;
      (i || "").split(",").forEach(function (o) {
        return (
          o && !sn[o] && !un[o] && Jr(t + " effect requires " + o + " plugin.")
        );
      }),
        (vl[t] = function (o, l, c) {
          return n(xn(o), yn(l || {}, s), c);
        }),
        a &&
          (Vt.prototype[t] = function (o, l, c) {
            return this.add(vl[t](o, Hn(l) ? l : (c = l) && {}, this), c);
          });
    },
    registerEase: function (e, t) {
      He[e] = hs(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? hs(e, t) : He;
    },
    getById: function (e) {
      return ot.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new Vt(e),
        i,
        s;
      for (
        n.smoothChildTiming = jt(e.smoothChildTiming),
          ot.remove(n),
          n._dp = 0,
          n._time = n._tTime = ot._time,
          i = ot._first;
        i;

      )
        (s = i._next),
          (t ||
            !(
              !i._dur &&
              i instanceof vt &&
              i.vars.onComplete === i._targets[0]
            )) &&
            Un(n, i, i._start - i._delay),
          (i = s);
      return Un(ot, n, 0), n;
    },
    context: function (e, t) {
      return e ? new ip(e, t) : at;
    },
    matchMedia: function (e) {
      return new gS(e);
    },
    matchMediaRefresh: function () {
      return (
        fs.forEach(function (e) {
          var t = e.conditions,
            n,
            i;
          for (i in t) t[i] && ((t[i] = !1), (n = 1));
          n && e.revert();
        }) || Ec()
      );
    },
    addEventListener: function (e, t) {
      var n = ro[e] || (ro[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = ro[e],
        i = n && n.indexOf(t);
      i >= 0 && n.splice(i, 1);
    },
    utils: {
      wrap: KM,
      wrapYoyo: ZM,
      distribute: Od,
      random: Bd,
      snap: Fd,
      normalize: jM,
      getUnit: Ut,
      clamp: WM,
      splitColor: Gd,
      toArray: xn,
      selector: Mc,
      mapRange: zd,
      pipe: qM,
      unitize: YM,
      interpolate: $M,
      shuffle: Ud,
    },
    install: Td,
    effects: vl,
    ticker: an,
    updateRoot: Vt.updateRoot,
    plugins: sn,
    globalTimeline: ot,
    core: {
      PropTween: Zt,
      globals: Ed,
      Tween: vt,
      Timeline: Vt,
      Animation: na,
      getCache: cs,
      _removeLinkedListItem: Po,
      reverting: function () {
        return Ot;
      },
      context: function (e) {
        return e && at && (at.data.push(e), (e._ctx = at)), at;
      },
      suppressOverwrites: function (e) {
        return (su = e);
      },
    },
  };
Kt("to,from,fromTo,delayedCall,set,killTweensOf", function (r) {
  return (yo[r] = vt[r]);
});
an.add(Vt.updateRoot);
js = yo.to({}, { duration: 0 });
var xS = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
      n = n._next;
    return n;
  },
  vS = function (e, t) {
    var n = e._targets,
      i,
      s,
      a;
    for (i in t)
      for (s = n.length; s--; )
        (a = e._ptLookup[s][i]),
          a &&
            (a = a.d) &&
            (a._pt && (a = xS(a, i)),
            a && a.modifier && a.modifier(t[i], e, n[s], i));
  },
  El = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, s, a) {
        a._onInit = function (o) {
          var l, c;
          if (
            (wt(s) &&
              ((l = {}),
              Kt(s, function (u) {
                return (l[u] = 1);
              }),
              (s = l)),
            t)
          ) {
            l = {};
            for (c in s) l[c] = t(s[c]);
            s = l;
          }
          vS(o, s);
        };
      },
    };
  },
  Jt =
    yo.registerPlugin(
      {
        name: "attr",
        init: function (e, t, n, i, s) {
          var a, o, l;
          this.tween = n;
          for (a in t)
            (l = e.getAttribute(a) || ""),
              (o = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                t[a],
                i,
                s,
                0,
                0,
                a
              )),
              (o.op = a),
              (o.b = l),
              this._props.push(a);
        },
        render: function (e, t) {
          for (var n = t._pt; n; )
            Ot ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var n = t.length; n--; )
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      El("roundProps", Sc),
      El("modifiers"),
      El("snap", Fd)
    ) || yo;
vt.version = Vt.version = Jt.version = "3.12.5";
Sd = 1;
au() && gr();
He.Power0;
He.Power1;
He.Power2;
He.Power3;
He.Power4;
He.Linear;
He.Quad;
He.Cubic;
He.Quart;
He.Quint;
He.Strong;
He.Elastic;
He.Back;
He.SteppedEase;
He.Bounce;
He.Sine;
He.Expo;
He.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var uf,
  bi,
  er,
  gu,
  as,
  hf,
  xu,
  yS = function () {
    return typeof window < "u";
  },
  oi = {},
  is = 180 / Math.PI,
  tr = Math.PI / 180,
  Vs = Math.atan2,
  ff = 1e8,
  vu = /([A-Z])/g,
  MS = /(left|right|width|margin|padding|x)/i,
  SS = /[\s,\(]\S/,
  On = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Ac = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  TS = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  ES = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  AS = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  sp = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  rp = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  bS = function (e, t, n) {
    return (e.style[t] = n);
  },
  wS = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  RS = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  CS = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  PS = function (e, t, n, i, s) {
    var a = e._gsap;
    (a.scaleX = a.scaleY = n), a.renderTransform(s, a);
  },
  LS = function (e, t, n, i, s) {
    var a = e._gsap;
    (a[t] = n), a.renderTransform(s, a);
  },
  lt = "transform",
  $t = lt + "Origin",
  IS = function r(e, t) {
    var n = this,
      i = this.target,
      s = i.style,
      a = i._gsap;
    if (e in oi && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = On[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (o) {
                return (n.tfm[o] = ti(i, o));
              })
            : (this.tfm[e] = a.x ? a[e] : ti(i, e)),
          e === $t && (this.tfm.zOrigin = a.zOrigin);
      else
        return On.transform.split(",").forEach(function (o) {
          return r.call(n, o, t);
        });
      if (this.props.indexOf(lt) >= 0) return;
      a.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push($t, t, "")),
        (e = lt);
    }
    (s || t) && this.props.push(e, t, s[e]);
  },
  ap = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  DS = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      i = t._gsap,
      s,
      a;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (t[e[s]] = e[s + 2])
        : e[s + 2]
        ? (n[e[s]] = e[s + 2])
        : n.removeProperty(
            e[s].substr(0, 2) === "--"
              ? e[s]
              : e[s].replace(vu, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (a in this.tfm) i[a] = this.tfm[a];
      i.svg &&
        (i.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (s = xu()),
        (!s || !s.isStart) &&
          !n[lt] &&
          (ap(n),
          i.zOrigin &&
            n[$t] &&
            ((n[$t] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1));
    }
  },
  op = function (e, t) {
    var n = { target: e, props: [], revert: DS, save: IS };
    return (
      e._gsap || Jt.core.getCache(e),
      t &&
        t.split(",").forEach(function (i) {
          return n.save(i);
        }),
      n
    );
  },
  lp,
  bc = function (e, t) {
    var n = bi.createElementNS
      ? bi.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : bi.createElement(e);
    return n && n.style ? n : bi.createElement(e);
  },
  Bn = function r(e, t, n) {
    var i = getComputedStyle(e);
    return (
      i[t] ||
      i.getPropertyValue(t.replace(vu, "-$1").toLowerCase()) ||
      i.getPropertyValue(t) ||
      (!n && r(e, xr(t) || t, 1)) ||
      ""
    );
  },
  df = "O,Moz,ms,Ms,Webkit".split(","),
  xr = function (e, t, n) {
    var i = t || as,
      s = i.style,
      a = 5;
    if (e in s && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      a-- && !(df[a] + e in s);

    );
    return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? df[a] : "") + e;
  },
  wc = function () {
    yS() &&
      window.document &&
      ((uf = window),
      (bi = uf.document),
      (er = bi.documentElement),
      (as = bc("div") || { style: {} }),
      bc("div"),
      (lt = xr(lt)),
      ($t = lt + "Origin"),
      (as.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (lp = !!xr("perspective")),
      (xu = Jt.core.reverting),
      (gu = 1));
  },
  Al = function r(e) {
    var t = bc(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      n = this.parentNode,
      i = this.nextSibling,
      s = this.style.cssText,
      a;
    if (
      (er.appendChild(t),
      t.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (a = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = r);
      } catch {}
    else this._gsapBBox && (a = this._gsapBBox());
    return (
      n && (i ? n.insertBefore(this, i) : n.appendChild(this)),
      er.removeChild(t),
      (this.style.cssText = s),
      a
    );
  },
  pf = function (e, t) {
    for (var n = t.length; n--; )
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  cp = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = Al.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === Al || (t = Al.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +pf(e, ["x", "cx", "x1"]) || 0,
            y: +pf(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  up = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && cp(e));
  },
  xs = function (e, t) {
    if (t) {
      var n = e.style,
        i;
      t in oi && t !== $t && (t = lt),
        n.removeProperty
          ? ((i = t.substr(0, 2)),
            (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            n.removeProperty(
              i === "--" ? t : t.replace(vu, "-$1").toLowerCase()
            ))
          : n.removeAttribute(t);
    }
  },
  wi = function (e, t, n, i, s, a) {
    var o = new Zt(e._pt, t, n, 0, 1, a ? rp : sp);
    return (e._pt = o), (o.b = i), (o.e = s), e._props.push(n), o;
  },
  mf = { deg: 1, rad: 1, turn: 1 },
  NS = { grid: 1, flex: 1 },
  Oi = function r(e, t, n, i) {
    var s = parseFloat(n) || 0,
      a = (n + "").trim().substr((s + "").length) || "px",
      o = as.style,
      l = MS.test(t),
      c = e.tagName.toLowerCase() === "svg",
      u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
      h = 100,
      f = i === "px",
      d = i === "%",
      g,
      _,
      p,
      m;
    if (i === a || !s || mf[i] || mf[a]) return s;
    if (
      (a !== "px" && !f && (s = r(e, t, n, "px")),
      (m = e.getCTM && up(e)),
      (d || a === "%") && (oi[t] || ~t.indexOf("adius")))
    )
      return (
        (g = m ? e.getBBox()[l ? "width" : "height"] : e[u]),
        mt(d ? (s / g) * h : (s / 100) * g)
      );
    if (
      ((o[l ? "width" : "height"] = h + (f ? a : i)),
      (_ =
        ~t.indexOf("adius") || (i === "em" && e.appendChild && !c)
          ? e
          : e.parentNode),
      m && (_ = (e.ownerSVGElement || {}).parentNode),
      (!_ || _ === bi || !_.appendChild) && (_ = bi.body),
      (p = _._gsap),
      p && d && p.width && l && p.time === an.time && !p.uncache)
    )
      return mt((s / p.width) * h);
    if (d && (t === "height" || t === "width")) {
      var y = e.style[t];
      (e.style[t] = h + i), (g = e[u]), y ? (e.style[t] = y) : xs(e, t);
    } else
      (d || a === "%") &&
        !NS[Bn(_, "display")] &&
        (o.position = Bn(e, "position")),
        _ === e && (o.position = "static"),
        _.appendChild(as),
        (g = as[u]),
        _.removeChild(as),
        (o.position = "absolute");
    return (
      l && d && ((p = cs(_)), (p.time = an.time), (p.width = _[u])),
      mt(f ? (g * s) / h : g && s ? (h / g) * s : 0)
    );
  },
  ti = function (e, t, n, i) {
    var s;
    return (
      gu || wc(),
      t in On &&
        t !== "transform" &&
        ((t = On[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      oi[t] && t !== "transform"
        ? ((s = sa(e, i)),
          (s =
            t !== "transformOrigin"
              ? s[t]
              : s.svg
              ? s.origin
              : So(Bn(e, $t)) + " " + s.zOrigin + "px"))
        : ((s = e.style[t]),
          (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
            (s =
              (Mo[t] && Mo[t](e, t, n)) ||
              Bn(e, t) ||
              bd(e, t) ||
              (t === "opacity" ? 1 : 0))),
      n && !~(s + "").trim().indexOf(" ") ? Oi(e, t, s, n) + n : s
    );
  },
  US = function (e, t, n, i) {
    if (!n || n === "none") {
      var s = xr(t, e, 1),
        a = s && Bn(e, s, 1);
      a && a !== n
        ? ((t = s), (n = a))
        : t === "borderColor" && (n = Bn(e, "borderTopColor"));
    }
    var o = new Zt(this._pt, e.style, t, 0, 1, tp),
      l = 0,
      c = 0,
      u,
      h,
      f,
      d,
      g,
      _,
      p,
      m,
      y,
      v,
      S,
      R;
    if (
      ((o.b = n),
      (o.e = i),
      (n += ""),
      (i += ""),
      i === "auto" &&
        ((_ = e.style[t]),
        (e.style[t] = i),
        (i = Bn(e, t) || i),
        _ ? (e.style[t] = _) : xs(e, t)),
      (u = [n, i]),
      Xd(u),
      (n = u[0]),
      (i = u[1]),
      (f = n.match(Ys) || []),
      (R = i.match(Ys) || []),
      R.length)
    ) {
      for (; (h = Ys.exec(i)); )
        (p = h[0]),
          (y = i.substring(l, h.index)),
          g
            ? (g = (g + 1) % 5)
            : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1),
          p !== (_ = f[c++] || "") &&
            ((d = parseFloat(_) || 0),
            (S = _.substr((d + "").length)),
            p.charAt(1) === "=" && (p = Qs(d, p) + S),
            (m = parseFloat(p)),
            (v = p.substr((m + "").length)),
            (l = Ys.lastIndex - v.length),
            v ||
              ((v = v || cn.units[t] || S),
              l === i.length && ((i += v), (o.e += v))),
            S !== v && (d = Oi(e, t, _, v) || 0),
            (o._pt = {
              _next: o._pt,
              p: y || c === 1 ? y : ",",
              s: d,
              c: m - d,
              m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
            }));
      o.c = l < i.length ? i.substring(l, i.length) : "";
    } else o.r = t === "display" && i === "none" ? rp : sp;
    return yd.test(i) && (o.e = 0), (this._pt = o), o;
  },
  _f = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  OS = function (e) {
    var t = e.split(" "),
      n = t[0],
      i = t[1] || "50%";
    return (
      (n === "top" || n === "bottom" || i === "left" || i === "right") &&
        ((e = n), (n = i), (i = e)),
      (t[0] = _f[n] || n),
      (t[1] = _f[i] || i),
      t.join(" ")
    );
  },
  FS = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        i = n.style,
        s = t.u,
        a = n._gsap,
        o,
        l,
        c;
      if (s === "all" || s === !0) (i.cssText = ""), (l = 1);
      else
        for (s = s.split(","), c = s.length; --c > -1; )
          (o = s[c]),
            oi[o] && ((l = 1), (o = o === "transformOrigin" ? $t : lt)),
            xs(n, o);
      l &&
        (xs(n, lt),
        a &&
          (a.svg && n.removeAttribute("transform"),
          sa(n, 1),
          (a.uncache = 1),
          ap(i)));
    }
  },
  Mo = {
    clearProps: function (e, t, n, i, s) {
      if (s.data !== "isFromStart") {
        var a = (e._pt = new Zt(e._pt, t, n, 0, 0, FS));
        return (a.u = i), (a.pr = -10), (a.tween = s), e._props.push(n), 1;
      }
    },
  },
  ia = [1, 0, 0, 1, 0, 0],
  hp = {},
  fp = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  gf = function (e) {
    var t = Bn(e, lt);
    return fp(t) ? ia : t.substr(7).match(vd).map(mt);
  },
  yu = function (e, t) {
    var n = e._gsap || cs(e),
      i = e.style,
      s = gf(e),
      a,
      o,
      l,
      c;
    return n.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? ia : s)
      : (s === ia &&
          !e.offsetParent &&
          e !== er &&
          !n.svg &&
          ((l = i.display),
          (i.display = "block"),
          (a = e.parentNode),
          (!a || !e.offsetParent) &&
            ((c = 1), (o = e.nextElementSibling), er.appendChild(e)),
          (s = gf(e)),
          l ? (i.display = l) : xs(e, "display"),
          c &&
            (o
              ? a.insertBefore(e, o)
              : a
              ? a.appendChild(e)
              : er.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  Rc = function (e, t, n, i, s, a) {
    var o = e._gsap,
      l = s || yu(e, !0),
      c = o.xOrigin || 0,
      u = o.yOrigin || 0,
      h = o.xOffset || 0,
      f = o.yOffset || 0,
      d = l[0],
      g = l[1],
      _ = l[2],
      p = l[3],
      m = l[4],
      y = l[5],
      v = t.split(" "),
      S = parseFloat(v[0]) || 0,
      R = parseFloat(v[1]) || 0,
      w,
      b,
      P,
      M;
    n
      ? l !== ia &&
        (b = d * p - g * _) &&
        ((P = S * (p / b) + R * (-_ / b) + (_ * y - p * m) / b),
        (M = S * (-g / b) + R * (d / b) - (d * y - g * m) / b),
        (S = P),
        (R = M))
      : ((w = cp(e)),
        (S = w.x + (~v[0].indexOf("%") ? (S / 100) * w.width : S)),
        (R = w.y + (~(v[1] || v[0]).indexOf("%") ? (R / 100) * w.height : R))),
      i || (i !== !1 && o.smooth)
        ? ((m = S - c),
          (y = R - u),
          (o.xOffset = h + (m * d + y * _) - m),
          (o.yOffset = f + (m * g + y * p) - y))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = S),
      (o.yOrigin = R),
      (o.smooth = !!i),
      (o.origin = t),
      (o.originIsAbsolute = !!n),
      (e.style[$t] = "0px 0px"),
      a &&
        (wi(a, o, "xOrigin", c, S),
        wi(a, o, "yOrigin", u, R),
        wi(a, o, "xOffset", h, o.xOffset),
        wi(a, o, "yOffset", f, o.yOffset)),
      e.setAttribute("data-svg-origin", S + " " + R);
  },
  sa = function (e, t) {
    var n = e._gsap || new Kd(e);
    if ("x" in n && !t && !n.uncache) return n;
    var i = e.style,
      s = n.scaleX < 0,
      a = "px",
      o = "deg",
      l = getComputedStyle(e),
      c = Bn(e, $t) || "0",
      u,
      h,
      f,
      d,
      g,
      _,
      p,
      m,
      y,
      v,
      S,
      R,
      w,
      b,
      P,
      M,
      E,
      L,
      k,
      O,
      K,
      q,
      G,
      j,
      W,
      ie,
      ae,
      ue,
      Ce,
      Ve,
      Y,
      J;
    return (
      (u = h = f = _ = p = m = y = v = S = 0),
      (d = g = 1),
      (n.svg = !!(e.getCTM && up(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (i[lt] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[lt] !== "none" ? l[lt] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (b = yu(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((W = e.getBBox()),
            (c = n.xOrigin - W.x + "px " + (n.yOrigin - W.y) + "px"),
            (j = ""))
          : (j = !t && e.getAttribute("data-svg-origin")),
        Rc(e, j || c, !!j || n.originIsAbsolute, n.smooth !== !1, b)),
      (R = n.xOrigin || 0),
      (w = n.yOrigin || 0),
      b !== ia &&
        ((L = b[0]),
        (k = b[1]),
        (O = b[2]),
        (K = b[3]),
        (u = q = b[4]),
        (h = G = b[5]),
        b.length === 6
          ? ((d = Math.sqrt(L * L + k * k)),
            (g = Math.sqrt(K * K + O * O)),
            (_ = L || k ? Vs(k, L) * is : 0),
            (y = O || K ? Vs(O, K) * is + _ : 0),
            y && (g *= Math.abs(Math.cos(y * tr))),
            n.svg && ((u -= R - (R * L + w * O)), (h -= w - (R * k + w * K))))
          : ((J = b[6]),
            (Ve = b[7]),
            (ae = b[8]),
            (ue = b[9]),
            (Ce = b[10]),
            (Y = b[11]),
            (u = b[12]),
            (h = b[13]),
            (f = b[14]),
            (P = Vs(J, Ce)),
            (p = P * is),
            P &&
              ((M = Math.cos(-P)),
              (E = Math.sin(-P)),
              (j = q * M + ae * E),
              (W = G * M + ue * E),
              (ie = J * M + Ce * E),
              (ae = q * -E + ae * M),
              (ue = G * -E + ue * M),
              (Ce = J * -E + Ce * M),
              (Y = Ve * -E + Y * M),
              (q = j),
              (G = W),
              (J = ie)),
            (P = Vs(-O, Ce)),
            (m = P * is),
            P &&
              ((M = Math.cos(-P)),
              (E = Math.sin(-P)),
              (j = L * M - ae * E),
              (W = k * M - ue * E),
              (ie = O * M - Ce * E),
              (Y = K * E + Y * M),
              (L = j),
              (k = W),
              (O = ie)),
            (P = Vs(k, L)),
            (_ = P * is),
            P &&
              ((M = Math.cos(P)),
              (E = Math.sin(P)),
              (j = L * M + k * E),
              (W = q * M + G * E),
              (k = k * M - L * E),
              (G = G * M - q * E),
              (L = j),
              (q = W)),
            p &&
              Math.abs(p) + Math.abs(_) > 359.9 &&
              ((p = _ = 0), (m = 180 - m)),
            (d = mt(Math.sqrt(L * L + k * k + O * O))),
            (g = mt(Math.sqrt(G * G + J * J))),
            (P = Vs(q, G)),
            (y = Math.abs(P) > 2e-4 ? P * is : 0),
            (S = Y ? 1 / (Y < 0 ? -Y : Y) : 0)),
        n.svg &&
          ((j = e.getAttribute("transform")),
          (n.forceCSS = e.setAttribute("transform", "") || !fp(Bn(e, lt))),
          j && e.setAttribute("transform", j))),
      Math.abs(y) > 90 &&
        Math.abs(y) < 270 &&
        (s
          ? ((d *= -1), (y += _ <= 0 ? 180 : -180), (_ += _ <= 0 ? 180 : -180))
          : ((g *= -1), (y += y <= 0 ? 180 : -180))),
      (t = t || n.uncache),
      (n.x =
        u -
        ((n.xPercent =
          u &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        a),
      (n.y =
        h -
        ((n.yPercent =
          h &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        a),
      (n.z = f + a),
      (n.scaleX = mt(d)),
      (n.scaleY = mt(g)),
      (n.rotation = mt(_) + o),
      (n.rotationX = mt(p) + o),
      (n.rotationY = mt(m) + o),
      (n.skewX = y + o),
      (n.skewY = v + o),
      (n.transformPerspective = S + a),
      (n.zOrigin = parseFloat(c.split(" ")[2]) || (!t && n.zOrigin) || 0) &&
        (i[$t] = So(c)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = cn.force3D),
      (n.renderTransform = n.svg ? kS : lp ? dp : BS),
      (n.uncache = 0),
      n
    );
  },
  So = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  bl = function (e, t, n) {
    var i = Ut(t);
    return mt(parseFloat(t) + parseFloat(Oi(e, "x", n + "px", i))) + i;
  },
  BS = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      dp(e, t);
  },
  es = "0deg",
  Or = "0px",
  ts = ") ",
  dp = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      s = n.yPercent,
      a = n.x,
      o = n.y,
      l = n.z,
      c = n.rotation,
      u = n.rotationY,
      h = n.rotationX,
      f = n.skewX,
      d = n.skewY,
      g = n.scaleX,
      _ = n.scaleY,
      p = n.transformPerspective,
      m = n.force3D,
      y = n.target,
      v = n.zOrigin,
      S = "",
      R = (m === "auto" && e && e !== 1) || m === !0;
    if (v && (h !== es || u !== es)) {
      var w = parseFloat(u) * tr,
        b = Math.sin(w),
        P = Math.cos(w),
        M;
      (w = parseFloat(h) * tr),
        (M = Math.cos(w)),
        (a = bl(y, a, b * M * -v)),
        (o = bl(y, o, -Math.sin(w) * -v)),
        (l = bl(y, l, P * M * -v + v));
    }
    p !== Or && (S += "perspective(" + p + ts),
      (i || s) && (S += "translate(" + i + "%, " + s + "%) "),
      (R || a !== Or || o !== Or || l !== Or) &&
        (S +=
          l !== Or || R
            ? "translate3d(" + a + ", " + o + ", " + l + ") "
            : "translate(" + a + ", " + o + ts),
      c !== es && (S += "rotate(" + c + ts),
      u !== es && (S += "rotateY(" + u + ts),
      h !== es && (S += "rotateX(" + h + ts),
      (f !== es || d !== es) && (S += "skew(" + f + ", " + d + ts),
      (g !== 1 || _ !== 1) && (S += "scale(" + g + ", " + _ + ts),
      (y.style[lt] = S || "translate(0, 0)");
  },
  kS = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      s = n.yPercent,
      a = n.x,
      o = n.y,
      l = n.rotation,
      c = n.skewX,
      u = n.skewY,
      h = n.scaleX,
      f = n.scaleY,
      d = n.target,
      g = n.xOrigin,
      _ = n.yOrigin,
      p = n.xOffset,
      m = n.yOffset,
      y = n.forceCSS,
      v = parseFloat(a),
      S = parseFloat(o),
      R,
      w,
      b,
      P,
      M;
    (l = parseFloat(l)),
      (c = parseFloat(c)),
      (u = parseFloat(u)),
      u && ((u = parseFloat(u)), (c += u), (l += u)),
      l || c
        ? ((l *= tr),
          (c *= tr),
          (R = Math.cos(l) * h),
          (w = Math.sin(l) * h),
          (b = Math.sin(l - c) * -f),
          (P = Math.cos(l - c) * f),
          c &&
            ((u *= tr),
            (M = Math.tan(c - u)),
            (M = Math.sqrt(1 + M * M)),
            (b *= M),
            (P *= M),
            u &&
              ((M = Math.tan(u)),
              (M = Math.sqrt(1 + M * M)),
              (R *= M),
              (w *= M))),
          (R = mt(R)),
          (w = mt(w)),
          (b = mt(b)),
          (P = mt(P)))
        : ((R = h), (P = f), (w = b = 0)),
      ((v && !~(a + "").indexOf("px")) || (S && !~(o + "").indexOf("px"))) &&
        ((v = Oi(d, "x", a, "px")), (S = Oi(d, "y", o, "px"))),
      (g || _ || p || m) &&
        ((v = mt(v + g - (g * R + _ * b) + p)),
        (S = mt(S + _ - (g * w + _ * P) + m))),
      (i || s) &&
        ((M = d.getBBox()),
        (v = mt(v + (i / 100) * M.width)),
        (S = mt(S + (s / 100) * M.height))),
      (M =
        "matrix(" + R + "," + w + "," + b + "," + P + "," + v + "," + S + ")"),
      d.setAttribute("transform", M),
      y && (d.style[lt] = M);
  },
  zS = function (e, t, n, i, s) {
    var a = 360,
      o = wt(s),
      l = parseFloat(s) * (o && ~s.indexOf("rad") ? is : 1),
      c = l - i,
      u = i + c + "deg",
      h,
      f;
    return (
      o &&
        ((h = s.split("_")[1]),
        h === "short" && ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -a)),
        h === "cw" && c < 0
          ? (c = ((c + a * ff) % a) - ~~(c / a) * a)
          : h === "ccw" && c > 0 && (c = ((c - a * ff) % a) - ~~(c / a) * a)),
      (e._pt = f = new Zt(e._pt, t, n, i, c, TS)),
      (f.e = u),
      (f.u = "deg"),
      e._props.push(n),
      f
    );
  },
  xf = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  HS = function (e, t, n) {
    var i = xf({}, n._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      a = n.style,
      o,
      l,
      c,
      u,
      h,
      f,
      d,
      g;
    i.svg
      ? ((c = n.getAttribute("transform")),
        n.setAttribute("transform", ""),
        (a[lt] = t),
        (o = sa(n, 1)),
        xs(n, lt),
        n.setAttribute("transform", c))
      : ((c = getComputedStyle(n)[lt]),
        (a[lt] = t),
        (o = sa(n, 1)),
        (a[lt] = c));
    for (l in oi)
      (c = i[l]),
        (u = o[l]),
        c !== u &&
          s.indexOf(l) < 0 &&
          ((d = Ut(c)),
          (g = Ut(u)),
          (h = d !== g ? Oi(n, l, c, g) : parseFloat(c)),
          (f = parseFloat(u)),
          (e._pt = new Zt(e._pt, o, l, h, f - h, Ac)),
          (e._pt.u = g || 0),
          e._props.push(l));
    xf(o, i);
  };
Kt("padding,margin,Width,Radius", function (r, e) {
  var t = "Top",
    n = "Right",
    i = "Bottom",
    s = "Left",
    a = (e < 3 ? [t, n, i, s] : [t + s, t + n, i + n, i + s]).map(function (o) {
      return e < 2 ? r + o : "border" + o + r;
    });
  Mo[e > 1 ? "border" + r : r] = function (o, l, c, u, h) {
    var f, d;
    if (arguments.length < 4)
      return (
        (f = a.map(function (g) {
          return ti(o, g, c);
        })),
        (d = f.join(" ")),
        d.split(f[0]).length === 5 ? f[0] : d
      );
    (f = (u + "").split(" ")),
      (d = {}),
      a.forEach(function (g, _) {
        return (d[g] = f[_] = f[_] || f[((_ - 1) / 2) | 0]);
      }),
      o.init(l, d, h);
  };
});
var pp = {
  name: "css",
  register: wc,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, i, s) {
    var a = this._props,
      o = e.style,
      l = n.vars.startAt,
      c,
      u,
      h,
      f,
      d,
      g,
      _,
      p,
      m,
      y,
      v,
      S,
      R,
      w,
      b,
      P;
    gu || wc(),
      (this.styles = this.styles || op(e)),
      (P = this.styles.props),
      (this.tween = n);
    for (_ in t)
      if (_ !== "autoRound" && ((u = t[_]), !(sn[_] && Zd(_, t, n, i, e, s)))) {
        if (
          ((d = typeof u),
          (g = Mo[_]),
          d === "function" && ((u = u.call(n, i, e, s)), (d = typeof u)),
          d === "string" && ~u.indexOf("random(") && (u = ea(u)),
          g)
        )
          g(this, e, _, u, n) && (b = 1);
        else if (_.substr(0, 2) === "--")
          (c = (getComputedStyle(e).getPropertyValue(_) + "").trim()),
            (u += ""),
            (Ii.lastIndex = 0),
            Ii.test(c) || ((p = Ut(c)), (m = Ut(u))),
            m ? p !== m && (c = Oi(e, _, c, m) + m) : p && (u += p),
            this.add(o, "setProperty", c, u, i, s, 0, 0, _),
            a.push(_),
            P.push(_, 0, o[_]);
        else if (d !== "undefined") {
          if (
            (l && _ in l
              ? ((c = typeof l[_] == "function" ? l[_].call(n, i, e, s) : l[_]),
                wt(c) && ~c.indexOf("random(") && (c = ea(c)),
                Ut(c + "") ||
                  c === "auto" ||
                  (c += cn.units[_] || Ut(ti(e, _)) || ""),
                (c + "").charAt(1) === "=" && (c = ti(e, _)))
              : (c = ti(e, _)),
            (f = parseFloat(c)),
            (y = d === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
            y && (u = u.substr(2)),
            (h = parseFloat(u)),
            _ in On &&
              (_ === "autoAlpha" &&
                (f === 1 && ti(e, "visibility") === "hidden" && h && (f = 0),
                P.push("visibility", 0, o.visibility),
                wi(
                  this,
                  o,
                  "visibility",
                  f ? "inherit" : "hidden",
                  h ? "inherit" : "hidden",
                  !h
                )),
              _ !== "scale" &&
                _ !== "transform" &&
                ((_ = On[_]), ~_.indexOf(",") && (_ = _.split(",")[0]))),
            (v = _ in oi),
            v)
          ) {
            if (
              (this.styles.save(_),
              S ||
                ((R = e._gsap),
                (R.renderTransform && !t.parseTransform) ||
                  sa(e, t.parseTransform),
                (w = t.smoothOrigin !== !1 && R.smooth),
                (S = this._pt =
                  new Zt(this._pt, o, lt, 0, 1, R.renderTransform, R, 0, -1)),
                (S.dep = 1)),
              _ === "scale")
            )
              (this._pt = new Zt(
                this._pt,
                R,
                "scaleY",
                R.scaleY,
                (y ? Qs(R.scaleY, y + h) : h) - R.scaleY || 0,
                Ac
              )),
                (this._pt.u = 0),
                a.push("scaleY", _),
                (_ += "X");
            else if (_ === "transformOrigin") {
              P.push($t, 0, o[$t]),
                (u = OS(u)),
                R.svg
                  ? Rc(e, u, 0, w, 0, this)
                  : ((m = parseFloat(u.split(" ")[2]) || 0),
                    m !== R.zOrigin && wi(this, R, "zOrigin", R.zOrigin, m),
                    wi(this, o, _, So(c), So(u)));
              continue;
            } else if (_ === "svgOrigin") {
              Rc(e, u, 1, w, 0, this);
              continue;
            } else if (_ in hp) {
              zS(this, R, _, f, y ? Qs(f, y + u) : u);
              continue;
            } else if (_ === "smoothOrigin") {
              wi(this, R, "smooth", R.smooth, u);
              continue;
            } else if (_ === "force3D") {
              R[_] = u;
              continue;
            } else if (_ === "transform") {
              HS(this, u, e);
              continue;
            }
          } else _ in o || (_ = xr(_) || _);
          if (v || ((h || h === 0) && (f || f === 0) && !SS.test(u) && _ in o))
            (p = (c + "").substr((f + "").length)),
              h || (h = 0),
              (m = Ut(u) || (_ in cn.units ? cn.units[_] : p)),
              p !== m && (f = Oi(e, _, c, m)),
              (this._pt = new Zt(
                this._pt,
                v ? R : o,
                _,
                f,
                (y ? Qs(f, y + h) : h) - f,
                !v && (m === "px" || _ === "zIndex") && t.autoRound !== !1
                  ? AS
                  : Ac
              )),
              (this._pt.u = m || 0),
              p !== m && m !== "%" && ((this._pt.b = c), (this._pt.r = ES));
          else if (_ in o) US.call(this, e, _, c, y ? y + u : u);
          else if (_ in e) this.add(e, _, c || e[_], y ? y + u : u, i, s);
          else if (_ !== "parseTransform") {
            lu(_, u);
            continue;
          }
          v || (_ in o ? P.push(_, 0, o[_]) : P.push(_, 1, c || e[_])),
            a.push(_);
        }
      }
    b && np(this);
  },
  render: function (e, t) {
    if (t.tween._time || !xu())
      for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
    else t.styles.revert();
  },
  get: ti,
  aliases: On,
  getSetter: function (e, t, n) {
    var i = On[t];
    return (
      i && i.indexOf(",") < 0 && (t = i),
      t in oi && t !== $t && (e._gsap.x || ti(e, "x"))
        ? n && hf === n
          ? t === "scale"
            ? CS
            : RS
          : (hf = n || {}) && (t === "scale" ? PS : LS)
        : e.style && !ru(e.style[t])
        ? bS
        : ~t.indexOf("-")
        ? wS
        : mu(e, t)
    );
  },
  core: { _removeProperty: xs, _getMatrix: yu },
};
Jt.utils.checkPrefix = xr;
Jt.core.getStyleSaver = op;
(function (r, e, t, n) {
  var i = Kt(r + "," + e + "," + t, function (s) {
    oi[s] = 1;
  });
  Kt(e, function (s) {
    (cn.units[s] = "deg"), (hp[s] = 1);
  }),
    (On[i[13]] = r + "," + e),
    Kt(n, function (s) {
      var a = s.split(":");
      On[a[1]] = i[a[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Kt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (r) {
    cn.units[r] = "px";
  }
);
Jt.registerPlugin(pp);
var Cc = Jt.registerPlugin(pp) || Jt;
Cc.core.Tween;
const mn = document.getElementById("scene");
let nr = 0.5;
const Mu = document.querySelector("body .ui");
let VS = Mu.querySelectorAll("div");
VS.forEach((r) => {
  r.addEventListener("click", JS);
});
let Fi = !1;
const GS = document.getElementById("debugger"),
  WS = GS.querySelector("#cameraZoom");
let Lt, kn;
const li = new Jv(),
  on = new Ht(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
on.position.set(-70, 20, 55);
on.lookAt(0, 0, 0);
const Mn = new eu(16777215, 0);
Mn.position.set(0, 30, 0);
Mn.angle = Math.PI / 6;
Mn.castShadow = !0;
Mn.lookAt(0, 0, 0);
Mn.shadow.bias = -1e-4;
Mn.penumbra = 0.5;
Mn.distance = 50;
Mn.decay = 0.3;
const Bi = new eu(16777215, 0);
Bi.position.set(-10, 2, 0);
Bi.lookAt(0, 2, 0);
Bi.angle = Math.PI / 6;
Bi.distance = 20;
Bi.penumbra = 0.4;
const fa = new tu(16777215, 10);
fa.position.set(-65, 20, 50);
fa.castShadow = !1;
fa.shadow.bias = -1e-4;
fa.distance = 10;
const da = new tu(16777215, 10);
da.position.set(-68, 19, 50);
da.castShadow = !0;
da.shadow.bias = -0.01;
da.distance = 10;
let ra = new nt();
const ds = (r) => new Promise((e) => setTimeout(e, r));
li.add(Mn, Bi, fa, da);
const Hi = new $v({ canvas: mn });
Hi.setSize(window.innerWidth, window.innerHeight, !1);
Hi.setPixelRatio(window.devicePixelRatio);
Hi.shadowMap.enabled = !0;
Hi.shadowMap.type = Cp;
const Er = new Ry();
on.add(Er);
const Pc = new ua(Er),
  os = new Py(Er),
  Yr = new ua(Er),
  Di = new ua(Er),
  ir = new ua(Er),
  pa = new by().setPath("sounds/");
pa.load("switch.wav", (r) => {
  Pc.setBuffer(r), Pc.setVolume(0.2);
});
pa.load("light buzz.wav", (r) => {
  os.setBuffer(r), os.setRefDistance(10), os.setVolume(1), (os.loop = !0);
});
pa.load("runrabbit.mp3", (r) => {
  Yr.setBuffer(r), Yr.setVolume(0.05), (Yr.loop = !0);
});
pa.load("voices.wav", (r) => {
  Di.setBuffer(r), Di.setVolume(0.05), (Di.loop = !0);
});
pa.load("stun.wav", (r) => {
  ir.setBuffer(r), ir.setVolume(0.1), (ir.loop = !0);
});
let XS = new Zc(5, 10, 5),
  qS = new Si({ visible: !1 });
const Su = new qt(XS, qS);
Su.position.set(0, 20, 0);
li.add(Su);
Su.add(os);
let mp = new Ti(),
  vr,
  Lc = [];
const _p = new Xy().setPath("glbs/");
_p.load("new-scene.glb", (r) => {
  const e = r.scene;
  e.position.set(0, 0, 0),
    e.scale.set(nr + 0.1, nr + 0.1, nr + 0.1),
    (e.rotation.y = (90 * Math.PI) / 180),
    e.traverse((t) => {
      t.isMesh && ((t.castShadow = !0), (t.receiveShadow = !0)),
        t.name === "Cube010" && Lc.push(t),
        (Lt = new Gy(e)),
        (kn = r.animations);
    }),
    (ra = e),
    li.add(ra);
});
_p.load("pilar.glb", (r) => {
  const e = r.scene;
  e.position.set(-71, 11, 44),
    e.scale.set(nr, nr, nr),
    e.rotateY(-1),
    (mp = e),
    e.traverse((t) => {
      t.name === "switch" && (vr = t),
        t.isMesh && ((t.castShadow = !0), (t.receiveShadow = !0));
    }),
    li.add(e);
});
const tt = new wM(on, Hi.domElement);
tt.enablePan = !1;
tt.maxPolarAngle = Math.PI / 2 + 0.1;
tt.minPolarAngle = 1;
tt.minDistance = 15;
tt.maxDistance = 91;
tt.rotateSpeed = 0.3;
tt.enableZoom = !1;
tt.enableRotate = !1;
let aa = !1;
function vf(r) {
  (tt.enableZoom = r),
    (aa = r),
    r === !1
      ? ((Mn.intensity = 0), (Bi.intensity = 0))
      : r === !0 && ((Mn.intensity = 1), (Bi.intensity = 15));
}
const YS = new dd();
let Do = !1,
  yf = !1,
  To = !1,
  gp = !1;
const Mf = document.querySelector(".subtitles #text");
let wl = 2;
const ps = document.querySelector(".subtitles #samuel"),
  xp = document.querySelector(".subtitles #fishVoice"),
  jS = document.querySelector(".subtitles #happy"),
  KS = document.querySelector(".subtitles #cumple");
ps.textTracks[0].oncuechange = function () {
  if (this.activeCues.length == 0) {
    Tf.querySelector("#text").textContent = "";
    return;
  }
  Tf.querySelector("#text").textContent = this.activeCues[0].text;
};
xp.textTracks[0].oncuechange = function () {
  if (this.activeCues.length == 0) {
    Mf.textContent = "";
    return;
  }
  (tt.minDistance = tt.minDistance - wl),
    (tt.maxDistance = tt.minDistance - wl),
    (wl += 0.5),
    (Mf.textContent = this.activeCues[0].text);
};
ps.stop = () => {
  ps.pause(), (ps.currentTime = 0);
};
const Eo = document.querySelector(".note"),
  Rl = Eo.querySelector("#scream"),
  Sf = document.querySelector(".shitpost");
Eo.querySelector("#close").addEventListener("click", async () => {
  yf == !1 &&
    ((Fi = !0),
    Rl.classList.toggle("hidden"),
    Rl.play(),
    await ds(2500),
    (yf = !0),
    Rl.classList.toggle("hidden")),
    Eo.classList.toggle("hidden"),
    (Fi = !1);
});
function ZS() {
  let r = li.getObjectByName("switch-button");
  Pc.play(),
    Mn.intensity === 0
      ? (vf(!0), (r.rotation.z = (-60 * Math.PI) / 180), (aa = !0), os.play())
      : (vf(!1), (r.rotation.z = (60 * Math.PI) / 180), (aa = !1), os.pause());
}
let ja;
const Tf = document.querySelector(".subtitles");
function vp(r) {
  if ((Mu.classList.toggle("hide"), r === !1)) {
    (To = !1),
      Di.stop(),
      Cc.to(on.position, { x: ja.x, y: ja.y, z: ja.z, duration: 0.4 });
    return;
  }
  (Fi = !0),
    $S(),
    (To = !0),
    Di.play(),
    (ja = new D(on.position.x, on.position.y, on.position.z)),
    (mn.style.cursor = "auto"),
    Cc.to(on.position, { x: -10, y: 1, z: 0, duration: 0.4 }),
    (tt.enableRotate = !1),
    (tt.enableZoom = !1);
}
async function $S() {
  Do == !0 || Fi == !1 || ps.play();
}
async function JS(r) {
  if (r.target.id == "open") {
    ps.stop(),
      eT(),
      Mu.classList.toggle("hide"),
      (Do = !0),
      Yr.stop(),
      ir.play(),
      (tt.maxDistance = 1 / 0);
    let e = Di.getVolume();
    for (e; e < 1; e += 0.05) Di.setVolume(e), ir.setVolume(e), await ds(350);
    vr = ra.getObjectByName("regalo-cuerpo");
  } else (tt.enableRotate = !0), (tt.enableZoom = !0), vp(!1), ps.stop();
  Fi = !1;
}
function QS() {
  const r = Cn.findByName(kn, "KeyAction"),
    e = Lt.clipAction(r);
  e.setLoop(Pi),
    (e.clampWhenFinished = !0),
    e.play(),
    (vr = ra.getObjectByName("regalo-cuerpo"));
}
function eT() {
  const r = Cn.findByName(kn, "regalo-tapaAction"),
    e = Cn.findByName(kn, "regalo-tapaFall");
  let t = Lt.clipAction(r),
    n = Lt.clipAction(e);
  t.setLoop(Pi),
    (t.clampWhenFinished = !0),
    t.setDuration(5),
    (n.blendMode = ls),
    n.setLoop(Pi),
    (n.clampWhenFinished = !0),
    n.setDuration(2.5);
  function i(s, a) {
    let o = s.action.getClip().name;
    if ((console.log(kn), o == "regalo-tapaAction")) {
      t.stop(), n.play();
      return;
    }
    o == "regalo-tapaAction2" && Lt.removeEventListener("finished", i);
  }
  Lt.addEventListener("finished", i), t.play();
}
function tT(r) {
  const e = Cn.findByName(kn, "FishDance"),
    t = new Ey(16777215, 0.1);
  let n = Lt.clipAction(e);
  (r.enabled = !1),
    (To = !1),
    (tt.enableRotate = !0),
    (tt.enableZoom = !0),
    (tt.minPolarAngle = 0),
    (Fi = !1),
    (gp = !0),
    Sf.classList.remove("hide"),
    Sf.querySelectorAll("video").forEach((i) => {
      i.play();
    }),
    Hi.setClearColor("#739EBF"),
    (li.backgroundIntensity = 0.5),
    li.add(t),
    (tt.minDistance = 15),
    (tt.maxDistance = 91),
    n.setLoop(kf),
    n.play(),
    jS.play();
}
function nT(r) {
  const e = Cn.findByName(kn, "FelizCum");
  let t = Lt.clipAction(e);
  t.setLoop(Pi),
    t.play(),
    Di.stop(),
    ir.stop(),
    KS.play(),
    Lt.addEventListener("finished", (n) => {
      n.action._clip.name == "FelizCum" && ((t.enabled = !1), t.stop(), tT(r));
    });
}
function iT() {
  const r = Cn.findByName(kn, "FishMove"),
    e = Cn.findByName(kn, "FishHeadMove"),
    t = Cn.findByName(kn, "FishVoiceTalk"),
    n = ["FishMove", "FishHeadMove", "FishVoiceTalk"],
    i = [r, e, t];
  Fi = !0;
  let s = Lt.clipAction(r),
    a = Lt.clipAction(t);
  s.setLoop(Pi),
    (s.clampWhenFinished = !0),
    Lt.addEventListener("finished", async (o, l) => {
      let c = o.action._clip.name;
      if (n.includes(c)) {
        let u = n.indexOf(c);
        if (u + 1 > n.length - 1) {
          await ds(2e3), s.stop(), a.stop();
          let h = Lt.clipAction(r);
          Lt.removeEventListener("finished", this), nT(h);
          return;
        }
        if (n[u + 1] == "FishVoiceTalk") {
          s.stop(),
            a.setLoop(Pi),
            (a.clampWhenFinished = !0),
            xp.play(),
            a.play();
          return;
        } else
          (s = Lt.clipAction(i[u + 1])),
            s.setLoop(Pi),
            (s.clampWhenFinished = !0);
        s.play();
      }
    }),
    s.play();
}
let Ka = new Wy(),
  Cl = new Me();
function sT(r) {
  var e = r.name;
  switch (e) {
    case "switch":
      ZS();
      break;
    case "wrap":
      QS();
      break;
    case "regalo-cuerpo":
      if (Do == !1) {
        vp(!0);
        break;
      }
      iT();
      break;
    case "Cube010":
      Eo.classList.toggle("hidden");
      break;
  }
}
function yp(r) {
  if ((r.preventDefault(), Fi === !0)) {
    mn.style.cursor = "auto";
    return;
  }
  if (
    ((Cl.x = (r.clientX / mn.clientWidth) * 2 - 1),
    (Cl.y = -(r.clientY / mn.clientHeight) * 2 + 1),
    Ka.setFromCamera(Cl, on),
    gp == !0)
  )
    var e = Ka.intersectObjects([...Lc], !1);
  else if (To == !1) var e = Ka.intersectObjects([vr, ...Lc], !1);
  else var e = Ka.intersectObject(vr, !1);
  if (e.length > 0)
    e[0].object.name == "regalo-cuerpo" && Do == !1
      ? (mn.style.cursor = "help")
      : (mn.style.cursor = "pointer"),
      r.type === "mousedown" && sT(e[0].object);
  else {
    if (mn.style.cursor === "auto") return;
    mn.style.cursor = "auto";
  }
}
mn.addEventListener("mousemove", yp);
mn.addEventListener("mousedown", yp);
function rT() {
  const r = mn,
    e = r.clientWidth,
    t = r.clientHeight;
  (r.width !== e || r.height !== t) &&
    (Hi.setSize(e, t, !1), (on.aspect = e / t), on.updateProjectionMatrix());
}
function Mp() {
  requestAnimationFrame(Mp), tt.update(), Lt && Lt.update(YS.getDelta());
  let r = tt.getDistance().toFixed(0);
  (WS.textContent = `Camera Zoom: ${r}`),
    aa == !0 &&
      parseInt(r) <= 82 &&
      (li.remove(mp),
      (vr = ra.getObjectByName("wrap")),
      (tt.enableRotate = !0),
      (aa = !1)),
    rT(),
    Hi.render(li, on);
}
Mp();
const Gs = document.querySelector(".wrapper"),
  Ef = document.querySelector(".resume"),
  aT = document.querySelector(".wrapper .welcome"),
  Sp = document.querySelector("#debugger"),
  oT = Sp.querySelector("#scroll"),
  lT = Sp.querySelector("#window"),
  Af = document.getElementById("name");
Gs.addEventListener("scroll", (r) => {
  (oT.textContent = Gs.scrollTop),
    (lT.textContent = `window height ${document.body.clientHeight}`),
    Gs.scrollTop >= document.body.clientHeight * 2 &&
      (Gs.classList.add("reached-final"), Yr.play());
  let e = document.body.clientHeight;
  Gs.scrollTop >= e
    ? Ef.classList.add("passed")
    : Gs.scrollTop <= e && Ef.classList.remove("passed");
});
const cT = async () => {
  await ds(3e3);
  for (let r = 20; r < 2e3; r *= 1.8)
    (Af.textContent = "Samulín!"),
      await ds(r),
      (Af.textContent = "Niknasa!"),
      await ds(r);
};
document.addEventListener("DOMContentLoaded", async () => {
  await ds(350), aT.classList.remove("hidden");
});
cT();
