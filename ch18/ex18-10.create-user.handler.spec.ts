  const id = ulid.ulid();
  const name = 'YOUR_NAME';
  const email = 'YOUR_EMAIL@gmail.com';
  const password = 'pass1234';
  const signupVerifyToken = uuid.v1();

  describe('execute', () => {
    it('should execute CreateUserCommand', async () => {
      //Given
      userRepository.findByEmail = jest.fn().mockResolvedValue(null);

      // When
      await createUserHandler.execute(new CreateUserCommand(name, email, password));

      // Then
      expect(userRepository.save).toBeCalledWith(
        id,
        name,
        email,
        password,
        signupVerifyToken,
      );
      expect(userFactory.create).toBeCalledWith(
        id,
        name,
        email,
        signupVerifyToken,
        password,
      );
    });
  });
});