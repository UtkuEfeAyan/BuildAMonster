class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 300;

        this.body1X = 400;
        this.body1Y = 350;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 70;

        this.rightHornX = this.bodyX + 40;
        this.righyHornY = this.bodyY - 100;

        this.leftHornX = this.bodyX - 50;
        this.leftHornY = this.bodyY - 70 ;

        this.rightEyeX = this.bodyX + 40;
        this.righyEyeY = this.bodyY ;

        this.leftEyeX = this.bodyX - 40;
        this.leftEyeY = this.bodyY ;

        this.leftHandX = this.bodyX - 100;
        this.lefthandY = this.bodyY + 60;

        this.rightHandX = this.bodyX + 100;
        this.rightHandY = this.bodyY + 60;

        this.leftLegX = this.bodyX - 65;
        this.leftLegY = this.bodyY + 200;

        this.rightLegX = this.bodyX + 65;
        this.rightLegY = this.bodyY + 180;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
            // Load necessary parts from the texture atla

            // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.body1 = this.add.sprite(this.body1X, this.body1Y, "monsterParts", "body_greenD.png");

        // Create the two sprites, one for each type of smile
        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        
        // Create the sprite for the left and right hands
        my.sprite.leftHand = this.add.sprite(this.leftHandX, this.lefthandY, "monsterParts", "arm_yellowA.png");
        my.sprite.leftHand.flipX = true;   // flip sprite to have thumb on correct side
        my.sprite.rightHand = this.add.sprite(this.rightHandX, this.rightHandY, "monsterParts", "arm_redB.png");


        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_whiteA.png");
        my.sprite.leftLeg.flipX = true;   // flip sprite to have thumb on correct side
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_blueD.png");


        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_dead.png");
        my.sprite.leftEye.flipX = true;   // flip sprite to have thumb on correct side
        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.righyEyeY, "monsterParts", "eye_angry_red.png");

        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_red_horn_small.png");
        my.sprite.leftHorn.flipX = true;   // flip sprite to have thumb on correct side
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.righyHornY, "monsterParts", "detail_blue_antenna_small.png");


        my.sprite.fangs.visible = false;

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        // Event input: dimple smile
        this.input.keyboard.on('keydown-S', () => {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
            });

        this.input.keyboard.on('keydown-F', () => {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
            });


            // Movement input: Move left when 'A' is pressed
        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('A'), 500)) { // Checks if 'A' key is down
            this.moveMonster(-3); // Move the monster to the left
        }

            // Movement input: Move right when 'D' is pressed
        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('D'), 500)) { // Checks if 'D' key is down
            this.moveMonster(3); // Move the monster to the right
        }
       
    }


moveMonster(direction) {
    let my = this.my; // Alias for readability

    // Adjust x positions of all parts of the monster
    my.sprite.body.x += direction;
    my.sprite.body1.x += direction;
    my.sprite.smile.x += direction;
    my.sprite.fangs.x += direction;
    my.sprite.leftHand.x += direction;
    my.sprite.rightHand.x += direction;
    my.sprite.leftLeg.x += direction;
    my.sprite.rightLeg.x += direction;
    my.sprite.leftEye.x += direction;
    my.sprite.rightEye.x += direction;
    my.sprite.leftHorn.x += direction;
    my.sprite.rightHorn.x += direction;
    }

}