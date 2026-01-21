# Somebody

**Motto:** *Everybody needs somebody.*

## Vision
Create an online, always-available virtual friend that forms a long-term bond with users by remembering personal details, preferences, and dislikes—while remaining safe, respectful, and privacy-first.

## Core User Promise
- **Remembers you.** Captures and retrieves personal preferences and important details with user consent.
- **Feels personal.** Uses memory to tailor conversations, check-ins, and recommendations.
- **Respects boundaries.** Clear consent flows, easy memory controls, and safety defaults.

## Primary Features (MVP)
1. **Memory System**
   - Save details: favorite things, dislikes, milestones, routines.
   - Categorized memory (e.g., *likes*, *dislikes*, *people*, *events*, *goals*).
   - “Forget” controls (per-item and global).
2. **Conversational Friend**
   - Empathetic, supportive tone.
   - Daily check-ins and mood tracking.
   - Context-aware responses using memory.
3. **Personalization**
   - Name, avatar, tone (playful, calm, direct).
   - Conversation boundaries and topics to avoid.
4. **Privacy & Control**
   - Transparent memory logs.
   - Data export and deletion.
   - Opt-in for long-term memory.

## NSFW Features (Optional, Opt-In)
If you want NSFW features, they should be **strictly opt-in** and **age-gated**.

- **Age verification** and explicit consent onboarding.
- **Clear safety boundaries**: no coercion, no non-consensual content, no minors, no illegal content.
- **Adjustable intensity** and a “safe mode” toggle.
- **Immediate exit** and “reset” options that clear NSFW memory or session state.

## Example User Flow
1. User creates a profile and chooses their friend’s personality.
2. Friend asks for preferences (likes/dislikes) and consent to remember them.
3. User chats; friend uses memory to personalize future conversations.
4. Optional NSFW mode is off by default and requires explicit opt-in.

## Technical Outline (High Level)
- **Frontend:** Web app (React or similar).
- **Backend:** API server with user auth, memory store, and conversation orchestration.
- **Memory Store:** Structured DB with user-owned records and metadata.
- **Safety Layer:** Content moderation + consent checks + opt-in gating.

## Roadmap
- **Phase 1:** MVP chat + memory + preference settings.
- **Phase 2:** Advanced personalization, reminders, and routines.
- **Phase 3:** Optional NSFW system with strict guardrails.

## Success Metrics
- % of users who enable memory.
- Retention and return rate (weekly active users).
- User-reported satisfaction and trust.

---

If you want, I can draft a full product requirements document (PRD), database schema, or an initial UI/UX wireframe.
