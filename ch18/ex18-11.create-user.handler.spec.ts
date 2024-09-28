it('should throw UnprocessableEntityException when user exists', async () => {
  // Given
  userRepository.findByEmail = jest.fn().mockResolvedValue({
    id,
    name,
    email,
    password,
    signupVerifyToken,
  });

  // When
  // Then
  await expect(createUserHandler.execute(new CreateUserCommand(name, email, password)))
    .rejects
    .toThrowError(UnprocessableEntityException);
});