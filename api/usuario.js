function salvar(req, res) {
  res.send('Usúario > salvar')
}

function obter(req, res) {
  res.send('Usuario > obter')
}

module.exports = { salvar, obter }