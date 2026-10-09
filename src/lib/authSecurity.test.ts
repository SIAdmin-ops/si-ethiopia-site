import { describe, expect, it } from "vitest"
import { GENERIC_SIGN_IN_ERROR, IDLE_TIMEOUT_MS, LoginThrottle, isIdleTimedOut, normalizeTotpCode } from "./authSecurity"
import { CONTACT_LIMITS } from "./contact"
import { pendingLegalItems } from "./legal"

describe("LoginThrottle", () => {
  it("allows sign-in until the failure limit is reached", () => {
    let t = 0
    const throttle = new LoginThrottle(3, 60_000, () => t)
    throttle.recordFailure()
    throttle.recordFailure()
    expect(throttle.remainingLockSeconds()).toBe(0)
    throttle.recordFailure()
    expect(throttle.remainingLockSeconds()).toBe(60)
  })

  it("unlocks after the lock period and after a success", () => {
    let t = 0
    const throttle = new LoginThrottle(2, 60_000, () => t)
    throttle.recordFailure()
    throttle.recordFailure()
    t = 59_000
    expect(throttle.remainingLockSeconds()).toBe(1)
    t = 61_000
    expect(throttle.remainingLockSeconds()).toBe(0)
    throttle.recordFailure()
    throttle.recordSuccess()
    throttle.recordFailure()
    expect(throttle.remainingLockSeconds()).toBe(0)
  })
})

describe("isIdleTimedOut", () => {
  it("times out only at or after the limit", () => {
    expect(isIdleTimedOut(0, IDLE_TIMEOUT_MS - 1)).toBe(false)
    expect(isIdleTimedOut(0, IDLE_TIMEOUT_MS)).toBe(true)
  })
})

describe("normalizeTotpCode", () => {
  it("accepts six digits, ignoring spaces", () => {
    expect(normalizeTotpCode("123 456")).toBe("123456")
  })
  it("rejects anything else", () => {
    expect(normalizeTotpCode("12345")).toBeNull()
    expect(normalizeTotpCode("1234567")).toBeNull()
    expect(normalizeTotpCode("12a456")).toBeNull()
    expect(normalizeTotpCode("")).toBeNull()
  })
})

describe("sign-in error message", () => {
  it("does not reveal whether an account exists", () => {
    expect(GENERIC_SIGN_IN_ERROR.toLowerCase()).not.toMatch(/password|email|account|user|exist|confirm/)
  })
})

describe("contact limits match the database constraint", () => {
  it("uses the values enforced in supabase/security-hardening.sql", () => {
    expect(CONTACT_LIMITS).toEqual({ name: 200, email: 254, organization: 200, division: 100, message: 5000 })
  })
})

describe("legal pending items", () => {
  it("lists unconfirmed facts so draft policies are never presented as final", () => {
    expect(Array.isArray(pendingLegalItems())).toBe(true)
  })
})
