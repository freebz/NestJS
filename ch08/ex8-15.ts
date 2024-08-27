// 8.4.2 transaction 함수를 직접 이용하는 방법

/**
 * Wraps given function execution (and all operations made there) into a transaction.
 * All database operations must be executed using provided entity manager.
 */
transaction<T>(runInTransaction: (entityManager: EntityManager) => Promise<T>): Promise<T>;