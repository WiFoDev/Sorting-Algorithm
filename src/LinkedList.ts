import {  Sorter } from "./Sorter";

class Node {
    next: Node | null;
    constructor(public data: number){
        this.next = null
    }
}

export class LinkedList extends Sorter{

    head: Node | null = null;

    get length(): number{
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let current = this.head
        
        while (current.next){  
            current = current.next
            length++
        }

        return length
    }

    add(data: number): void {
        const node = new Node(data)

        if(!this.head){
            this.head = node;
            return;
        }

        let tail = this.head
        while(tail.next){
            tail = tail.next
        }
        tail.next = node;
    }

    at(index: number): Node {
        if (!this.head) throw new Error('Index out of bounds')

        let node: Node | null = this.head
        let counter = 0

        while (node){
            if( index === counter) return node
            node = node.next
            counter++
        }
        throw new Error('Index out of bounds')
    }


    compare(leftIndex: number, rightIndex: number): boolean {
        if(!this.head) throw new Error('Linked List is empty')
        return this.at(leftIndex).data > this.at(rightIndex).data
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex)
        const rightNode = this.at(rightIndex)
        const leftHand = leftNode.data
        leftNode.data = rightNode.data
        rightNode.data = leftHand
    }

    print(): void{
        if(!this.head){
            console.log('There is no data to print out')
            return;
        }
        let node: Node | null = this.head
        while (node){
            console.log(node.data)
            node = node.next
        }
    }

}