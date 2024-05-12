class PinchEvent extends TouchEvent {
  constructor(eventInitDict?:TouchEventInit) {
    super('pinch', eventInitDict)
  }
}

export default PinchEvent