import Scene from 'phaser/src/scene/Scene';

export default class MenuScene extends Scene {
  constructor () {
    super({ key: 'menu' });
  }

  create () {
    this.add.image(400, 300, 'space');

    this.add.text(400, 200, 'Phaser 3 with Parcel\n\n< play >', {
      align: 'center',
      fill: 'white',
      fontFamily: 'sans-serif',
      fontSize: 48
    })
      .setOrigin(0.5, 0);

    this.input.on('pointerdown', function () {
      this.scene.switch('play');
    }, this);
  }
}
