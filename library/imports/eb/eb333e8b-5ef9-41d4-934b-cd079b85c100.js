"use strict";
cc._RF.push(module, 'eb3336LXvlB1JNLzQebhcEA', 'blockList');
// script/game/blockList.js

'use strict';

// var CHD = require("commonHandler");
var GameData = require("gameData");
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this._isEmitable = true;
    },
    start: function start() {
        this.count = 0;
        this.firstLine = GameData.centerLine;
        this.secondLine = GameData.actorLine + 150;
        this.passedCenter = false;
        this.passedActor = false;
    },
    update: function update(dt) {
        if (this._isEmitable) {
            var endPos = this.node.y + this.node.height;

            if (endPos < this.firstLine && !this.passedCenter) {
                this.passedCenter = true;
                this.node.parent.emit('passedCenterLine');
            }

            if (endPos < this.secondLine && !this.passedActor) {
                this.passedActor = true;
                this.node.parent.emit('passedActorLine');
            }
        }
    },
    disableEvent: function disableEvent() {
        this._isEmitable = false;
    }
}
// exploreAll(){
//     let childs = this.node.children;
//     for(let x in childs){
//         let child = childs[x];
//         if(child.name == 'block' || child.name == 'starBlock'){
//             child.getComponent('block').explore();
//         }else if(child.name == 'endBlock'){
//             child.getComponent('endBlock').explore();
//         }
//     }
// }

);

cc._RF.pop();