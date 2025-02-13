require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Testando se com o id 720 o nome do personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');  
  });

    it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
      const failRequest = await fetchCharacter(); 
      expect(failRequest).toEqual(new Error('You must provide an url')); 
    });

    it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
      const response = await fetchCharacter('parâmetro qualquer');
      expect(response).toBe('Invalid id');
    });
});