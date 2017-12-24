import { ISingleLinkedList, ISingleLinkedListItem, MaybeSingleLinkedListItem } from './interfaces'

type SingleLinkedListItemType<T> = ISingleLinkedListItem<T> | null

export class SingleLinkedListItem<T> implements ISingleLinkedListItem<T> {
	public next: MaybeSingleLinkedListItem<T> = undefined
	constructor(public value: T, next?: ISingleLinkedListItem<T>) {
		this.next = next || undefined
	}
}

export class SingleLinkedList<T> implements ISingleLinkedList<T> {
	public static of<T>(...values: T[]): ISingleLinkedList<T> {
		return new SingleLinkedList<T>(...values)
	}

	private _head: MaybeSingleLinkedListItem<T> = undefined
	private _tail: MaybeSingleLinkedListItem<T> = undefined

	constructor(...values: T[]) {
		values.forEach(item => this.add(item))
	}

	public add(value: T): SingleLinkedList<T> {
		const item = new SingleLinkedListItem(value)
		if (this._head == null) {
			this._head = item
			this._tail = item
		} else {
			const itemToReplace = this._tail
			itemToReplace!.next = item
			this._tail = item
		}
		return this
	}

	public remove(item: ISingleLinkedListItem<T>): SingleLinkedList<T> {
		if (item == null || this._head == null) return this

		if (this._head === item) {
			this._head = item.next
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

	public pop(): T | undefined {
		const tail = this.tail()
		if (tail == null) return undefined

		this.remove(tail)
		return tail.value
	}

	public head(): MaybeSingleLinkedListItem<T> {
		return this._head
	}

	public tail(): MaybeSingleLinkedListItem<T> {
		return this._tail
	}

	public hasTail(): boolean {
		return this._tail != null
	}

	public hasHead(): boolean {
		return this._head != null
	}

	public findFromLast(index: number): MaybeSingleLinkedListItem<T> {
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
