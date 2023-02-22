enum CatchType {
	Local,
	Session
}
class Catch {
	store: Storage
	constructor(type: CatchType) {
		this.store = type == CatchType.Session ? sessionStorage : localStorage
	}

	setItem(key: string, value: any) {
		if (value) {
			this.store.setItem(key, JSON.stringify(value))
		}
	}
	getItem(key: string) {
		const value = this.store.getItem(key)
		if (value) {
			return JSON.parse(value)
		}
	}
	removeItem(key: string) {
		this.store.removeItem(key)
	}
	clear() {
		this.store.clear()
	}
}

const localCatch = new Catch(CatchType.Local)
const sessionCatch = new Catch(CatchType.Session)
export { localCatch, sessionCatch }
