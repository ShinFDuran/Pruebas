// Function that returns a temporal array of heroes to make the initial tests
export function createTestHeroes(): any[] {
  return [{
      id: 1,
      name: 'Batman',
      address: {
        street: 'Wayne Manor',
        city: 'Gotham',
        state: 'Chicago',
        region: 'west'
      }
    },{
      id: 2,
      name: 'Spiderman',
      address: {
        street: 'Daily Bugle',
        city: 'New York',
        state: 'New York',
        region: 'east'
      }
    },{
      id: 3,
      name: 'Superman',
      address: {
        street: 'Daily Planet',
        city: 'Metropolis',
        state: 'Alaska',
        region: 'north'
      }
    }];
}
