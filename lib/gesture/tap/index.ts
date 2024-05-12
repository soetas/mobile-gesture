class TapEvent extends TouchEvent {
  constructor(eventInitDict?:TouchEventInit) {
    super('tap', eventInitDict)
  }
}

export default TapEvent
