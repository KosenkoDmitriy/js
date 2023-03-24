/* 
proxy - is a structural design pattern that lets you 
provide a substitute or placeholder for another object. 

A proxy controls access to the original object, 
allowing you to perform something either before or after 
the request gets through to the original object.

прокси - это структурный шаблон проектирования, 
который позволяет предоставить замену или заполнитель для другого объекта. 

Прокси контролирует доступ к исходному объекту, 
 позволяя вам выполнять какие-либо действия либо до, либо после того, 
 как запрос дойдет до исходного объекта.

прокси - прослойка между запросами и оригинальными объектами
виды:
защищающий - авторизация (логин)
кэширующий - частичное кэширование
виртуальный прокси - подгрузка данных по мере необходимости (ленивая загрузка)
блокирующий - сохранение историй обращений

авто с голосовым управлением для открытия и закрытия дверей
*/

class DoorAccess {
    isOpen = false

    constructor() {
        this.isOpen = false
    }

    open () {
        this.isOpen = true
        console.log('The door has been opened')
    }

    close () {
        this.isOpen = false
        console.log('The door has been closed')
    }
}

class SecurityProxy {
    constructor(door) {
        this.door = door
    }

    auth(password) {
        return password === 'valid password'
    }

    open (password) {
        if (this.auth(password)) {
            this.door.open()
        } else {
            this.door.close()
            console.log('Can not open the door. Invalid Password!')
        }
    }

    close () {
        this.door.close()
    }
}

export { DoorAccess, SecurityProxy }



