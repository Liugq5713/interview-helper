const rewire = require("rewire")
const serviceWorker = rewire("./serviceWorker")
const registerValidSW = serviceWorker.__get__("registerValidSW")
const checkValidServiceWorker = serviceWorker.__get__("checkValidServiceWorker")
// @ponicode
describe("serviceWorker.register", () => {
    test("0", () => {
        let callFunction = () => {
            serviceWorker.register("png.mpg4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            serviceWorker.register("Safari")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            serviceWorker.register("services_recontextualize_front_end.gif")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            serviceWorker.register("XCode")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            serviceWorker.register("bus_account.mpe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            serviceWorker.register(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("registerValidSW", () => {
    test("0", () => {
        let callFunction = () => {
            registerValidSW("http://www.example.com/route/123?foo=bar", { onSuccess: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            registerValidSW("https://croplands.org/app/a/confirm?t=", { onSuccess: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            registerValidSW("ponicode.com", { onSuccess: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            registerValidSW("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", { onSuccess: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            registerValidSW("www.google.com", { onSuccess: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            registerValidSW(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("checkValidServiceWorker", () => {
    test("0", () => {
        let callFunction = () => {
            checkValidServiceWorker("http://www.croplands.org/account/confirm?t=", "arizona_extend.wav")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            checkValidServiceWorker("ponicode.com", "bus_account.mpe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            checkValidServiceWorker("https://api.telegram.org/bot", "services_recontextualize_front_end.gif")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            checkValidServiceWorker("http://www.example.com/route/123?foo=bar", "XCode")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            checkValidServiceWorker("http://www.example.com/route/123?foo=bar", "bus_account.mpe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            checkValidServiceWorker(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("serviceWorker.unregister", () => {
    test("0", () => {
        let callFunction = () => {
            serviceWorker.unregister()
        }
    
        expect(callFunction).not.toThrow()
    })
})
