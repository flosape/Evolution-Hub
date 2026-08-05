/*
==========================================================
EVOLUTION HUB OPERATING SYSTEM
REPOSITORY CONTRACT
==========================================================

REPOSITORY
Member Repository

PHASE
V — Repository Implementations

STATUS
FOUNDATION CONTRACT

PURPOSE

The Member Repository is the single
authoritative persistence layer for
Evolutionarian identities.

It persists the constitutional Member
identity within the Evolution Hub
Operating System.

The repository performs persistence only
and shall never perform authentication,
authorization, governance, constitutional
decisions, or business logic.

CONSTITUTIONAL PRINCIPLES

• One repository for one aggregate.
• One responsibility only.
• Persistence only.
• Member is the constitutional citizen.
• No business logic.
• No governance authority.
• No authentication workflow.
• No API logic.

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

export interface MemberRepository {
  findById(id: string): Promise<unknown | null>;

  findByEmail(email: string): Promise<unknown | null>;

  create(data: unknown): Promise<unknown>;

  update(id: string, data: unknown): Promise<unknown>;

  delete(id: string): Promise<void>;

  exists(id: string): Promise<boolean>;
}
