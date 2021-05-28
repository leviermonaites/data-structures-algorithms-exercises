import Chaining from "./Chaining.js";
import DoubleHashing from "./DoubleHashing.js";

class HashFunctionBuilder {
  constructor(hashFnType) {
    return this.build(hashFnType);
  }

  build(hashFnType) {
    switch (hashFnType) {
      case "chaining": {
        return new Chaining();
      }

      case "doubleHashing": {
        return new DoubleHashing();
      }
    }
  }
}

export default HashFunctionBuilder;
