import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import HomeScreen from '../../containers/HomeScreen';

const mockNavigation = {
  navigate: jest.fn(),
};

const renderComponent = () => {
  const component = render(<HomeScreen navigation={mockNavigation} />);

  return {
    header: component.getByText('Home screen'),
    button: component.getByText('Go to Notifications'),
  };
};

describe('HomeScreen', () => {
  it('should render correctly', () => {
    const {header, button} = renderComponent();

    expect(header).toBeDefined();
    expect(button).toBeDefined();
  });

  it(`should navigate to NotificationsScreen when the 'Go to Notifications' button is pressed`, () => {
    const {button} = renderComponent();

    fireEvent.press(button);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Notifications');
  });
});
