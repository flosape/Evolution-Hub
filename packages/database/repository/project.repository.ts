/*
==========================================================
EVOLUTION HUB OPERATING SYSTEM
REPOSITORY CONTRACT
==========================================================

REPOSITORY
Project Repository

PHASE
V — Repository Implementations

STATUS
FOUNDATION CONTRACT

PURPOSE

The Project Repository is the single
authoritative persistence layer for
Projects within Evolution Hub.

It persists Project entities that
organize execution inside Workspaces.

Projects coordinate work performed by
Members and Teams while operating inside
a Workspace.

The repository performs persistence only
and shall never execute projects,
coordinate Teams, assign Tasks,
manage resources, or enforce
constitutional policy.

CONSTITUTIONAL PRINCIPLES

• One repository for one aggregate.
• One responsibility only.
• Persistence only.
• Projects organize execution.
• Workspaces provide execution.
• Organizations provide stewardship.
• Members perform work.
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

export interface ProjectRepository {
  findById(id: string): Promise<unknown | null>;

  findByWorkspaceId(
    workspaceId: string
  ): Promise<unknown[]>;

  findByTeamId(
    teamId: string
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
