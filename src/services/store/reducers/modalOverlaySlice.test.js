import modalOverlayReducer, { clickOpen, clickOrderList, initialState } from "./modalOverlaySlice";

describe("modalOverlayReducer", () => {
  it('Тест начальное значние', () => {
    expect(modalOverlayReducer(undefined, {})).toEqual(initialState)
  });

  it('Тест setClickOrderList', () => {
    const paylode = true
    expect(modalOverlayReducer(initialState, clickOrderList(paylode))).toEqual({
      ...initialState,
      setClickOrderList: paylode
    })
  });

  it('Тест setClickOrderList', () => {
    const paylode = true
    expect(modalOverlayReducer(initialState, clickOpen(paylode))).toEqual({
      ...initialState,
      setIsOpen: paylode
    })
  });

})
