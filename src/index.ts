import { NumbersCollection } from './NumbersCollection'
import { CharacterCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([4, -3, 110, 2])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharacterCollection('ZxYmba')
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(100)
linkedList.add(-11)
linkedList.add(3)
linkedList.add(7)
linkedList.sort()
linkedList.print()
