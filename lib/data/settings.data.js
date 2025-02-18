import { addWatchPaths, loadData, normalizeArrayData } from '../utility.js'
import { getVitepressMd } from '../markdown.js'

async function normalizeSettings(settings) {
	const data = normalizeArrayData(
		settings,
		['seealso', 'tags', 'values_enum']
	)

	const md = await getVitepressMd()

	for (const [k, v] of Object.entries(data)) {
		if (!v) {
			delete data[k]
			continue
		}

		/* Style default entry. */
		if (v.default) {
			v.default = String(v.default)
			if (!v.default.startsWith('[[')) {
				v.default = '`' + v.default + '`'
			}
			v.default = md.renderInline(v.default)
		}

		/* Add markdown to seealso settings. */
		for (const [index, element] of v.seealso.entries()) {
			v.seealso[index] = md.renderInline(
				element.startsWith('[[')
					? element
					: '[[setting,' + element + ']]'
			)
		}

		/* Plugin. */
		if (v.plugin) {
			v.plugin = [ v.plugin ].flat()
			v.plugin_link = v.plugin.map((x) =>
				md.renderInline('[[plugin,' + x + ']]')
			).join(', ')
		}

		/* There can be multiple value entries. */
		if (!Array.isArray(v.values)) {
			v.values = [ v.values ]
		}

		for (const v2 of v.values) {
			if (!v2) {
				throw new Error("Incorrect value type for " + k)
			}
			v2.url = md.renderInline(v2.url)
		}

		for (const k2 of ['added', 'changed', 'deprecated', 'removed']) {
			if (v[k2]) {
				const changes = []
				for (const[k3, v3] of Object.entries(v[k2])) {
					changes.push({
						text: v3 ? md.render(v3.trim()) : null,
						version: md.renderInline('[[' + k2 + ',' + k3 + ']]')
					})
				}
				v[k2] = changes
			}
		}

		v.text = md.render(v.text.trim())
	}

	return data
}

export default addWatchPaths({
	async load() {
		return await normalizeSettings(
			structuredClone(loadData('settings').settings)
		)
	}
})
