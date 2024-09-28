describe('reconstitute', () => {
  it('should reconstitute user', () => {
    // Given

    // When
    const user = userFactory.reconstitute(
      'user-id',
      'YOUR_NAME',
      'USER_EMAIL@gmail.com',
      'pass1234',
      'signup-verify-token',
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
  });
});