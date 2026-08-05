/*
==========================================================
EVOLUTION HUB OPERATING SYSTEM
REPOSITORY CONTRACT
==========================================================

REPOSITORY
Organization Membership Repository

PHASE
V — Repository Implementations

STATUS
FOUNDATION CONTRACT

PURPOSE

The Organization Membership Repository
is the single authoritative persistence
layer for Organization Memberships
within Evolution Hub.

It persists the constitutional
relationship between Members and
Organizations.

Organizations do not own Members.
Organizations provide stewardship over
constitutional resources while Members
retain ownership of their identity and
constitutional rights.

The repository performs persistence only
and shall never approve, reject,
promote, suspend, or govern
membership.

CONSTITUTIONAL PRINCIPLES

• One repository for one aggregate.
• One responsibility only.
• Persistence only.
• Members retain constitutional identity.
• Organizations provide stewardship.
• Platform governs membership.
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

export interface OrganizationMembershipRepository {
  findById(id: string): Promise<unknown | null>;

  findByOrganizationId(
    organizationId: string
  ): Promise<unknown[]>;

  findByMemberId(
    memberId: string
  ): Promise<unknown[]>;

  create(data: unknown): Promise<unknown>;

  update(id: string, data: unknown): Promise<unknown>;

  archive(id: string): Promise<void>;

  restore(id: string): Promise<void>;

  exists(id: string): Promise<boolean>;
}
