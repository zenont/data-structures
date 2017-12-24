export type MaybeSingleLinkedListItem<T> = ISingleLinkedListItem<T> | undefined

export interface ISingleLinkedListItem<T> {
	value: T
	next?: MaybeSingleLinkedListItem<T>
}

export interface ISingleLinkedList<T> {
	pushAfter(item: ISingleLinkedListItem<T>, value: T): ISingleLinkedListItem<T>
	remove(item: ISingleLinkedListItem<T>): ISingleLinkedList<T>
	push(value: T): ISingleLinkedListItem<T>
	pop(): T | undefined
	head(): MaybeSingleLinkedListItem<T>
	tail(): MaybeSingleLinkedListItem<T>
	hasTail(): boolean
	hasHead(): boolean
}
