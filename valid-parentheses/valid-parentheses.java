class Solution {
    public boolean isValid(String s) {
        // List<Integer> list=new ArrayList<Integer>();
        // List<Integer> llist=new LinkedList<Integer>();
        Stack<Character> stack = new Stack<Character>();
        HashMap<Character, Character> parens = new HashMap<Character, Character>();
        
        parens.put('(', ')');
        parens.put('[', ']');
        parens.put('{', '}');
        
        for(int i = 0; i < s.length(); i++) {
            if(parens.containsKey(s.charAt(i))) {
                stack.add(s.charAt(i));
            } else {
                if(stack.isEmpty()) {
                    return false;
                } else if (s.charAt(i) != parens.get(stack.pop())){
                    return false;
                }
            }
        }
        
        return stack.isEmpty();
    }
}