controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(mySprite), tiles.XY.column), tiles.locationXY(tiles.locationOfSprite(mySprite), tiles.XY.row) - 1))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    info.changeLifeBy(2)
    tiles.setTileAt(tiles.locationOfSprite(mySprite), assets.tile`myTile10`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(mySprite), tiles.XY.column) - 1, tiles.locationXY(tiles.locationOfSprite(mySprite), tiles.XY.row)))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(mySprite), tiles.XY.column) + 1, tiles.locationXY(tiles.locationOfSprite(mySprite), tiles.XY.row)))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(mySprite), tiles.XY.column), tiles.locationXY(tiles.locationOfSprite(mySprite), tiles.XY.row) + 1))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(tiles.locationOfSprite(mySprite), assets.tile`myTile9`)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(1)
mySprite = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . f d f d f d f . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . f d f f f d f . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
scene.cameraFollowSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(1)
