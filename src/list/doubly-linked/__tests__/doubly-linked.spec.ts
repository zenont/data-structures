import { DoublyLinkedList } from '../doubly-linked'

describe('doubly linked List', () => {
	it('should create', () => {
		const seed = 1
		const linkedList = DoublyLinkedList.of(seed)

		expect(linkedList).toMatchSnapshot()
	})

	it('should create from array', () => {
		const linkedList = DoublyLinkedList.of(1, 2, 3, 4, 5)
		expect(linkedList).toMatchSnapshot()
	})

	it('should create empty', () => {
		const linkedList = DoublyLinkedList.of()
		expect(linkedList).toMatchSnapshot()
	})

	it('should push one', () => {
		const seed = 1
		const linkedList = DoublyLinkedList.of(seed)
		const created = linkedList.push(2)

		expect(linkedList).toMatchSnapshot()
	})

	it('should push many', () => {
		const seed = 1
		const linkedList = DoublyLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)

		expect(linkedList).toMatchSnapshot()
	})

	it('should remove middle', () => {
		const seed = 1
		const linkedList = DoublyLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		const toRemove = linkedList.tail()
		linkedList.push(4)
		linkedList.push(5)

		linkedList.remove(toRemove)
		expect(linkedList).toMatchSnapshot()
	})

	it('should remove head', () => {
		const seed = 1
		const linkedList = DoublyLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)
		const toRemove = linkedList.head()

		linkedList.remove(toRemove!)
		expect(linkedList).toMatchSnapshot()
	})

	it('should remove tail', () => {
		const seed = 1
		const linkedList = DoublyLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)
		const toRemove = linkedList.tail()

		linkedList.remove(toRemove!)
		expect(linkedList).toMatchSnapshot()
	})

	it('should remove all items', () => {
		const seed = 1
		const linkedList = DoublyLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		let toRemove = linkedList.tail()
		linkedList.remove(toRemove!)
		toRemove = linkedList.tail()
		linkedList.remove(toRemove!)
		toRemove = linkedList.tail()
		linkedList.remove(toRemove!)
		expect(linkedList).toMatchSnapshot()
	})

	it('should pop item', () => {
		const seed = 1
		const linkedList = DoublyLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)
		const popped = linkedList.pop()
		expect(popped).toMatchSnapshot()
		expect(linkedList).toMatchSnapshot()
	})

	it('should pop all items', () => {
		const seed = 1
		const linkedList = DoublyLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)
		let popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		expect(popped).toMatchSnapshot()
		expect(linkedList).toMatchSnapshot()
	})

	it('should over pop', () => {
		const seed = 1
		const linkedList = DoublyLinkedList.of(seed)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)
		let popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		popped = linkedList.pop()
		expect(popped).toMatchSnapshot()
		expect(linkedList).toMatchSnapshot()
	})

	it('should return true for head', () => {
		const seed = 1
		const linkedList = DoublyLinkedList.of(seed)
		expect(linkedList.hasHead()).toEqual(true)
	})

	it('should return false for head', () => {
		const seed = 1
		const linkedList = DoublyLinkedList.of(seed)
		linkedList.pop()
		expect(linkedList.hasHead()).toEqual(false)
	})

	it('should push after', () => {
		const linkedList = DoublyLinkedList.of(1)
		linkedList.pushAfter(linkedList.tail(), 2)
		expect(linkedList).toMatchSnapshot()
	})

	it('should push after node in the middle', () => {
		const linkedList = DoublyLinkedList.of(1, 2)
		const after = linkedList.tail()
		linkedList.push(4)
		linkedList.pushAfter(after, 3)
		expect(linkedList).toMatchSnapshot()
	})
})
