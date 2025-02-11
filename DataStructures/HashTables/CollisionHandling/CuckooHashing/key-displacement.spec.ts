import { describe, expect, it, vitest } from 'vitest';
import CuckooHashing from '.';

describe('CuckooHashing - finding existing key after its displacement', () => {
  const hashAlg1 = vitest.fn().mockReturnValue(5);
  const hashAlg2 = vitest.fn().mockReturnValue(9);
  const cuckooHashing = new CuckooHashing(hashAlg1, hashAlg2);

  it('should insert the new key and still find the key that was displaced for the new key', async () => {
    const displacedRecordKey = 4;
    const displacedRecord = { key: displacedRecordKey, value: 'hey-i-am-displaced-record' };

    const newRecordKey = 7;
    const newRecord = { key: newRecordKey, value: 'hey-i-am-the-new-record' };

    await cuckooHashing.save(displacedRecord);
    await cuckooHashing.save(newRecord);

    const foundDisplacedRecord = cuckooHashing.find(displacedRecordKey);
    const foundNewRecord = cuckooHashing.find(newRecordKey);

    const displacedRecordIndex = cuckooHashing.table.findIndex((r) => r?.key === displacedRecordKey);
    const newRecordIndex = cuckooHashing.table.findIndex((r) => r?.key === newRecordKey);

    expect(foundDisplacedRecord).toMatchObject(displacedRecord);
    expect(foundNewRecord).toMatchObject(newRecord);
    expect(displacedRecordIndex).toBe(9);
    expect(newRecordIndex).toBe(5);
  });
})