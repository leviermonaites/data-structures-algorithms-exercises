const isTreeUniVal = (root) => {
    if(!root) return true;
    if(!root.right && !root.left) return true;
    if(root.right.data !== root.data || root.left.data !== root.data) return false; 
    return isTreeUniVal(root.left) && isTreeUniVal(root.right);
};

export default isTreeUniVal;