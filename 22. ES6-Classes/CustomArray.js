class CustomArray{
    constructor(...elements){
        this.size = elements.length;
        for(let i=0; i<elements.length; i++){
            this[i] = elements[i]
        }
    }
    push(element){
        this[this.size] = element;
        this.size++;
    }
    pop(){
        delete this[this.size-1];
        this.size--;
    }
    top(){
        console.log(this[this.size-1])
    }
    print(){
        let newArr = [];
        for(let i=0; i<this.size; i++){
            newArr.push(this[i])
        }
        console.log(newArr)
    }
    printReverse(){
        let newArr = [];
        for(let i=this.size-1; i>=0; i--){
            newArr.push(this[i]);
        }
        console.log(newArr)
    }
}

const arr = new CustomArray(1,2,3,4,76);
console.log(arr)
arr.pop()
arr.push(43)
arr.print()
arr.printReverse()
console.log(arr.size)