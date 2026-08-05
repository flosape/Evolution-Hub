/*
==========================================================
EVOLUTION HUB OPERATING SYSTEM
REPOSITORY CONTRACT
==========================================================

REPOSITORY
Organization Repository

PHASE
V — Repository Implementations

STATUS
FOUNDATION CONTRACT

PURPOSE

The Organization Repository is the single
authoritative persistence layer for
Organizations within Evolution Hub.

It persists Organization entities that
have been constitutionally recognized
by the Evolution Hub Platform.

Organizations do not own platform
resources. They serve as constitutional
stewards responsible for managing
resources entrusted to them by the
Platform.

The repository performs persistence only
and shall never approve, govern,
promote, revoke, or evaluate
Organizations.

CONSTITUTIONAL PRINCIPLES

• One repository for one aggregate.
• One responsibility only.
• Persistence only.
• Organizations provide stewardship.
• Organizations manage resources.
• Platform governs the ecosystem.
• No business logic.
• No constitutional authority.
• No governance decisions.
• No API logic.
• No authentication logic.

ENGINEERING PRINCIPLES

Single Responsibility.
Build Once. Reuse Everywhere.
Technological Harmony.
Review Before Expansion.

REPOSITORY LAW

Repository Law No. 001
Constitutional Repository Rule

==========================================================
*/

export interface OrganizationRepository {
  findById(id: string): Promise<unknown | null>;

  findBySlug(slug: string): Promise<unknown | null>;

  save(data: unknown): Promise<unknown>;

  update(id: string, data: unknown): Promise<unknown>;

  archive(id: string): Promise<void>;

  exists(id: string): Promise<boolean>;
}
