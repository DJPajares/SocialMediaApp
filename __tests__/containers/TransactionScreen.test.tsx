import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import TransactionScreen from '../../containers/TransactionScreen';

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

const mockParams = {
  id: 'T100',
};

jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons',
);

const renderComponent = () => {
  const component = render(
    <TransactionScreen
      navigation={mockNavigation}
      route={{params: mockParams}}
    />,
  );

  return {
    header: component.getByText('Transaction screen'),
    content: component.getByText('Transaction ID is T100'),
    backButton: component.getByTestId('back-button'),
  };
};

describe('TransactionScreen', () => {
  it('should render correctly', () => {
    const {header, content, backButton} = renderComponent();

    expect(header).toBeDefined();
    expect(content).toBeDefined();
    expect(backButton).toBeDefined();
  });

  it(`should navigate back to the previous screen if the back button is pressed`, () => {
    const {backButton} = renderComponent();

    fireEvent.press(backButton);

    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
