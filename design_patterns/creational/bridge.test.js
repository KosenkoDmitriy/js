import { Audi, RedColor } from './bridge'

describe('bridge', () => {
    it('color and model', () => {
        let redModel = new Audi(new RedColor())
        expect(redModel.paint()).toContain('red')
        expect(redModel.paint()).toContain('audi')
    })
})