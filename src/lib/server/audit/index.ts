import type { AuthenticatedPrincipal } from '$lib/server/authorization';

export interface AuditEvent {
  actorId: AuthenticatedPrincipal['id'];
  tenantId?: string;
  action: string;
  resource: string;
  resourceId?: string;
  occurredAt: Date;
  metadata?: Record<string, unknown>;
}

export interface AuditLogger {
  record(event: AuditEvent): Promise<void>;
}
