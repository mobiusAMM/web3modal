interface LedgerOptions {
  kit: any;
  index: number;
}

const connectToLedger = async (
  LedgerConnector: any,
  { kit, index }: LedgerOptions
) => {
  try {
    const ledger = new LedgerConnector(
      kit && index !== null ? { kit, index } : undefined
    );
    return ledger.kit.web3.currentProvider;
  } catch (err) {
    throw err;
  }
};

export default connectToLedger;
