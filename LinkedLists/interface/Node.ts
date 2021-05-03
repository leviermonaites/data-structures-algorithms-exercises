interface Node {
  data: any;
  next: Node | null;
  prev?: Node | null;
}

export default Node;