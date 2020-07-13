export class ObjectUtilities {
	static isObject(obj): boolean {
		var type = typeof obj;
		return type === 'function' || type === 'object' && !!obj;
	};

	static copy<T>(target: T): T {
		if (target === null) {
		  return target;
		}
		if (target instanceof Date) {
		  return new Date(target.getTime()) as any;
		}
		if (target instanceof Array) {
		  const cp = [] as any[];
		  (target as any[]).forEach((v) => { cp.push(v); });
		  return cp.map((n: any) => this.copy<any>(n)) as any;
		}
		if (typeof target === 'object' && target !== {}) {
		  const cp = { ...(target as { [key: string]: any }) } as { [key: string]: any };
		  Object.keys(cp).forEach(k => {
			cp[k] = this.copy<any>(cp[k]);
		  });
		  return cp as T;
		}
		return target;
	  };
}