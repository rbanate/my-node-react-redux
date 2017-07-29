import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () =>{
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName:'Cory', lastName: 'House'},
        {id: 'gab-kulit', firstName:'Gab', lastName: 'Banate'}
      ];

      const expected = [
        {value:'cory-house', text: 'Cory House'},
        {value:'gab-kulit', text: 'Gab Banate'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
