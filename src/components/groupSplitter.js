import shuffleArray from './shuffleArray'
// Shuffles the array of memebers and divides it to groups

export default function splitter(array, size) {

  array = shuffleArray(array)
  let subgroups = []
  for (let i = 0; i < array.length; i += size) {
//    console.log("Iteriator")
//    console.log(i)
//    console.log(subgroups)
    let chunk = array.slice(i, i + size)
//    console.log(array.slice(i, i + size))
    subgroups.push(chunk)
  }
  return subgroups
}