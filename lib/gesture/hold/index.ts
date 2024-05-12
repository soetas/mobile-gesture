class HoldEvent extends TouchEvent {
  constructor(eventInitDict?:TouchEventInit) {
    super('hold', eventInitDict)
  }
}

export default HoldEvent
