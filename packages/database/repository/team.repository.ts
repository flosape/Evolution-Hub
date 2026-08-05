==========================================================
EVOLUTION HUB OPERATING SYSTEM
REPOSITORY LAW
==========================================================

REPOSITORY LAW NO. 001

TITLE

Constitutional Repository Rule

STATUS

RATIFIED

PURPOSE

Repositories exist solely to persist
constitutional entities and platform
state.

Repositories are persistence mechanisms,
never governance mechanisms.

REPOSITORY PRINCIPLES

• Repositories persist.
• Repositories never govern.
• Repositories never grant constitutional status.
• Repositories never revoke constitutional status.
• Repositories never imply sovereign authority.
• Repositories never bypass constitutional ratification.
• Repositories shall remain independent of business policy.

CONSTITUTIONAL RULE

Governance belongs exclusively to the
Evolution Hub Platform through approved
constitutional services.

Repositories persist.

Governance decides.

The Constitution remains supreme over
implementation.

==========================================================


export interface TeamRepository {
  findById(id: string): Promise<unknown | null>;

  findBySlug(slug: string): Promise<unknown | null>;

  findByWorkspaceId(workspaceId: string): Promise<unknown[]>;

  findByOwnerId(ownerId: string): Promise<unknown[]>;

  create(data: unknown): Promise<unknown>;

  update(id: string, data: unknown): Promise<unknown>;

  archive(id: string): Promise<void>;

  restore(id: string): Promise<void>;

  exists(id: string): Promise<boolean>;
}
