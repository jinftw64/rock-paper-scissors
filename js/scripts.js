function getComputerChoice() {
  const handSigns = ['Rock', 'Paper', 'Scissors']
  var computerChoiceIndex = Math.floor(Math.random() * handSigns.length)
  return handSigns[computerChoiceIndex]
}

console.log(getComputerChoice())
