/** One message for every failed sign-in so the response never reveals whether
    an account exists, is unconfirmed, or is rate-limited server-side. */
export const GENERIC_SIGN_IN_ERROR = "We couldn't sign you in. Check your details and try again."

export const IDLE_TIMEOUT_MS = 30 * 60 * 1000

/** Client-side brake against rapid guessing: after `maxFailures` failures the
    form locks for `lockMs`. Cosmetic only. Supabase Auth's own server-side
    rate limits are the real control. */
export class LoginThrottle {
  private failures = 0
  private lockedUntil = 0

  constructor(
    private readonly maxFailures = 5,
    private readonly lockMs = 60_000,
    private readonly now: () => number = () => Date.now(),
  ) {}

  /** Seconds left on the lock, or 0 when sign-in is allowed. */
  remainingLockSeconds(): number {
    const left = this.lockedUntil - this.now()
    return left > 0 ? Math.ceil(left / 1000) : 0
  }

  recordFailure(): void {
    this.failures += 1
    if (this.failures >= this.maxFailures) {
      this.lockedUntil = this.now() + this.lockMs
      this.failures = 0
    }
  }

  recordSuccess(): void {
    this.failures = 0
    this.lockedUntil = 0
  }
}

export function isIdleTimedOut(lastActivityMs: number, nowMs: number, timeoutMs = IDLE_TIMEOUT_MS): boolean {
  return nowMs - lastActivityMs >= timeoutMs
}

/** TOTP codes are exactly six digits; strip spaces people paste in. */
export function normalizeTotpCode(raw: string): string | null {
  const code = raw.replace(/\s+/g, "")
  return /^\d{6}$/.test(code) ? code : null
}
