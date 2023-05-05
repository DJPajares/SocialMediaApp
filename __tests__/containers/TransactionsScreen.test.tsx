import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import TransactionsScreen from '../../containers/TransactionsScreen';
import mockData from '../../mockData/mockData.json';

const mockNavigation = {
  navigate: jest.fn(),
};

const renderComponent = () => {
  const component = render(<TransactionsScreen navigation={mockNavigation} />);

  return {
    header: component.getByText('Transactions screen'),
    transaction0: component.getByText(
      `Transaction ${mockData.transactions[0].id}`,
    ),
    transaction1: component.getByText(
      `Transaction ${mockData.transactions[1].id}`,
    ),
  };
};

describe('TransactionsScreen', () => {
  it('should render correctly', () => {
    const {header, transaction0, transaction1} = renderComponent();

    expect(header).toBeDefined();
    expect(transaction0).toBeDefined();
    expect(transaction1).toBeDefined();
  });

  it(`should navigate to the 'Transaction screen' and passing the 'id' in params`, () => {
    const {transaction1} = renderComponent();

    fireEvent.press(transaction1);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Transaction', {
      id: mockData.transactions[1].id,
    });
  });
});
