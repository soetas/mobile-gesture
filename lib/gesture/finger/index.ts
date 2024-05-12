class FingerEvent extends TouchEvent {
  constructor(eventInitDict?:TouchEventInit) {
    super('finger', eventInitDict)
  }
}

export default FingerEvent
