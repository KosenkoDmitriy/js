import { DoorAccess, SecurityProxy } from './proxy'

describe('Door', ()=>{
    let door = new DoorAccess()
    it('open', ()=>{
        expect(door.isOpen).toBe(false)
        door.open()
        expect(door.isOpen).toBe(true)
    })
    it('close', () => {
        expect(door.isOpen).toBe(true)
        door.close()
        expect(door.isOpen).toBe(false)
    })

    describe('secure access ', () => {
        it('with invalid password', () => { 
            door.close()
            const voiceProxy = new SecurityProxy(door)
            voiceProxy.open('invalid password')
            expect(voiceProxy.door.isOpen).toBe(false)
        })
        it('with valid password', () => {
            door.close()
            const voiceProxy = new SecurityProxy(door)
            voiceProxy.open('valid password')
            expect(voiceProxy.door.isOpen).toBe(true)
        })

    })
})