export default class ApiUsers
{
	static getList(action) {
		const timeout = 1000;
		return new Promise(resolve => {
			setTimeout(() => {
				let users = [];
				for(let s = 1; s <= 28; s++) {
					users.push({
						id: s,
						username: `Johny ${s}`,
						job: `Employee ${s}`
					});
				}
				resolve(users);
			}, timeout);
		});
	}
}