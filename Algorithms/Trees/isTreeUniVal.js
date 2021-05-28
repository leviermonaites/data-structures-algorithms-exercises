const isTreeUnival = (root) => {
    if(!root) return true;
    if(!root.right && !root.left) return true;
    if(root.right.data !== root.data || root.left.data !== root.data) return false; 
    return isTreeUnival(root.left) && isTreeUnival(root.right);
};

export default isTreeUnival;