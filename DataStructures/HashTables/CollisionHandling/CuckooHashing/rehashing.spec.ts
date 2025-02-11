import { describe, it, expect, vitest, beforeAll } from 'vitest';
import CuckooHashing from '.';
import { getNextPrime } from '../../../../Algorithms/PrimeNumber/get-next-prime';

describe('CuckooHashing Rehashing - when an insert displaces too many keys', () => {
  const originalTableSize = 13;
  const displacementThreshold = 2;

  const hashAlg1 = vitest
    .fn()
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(5)
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(9);

  const hashAlg2 = vitest
    .fn()
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(5)
    .mockReturnValueOnce(7)
    .mockReturnValueOnce(9)
    .mockReturnValueOnce(11);

  const cuckooHashing = new CuckooHashing(hashAlg1, hashAlg2, originalTableSize, displacementThreshold);

  cuckooHashing.save({ key: 1 });
  const tableSizeAfter1Insertion = cuckooHashing.tableSize;

  cuckooHashing.save({ key: 2 });
  const tableSizeAfter2Insertion = cuckooHashing.tableSize;

  cuckooHashing.save({ key: 3 });
  const tableSizeAfter3Insertion = cuckooHashing.tableSize

  cuckooHashing.save({ key: 4 });
  const tableSizeAfter4Insertion = cuckooHashing.tableSize

  it('should increase the table size to the next prime number', () => {
    expect(cuckooHashing.tableSize).toBe(getNextPrime(originalTableSize));
  });

  it('should only increase the table size after the insert that exceeds the displacement threshold', () => {
    expect(tableSizeAfter1Insertion).toBe(originalTableSize);
    expect(tableSizeAfter2Insertion).toBe(originalTableSize);
    expect(tableSizeAfter3Insertion).toBe(originalTableSize);
    expect(tableSizeAfter4Insertion).not.toBe(originalTableSize);
  })
})