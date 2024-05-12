class SwipeEvent extends TouchEvent {
  constructor(eventInitDict?:TouchEventInit) {
    super('swipe', eventInitDict)
  }
}

export default SwipeEvent
