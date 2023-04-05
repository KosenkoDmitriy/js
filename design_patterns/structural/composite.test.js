
import { Item, Composite } from './composite'

describe('composite', () => {
    it('total cost calculation', () => {
        let composite = new Composite()
        composite.setName('BMV')

        let body = new Item()
        body.setName('body')
        body.setPrice(1000000)
        composite.addItem(body)

        let parts = new Item()
        parts.setName('parts')
        parts.setPrice(1000000)
        composite.addItem(parts)

        expect(composite.getName()).toEqual('BMV')
        expect(composite.getPrice()).toEqual(2000000)
    })
})
