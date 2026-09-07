export type ErrorCode =
  | 'VALIDATION_ERROR'
  | 'AUTHENTICATION_REQUIRED'
  | 'FORBIDDEN'
  | 'TENANT_ACCESS_DENIED'
  | 'NOT_FOUND'
  | 'BUSINESS_RULE_VIOLATION'
  | 'PROVIDER_ERROR'
  | 'INTERNAL_ERROR';

export class AppError extends Error {
  constructor(
    public readonly code: ErrorCode,
    message: string,
    public readonly status = 500,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = 'AppError';
  }
}
export class ValidationError extends AppError {
  constructor(message = 'The request is invalid.') {
    super('VALIDATION_ERROR', message, 400);
  }
}
export class AuthenticationError extends AppError {
  constructor(message = 'Authentication is required.') {
    super('AUTHENTICATION_REQUIRED', message, 401);
  }
}
export class AuthorizationError extends AppError {
  constructor(message = 'You are not allowed to perform this action.') {
    super('FORBIDDEN', message, 403);
  }
}
export class TenantAccessError extends AppError {
  constructor(message = 'Tenant access is denied.') {
    super('TENANT_ACCESS_DENIED', message, 403);
  }
}
export class TenantNotFoundError extends AppError {
  constructor() {
    super('NOT_FOUND', 'Tenant not found.', 404);
  }
}
export class BusinessRuleError extends AppError {
  constructor(message: string) {
    super('BUSINESS_RULE_VIOLATION', message, 409);
  }
}
export class ProviderError extends AppError {
  constructor(
    message = 'An external provider request failed.',
    options?: ErrorOptions,
  ) {
    super('PROVIDER_ERROR', message, 502, options);
  }
}

export function toPublicError(error: unknown) {
  if (error instanceof AppError)
    return { code: error.code, message: error.message, status: error.status };
  return {
    code: 'INTERNAL_ERROR' as const,
    message: 'An unexpected error occurred.',
    status: 500,
  };
}
