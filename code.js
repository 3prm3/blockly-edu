player.onChat("blockly:int", function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DEAD_FIRE_CORAL_BLOCK,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DEAD_TUBE_CORAL_BLOCK,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    FLINT,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DEAD_BRAIN_CORAL_BLOCK,
    1
    )
})
player.onDied(function () {
    hardcore = 1
})
player.onChat("blocky:groupA", function () {
    mobs.teleportToPlayer(
    mobs.target(ALL_PLAYERS),
    mobs.target(NEAREST_PLAYER)
    )
})
player.onChat("blocky:groupG", function () {
    mobs.teleportToPlayer(
    mobs.target(MY_AGENT),
    mobs.target(NEAREST_PLAYER)
    )
})
player.onChat("blocky:groupE", function () {
    mobs.teleportToPlayer(
    mobs.target(ALL_ENTITIES),
    mobs.target(NEAREST_PLAYER)
    )
})
blocks.onBlockPlaced(DEAD_BRAIN_CORAL_BLOCK, function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    COBBLESTONE,
    5
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DIRT,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    STICK,
    1
    )
})
player.onChat("blocky:groupR", function () {
    mobs.teleportToPlayer(
    mobs.target(RANDOM_PLAYER),
    mobs.target(NEAREST_PLAYER)
    )
})
player.onChat("blockly:killS", function () {
    mobs.kill(
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("blockly:killE", function () {
    mobs.kill(
    mobs.target(ALL_ENTITIES)
    )
})
player.onItemInteracted(FLINT, function () {
    gameplay.xp(10, mobs.target(NEAREST_PLAYER))
    mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
})
blocks.onBlockPlaced(DEAD_FIRE_CORAL_BLOCK, function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DIAMOND_PICKAXE,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DIAMOND_SWORD,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    ELYTRA,
    1
    )
    mobs.applyEffect(HEALTH_BOOST, mobs.target(NEAREST_PLAYER), 600, 35)
})
loops.forever(function () {
    if (hardcore == 1) {
        mobs.kill(
        mobs.target(NEAREST_PLAYER)
        )
    }
})
player.onChat("blockly:help", function () {
    player.say("blockly:int (gives pvp dead fire coral, tnt flint, tp dead tube coral and refill dead brain coral)")
    player.say("blocky:kill((killR = kill random)(killS = kill self)(killA = kill all players)(killE = kill all entities)(killG = kill agent))")
    player.say("blocky:group((groupR = group random)(groupA= group all players)(groupE = group all entities)(groupG = group agent))")
})
player.onChat("blockly:killA", function () {
    mobs.kill(
    mobs.target(ALL_PLAYERS)
    )
})
blocks.onBlockPlaced(DEAD_TUBE_CORAL_BLOCK, function () {
    mobs.teleportToPlayer(
    mobs.target(LOCAL_PLAYER),
    mobs.target(RANDOM_PLAYER)
    )
})
player.onChat("blockly:killR", function () {
    mobs.kill(
    mobs.target(RANDOM_PLAYER)
    )
})
player.onChat("blocky:pos", function () {
    player.say(player.position())
})
let hardcore = 0
hardcore = 2
player.say("Welcome to blockly “The world’s only Edu admin command profile”")
player.say("say “blockly:help” for commands")
//https://minecraft.makecode.com/46134-28851-61126-95394
//by 3prm3
