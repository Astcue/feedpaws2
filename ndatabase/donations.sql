CREATE TABLE IF NOT EXISTS donations (
  donation_id BIGSERIAL PRIMARY KEY,
  reference_id TEXT NOT NULL UNIQUE,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  amount NUMERIC(12, 2) NOT NULL CHECK (amount >= 1),
  upi_transaction_id TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'PENDING_VERIFICATION'
    CHECK (status IN ('PENDING_VERIFICATION', 'VERIFIED', 'RECEIPT_ISSUED', 'NOT_VERIFIED')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  verified_at TIMESTAMPTZ,
  receipt_number TEXT
);

CREATE INDEX IF NOT EXISTS donations_status_idx ON donations (status);
