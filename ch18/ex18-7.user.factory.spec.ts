describe('create', () => {
  it('should create user', () => {
    // Given

    // When
    const user = userFactory.create(
      'user-id',
      'YOUR_NAME',
      'YOUR_EMAIL@gmail.com',
      'signup-verify-token',
      'pass1234',
    );

    // Then
    const expected = new User(
      'user-id',
      'YOUR_NAME',
      'YOUR_EMAIL@gmail.com',
      'signup-verify-token',
      'pass1234',
    );
    expect(expected).toEqual(user);
    expect(eventBus.publish).toBeCalledTimes(1);
  });
});