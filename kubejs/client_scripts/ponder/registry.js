Ponder.registry((event) => {
    event.create("kubejs:ponder_laser_lamp")
        .tag("kubejs:ponder")
        .scene("alchemy_setup", "{kubejs.ponder.alchemy_setup.header}", "kubejs:laser_alchemy", (scene, util) => {
            let CreateSceneBuilder = Java.loadClass("com.simibubi.create.foundation.ponder.CreateSceneBuilder")
            scene = new CreateSceneBuilder(scene)
            let world = scene.world()

            scene.showBasePlate()
            scene.idle(20)

            let largeCog = util.select.position(5, 0, 2)
            let deployerSingle = util.select.position(4, 1, 3)
            let smallCog = util.select.position(4, 1, 2)
            let lamp = util.select.fromTo(4, 1, 4, 4, 2, 4)
            let deployer = util.select.fromTo(4, 1, 2, 4, 2, 4)
            let machine = util.select.position(2, 1, 3)
            let light = util.select.position(2, 1, 2)

            world.showSection(machine, Facing.down)
            scene.idle(15)

            scene.overlay.showText(50)
                .text("{kubejs.ponder.alchemy_setup.text_1}")
                .pointAt(util.vector.topOf(2, 1, 3))
                .colored(PonderPalette.WHITE)
                .placeNearTarget()
            scene.idle(60)

            world.showSection(light, Facing.south)
            scene.overlay.showText(50)
                .text("{kubejs.ponder.alchemy_setup.text_2}")
                .pointAt(util.vector.centerOf(2, 1, 2))
                .colored(PonderPalette.WHITE)
                .placeNearTarget()
            scene.idle(30)

            world.showSection(util.select.position(1, 1, 2), Facing.north)
            scene.idle(25)

            world.toggleRedstonePower(util.select.position(1, 1, 2))
            scene.effects.indicateRedstone(util.grid.at(1, 1, 2))
            world.setBlock(util.grid.at(2, 1, 2), util.getDefaultState("kubejs:ponder_laser_lamp_on"), false)
            scene.idle(15)

            scene.overlay.showText(40)
                .text("{kubejs.ponder.alchemy_setup.text_3}")
                .colored(PonderPalette.GREEN)
                .pointAt(util.vector.centerOf(2, 1, 2))
                .placeNearTarget()
            scene.idle(50)

            world.showSection(deployerSingle, Facing.down)
            scene.idle(15)

            scene.overlay.showText(60)
                .text("{kubejs.ponder.alchemy_setup.text_4}")
                .pointAt(util.vector.topOf(4, 1, 3))
                .colored(PonderPalette.WHITE)
                .placeNearTarget()
            scene.idle(70)
            scene.overlay.showControls(
                util.vector.blockSurface(util.grid.at(4, 1, 3), Facing.west),
                PonderPointing.RIGHT,
                50
            ).rightClick()
            scene.idle(8)
            world.modifyBlockEntityNBT(deployerSingle, (nbt) => {
                nbt.Patterns = [
                    {
                        Mode: "PUNCH"
                    }
                ]
            })
            scene.overlay.showText(50)
                .text("{kubejs.ponder.alchemy_setup.text_5}")
                .colored(PonderPalette.GREEN)
                .pointAt(util.vector.topOf(4, 1, 3))
                .placeNearTarget()
            scene.idle(20)
            world.showSection(largeCog, Facing.up)
            world.showSection(smallCog, Facing.down)
            scene.idle(5)
            world.showSection(lamp, Facing.down)
            scene.idle(5)
            scene.idle(60)
            scene.overlay.showText(50)
                .attachKeyFrame()
                .text("{kubejs.ponder.alchemy_setup.text_6}")
                .pointAt(util.vector.topOf(4, 1, 3))
                .colored(PonderPalette.WHITE)
                .placeNearTarget()

            scene.idle(30)
            world.toggleRedstonePower(lamp)
            scene.idle(3)
            world.moveDeployer(util.grid.at(4, 1, 3), 1, 25)
            scene.idle(15)
            scene.idle(10)

            scene.effects.indicateSuccess(util.grid.at(2, 1, 2))
            scene.effects.indicateSuccess(util.grid.at(2, 1, 1))
            scene.effects.indicateSuccess(util.grid.at(2, 1, 0))
            scene.effects.indicateSuccess(util.grid.at(2, 1, -1))

            scene.idle(3)
            world.moveDeployer(util.grid.at(4, 1, 3), -1, 25)
            scene.idle(10)
            world.toggleRedstonePower(lamp)
            // scene.effects.indicateRedstone(util.grid.at(4, 2, 4))

            scene.overlay.showText(50)
                .text("{kubejs.ponder.alchemy_setup.text_7}")
                .colored(PonderPalette.GREEN)
                .pointAt(util.vector.centerOf(2, 1, 2))
                .placeNearTarget()
            scene.idle(60)

            world.showSection(util.select.fromTo(1, 1, 0, 3, 1, 0), Facing.west)
            scene.idle(5)
            let HopperMinecart = Java.loadClass("net.minecraft.world.entity.vehicle.MinecartHopper")
            let cartHandle = scene.special.createCart(util.vector.topOf(2, 0, 0), 0, (w, x, y, z) => new HopperMinecart(w, x, y, z))
            scene.idle(20)
            scene.overlay.showText(80)
                .attachKeyFrame()
                .text("{kubejs.ponder.alchemy_setup.text_8}")
                .pointAt(util.vector.centerOf(2, 1, 0))
                .colored(PonderPalette.WHITE)
                .placeNearTarget()
            scene.idle(70)

            scene.overlay.showControls(
                util.vector.centerOf(2, 1, 0),
                PonderPointing.DOWN,
                40
            ).withItem("thermal:flux_magnet")
            scene.idle(5)
            scene.overlay.showControls(
                util.vector.centerOf(2, 1, 0),
                PonderPointing.UP,
                35
            ).withItem("minecraft:basalt")
            scene.idle(30)

            world.toggleRedstonePower(lamp)
            scene.idle(3)
            world.moveDeployer(util.grid.at(4, 1, 3), 1, 25)
            scene.idle(15)
            scene.idle(10)

            scene.effects.indicateSuccess(util.grid.at(2, 1, 2))
            scene.effects.indicateSuccess(util.grid.at(2, 1, 1))
            scene.effects.indicateSuccess(util.grid.at(2, 1, 0))
            scene.effects.indicateSuccess(util.grid.at(2, 1, -1))

            scene.idle(3)
            world.moveDeployer(util.grid.at(4, 1, 3), -1, 25)
            scene.idle(10)

            scene.overlay.showControls(
                util.vector.centerOf(2, 1, 0),
                PonderPointing.DOWN,
                40
            ).withItem("thermal:flux_magnet")
            scene.idle(5)
            scene.overlay.showControls(
                util.vector.centerOf(2, 1, 0),
                PonderPointing.UP,
                35
            ).withItem("thermal:basalz_rod")

            // scene.effects.indicateRedstone(util.grid.at(4, 2, 4))
            world.toggleRedstonePower(lamp)
        })
})
