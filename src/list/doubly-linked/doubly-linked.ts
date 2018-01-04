export type MaybeDoublyLinkedListItem<T> = DoublyLinkedListItem<T> | undefined

export class DoublyLinkedListItem<T> {
	public prev: MaybeDoublyLinkedListItem<T> = undefined
	public next: MaybeDoublyLinkedListItem<T> = undefined
	constructor(public value: T, prev?: MaybeDoublyLinkedListItem<T>, next?: MaybeDoublyLinkedListItem<T>) {
		this.prev = prev
		this.next = next
	}
}

export class DoublyLinkedList<T> {
	public static of<T>(...values: T[]): DoublyLinkedList<T> {
		return new DoublyLinkedList<T>(...values)
	}

	private _head: MaybeDoublyLinkedListItem<T> = undefined
	private _tail: MaybeDoublyLinkedListItem<T> = undefined

	constructor(...values: T[]) {
		values.forEach(value => this.push(value))
	}

	public push(value: T): DoublyLinkedList<T> {
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
		return this
	}

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

	public head(): MaybeDoublyLinkedListItem<T> {
		return this._head
	}

	public tail(): MaybeDoublyLinkedListItem<T> {
		return this._tail
	}

	public hasTail(): boolean {
		return this._tail != null
	}

	public hasHead(): boolean {
		return this._head != null
	}
}
