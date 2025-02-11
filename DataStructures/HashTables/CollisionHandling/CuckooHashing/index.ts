import { getNextPrime } from '../../../../Algorithms/PrimeNumber/get-next-prime';

export type CuckooHashingRecord<T extends Record<string | number, unknown> = {}> = T & {
  key: number;
  pos1: number;
  pos2: number;
};

export type HashAlgorithm = (key: number, tableSize: number) => number;

export default class CuckooHashing {
  table: (CuckooHashingRecord | null)[] = [];

  constructor(
    private hashAlg1: HashAlgorithm,
    private hashAlg2: HashAlgorithm,
    private _tableSize: number = 13,
    private _displacementThreshold: number = 5
  ) {
    this.table = new Array(_tableSize);
  }

  get tableSize() {
    return this._tableSize;
  }

  async save(record: Pick<CuckooHashingRecord, 'key'>): Promise<void> {
    const pos1 = this.hashAlg1(record.key, this.tableSize);
    const pos2 = this.hashAlg2(record.key, this.tableSize);

    const recordWithPos = {
      ...record,
      pos1,
      pos2
    }

    const existingRecord = this.table[pos1];
    if (existingRecord && existingRecord.key !== record.key) {
      this.displace(recordWithPos, existingRecord);
      return;
    }

    this.table[pos1] = recordWithPos;
  }

  private displace(
    recordToInsert: CuckooHashingRecord,
    recordToBeDisplaced: CuckooHashingRecord,
    _currentDisplacement: number = 1
  ) {
    let currentDisplacement = _currentDisplacement;
    let altBucketForRecordToBeDisplaced = recordToBeDisplaced.pos2;

    if (currentDisplacement > this._displacementThreshold) {
      this.rehash();
      altBucketForRecordToBeDisplaced = this.hashAlg2(recordToBeDisplaced.pos2, this.tableSize);
      currentDisplacement = 1;
    }

    this.table[recordToInsert.pos1] = recordToInsert;

    const recordAtRecordToBeDisplacedAltBucket = this.table[altBucketForRecordToBeDisplaced];
    if (!recordAtRecordToBeDisplacedAltBucket) {
      this.table[altBucketForRecordToBeDisplaced] = recordToBeDisplaced;
      return;
    }

    this.displace(recordToBeDisplaced, recordAtRecordToBeDisplacedAltBucket, currentDisplacement + 1);
  }

  private rehash() {
    const newTableSize = getNextPrime(this.tableSize);
    const newTable = new Array(newTableSize);
    newTable.push(...this.table);

    this._tableSize = newTableSize;
    this.table = newTable;
  }

  find<T extends Record<string | number, unknown>>(key: number): CuckooHashingRecord<T> | null {
    const pos1 = this.hashAlg1(key, this.tableSize);
    const pos2 = this.hashAlg2(key, this.tableSize);

    const recordAtPos1 = this.table[pos1];
    if (recordAtPos1?.key === key) return recordAtPos1 as CuckooHashingRecord<T>;

    const recordAtPos2 = this.table[pos2];
    return (recordAtPos2 as CuckooHashingRecord<T>) ?? null
  }

  delete(key: number) {
    const pos1 = this.hashAlg1(key, this.tableSize);
    const recordAtPos1 = this.table[pos1];
    if (recordAtPos1?.key === key) {
      this.table[pos1] = null;
      return;
    }

    const pos2 = this.hashAlg2(key, this.tableSize);
    const recordAtPos2 = this.table[pos2];
    if (recordAtPos2?.key === key) this.table[pos2] = null
  }
}