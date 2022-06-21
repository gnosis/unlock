// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  eventsCausingActions: {
    selectLock: 'SELECT_LOCK'
    selectQuantity: 'SELECT_QUANTITY'
    selectPaymentMethod: 'SELECT_PAYMENT_METHOD'
    selectCardToCharge: 'SELECT_CARD_TO_CHARGE'
    disconnect: 'DISCONNECT'
    selectRecipients: 'SELECT_RECIPIENTS'
    signMessage: 'SIGN_MESSAGE'
    solveCaptcha: 'SOLVE_CAPTCHA'
    confirmMint: 'CONFIRM_MINT'
  }
  internalEvents: {
    'done.invoke.unlockAccount': {
      type: 'done.invoke.unlockAccount'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'xstate.init': { type: 'xstate.init' }
  }
  invokeSrcNameMap: {}
  missingImplementations: {
    actions: never
    services: never
    guards: never
    delays: never
  }
  eventsCausingServices: {}
  eventsCausingGuards: {
    requireCardPayment: 'CONTINUE'
    requireMetadata: 'CONTINUE' | 'SELECT_CARD_TO_CHARGE'
    requireMessageToSign:
      | 'CONTINUE'
      | 'SELECT_CARD_TO_CHARGE'
      | 'SELECT_RECIPIENTS'
    requireCaptcha:
      | 'SELECT_CARD_TO_CHARGE'
      | 'SELECT_RECIPIENTS'
      | 'SIGN_MESSAGE'
    isLockSelected: 'DISCONNECT' | 'done.invoke.unlockAccount'
  }
  eventsCausingDelays: {}
  matchesStates:
    | 'SELECT'
    | 'QUANTITY'
    | 'CARD'
    | 'METADATA'
    | 'MESSAGE_TO_SIGN'
    | 'CAPTCHA'
    | 'CONFIRM'
    | 'MINTING'
    | 'UNLOCK_ACCOUNT'
    | 'RETURNING'
  tags: never
}
