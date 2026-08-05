/*
==========================================================
EVOLUTION HUB OPERATING SYSTEM
REPOSITORY CONTRACT
==========================================================

REPOSITORY
Platform Configuration Repository

PHASE
V — Repository Implementations

STATUS
FOUNDATION CONTRACT

PURPOSE

The Platform Configuration Repository is
the single authoritative persistence layer
for Evolution Hub Platform configuration,
metadata, capabilities, and versioning.

The Evolution Hub Platform already exists
as the constitutional operating system.

This repository shall persist platform
configuration only and shall not create,
remove, or govern the Platform itself.

CONSTITUTIONAL PRINCIPLES

• One repository for one aggregate.
• Persistence only.
• No constitutional authority.
• No governance decisions.
• No reasoning logic.
• No AI execution.
• No API logic.
• No authentication logic.

ENGINEERING PRINCIPLES

Single Responsibility.
Build Once. Reuse Everywhere.
Technological Harmony.
Review Before Expansion.
==========================================================
*/

export interface PlatformConfigurationRepository {
  getConfiguration(): Promise<unknown>;

  updateConfiguration(data: unknown): Promise<unknown>;

  getCapabilities(): Promise<unknown>;

  getVersion(): Promise<unknown>;
}
