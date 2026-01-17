class TrieNode{
    
    public isEndOfWord: boolean;
    public children: Map<string, TrieNode>;
    
    constructor(){
        
        this.isEndOfWord = false;
        this.children = new Map();
        
    }
}

class Trie {
    
    public root: TrieNode;
    
    constructor() {
        
        this.root = new TrieNode()
        
    }

    insert(word: string): void {


      //apple

        let current = this.root;
        
        for(const letter of word){
            
            //console.log(letter)
            
            if(current.children.has(letter)){
                current = current.children.get(letter) ?? new TrieNode()
            }
            else{
                const newNode = new TrieNode();
                current.children.set(letter,newNode);
                current = newNode;
            }
            
        }

        current.isEndOfWord= true
        
    }

    search(word: string): boolean {

        let current = this.root;
        
        for(const letter of word){
            
            if(current.children.has(letter)){
                current = current.children.get(letter) ?? new TrieNode()
            }
            else{
                return false;
            }
            
        }

        return current.isEndOfWord
        
        
    }

    startsWith(prefix: string): boolean {

        let current = this.root;
        
        for(const letter of prefix){
            
            if(current.children.has(letter)){
                current = current.children.get(letter) ?? new TrieNode()
            }
            else{
                return false;
            }
            
        }

        return true
        
    }
}


 //Your Trie object will be instantiated and called as such:
 var obj = new Trie()
 obj.insert("apple")
 obj.insert("tomato")
 var param2 = obj.search("apple")
 var param3 = obj.startsWith("app")
 
 var param4 = obj.search("tomat")
 var param5 = obj.startsWith("tom")
 
 var param6 = obj.startsWith("apt")
 
 console.log(param2, param3) // true, true

 console.log(param4, param5) // false, true

 console.log(param6) // false
