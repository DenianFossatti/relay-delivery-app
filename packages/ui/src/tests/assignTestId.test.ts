import * as quality from './assignTestId';

describe('Quality Gate', () => {
  describe('assignTestId', () => {
    it('should test assignTestId', () => {
      const id = quality.assignTestId('Modal', 'Box');
      expect(id.testID).toBe(`Modal_Box`);
    });
  });

  describe('mockTestID', () => {
    it('should test MockId', () => {
      const id = quality.assignTestId('Modal', 'Box');
      expect(quality.mockTestID('Modal', 'Box')).toEqual(id.testID);
    });
  });
});
