// import { ISingleLinkedList, ISingleLinkedListItem, MaybeSingleLinkedListItem } from './interfaces'

export type MaybeSingleLinkedListItem<T> = SingleLinkedListItem<T> | undefined
type SingleLinkedListItemType<T> = SingleLinkedListItem<T> | null

/**
 * Represents a single-linked list item.
 * THere will only be a next node reference.
 */
export class SingleLinkedListItem<T> implements SingleLinkedListItem<T> {
	public next: MaybeSingleLinkedListItem<T> = undefined
	constructor(public value: T, next?: SingleLinkedListItem<T>) {
		this.next = next || undefined
	}
}

/**
 * Single linked list.
 * This data structure is useful if you only care about iterating a sequence in forwdward direction.
 * @export
 * @class SingleLinkedList
 * @implements {ISingleLinkedList<T>}
 * @template T
 */
export class SingleLinkedList<T> implements SingleLinkedList<T> {
	/**
	 * Creates a single linked item from a set of values.
	 * @static
	 * @template T
	 * @param {...T[]} values
	 * @returns {ISingleLinkedList<T>}
	 * @memberof SingleLinkedList
	 */
	public static of<T>(...values: T[]): SingleLinkedList<T> {
		return new SingleLinkedList<T>(...values)
	}

	private _head: MaybeSingleLinkedListItem<T> = undefined
	private _tail: MaybeSingleLinkedListItem<T> = undefined

	constructor(...values: T[]) {
		values.forEach(item => this.push(item))
	}

	/**
	 * Pushes a value node after the referenced node.
	 * @param {ISingleLinkedListItem<T>} item
	 * @param {T} value
	 * @returns {ISingleLinkedListItem<T>}
	 * @memberof SingleLinkedList
	 */
	public pushAfter(item: SingleLinkedListItem<T>, value: T): SingleLinkedListItem<T> {
		const itemToPush = new SingleLinkedListItem(value)
		if (item.next != null) {
			itemToPush.next = item.next
		}
		item.next = itemToPush
		if (item === this._tail) {
			this._tail = itemToPush
		}
		return itemToPush
	}

	/**
	 * Removes a node from the list.
	 * Both, head & tail references will be updated if affected.
	 * @param {SingleLinkedListItem<T>} item
	 * @returns {SingleLinkedList<T>}
	 * @memberof SingleLinkedList
	 */
	public remove(item: SingleLinkedListItem<T>): SingleLinkedList<T> {
		if (item == null || this._head == null) return this

		if (this._head === item) {
			this._head = item.next
			if (item.next == null) {
				this._tail = undefined
			}
			return this
		}

		let prev: MaybeSingleLinkedListItem<T> = this._head
		if (prev == null) return this

		let next = prev.next
		if (next == null) return this

		while (next !== item) {
			prev = next
			next = next != null ? next.next : undefined
		}
		if (prev != null) {
			prev.next = next.next
			if (prev.next == null) {
				// new tail!
				this._tail = prev
			}
		}
		return this
	}

	/**
	 * Pushes a value to the list as a node.
	 * @param {T} value
	 * @returns {SingleLinkedListItem<T>}
	 * @memberof SingleLinkedList
	 */
	public push(value: T): SingleLinkedListItem<T> {
		const item = new SingleLinkedListItem(value)
		if (this._head == null) {
			this._head = item
			this._tail = item
		} else {
			const itemToReplace = this._tail
			itemToReplace!.next = item
			this._tail = item
		}
		return item
	}

	/**
	 * It pops a value out of the list.
	 * The node with the value will be removed.
	 * @returns {(T | undefined)}
	 * @memberof SingleLinkedList
	 */
	public pop(): T | undefined {
		const tail = this.tail()
		if (tail == null) return undefined

		this.remove(tail)
		return tail.value
	}

	/**
	 * Gets the head node.
	 * @returns {MaybeSingleLinkedListItem<T>}
	 * @memberof SingleLinkedList
	 */
	public head(): MaybeSingleLinkedListItem<T> {
		return this._head
	}

	/**
	 * Gets the tail node.
	 * @returns {MaybeSingleLinkedListItem<T>}
	 * @memberof SingleLinkedList
	 */
	public tail(): MaybeSingleLinkedListItem<T> {
		return this._tail
	}

	/**
	 * Returns true if the tail node exists, false otherwise.
	 * @returns {boolean}
	 * @memberof SingleLinkedList
	 */
	public hasTail(): boolean {
		return this._tail != null
	}

	/**
	 * Returns true if the head node exists, false otherwise.
	 * @returns {boolean}
	 * @memberof SingleLinkedList
	 */
	public hasHead(): boolean {
		return this._head != null
	}

	private findFromLast(index: number): MaybeSingleLinkedListItem<T> {
		if (this._head == null) return undefined
		if (index === 0) return this._tail

		let candidate: SingleLinkedListItemType<T> = this._head
		let current: SingleLinkedListItemType<T> = this._head
		for (let i = 0; i < index; i++) {
			if (current.next) {
				current = current.next
			} else {
				return undefined
			}
		}
		while (current.next) {
			current = current.next
			if (candidate && candidate.next) {
				candidate = candidate.next
			}
		}

		return candidate
	}
}
