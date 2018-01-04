export type MaybeDoublyLinkedListItem<T> = DoublyLinkedListItem<T> | undefined

/**
 * DoublyLinkedListItem.
 * Contains a prev and next reference.
 * @export
 * @class DoublyLinkedListItem
 * @template T
 */
export class DoublyLinkedListItem<T> {
	public prev: MaybeDoublyLinkedListItem<T> = undefined
	public next: MaybeDoublyLinkedListItem<T> = undefined
	/**
	 * Creates an instance of DoublyLinkedListItem.
	 * @param {T} value
	 * @param {MaybeDoublyLinkedListItem<T>} [prev]
	 * @param {MaybeDoublyLinkedListItem<T>} [next]
	 * @memberof DoublyLinkedListItem
	 */
	constructor(public value: T, prev?: MaybeDoublyLinkedListItem<T>, next?: MaybeDoublyLinkedListItem<T>) {
		this.prev = prev
		this.next = next
	}
}

/**
 * Doubly Linked list class.
 * Creates an instance of @class DoublyLinkedList
 * @export
 * @class DoublyLinkedList
 * @template T
 */
export class DoublyLinkedList<T> {
	/**
	 * Creates an instance of @class DoublyLinkedList from an array.
	 *
	 * @static
	 * @template T
	 * @param {...T[]} values
	 * @returns {DoublyLinkedList<T>}
	 * @memberof DoublyLinkedList
	 */
	public static of<T>(...values: T[]): DoublyLinkedList<T> {
		return new DoublyLinkedList<T>(...values)
	}

	private _head: MaybeDoublyLinkedListItem<T> = undefined
	private _tail: MaybeDoublyLinkedListItem<T> = undefined

	/**
	 * Creates an instance of DoublyLinkedList.
	 * @param {...T[]} values
	 * @memberof DoublyLinkedList
	 */
	constructor(...values: T[]) {
		values.forEach(value => this.push(value))
	}

	/**
	 * Push a value into the list.
	 * The value will create a new node at the tail of the list.
	 * @param {T} value
	 * @returns {DoublyLinkedListItem<T>}
	 * @memberof DoublyLinkedList
	 */
	public push(value: T): DoublyLinkedListItem<T> {
		const item = new DoublyLinkedListItem(value)
		if (this._head == null) {
			this._head = item
			this._tail = item
		} else {
			if (this._tail == null) throw new Error('Tail is undefined')
			item.prev = this._tail
			item.next = undefined
			this._tail.next = item
			this._tail = item
		}
		return item
	}

	/**
	 * Push a value after an item in the list.
	 * The value will create a new node after the passed item.
	 * @param {DoublyLinkedListItem<T>} item
	 * @param {T} value
	 * @returns {DoublyLinkedListItem<T>}
	 * @memberof DoublyLinkedList
	 */
	public pushAfter(item: DoublyLinkedListItem<T>, value: T): DoublyLinkedListItem<T> {
		if (item == null) throw new Error('The item you are trying to push after is null or undefined')

		const itemToPush = new DoublyLinkedListItem(value, item)
		if (item.next != null) {
			itemToPush.next = item.next
			item.next.prev = itemToPush
		}
		item.next = itemToPush
		if (item === this._tail) {
			this._tail = itemToPush
		}
		return itemToPush
	}

	/**
	 * Pops a value from the list.
	 * The value will be popped from the tail of the list.
	 * @returns {(T | undefined)}
	 * @memberof DoublyLinkedList
	 */
	public pop(): T | undefined {
		const tail = this.tail()
		if (tail == null) return undefined

		this.remove(tail)
		return tail.value
	}

	/**
	 * Removes an item from the list
	 *
	 * @param {DoublyLinkedListItem<T>} item
	 * @returns {DoublyLinkedList<T>}
	 * @memberof DoublyLinkedList
	 */
	public remove(item: DoublyLinkedListItem<T>): DoublyLinkedList<T> {
		if (item == null || this._head == null) return this

		if (item.prev != null) {
			item.prev.next = item.next
		} else {
			// the item to be removed is the head, so 'next' has to be set as the new head
			this._head = item.next
			if (this._head != null) {
				// if there is a head, then we make sure the prev is undefined
				this._head.prev = undefined
			}
		}

		if (item.next != null) {
			item.next.prev = item.prev
		} else {
			// the item to be removed is the tail, so 'prev' has to be set as the new tail
			this._tail = item.prev
			if (this._tail != null) {
				// if there is a new tail, we make sure the next is undefined
				this._tail.next = undefined
			}
		}
		return this
	}

	/**
	 * Gets the head of the list.
	 * Expect undefined if the list is empty.
	 * @returns {MaybeDoublyLinkedListItem<T>}
	 * @memberof DoublyLinkedList
	 */
	public head(): MaybeDoublyLinkedListItem<T> {
		return this._head
	}

	/**
	 * Gets the tail of the list.
	 * Expect undefined if the list is empty.
	 * @returns {MaybeDoublyLinkedListItem<T>}
	 * @memberof DoublyLinkedList
	 */
	public tail(): MaybeDoublyLinkedListItem<T> {
		return this._tail
	}

	/**
	 * Returns true if there is a tail node, false otherwise.
	 *
	 * @returns {boolean}
	 * @memberof DoublyLinkedList
	 */
	public hasTail(): boolean {
		return this._tail != null
	}

	/**
	 * Returns true if there is a head node, false otherwise.
	 *
	 * @returns {boolean}
	 * @memberof DoublyLinkedList
	 */
	public hasHead(): boolean {
		return this._head != null
	}
}
