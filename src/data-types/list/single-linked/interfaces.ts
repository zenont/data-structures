export type MaybeSingleLinkedListItem<T> = ISingleLinkedListItem<T> | undefined

export interface ISingleLinkedListItem<T> {
	value: T
	next?: MaybeSingleLinkedListItem<T>
}

export interface ISingleLinkedList<T> {
	add(value: T): ISingleLinkedList<T>
	remove(item: ISingleLinkedListItem<T>): ISingleLinkedList<T>
	push(value: T): ISingleLinkedList<T>
	pop(): T | undefined
	head(): MaybeSingleLinkedListItem<T>
	tail(): MaybeSingleLinkedListItem<T>
	hasTail(): boolean
	hasHead(): boolean
	findFromLast(index: number): MaybeSingleLinkedListItem<T>
}
