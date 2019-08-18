class Person {
  constructor(name, foods) {
    this.name = name;
    this.foods = foods;
  }
  fetchFavFoods() {
    return new Promise((resolve, reject) => {
      // Simulating an API
      setTimeout(() => resolve(this.foods), 2000);
    });
  }
}

describe('mocking learning', () => {
  it('mocks a reg function', () => {
    const fetchDogs = jest.fn();
    fetchDogs('snickers');
    fetchDogs('hugo');
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith('snickers');
    expect(fetchDogs).toHaveBeenCalledTimes(2);
  });

  it('can create a person', () => {
    const me = new Person('Abdul', ['pizza', 'burgs']);
    expect(me.name).toBe('Abdul');
  });

  it('can fetch foods', async () => {
    const me = new Person('Abdul', ['pizza', 'burgs']);
    // Mock the facFoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue(['sushi', 'ramen']);
    const favFoods = await me.fetchFavFoods();
    expect(favFoods).toContain('sushi');
  });
});
