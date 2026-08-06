# PrivacyLoan Credit Scorer: Proposal

## 1. Product & Target Users
PrivacyLoan Credit Scorer is a ZK-powered lending DApp designed for individuals seeking financial services without compromising sensitive personal data. Our target users are privacy-conscious borrowers who want to prove their creditworthiness (credit score, income, tenure) to lenders without disclosing their raw financial history. By using zero-knowledge proofs, we gate financial access while preserving data sovereignty.

## 2. Why Midnight?
Midnight is the only blockchain that bridges public ledger transparency with private, ZK-backed computation out of the box. Specifically, we utilize:
- **Compact Language**: Allows us to write formal ZK circuits that verify complex eligibility thresholds without revealing private inputs.
- **Dual-State Architecture**: Enables us to keep sensitive data (credit score/income) in the local Private Witness state, only anchoring the eligibility proof on the Public Ledger.
- **Privacy-by-Default**: The `disclose()` mechanism forces us to explicitly define what data enters the public domain, preventing accidental leaks.

## 3. Data Model
- **Public Ledger**: Stores only non-sensitive outcomes: `LoanApplication` status, `authorizedAmount`, `blacklist` status, and the `AttestationProviderRegistry`.
- **Private Witness**: The "source of truth" for sensitive data. It holds the `Applicant` profile (raw score, income, tenure), the user's secret PIN, and private signing keys.
- **Disclosure**: We use explicit `disclose()` calls for the final `LoanStatus` and `authorizedAmount`. All intermediary credit scoring logic is proven inside the ZK circuit, ensuring the raw numbers never appear on-chain.

## 4. Mainnet Scope (Level 6)
By Level 6, PrivacyLoan will reach production readiness on Mainnet through:
1. **Security Hardening**: Full third-party audit of our Compact circuits and Schnorr-based attestation verification.
2. **Attestation Network**: Decentralizing the attestation provider registry to support multiple trusted KYC/Credit bureaus.
3. **User Experience**: Migrating identity management from transient in-memory state to encrypted browser-local storage for persistent loan history.
4. **Scale**: Optimizing proof generation servers to support high-concurrency requests and ensuring cost-effective transaction fees through batch verification.
