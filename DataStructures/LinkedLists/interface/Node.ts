interface Node {
  data: unknown;
  next: Node | null;
  prev?: Node | null;
}

export default Node;