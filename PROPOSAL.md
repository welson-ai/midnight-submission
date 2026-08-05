# ZKLoan Credit Scorer - Product Proposal

## 1. Product & Users
The **ZKLoan Credit Scorer** is a decentralized lending privacy-preservation tool. It allows loan applicants to prove creditworthiness (e.g., meeting a specific score or income threshold) without revealing their raw financial data.

*   **Users**: 
    *   **Applicants**: Individuals wanting to secure loans while maintaining total privacy over their credit history and income data.
    *   **Lending Institutions**: Lenders who need to verify eligibility without incurring the liability of holding sensitive personal data.
    *   **Attestation Providers**: Trusted entities that sign credit data to enable ZK proof generation.

## 2. Why Midnight?
Traditional blockchains are inherently public, making them unsuitable for sensitive financial data. Midnight's **dual-state architecture** is uniquely suited for this because:
*   **Zero-Knowledge Circuits (Compact)**: Enables us to define complex credit eligibility logic that proves a condition is met (e.g., `score >= 700`) without the ledger ever knowing the actual score.
*   **Privacy by Default**: Midnight requires explicit disclosure, preventing accidental leakage of witness data.
*   **Identity Unlinkability**: Our usage of PIN-derived, domain-separated public keys ensures that users' borrowing patterns are not linkable to their real-world wallets, a critical feature for financial privacy.

## 3. Data Model
*   **Public State (Ledger)**: Stores non-sensitive results such as `LoanStatus` (Approved/Proposed/Rejected), `authorizedAmount`, a `blacklist` of malicious user public keys, and a registry of trusted `providers`.
*   **Private Witness State**: Stores sensitive `Applicant` details (creditScore, monthlyIncome, monthsAsCustomer), the user's `userSecretKey`, and secret `PIN` used for identity rotation.
*   **Disclosure**: We use `disclose()` strategically, wrapping only the minimal necessary values (e.g., status, authorized amount) before storage on the ledger, ensuring all raw metrics remain private.

## 4. Scope Feasibility (Level 6)
The current MVP provides the necessary foundation for a Mainnet release by Level 6:
*   **Current State**: Full contract logic, ZK circuit attestation, and CLI/UI interfaces are functional and tested.
*   **Mainnet Path**:
    *   **Phase 1 (Audit)**: Formal security audit of Compact circuits.
    *   **Phase 2 (Provider Expansion)**: Integrating with decentralized oracle services for real-world attestation data.
    *   **Phase 3 (UX Optimization)**: Full integration with Lace browser extension for production-ready, frictionless transaction signing.
    *   **Scalability**: Current batch-migration for PIN changes demonstrates robustness for managing user accounts at scale.
