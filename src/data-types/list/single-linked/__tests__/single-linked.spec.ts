import { ISingleLinkedList, ISingleLinkedListItem } from '../interfaces'
import { SingleLinkedList } from '../single-linked'

describe('single linked List', () => {
	it('should create', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)

		expect(linkedList).toMatchSnapshot()
	})

	/*it('should add one', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		const created = linkedList.add(2)

		expect(linkedList).toMatchSnapshot()
	})

	it('should add many', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.add(2)
		linkedList.add(3)
		linkedList.add(4)
		linkedList.add(5)

		expect(linkedList).toMatchSnapshot()
	})

	it('should remove middle', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.add(2)
		linkedList.add(3)
		const toRemove = linkedList.tail()
		linkedList.add(4)
		linkedList.add(5)

		linkedList.remove(toRemove)
		expect(linkedList).toMatchSnapshot()
	})

	it('should remove head', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.add(2)
		linkedList.add(3)
		linkedList.add(4)
		linkedList.add(5)
		const toRemove = linkedList.head()

		linkedList.remove(toRemove!)
		expect(linkedList).toMatchSnapshot()
	})

	it('should remove tail', () => {
		const seed = 1
		const linkedList = SingleLinkedList.of(seed)
		linkedList.add(2)
		linkedList.add(3)
		linkedList.add(4)
		linkedList.add(5)
		const toRemove = linkedList.tail()

		linkedList.remove(toRemove!)
		expect(linkedList).toMatchSnapshot()
	})

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
