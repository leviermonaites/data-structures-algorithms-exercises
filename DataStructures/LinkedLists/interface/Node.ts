interface Node {
  data: unknown;
  next: Node | null | undefined;
  prev?: Node | null | undefined;
}

export default Node;