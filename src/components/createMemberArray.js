export default function createMemberArray(memberString) {
  // split textarea by \n
  let memberArray = memberString.split('\n')
  // trim the whitespaces, remove the empty elements
  memberArray = memberArray.map(word => word.trim()).filter(word => word !== "")
  return memberArray
}