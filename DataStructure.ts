interface DataStructure {
  elements: Array<unknown> | Record<string, unknown>;
  add(data: unknown): boolean;
  remove(data: unknown): boolean;
  contains(data: unknown): boolean;
  clear(): boolean;
  toArray(): Array<unknown>;
  toString(): string;
}