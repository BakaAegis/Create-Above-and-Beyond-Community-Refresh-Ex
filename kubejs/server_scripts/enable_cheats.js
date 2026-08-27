// Persist the singleplayer cheat flag without opening the world to LAN.
let cheatsApplied = false
let cheatsAttempted = false

function enableWorldCheats(event) {
	if (cheatsApplied || cheatsAttempted || !event || !event.server) return
	cheatsAttempted = true

	try {
		let worldData = event.server.getWorldData()
		if (worldData.getAllowCommands()) {
			cheatsApplied = true
			console.info('[world-fix] Cheats are already enabled')
			return
		}

		let settings = worldData.getLevelSettings()
		let allowCommands = settings.getClass().getDeclaredField('f_46906_')
		allowCommands.setAccessible(true)
		allowCommands.setBoolean(settings, true)

		// getLevelSettings() returns a copy, so install the modified settings back into the world data.
		let worldSettings = worldData.getClass().getDeclaredField('f_78443_')
		worldSettings.setAccessible(true)
		worldSettings.set(worldData, settings)

		if (!worldData.getAllowCommands()) {
			throw new Error('world data still reports allowCommands=false')
		}

		try {
			let playerList = event.server.getPlayerList()
			let allowAllPlayers = playerList.getClass().getDeclaredField('f_11209_')
			allowAllPlayers.setAccessible(true)
			allowAllPlayers.setBoolean(playerList, true)
			playerList.getPlayers().forEach(player => playerList.sendPlayerPermissionLevel(player))
		} catch (ignored) {
			// The saved world flag is the durable part; this is only for the current session.
		}

		cheatsApplied = true
		console.info('[world-fix] Enabled cheats in the current world: true')
	} catch (error) {
		console.error('[world-fix] Could not enable cheats: ' + error)
	}
}

ServerEvents.loaded(enableWorldCheats)
ServerEvents.tick(enableWorldCheats)
