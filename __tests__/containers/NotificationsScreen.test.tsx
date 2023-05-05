import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import NotificationsScreen from '../../containers/NotificationsScreen';
import mockData from '../../mockData/mockData.json';

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons',
);

const renderComponent = () => {
  const component = render(<NotificationsScreen navigation={mockNavigation} />);

  return {
    header: component.getByText('Notifications screen'),
    backButton: component.getByTestId('back-button'),
    unreadNotificationText: component.getByText(
      `Unread notification - Transaction ID ${mockData.transactions[0].id}`,
    ),
    readNotificationText: component.queryByText(
      `Unread notification - Transaction ID ${mockData.transactions[1].id}`,
    ),
  };
};

describe('NotificationsScreen', () => {
  it('should render correctly', () => {
    const {header, backButton, unreadNotificationText, readNotificationText} =
      renderComponent();

    expect(header).toBeDefined();
    expect(backButton).toBeDefined();
    expect(unreadNotificationText).toBeDefined();
    expect(readNotificationText).toBeNull();
  });

  it(`should navigate to the 'Transaction screen' and passing the 'id' in params`, () => {
    const {unreadNotificationText} = renderComponent();

    fireEvent.press(unreadNotificationText);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Transaction', {
      id: mockData.transactions[0].id,
    });
  });

  it(`should navigate back to the previous screen if the back button is pressed`, () => {
    const {backButton} = renderComponent();

    fireEvent.press(backButton);

    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
