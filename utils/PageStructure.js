import { v4 as uuid } from 'uuid';

export default class PageStructure {
  constructor({ type = null, structures = [] } = {}) {
    this.structures = structures;
    this.key = uuid();
    this.type = type;
  }

  withoutKey() {
    const withoutKey = { ...this };
    delete withoutKey.key;
    return withoutKey;
  }
}
