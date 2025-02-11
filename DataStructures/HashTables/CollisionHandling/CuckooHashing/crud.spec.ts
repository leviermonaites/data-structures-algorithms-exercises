import { describe, expect, it, vitest } from 'vitest';
import CuckooHashing from '.';

describe('Cuckoo Hashing - Basic CRUD for single key', () => {
  const hashAlg1 = vitest.fn().mockReturnValue(1);
  const hashAlg2 = vitest.fn().mockReturnValue(5);
  const cuckooHashing = new CuckooHashing(hashAlg1, hashAlg2);

  it('should be able to make CRUD operations for a given key and keep the table size the same', async () => {
    const originalTableSize = cuckooHashing.tableSize;
    const key = 3;
    const originalObjBeforeInsert = { key, value: { test: 'a' } };
    const updatedObjBeforeUpdate = { key, value: { test: 'b' } };

    await cuckooHashing.save(originalObjBeforeInsert);

    const foundObjectAfterInsert = cuckooHashing.find(key);

    await cuckooHashing.save(updatedObjBeforeUpdate);

    const foundObjectAfterUpdate = cuckooHashing.find(key);

    cuckooHashing.delete(key);

    const foundObjectAfterDelete = cuckooHashing.find(key);

    expect(foundObjectAfterInsert).toMatchObject(originalObjBeforeInsert);
    expect(foundObjectAfterUpdate).toMatchObject(updatedObjBeforeUpdate);
    expect(foundObjectAfterDelete).toBe(null);
    expect(cuckooHashing.tableSize).toBe(originalTableSize);
  });
});