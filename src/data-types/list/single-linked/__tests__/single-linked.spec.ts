import { ISingleLinkedList, ISingleLinkedListItem } from '../interfaces'
import { SingleLinkedList } from '../single-linked'

describe('single linked List', () => {
	it('should create', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)

		expect(linkedList).toMatchSnapshot()
	})

	it('should create empty', () => {
		const linkedList = SingleLinkedList.of()

		expect(linkedList).toMatchSnapshot()
	})

	it('should push one item', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.push(2)

		expect(linkedList).toMatchSnapshot()
	})

	it('should push many items', () => {
		const linkedList = SingleLinkedList.of()
		linkedList.push(1)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)

		expect(linkedList).toMatchSnapshot()
	})

	it('should push many items with seed', () => {
		const linkedList = SingleLinkedList.of(1)
		linkedList.push(2)
		linkedList.push(3)
		linkedList.push(4)
		linkedList.push(5)

		expect(linkedList).toMatchSnapshot()
	})

	it('should push after item', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		const item = linkedList.push(2)
		linkedList.push(4)
		linkedList.pushAfter(item, 3)
		expect(linkedList).toMatchSnapshot()
	})

	it('should push after many items', () => {
		const linkedList = SingleLinkedList.of()
		let item = linkedList.push(1)
		item = linkedList.push(2)
		item = linkedList.pushAfter(item, 3)
		item = linkedList.pushAfter(item, 4)
		item = linkedList.pushAfter(item, 5)
		expect(linkedList).toMatchSnapshot()
	})

	it('should remove item in the middle', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
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
		const linkedList = SingleLinkedList.of(seed)
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
		const linkedList = SingleLinkedList.of(seed)
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
		const linkedList = SingleLinkedList.of(seed)
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
		const linkedList = SingleLinkedList.of(seed)
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
		const linkedList = SingleLinkedList.of(seed)
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
	/*
		it('should find from last index at tail', () => {
			const seed = 1
			const linkedList = SingleLinkedList.of(seed)
			linkedList.add(2)
			linkedList.add(3)
			linkedList.add(4)
			linkedList.add(5)
			const found = linkedList.findFromLast(0)
			expect(found).toMatchSnapshot()
		})

		it('should find from last index at 0', () => {
			const seed = 1
			const linkedList = SingleLinkedList.of(seed)
			linkedList.add(2)
			linkedList.add(3)
			linkedList.add(4)
			linkedList.add(5)
			const found = linkedList.findFromLast(0)
			expect(found).toMatchSnapshot()
		})

		it('should find from last index at 1', () => {
			const seed = 1
			const linkedList = SingleLinkedList.of(seed)
			linkedList.add(2)
			linkedList.add(3)
			linkedList.add(4)
			linkedList.add(5)
			const found = linkedList.findFromLast(1)
			expect(found).toMatchSnapshot()
		})

		it('should find from last index at 2', () => {
			const seed = 1
			const linkedList = SingleLinkedList.of(seed)
			linkedList.add(2)
			linkedList.add(3)
			linkedList.add(4)
			linkedList.add(5)
			const found = linkedList.findFromLast(2)
			expect(found).toMatchSnapshot()
		})

		it('should find from last index at 3', () => {
			const seed = 1
			const linkedList = SingleLinkedList.of(seed)
			linkedList.add(2)
			linkedList.add(3)
			linkedList.add(4)
			linkedList.add(5)
			const found = linkedList.findFromLast(3)
			expect(found).toMatchSnapshot()
		})

		it('should find from last index at 4', () => {
			const seed = 1
			const linkedList = SingleLinkedList.of(seed)
			linkedList.add(2)
			linkedList.add(3)
			linkedList.add(4)
			linkedList.add(5)
			const found = linkedList.findFromLast(4)
			expect(found).toMatchSnapshot()
		})

		it('should find from last index at 5', () => {
			const seed = 1
			const linkedList = SingleLinkedList.of(seed)
			linkedList.add(2)
			linkedList.add(3)
			linkedList.add(4)
			linkedList.add(5)
			const found = linkedList.findFromLast(5)
			expect(found).toMatchSnapshot()
		})

		it('should find from last index at 5', () => {
			const seed = 1
			const linkedList = SingleLinkedList.of(seed)
			linkedList.add(2)
			linkedList.add(3)
			linkedList.add(4)
			linkedList.add(5)
			const found = linkedList.findFromLast(5)
			expect(found).toMatchSnapshot()
		})

		it('should create list from array', () => {
			const linkedList = SingleLinkedList.of(1, 2, 3, 4, 5)
			expect(linkedList).toMatchSnapshot()
		})

		it('should fluent add', () => {
			const linkedList = SingleLinkedList.of(1).add(2).add(3).add(4).add(5)
			expect(linkedList).toMatchSnapshot()
		})

		it('should fluent add and remove', () => {
			const linkedList = SingleLinkedList.of(1).add(2).add(3)
			const toRemove = linkedList.tail()
			linkedList.add(4).add(5).add(6)
			linkedList.remove(toRemove)
			expect(linkedList).toMatchSnapshot()
		})

		it('should pop', () => {
			const linkedList = SingleLinkedList.of(1).add(2).add(3)
			linkedList.pop()
			expect(linkedList).toMatchSnapshot()
		})

		it('should over pop', () => {
			const linkedList = SingleLinkedList.of(1).add(2).add(3)
			linkedList.pop()
			linkedList.pop()
			linkedList.pop()
			linkedList.pop()
			expect(linkedList).toMatchSnapshot()
		})*/
})
